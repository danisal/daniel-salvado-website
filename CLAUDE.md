# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server. Assume already running and accessible at http://localhost:5173
pnpm build        # Production build (only for CI/CD)
pnpm preview      # Preview production build (port 3000)
pnpm check        # Type-check .svelte files with svelte-check
pnpm typecheck    # Type-check with tsc --noEmit
pnpm lint         # Prettier + ESLint check
pnpm format       # Auto-format with Prettier
pnpm format:check # Check formatting without writing
pnpm test         # Run unit tests (Vitest)
```

## Git Conventions

All commits must follow **Conventional Commits** format:

```
<type>(<optional scope>): <subject>
```

Types: `feat` | `fix` | `docs` | `style` | `refactor` | `perf` | `test` | `build` | `ci` | `chore` | `revert`

Subject rules: imperative mood, max 70 chars, no trailing period.

Examples:

- `feat(seo): add structured data to blog posts`
- `fix(header): correct mobile nav z-index`
- `chore: update dependencies`

Use the `/conventional-commit` skill to generate commit messages.

Git hooks are managed by [lefthook](https://lefthook.dev/) (`lefthook.yml`): a `pre-commit` hook runs ESLint/Prettier on staged files, and a `commit-msg` hook runs commitlint to enforce this format. Run `pnpm run prepare` once after cloning to install them.

## Architecture

This is a **SvelteKit 5 personal website** deployed to **Cloudflare** (`@sveltejs/adapter-cloudflare`), styled with **Tailwind CSS** (including `@tailwindcss/typography`), and dark mode toggled via a `class` strategy.
