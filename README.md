# Daniel Nguyen — Portfolio

Personal portfolio built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**, statically exported and deployed to **GitHub Pages** via GitHub Actions.

## Tech

- **Framework:** Next.js 16 (App Router), static export (`output: 'export'`)
- **Styling:** Tailwind CSS v3, dark theme, cyan accent
- **Animations:** Framer Motion (scroll reveals, hero, typing effect)
- **Icons:** lucide-react (+ inline SVGs for GitHub/LinkedIn brand marks)
- **Fonts:** Inter + JetBrains Mono, self-hosted via `next/font`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs to ./out
npx serve out    # preview the static site locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `./out` to GitHub Pages.

**One-time setup on GitHub:**

1. Create a repository named exactly **`Tarkhog06.github.io`** and push this project to it.
2. In **Settings → Pages → Build and deployment**, set **Source = GitHub Actions**.
3. Push to `main`. The site goes live at `https://tarkhog06.github.io`.

> Hosting on a **project repo** instead (e.g. `github.com/Tarkhog06/portfolio`)?
> Set `NEXT_PUBLIC_BASE_PATH: /portfolio` in the build step of the workflow so
> assets resolve under the sub-path.

## Analytics (Umami)

Cookieless page analytics via [Umami Cloud](https://cloud.umami.is). The tracker
script is only emitted when a website ID is present, so local dev and forks stay
untracked with no extra config.

**Setup:**

1. Create the site in Umami Cloud and copy its **Website ID**.
2. On GitHub: **Settings → Secrets and variables → Actions → Variables → New
   repository variable**, name `NEXT_PUBLIC_UMAMI_WEBSITE_ID`, value = that ID.
   (A *variable*, not a secret — it ends up in the public HTML either way, and
   Umami website IDs are public by design.)
3. Re-run the deploy workflow.

To test locally, put the same key in a `.env.local` file (gitignored).

Moving to a self-hosted Umami later only means adding a second repository
variable, `NEXT_PUBLIC_UMAMI_SRC`, pointing at `https://<your-host>/script.js` —
no code change.

> Note: as a static site there's no server-side proxy, so the tracker request is
> third-party and some visitors' ad blockers will drop it. Expect counts to run
> below reality.

## Editing content

Almost everything lives in [`src/lib/data.ts`](src/lib/data.ts): name, links,
experience, projects, skills and certifications. The Home Lab case study is in
[`src/app/projects/home-lab/page.tsx`](src/app/projects/home-lab/page.tsx).

Swap `public/favicon.svg` if you want a different mark.

## Structure

```
src/
├── app/
│   ├── layout.tsx                 # fonts, SEO metadata
│   ├── page.tsx                   # one-page site (all sections)
│   ├── globals.css                # theme tokens & utilities
│   └── projects/home-lab/page.tsx # dedicated case study
├── components/                    # Hero, About, Experience, Projects, Skills, …
└── lib/data.ts                    # ← edit your content here
```
