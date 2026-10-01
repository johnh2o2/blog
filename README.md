# Academic Blog

A minimalist static blog built with Astro, designed for technical writing, project showcases, and research publications.

## Features

- **Academic minimal design** - Clean serif typography with high contrast and generous whitespace
- **Math equation support** - LaTeX rendering via KaTeX
- **Syntax highlighting** - Beautiful code blocks with Shiki
- **Three content types**:
  - Blog posts for technical writing
  - Projects showcase with GitHub links
  - Research publications with DOI/arXiv links
- **MDX support** - Write content in Markdown with component support
- **Fast and SEO-friendly** - Built on Astro for optimal performance

## Project Structure

```text
/
├── public/               # Static assets
├── src/
│   ├── content/
│   │   ├── posts/       # Blog posts (.mdx)
│   │   ├── projects/    # Project descriptions (.mdx)
│   │   └── research/    # Research papers (.mdx)
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/           # Routes
│   │   ├── index.astro
│   │   ├── posts/
│   │   ├── projects/
│   │   └── research/
│   └── styles/
│       └── global.css   # Academic minimal theme
└── package.json
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Adding Content

### Blog Posts

Create a new `.mdx` file in `src/content/posts/`:

```mdx
---
title: "Your Post Title"
description: "Brief description of your post"
date: 2025-01-15
tags: ["tag1", "tag2"]
draft: false
---

Your content here with **markdown** and $\LaTeX$ support.
```

### Projects

Create a new `.mdx` file in `src/content/projects/`:

```mdx
---
title: "Project Name"
description: "Project description"
date: 2024-11-20
tags: ["python", "ml"]
github: "https://github.com/username/repo"
featured: true
---

Project details...
```

### Research Papers

Create a new `.mdx` file in `src/content/research/`:

```mdx
---
title: "Paper Title"
description: "Abstract or summary"
date: 2024-09-01
authors: ["Author 1", "Author 2"]
journal: "Journal Name"
arxiv: "https://arxiv.org/abs/..."
doi: "10.xxxx/xxxxx"
---

Paper content...
```

## Customization

1. **Update personal info**: Edit `src/layouts/BaseLayout.astro` to change your name and navigation
2. **Modify theme**: Edit `src/styles/global.css` to adjust colors, fonts, and spacing
3. **Change homepage**: Edit `src/pages/index.astro` to customize the landing page

## Deployment

Build the site:

```bash
npm run build
```

Deploy the `dist/` folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Search indexing

The production URL is configured in `astro.config.mjs`. Every build generates
`sitemap-index.xml` and `sitemap-0.xml` from the published routes, including blog
posts. Draft posts are excluded by the posts route. `robots.txt` allows crawling
and advertises the sitemap index.

All pages declare a canonical URL on `https://johnhoffman.io`. On Vercel,
`vercel.json` permanently redirects the `www` host to that domain and removes
trailing slashes from page URLs. Keep these URLs consistent if changing domains.

After deployment, submit `https://johnhoffman.io/sitemap-index.xml` in Google
Search Console's Sitemaps report. Use URL Inspection to request indexing of the
homepage and important new posts, and monitor their indexing status. A successful
request queues a crawl; it does not guarantee indexing or a search ranking.

## License

MIT
