---
title: 'Configuring Spaceship'
description: 'Complete guide to customizing your Spaceship blog - from basic settings to advanced features.'
pubDate: 2026-02-01
tags: ['spaceship', 'configuration', 'tutorial']
featured: true
---

This guide covers all configuration options available in Spaceship and how to customize your blog.

## Configuration File

All site settings are in `site/config.ts`. This TypeScript file provides type safety and autocompletion.

## Basic Site Information

```typescript
export const SITE: SiteConfig = {
  author: 'Your Name',
  title: 'Your Blog Title',
  desc: 'Your blog description',
  website: 'https://yourdomain.com',
  lang: 'en-US',
  base: '/',
  ogImage: 'og.png',
  // ...
};
```

### Key Fields

- **author**: Your name (appears in footer, meta tags)
- **title**: Site title (browser tab, SEO)
- **desc**: Site description (SEO, social sharing)
- **website**: Full URL of your site
- **lang**: Language code (e.g., 'en-US', 'ru-RU')
- **base**: Base path if not hosting at root
- **ogImage**: Default Open Graph image

## Social Links

```typescript
social: {
  x: 'https://x.com/yourusername',
  github: 'https://github.com/yourusername',
  telegram: 'https://t.me/yourusername',
  facebook: 'https://facebook.com/yourusername',
}
```

You can add, remove, or modify social links. They appear in the homepage hero section.

## Homepage Configuration

### Hero Section

```typescript
homeHeroDescription: 'Your bio or tagline that appears on the homepage';
```

### Post Counts

Control how many posts show on the homepage:

```typescript
featuredPostsCount: 1,  // Number of featured posts
latestPostsCount: 3,    // Number of latest posts
```

**Note:** Featured posts are those with `featured: true` in frontmatter.

## Content Descriptions

```typescript
blogDescription: 'Description shown on /posts page',
projectsDescription: 'Description shown on /projects page'
```

## CTA (Call-to-Action) Configuration

```typescript
cta: {
  enabled: true,
  filePath: 'site/cta.md',
}
```

- **enabled**: Global toggle for CTA blocks
- **filePath**: Path to markdown file with CTA content

### Customizing CTA Content

Edit `site/cta.md`:

```markdown
# 💼 Hire me if you like this post

I'm available for **freelance projects** and **full-time opportunities**.

Whether you need:

- A modern, performant website
- Technical consultation
- Code review and optimization

[Get in touch](mailto:your@email.com)
```

The CTA appears at the end of each post (unless disabled via frontmatter).

## Comments Configuration

Spaceship uses [Giscus](https://giscus.app) for comments powered by GitHub Discussions.

```typescript
comments: {
  enabled: true,
  repo: 'username/repo',
  repoId: 'R_xxxxx',
  category: 'General',
  categoryId: 'DIC_xxxxx',
  mapping: 'pathname',
  reactionsEnabled: true,
  emitMetadata: false,
  inputPosition: 'bottom',
  theme: 'preferred_color_scheme',
  lang: 'en',
}
```

### Getting Giscus Configuration

1. Visit [giscus.app](https://giscus.app)
2. Enter your repository name
3. Configure options
4. Copy the configuration values

### Options Explained

- **enabled**: Master toggle for comments
- **repo**: GitHub repository (format: `username/repo`)
- **repoId**: Repository ID from giscus.app
- **category**: Discussion category name
- **categoryId**: Category ID from giscus.app
- **mapping**: How to map posts to discussions
  - `pathname`: Use URL path (recommended)
  - `url`: Use full URL
  - `title`: Use post title
- **reactionsEnabled**: Allow reactions on comments
- **theme**: Color scheme
  - `preferred_color_scheme`: Auto-match site theme
  - `light`: Always light
  - `dark`: Always dark
- **lang**: Language code

### Requirements for Giscus

1. **Public repository**
2. **GitHub Discussions enabled**
   - Go to repo Settings → Features → Discussions
3. **giscus app installed**
   - Visit [github.com/apps/giscus](https://github.com/apps/giscus)
   - Install and grant access to your repo

## Analytics

```typescript
googleAnalyticsId: 'G-XXXXXXXXXX';
```

Add your Google Analytics 4 measurement ID. Leave empty to disable.

## Content Collections

Content is organized in `site/content/`:

```
site/content/
├── posts/          # Blog posts
├── projects/       # Portfolio projects
├── appearances/    # Talks, podcasts, articles
└── about/          # About page content
```

### Posts Schema

See [How to Publish Posts](/posts/how-to-publish-posts) for full details.

### Projects Schema

```yaml
---
title: 'Project Name'
description: 'Brief description'
link: 'https://project-url.com'
github: 'https://github.com/user/repo' # Optional
tags: ['astro', 'svelte']
types: ['commercial', 'open-source', 'social']
image: '/images/project.png' # Optional
order: 0 # Display order (lower = first)
directLink: true # Link directly to project vs detail page
---
```

### Appearances Schema

```yaml
---
title: 'Talk Title'
event: 'Conference Name'
date: 2026-02-01
type: 'talk' # talk, podcast, article, workshop, video
media: 'video' # video, audio, text
link: 'https://youtube.com/watch?v=xxx'
description: 'Optional description'
language: 'English'
duration: '45 minutes'
---
```

## Styling & Theming

Spaceship uses CSS custom properties for theming. Edit `src/styles/global.css`:

```css
:root {
  --color-primary: 220 100% 70%;
  --color-foreground: 0 0% 10%;
  /* ... more variables */
}

.dark {
  --color-primary: 220 100% 75%;
  --color-foreground: 0 0% 95%;
  /* ... dark mode overrides */
}
```

## Updating Spaceship

To get the latest features and bug fixes:

```bash
git remote add upstream https://github.com/alec-c4/spaceship.git
git fetch upstream
git merge upstream/main
```

**Note:** Be careful merging if you've customized code. Review conflicts carefully.

### Safe Update Strategy

1. **Commit your changes** first
2. **Create a backup branch**
   ```bash
   git checkout -b backup-before-update
   git checkout main
   ```
3. **Merge upstream**
   ```bash
   git merge upstream/main
   ```
4. **Test thoroughly** with `pnpm dev`
5. **If issues**, restore from backup

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Framework: Astro
4. Build command: `pnpm build`
5. Output directory: `dist`

### Netlify

1. Push to GitHub
2. New site from Git
3. Build command: `pnpm build`
4. Publish directory: `dist`

### Cloudflare Pages

1. Push to GitHub
2. Create new project
3. Build command: `pnpm build`
4. Build output: `dist`

## Environment Variables

For production, you may want to set:

```bash
SITE_URL=https://yourdomain.com
```

This ensures correct URLs in RSS feeds, sitemaps, and social cards.

## Performance Tips

1. **Optimize images** before uploading
2. **Use WebP/AVIF** formats
3. **Minimize custom components** in MDX
4. **Enable compression** on your host
5. **Use a CDN** for static assets

## Troubleshooting

### Build Fails

```bash
pnpm install  # Reinstall dependencies
rm -rf node_modules .astro
pnpm install
pnpm build
```

### Port Already in Use

```bash
pnpm dev -- --port 3000  # Use different port
```

### Hot Reload Not Working

1. Check file watcher limits (Linux)

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

2. Try clearing cache

```bash
rm -rf .astro
pnpm dev
```

## Customization Ideas

### Add a Newsletter

Integrate with:

- ConvertKit
- Buttondown
- Revue
- Substack

### Add Search

Spaceship includes basic search. Enhance with:

- Algolia
- Pagefind
- Fuse.js

### Custom Components

Create reusable components in `src/components/` and use them in MDX:

```mdx
import MyComponent from '@/components/MyComponent.svelte';

<MyComponent client:load />
```

## Getting Help

- **Documentation**: Check this guide and [How to Publish Posts](/posts/how-to-publish-posts)
- **Issues**: [GitHub Issues](https://github.com/alec-c4/spaceship/issues)
- **Discussions**: [GitHub Discussions](https://github.com/alec-c4/spaceship/discussions)

---

**Happy blogging with Spaceship! 🚀**
