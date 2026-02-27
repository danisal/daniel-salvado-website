# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server. Assume already running and accessible at http://localhost:5173
pnpm build        # Production build (only for CI/CD)
pnpm preview      # Preview production build (port 3000)
pnpm check        # Type-check with svelte-check
pnpm lint         # Prettier + ESLint check
pnpm format       # Auto-format with Prettier
```

## Architecture

This is a **SvelteKit 5 personal website** deployed to **Cloudflare** (`@sveltejs/adapter-cloudflare`), styled with **Tailwind CSS** (including `@tailwindcss/typography`), and dark mode toggled via a `class` strategy.
