# CLAUDE.md

## Project

宝砺锋 (Blf Packaging) B2B 官网 — paper packaging manufacturer targeting EU/US buyers.

- **Stack**: Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS 4, Shadcn UI, Sanity CMS
- **Hosting**: Vercel + Cloudflare DNS
- **Packages**: react-hook-form, zod, next-intl, Resend (not yet installed: next-intl, sanity, resend)
- **Source of truth**: `../宝砺锋-B2B官网内容SOP-Next.js技术路线.md`

## Hard rules

- Default to React Server Components. `"use client"` only for useState/useEffect/onClick/refs/browser APIs/Context.
- App Router only. Never Pages Router (`pages/`, `getStaticProps`, `getServerSideProps`, `next/head`).
- `generateMetadata` for SEO. Never touch `<head>` directly.
- Tailwind utility classes only. No inline `style={}`, no custom `.css` files beyond Shadcn CSS variables. No other UI libraries.
- `next/image` for all images, with explicit width/height. CMS remote images whitelisted in `next.config.ts`.
- React Hook Form + Zod client-side, separate Zod validation in Server Actions.
- Strict TypeScript. No `any`. Use CMS TypeGen output types.
- No jQuery, Bootstrap, SCSS, styled-components, emotion, Redux/MobX.

## Next.js 16 breaking changes

- **`params` and `searchParams` are Promises** — must `await` them in pages/layouts/generateMetadata.
- **`next/image` prop `preload`** replaces the old `priority` prop.
- **Tailwind CSS 4** uses `@import "tailwindcss"` syntax (no `@tailwind base/components/utilities`).
- Check `node_modules/next/dist/docs/` before using unfamiliar APIs.

## Conventions (§7.1.2)

- File naming: PascalCase components, lowercase routes, camelCase utils, UPPER_CASE constants.
- Data access layer: `src/lib/cms/*.ts` — components never call CMS SDK directly.
- Server Actions: `src/actions/*.ts` with `"use server"` top. Always Zod-validate.
- Images: `next/image` only. Hero images get `preload`.
- Every page must export `generateMetadata` or static `metadata`.
- i18n: all UI strings through `useTranslations()` from next-intl. No hardcoded text in JSX.
- No state management libraries (Zustand/Redux) unless explicitly required.

## Project structure

```
src/
├── app/[locale]/          # i18n routes (en, de, es...)
├── components/
│   ├── ui/                # Shadcn components (source-in-repo)
│   └── marketing/         # Page-specific components (Hero, CollectionsGrid, etc.)
├── actions/               # Server Actions (quote.ts, etc.)
├── lib/
│   ├── cms/               # Sanity GROQ queries
│   └── utils.ts           # Shared utilities
├── i18n/
│   ├── routing.ts         # next-intl routing config
│   └── request.ts         # next-intl request config
└── middleware.ts           # Locale detection
messages/
├── en.json                # English translations
└── de.json                # German (future)
```
