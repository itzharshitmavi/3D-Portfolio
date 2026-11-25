import { cacheLife } from "next/cache";
import { config } from "@/data/config";

export type GithubStarsResult = { stars: number; repo: string | null };

function validStars(value: unknown): value is number {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
}

// With no configured repository, count stars across public repositories owned
// by the profile. Never report an unavailable or partial result as zero.
export async function getGithubStars(): Promise<GithubStarsResult | null> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 300 });

  const username = config.githubUsername.trim();
  const repo = config.githubRepo.trim();
  if (!/^[A-Za-z0-9-]+$/.test(username)) return null;

  const owner = encodeURIComponent(username);
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = process.env.GITHUB_TOKEN?.trim();
  if (token) headers.Authorization = `Bearer ${token}`;
  const signal = AbortSignal.timeout(8000);

  try {
    if (repo && /^[A-Za-z0-9_.-]+$/.test(repo)) {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${encodeURIComponent(repo)}`,
        { headers, signal },
      );
      if (response.ok) {
        const data = await response.json();
        if (data?.private !== true && validStars(data?.stargazers_count)) {
          return { stars: data.stargazers_count, repo };
        }
      } else if (response.status !== 404 && response.status !== 410) {
        return null;
      }
      // Missing, private or invalid repository: try the public profile total.
    }

    let total = 0;
    for (let page = 1; page <= 20; page++) {
      const response = await fetch(
        `https://api.github.com/users/${owner}/repos?type=owner&per_page=100&page=${page}&sort=full_name&direction=asc`,
        { headers, signal },
      );
      if (!response.ok) return null;
      const repositories = await response.json();
      if (!Array.isArray(repositories) || repositories.length > 100) return null;
      for (const repository of repositories) {
        if (repository?.private === true) continue;
        if (!validStars(repository?.stargazers_count)) return null;
        total += repository.stargazers_count;
        if (!Number.isSafeInteger(total)) return null;
      }
      if (repositories.length < 100) return { stars: total, repo: null };
    }
    // Safety bound: do not display a partial total if pagination is incomplete.
    return null;
  } catch {
    return null;
  }
}
