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

## License

MIT
