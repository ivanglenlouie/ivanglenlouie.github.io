# Copilot Instructions

## Project Overview

Personal portfolio website for Ivan Loreña, built with Nuxt 3, Tailwind CSS, and deployed via GitHub Pages. Uses static site generation (SSG) with `nuxt generate`.

## Architecture

- **`app.vue`** — Root app shell with `<NuxtLayout>` and `<NuxtPage />`
- **`pages/index.vue`** — Main portfolio page (hero, about, works, footer in a single-screen layout)
- **`layouts/default.vue`** — Default layout wrapper (full-height, overflow-hidden)
- **`components/`** — Reusable Vue components:
  - `HeroSection.vue` — Full-screen hero (unused in current layout, available for alternate pages)
  - `AboutSection.vue` — About section with skill bars (unused in current layout, available for alternate pages)
  - `WorkCard.vue` — Individual project card with hover glow effect
  - `SkillBar.vue` — Animated progress bar component (unused in current layout, available for alternate pages)
  - `TheHeader.vue` — Sticky header with gradient accent bar
  - `TheFooter.vue` — Footer with contact info and links
- **`composables/useScrollAnimation.ts`** — IntersectionObserver-based scroll animation trigger
- **`data/projects.ts`** — Project data (title, description, URL)
- **`assets/css/main.css`** — Tailwind directives plus custom utilities and components (animations, card-glow)
- **`tailwind.config.ts`** — Extended theme: custom colors, animations, keyframes
- **`nuxt.config.ts`** — Nuxt config with Tailwind CSS module, Google Fonts module, SSG prerender
- **`public/img/`** — Static images (favicon, photos)

## Key Conventions

- **Nuxt 3 + Vue 3 Composition API** — Use `<script setup lang="ts">` in all components.
- **Tailwind CSS** — All styling via utility classes. Custom utilities/components defined in `assets/css/main.css` using `@layer`.
- **Color palette:**
  - Brand green: `#8CBF6E`
  - Secondary teal: `#6BA3A0`
  - Accent orange: `#F2A365`
  - Violet: `#A78BFA`
  - Surface (background): `#E7E1DF`
- **Font** — Nunito (Google Fonts via `@nuxtjs/google-fonts`), weights 400/600/700.
- **Light theme** — Background is `#E7E1DF` (surface), text is black.
- **Animations** — Scroll-triggered animations use the `animate-on-scroll` CSS class with IntersectionObserver (`composables/useScrollAnimation.ts`). Entry animations use Tailwind `animate-*` utilities. Staggered delays via `.stagger-N` classes.
- **Card effects** — Work cards use the `.card-glow` CSS component class for hover lift + gradient overlay.
- **Gradient text** — Section headings use Tailwind `bg-gradient-to-r` with `bg-clip-text text-transparent`. The hero name uses the `.gradient-text` utility with animated `background-position`.
- **External links** — Always use `target="_blank" rel="noopener"`.
- **Static generation** — Run `npx nuxt generate` to build. Output goes to `.output/public/` for deployment.
- **No manual CSS compilation needed** — Tailwind is processed automatically by the `@nuxtjs/tailwindcss` module.
