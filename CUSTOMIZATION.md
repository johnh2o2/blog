# Customization Guide

This guide will help you personalize your blog and make it your own.

## Essential Customizations

### 1. Update Personal Information

Edit `src/layouts/BaseLayout.astro`:

```astro
// Line 18: Change the site name in the logo
<a href="/" class="logo">Your Name</a>

// Lines 19-23: Update navigation links (optional)
<div class="nav-links">
  <a href="/posts">Writing</a>
  <a href="/projects">Projects</a>
  <a href="/research">Research</a>
</div>

// Line 54: Update footer text
<p>PhD in Astrophysics • Data Scientist</p>
```

Edit `src/pages/index.astro`:

```astro
// Lines 18-27: Update the hero section
<h1>Your Name</h1>
<p class="subtitle">
  PhD in Astrophysics • Data Scientist at FAIR
</p>
<p class="bio">
  I work at the intersection of astrophysics, machine learning, and data science.
  This is where I write about technical topics, share my research, and showcase projects.
</p>
```

### 2. Customize the Theme

Edit `src/styles/global.css` to modify:

**Colors** (lines 4-10):
```css
--color-text: #1a1a1a;           /* Main text color */
--color-accent: #2c5aa0;          /* Link color */
--color-background: #ffffff;      /* Background color */
```

**Fonts** (lines 12-15):
```css
--font-serif: 'Georgia', 'Palatino Linotype', serif;  /* Body text */
--font-sans: -apple-system, BlinkMacSystemFont, sans-serif;  /* Headings */
--font-mono: 'Menlo', 'Monaco', monospace;  /* Code blocks */
```

**Layout** (lines 22-24):
```css
--max-width: 720px;  /* Maximum content width */
--line-height: 1.7;  /* Body text line height */
```

### 3. Configure Site Metadata

Edit `package.json` (lines 2-5):
```json
{
  "name": "your-blog-name",
  "description": "Your site description"
}
```

## Adding Your Own Content

### Delete Example Content

Remove the example files:
```bash
rm src/content/posts/example-post.mdx
rm src/content/projects/example-project.mdx
rm src/content/research/example-paper.mdx
```

### Add Your First Post

Create `src/content/posts/my-first-post.mdx`:

```mdx
---
title: "My First Post"
description: "An introduction to my blog"
date: 2025-01-15
tags: ["intro"]
draft: false
---

# Welcome

This is my first blog post...

## Math Support

You can write inline math like $E = mc^2$ or display equations:

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

## Code Blocks

\```python
def hello():
    print("Hello, world!")
\```
```

## Advanced Customization

### Add a Favicon

Replace `public/favicon.svg` with your own favicon file.

### Modify Code Syntax Theme

Edit `astro.config.mjs` (line 14):
```js
shikiConfig: {
  theme: 'github-light',  // Try: 'github-dark', 'nord', 'monokai'
  wrap: true
}
```

Available themes: https://shiki.style/themes

### Add Google Analytics

Edit `src/layouts/BaseLayout.astro` and add before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Change Date Format

Edit any page file (e.g., `src/pages/posts/index.astro`) and modify the `Intl.DateTimeFormat` options:

```js
// Current format: "January 15, 2025"
new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(post.data.date)

// Alternative: "2025-01-15"
new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}).format(post.data.date)
```

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Astro settings

### GitHub Pages

1. Install GitHub Pages adapter:
   ```bash
   npm install @astrojs/github-pages
   ```

2. Update `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://username.github.io',
     base: '/repo-name',
     // ... rest of config
   });
   ```

3. Add `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## Need Help?

- Astro documentation: https://docs.astro.build
- KaTeX documentation: https://katex.org
- Report issues with the template in your repository
