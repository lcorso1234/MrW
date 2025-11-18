## Tech Stack

- [Next.js 16](https://nextjs.org/docs) using the App Router in the `src/app` directory
- [TypeScript](https://www.typescriptlang.org/) with the `@/*` import alias pointing to `src`
- [Tailwind CSS 3](https://tailwindcss.com/docs/installation) configured through `tailwind.config.ts`
- [ESLint](https://eslint.org/) + `eslint-config-next` for linting

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

The app is available at [http://localhost:3000](http://localhost:3000). Editing files inside `src/app` instantly updates the page thanks to Next.js Fast Refresh.

## Tailwind CSS

Tailwind is wired up via `tailwind.config.ts` and `postcss.config.mjs`. The default `src/app/globals.css` already includes the `@tailwind base/components/utilities` directives and some handy CSS variables for light/dark backgrounds. Use any Tailwind class inside `src/app`, `src/components`, or `src/pages`—they are all part of the configured content paths.

## Useful Scripts

| Command         | Description                            |
| --------------- | -------------------------------------- |
| `npm run dev`   | Start the Next.js development server   |
| `npm run build` | Create an optimized production build   |
| `npm run start` | Run the production build locally       |
| `npm run lint`  | Lint the project with ESLint + Next.js |

## Deployment

Deploy wherever you prefer (Vercel, Netlify, etc.). The default Next.js deployment guide is a good starting point: [https://nextjs.org/docs/app/building-your-application/deploying](https://nextjs.org/docs/app/building-your-application/deploying).
