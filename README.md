# Victor Ortiz Portfolio

Personal portfolio and case-study site built with Nuxt 4, Nuxt Content, and Nuxt UI.

The site is designed to present:
- a focused landing page with positioning, skills, featured work, and experience
- a content-driven projects index
- detailed case studies authored in Markdown

## Stack

- `Nuxt 4`
- `Vue 3`
- `@nuxt/content`
- `@nuxt/ui`
- `Tailwind CSS v4`
- `Vercel Analytics`
- `Vercel Speed Insights`

## What This Repo Contains

- marketing-style homepage for the portfolio
- reusable UI components for sections, cards, and rich case-study content
- Markdown-authored project pages under `content/projects`
- dynamic project routing at `/projects/[...slug]`

## Project Structure

```text
.
|-- app/
|   |-- components/          # Homepage, timeline, cards, navigation, content blocks
|   |-- pages/
|   |   |-- index.vue        # Main portfolio page
|   |   `-- projects/        # Projects index + dynamic project pages
|   `-- assets/css/          # Global styles
|-- content/
|   `-- projects/            # Case studies written in Markdown
|-- public/
|   `-- images/              # Logos, screenshots, project media
|-- content.config.ts        # Content collection schema
|-- nuxt.config.ts           # Nuxt app configuration
`-- vercel.json              # Vercel deployment config
```

## Local Development

### Requirements

- `Node.js` `^20.19.0` or `>=22.12.0`
- `npm`

### Install

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Default local URL:

```text
http://localhost:3000
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Generate a static build

```bash
npm run generate
```

## Content Workflow

Project case studies are stored as Markdown files in `content/projects`.

Each file uses frontmatter like:

```md
---
title: Project Title
tagline: Short description
tags: ["Nuxt", "Vue", "TypeScript"]
featured: true
---
```

Those fields are validated by `content.config.ts`.

### How project routing works

- `content/projects/my-project.md`
- becomes `/projects/my-project`

The dynamic route in `app/pages/projects/[...slug].vue` resolves the URL to the matching content entry and renders the page with a generated table of contents.

## Adding a New Case Study

1. Create a new Markdown file in `content/projects/`.
2. Add frontmatter with `title`, `tagline`, and optional `tags` / `featured`.
3. Write the case study using the existing content blocks.
4. Add any screenshots or media under `public/images/projects/...`.
5. Run `npm run build` to verify the page renders correctly.

## Custom Content Components

The project includes reusable content components for richer case studies, including:

- `CallOut`
- `Contribution`
- `Decision`
- `MetricRow`
- `MediaCarousel`
- `Screenshot`
- `StackChips`

These are used inside Markdown content to keep case studies structured and visually consistent.

## Deployment

This project is configured for Vercel via `vercel.json`.

Build settings:

- install command: `npm install`
- build command: `npm run build`
- framework preset: `nuxtjs`

## Notes

- The homepage pulls featured projects from the `projects` content collection.
- The experience timeline and project cards are manually curated in the app layer.
- Global metadata such as the site title and description are set in `nuxt.config.ts`.
