# GEMINI.md - Project Context

## Project Overview
This is a modern Next.js application (version 16.2.1) utilizing the **App Router** architecture. It is built with **React 19**, **TypeScript**, and **Tailwind CSS 4**.

**Key Technologies:**
- **Framework:** [Next.js 16.2.1](https://nextjs.org/)
- **Library:** [React 19.2.4](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Linting:** [ESLint 9](https://eslint.org/)

## ⚠️ Important Note for AI Agents
As noted in `AGENTS.md`, this version of Next.js (16.2.1) contains breaking changes from previous versions. APIs, conventions, and file structures may differ from standard training data. Always refer to local documentation in `node_modules/next/dist/docs/` when in doubt.

## Building and Running
The following commands are available via `npm`:

- **Development:** `npm run dev` - Starts the development server at `http://localhost:3000`.
- **Production Build:** `npm run build` - Compiles the application for production.
- **Production Start:** `npm run start` - Runs the compiled production build.
- **Linting:** `npm run lint` - Executes ESLint to check for code quality issues.

## Development Conventions
- **App Router:** Use the `app/` directory for all routing, layouts (`layout.tsx`), and pages (`page.tsx`).
- **Styling:** Tailwind CSS 4 is used for styling. Global styles are located in `app/globals.css`.
- **Type Safety:** TypeScript is strictly enforced. Ensure all new components and utilities are properly typed.
- **Components:** (Standard Practice) Organize reusable UI components in a `components/` directory (to be created as needed).
- **Fonts:** Geist font family is automatically optimized and loaded via `next/font`.

## Key Files
- `package.json`: Project dependencies and scripts.
- `app/layout.tsx`: Root layout for the application.
- `app/page.tsx`: Main entry point / home page.
- `next.config.ts`: Next.js configuration.
- `tailwind.config.mjs` / `postcss.config.mjs`: Styling configurations.
- `AGENTS.md`: Specific instructions and warnings for AI assistants.
