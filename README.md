# White Tee / Field Notes

A VitePress research hub for the plain white T-shirt project: eight competitor benchmarks, three positioning hypotheses, and an actionable research plan.

- **Site:** https://kaw393939.github.io/is117007-tshirt/
- **Repository:** https://github.com/kaw393939/is117007-tshirt
- **Reference exercise:** https://github.com/kaw393939/is117-brand-studio

The proposed audience and positioning remain hypotheses. This repository contains the research site; the final brand and storefront have not been selected or built.

## Run locally

Use Node 24 (`nvm use` if available):

```sh
npm ci
npm run dev
```

Open the local address printed by VitePress. The site uses `/is117007-tshirt/` as its base path for GitHub Pages.

```sh
npm run build
npm run preview
```

## Edit the research

- `docs/competitive-landscape.md`: comparison and strategic interpretation.
- `docs/.vitepress/data/competitors.ts`: searchable benchmark evidence.
- `docs/ideas.md`: three provisional positioning directions.
- `docs/research-plan.md`: proposed validation activities.
- `docs/studio-brief.md`: how this supports the reference exercise.
- `docs/sources.md`: source register and evidence limits.
- `docs/.vitepress/`: VitePress configuration, theme, and components.

Research observations are dated November 5, 2026. Preserve price, color, availability, and evidence qualifications when updating them.

## Local references stay local

`references/` is deliberately ignored in `.gitignore`. It holds the source exercise clone, local research notes, downloads, and future sample records. Git does not track empty folders, so a fresh clone should recreate it with `mkdir -p references`.

The source reference project's files and history are not uploaded into this repository. Only this hub's code and curated research summaries are published. Dependencies, environment files, caches, and generated output are also ignored.

## Deployment

`.github/workflows/deploy.yml` builds with `npm ci` and deploys `docs/.vitepress/dist` using GitHub Pages Actions on pushes to `main`. Pull requests build without publishing. The Pages source is GitHub Actions.

VitePress is pinned to `2.0.0-alpha.21`, the release documented by its current getting-started guide. This is a prerelease; keep the lockfile and verify the build and interactions when upgrading. The older stable release brought vulnerable build-tool dependencies into this new project.
