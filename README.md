# Daniel Salvado

This is the source code for my personal website, [danielsalvado.com](https://danielsalvado.com).

## 🛠️ Tech Stack

- **Framework:** [Svelte 5](https://svelte.dev/) (SvelteKit)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Runtime & Tooling:** [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Code Quality:** [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [svelte-check](https://github.com/sveltejs/language-tools)
- **Testing:** [Vitest](https://vitest.dev/), [Testing Library](https://testing-library.com/)
- **Git Hooks:** [lefthook](https://lefthook.dev/), [commitlint](https://commitlint.js.org/)

## 📂 Project Structure

- `src/routes/`: The pages and routing logic of the website.
- `src/lib/`: Reusable components, constants, and utility functions.
- `static/`: Static assets such as images and fonts.
- `wrangler.toml`: Cloudflare Pages configuration.

## 🚀 Getting Started

This project uses `pnpm` as the package manager.

### Prerequisites

- Node.js — see `.nvmrc` (currently 22.18.0)
- pnpm — see `packageManager` in `package.json` (currently 11.17.0)

## 📜 Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `pnpm dev`          | Start the dev server                         |
| `pnpm build`        | Production build                             |
| `pnpm preview`      | Preview the production build                 |
| `pnpm lint`         | Check formatting and lint with ESLint        |
| `pnpm format`       | Auto-format with Prettier                    |
| `pnpm format:check` | Check formatting without writing             |
| `pnpm typecheck`    | Type-check with `tsc --noEmit`               |
| `pnpm check`        | Type-check `.svelte` files with svelte-check |
| `pnpm test`         | Run unit tests once                          |
| `pnpm test:watch`   | Run unit tests in watch mode                 |

Git hooks (lefthook) run lint/format on staged files before each commit, and commitlint validates commit messages against [Conventional Commits](https://www.conventionalcommits.org/). Run `pnpm run prepare` once after cloning to install them.
