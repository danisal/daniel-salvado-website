# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build (required before running tests)
pnpm preview      # Preview production build (port 3000)
pnpm check        # Type-check with svelte-check
pnpm lint         # Prettier + ESLint check
pnpm format       # Auto-format with Prettier
pnpm test         # Run Playwright e2e tests (builds first)
```

## Architecture

This is a **SvelteKit 5 personal website** deployed to **Cloudflare** (`@sveltejs/adapter-cloudflare`), styled with **Tailwind CSS** (including `@tailwindcss/typography` for blog prose), and dark mode toggled via a `class` strategy.

### Blog System

Blog posts are Markdown files processed by **mdsvex** (`.md` files treated as Svelte components). Each post lives in its own directory under `src/routes/blog/<slug>/index.md` alongside its images (resolved as relative imports via `mdsvex-relative-images`).

**Post frontmatter schema:**

```yaml
title: string
date: 'YYYY-MM-DD'
keywords: string[]
image: './relative-path.jpg'
reading: number # minutes
```

**Data flow:**

- `src/lib/utils/index.ts` — `fetchMarkdownPosts()` uses `import.meta.glob` to collect all post metadata
- `src/routes/api/posts/+server.ts` — REST endpoint returning sorted posts JSON
- `src/routes/blog/+page.server.ts` — loads posts list for the blog index
- `src/routes/blog/[slug]/+page.server.ts` — dynamically imports `../<slug>/index.md` and renders it

### SEO

SEO is handled via `svelte-meta-tags` (`MetaTags`, `JsonLd`). The root layout (`src/routes/+layout.svelte`) defines base meta tags and merges `$page.data.metaTagsChild` from child routes. Individual pages pass `metaTagsChild` from their `load` functions to override title/keywords.

### Layout Structure

`+layout.svelte` wraps every page with: `Sidebar` (mobile nav) + `Header` + `<slot />` + `Footer`. The sidebar `open` state is a boolean bound between `Header` and `Sidebar`.

### Components (`src/lib/components/`)

- `header.svelte`, `footer.svelte`, `sidebar.svelte` — site shell
- `theme-toggle.svelte` — dark/light mode switcher
- `seo.svelte` — additional SEO helpers
- `Bluesky.svelte`, `GitHub.svelte`, `LinkedIn.svelte`, `Twitter.svelte` — social icon components used in the footer

### Testing

Playwright e2e tests are in `tests/`. The config builds and serves the app on port 3000 before running tests. There is no unit test setup.

### Adding a Blog Post

Create `src/routes/blog/<slug>/index.md` with the frontmatter schema above, place any images in the same directory, and reference them with relative paths. No registration needed — `import.meta.glob` picks them up automatically.
