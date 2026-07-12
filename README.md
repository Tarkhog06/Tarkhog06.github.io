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

## Editing content

Almost everything lives in [`src/lib/data.ts`](src/lib/data.ts): name, links,
experience, projects, skills and certifications. The Home Lab case study is in
[`src/app/projects/home-lab/page.tsx`](src/app/projects/home-lab/page.tsx).

Replace [`public/resume.pdf`](public/resume.pdf) with your real CV (keep the
same filename), and swap `public/favicon.svg` if you want a different mark.

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
