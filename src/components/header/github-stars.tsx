import { Star } from "lucide-react";
import { config } from "@/data/config";
import { getGithubStars } from "@/lib/github-stars";
import { cn } from "@/lib/utils";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";

export default async function GitHubStars({ className }: { className?: string }) {
  const result = await getGithubStars();

  if (result === null) {
    return (
      <a
        href={config.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-border px-2 sm:px-3 text-xs sm:text-sm font-medium transition-colors hover:bg-muted", className)}
        aria-label="Visit my GitHub profile (star count temporarily unavailable)"
        title="GitHub star count temporarily unavailable"
      >
        <span>GitHub</span>
        <Star className="size-4 text-muted-foreground" aria-hidden="true" />
        <span aria-hidden="true">—</span>
      </a>
    );
  }

  const label = result.repo
    ? `${result.stars} GitHub stars for ${result.repo}`
    : `${result.stars} total GitHub stars across public repositories`;

  return (
    <GitHubStarsButton
      username={config.githubUsername}
      repo={result.repo ?? undefined}
      stars={result.stars}
      className={className}
      aria-label={label}
      title={label}
    />
  );
}
