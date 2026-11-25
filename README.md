# Harshit Mavi — 3D Portfolio

Personalized from the supplied MIT-licensed 3D portfolio template. Original template and third-party asset licenses are retained in LICENSE and public/assets. Portfolio content is based on the supplied résumé; original template-only technologies remain labeled Additional.

## Features
- Animated 3D keyboard with 67 keys (24 original + 43 added), hover/tap, keyboard shortcuts and accessible HTML fallback.
- About, education, eleven project cards, nine course/certification entries with links from the résumé, achievement, blog, résumé viewer/download and contact form.
- Original animation, themes, easter eggs and optional realtime/game features retained. Realtime requires a compatible separately hosted backend and is disabled by default.
- Original author deployment tracking removed. All key graphics use local assets. New skill graphics are text monograms, not official brand logos. Project cards use custom title artwork, not fabricated screenshots.

## Run locally (VS Code / PowerShell)
1. Install Node.js 24 LTS (recommended) and npm. Use a recent Node version compatible with the pinned pnpm package manager.
2. Open this folder in VS Code. In a terminal run:

```powershell
npm install -g pnpm@11.20.0
pnpm install --frozen-lockfile
Copy-Item .env.example .env.local
pnpm dev
```

For Windows Command Prompt (CMD), use `copy .env.example .env.local` instead of `Copy-Item`. Do not overwrite an existing `.env.local`. Use either pnpm or npm, not both in the same dependency installation.

Open http://localhost:3000. No database is needed. If pnpm is unavailable, use `npm install` then `npm run dev` (npm resolves dependencies independently, rather than using the pnpm lockfile).

## Production
Set NEXT_PUBLIC_SITE_URL to the actual deployment URL in .env.local or hosting environment (the résumé contains placeholder portfolio and LeetCode links, so none are invented). Without a real URL, canonical metadata uses localhost and search indexing is disabled. Configure RESEND_API_KEY and RESEND_FROM_EMAIL with your own verified sender if you want the contact form to send automatically; otherwise it opens the visitor's email composer. Optional WebSocket and analytics services are disabled unless you configure them.

```powershell
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

Deploy as a Next.js app, not a static HTML-only upload, to keep API routes available.

## Customize
- `src/data/config.ts`: site identity and social links
- `src/data/constants.ts`: all keyboard skills, sources and shortcuts
- `src/data/projects.tsx`: project descriptions and links
- `src/components/sections/`: About, education, achievements and certifications
- `public/Harshit_Mavi_Resume.pdf`: your supplied original PDF (contains placeholders for portfolio and LeetCode)
- `public/assets/projects-screenshots/`: illustrative covers; replace with actual project screenshots as desired

## Verification
Static checks: all TypeScript/TSX files parsed without syntax errors; 67 distinct skill names, ids and shortcuts verified, all keyboard icon paths and 11 project covers verified; simulated press/release for all 67 keys. Seven existing dependency-free keyboard input, counter and key-well tests passed. Original PDF preserved byte-for-byte. Full dependency installation/build and live WebGL rendering require access to the npm registry; the editing environment could not reach it. Run the production checks above locally. Some browser/OS-reserved extended keys may not reach the page; all caps can be explored via pointer/touch and the HTML directory.

## Maintenance fix
The favicon has been re-encoded as RGBA PNG entries within the ICO container (16, 32, 48 and 64 px). Removed the redundant custom cache header for Next-managed static files. All ICO entries were decoded and verified locally; full Next.js runtime remains unverified in this environment.

## GitHub stars (optional)
By default, leave `NEXT_PUBLIC_GITHUB_REPO=` blank in `.env.local` to show the total stars across public repositories owned by `itzharshitmavi`, including forks. To display stars for just one repository, set its exact public repository name (not a URL or owner/repo). Missing/private repositories fall back to the public total where possible. A valid zero-star result displays `0`; unavailable results display a dash and a profile link, never a fabricated zero. The count is cached for five minutes. If GitHub rate-limits your server, optionally set a server-only `GITHUB_TOKEN` in `.env.local` (use a minimally scoped token; never prefix it with `NEXT_PUBLIC_` or commit it). Restart the dev server after changing environment variables.


## Blog expansion (November 25, 2026)

The `/blogs` route contains 16 articles, including five LedgerX startup design notes, project case studies and engineering learning notes. Search matches titles, summaries, topics and tags. The featured article is selected by optional `featured: true` in frontmatter. Optional `category` groups articles; the existing date, title and summary fields remain required. All posts are added to the existing dynamic sitemap and article route automatically. Dates display in UTC to avoid timezone-dependent hydration mismatches.

LedgerX articles describe the project in development and proposed architecture, subscriptions and AI features, not confirmed production releases. Public repository landing pages and available README descriptions were checked; complete repository histories and private LedgerX code were not audited. The articles are drafts for author review before public deployment. To add a new article, create an `.mdx` file in `src/content/blogs` with valid frontmatter. No new dependencies are required.

## Responsive typography update

Project cards now use complete, uncropped cover art and a separate flexible text panel; project details use wrapping technology labels and a single scrollable dialog. Contact details use the real mailto address and stack above the form on small screens. Headings, header navigation, skill cards, education, certificates, footer, blog and résumé controls have responsive wrapping and spacing. No additional dependencies are required.
