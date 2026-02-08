This guide covers everything you need to know about creating and publishing blog posts in Spaceship.

## Creating a New Post

Posts are stored in `site/content/posts/` as Markdown (`.md`) or MDX (`.mdx`) files.

### File Naming

- Use kebab-case: `my-awesome-post.md`
- File name becomes the URL slug: `/posts/my-awesome-post`
- Files starting with `_` are ignored

### Basic Post Structure

```markdown
---
title: 'Your Post Title'
description: 'A brief description for SEO and previews'
pubDate: 2026-02-01
tags: ['astro', 'svelte', 'tutorial']
---

Your content goes here in Markdown or MDX format.
```

## Frontmatter Options

### Required Fields

- **title**: Post title (string)
- **description**: Brief description for SEO and social sharing (string)
- **pubDate**: Publication date (YYYY-MM-DD format)

### Optional Fields

- **tags**: Array of tags (default: `["others"]`)

  ```yaml
  tags: ['astro', 'svelte', 'tutorial']
  ```

- **featured**: Mark post as featured on homepage (boolean, default: false)

  ```yaml
  featured: true
  ```

- **draft**: Mark post as draft (boolean, default: false)

  ```yaml
  draft: true
  ```

  **Draft posts behavior:**
  - **Development**: Visible with a "DRAFT" badge
  - **Production**: Hidden completely

- **updatedDate**: Last update date (YYYY-MM-DD format)

  ```yaml
  updatedDate: 2026-02-05
  ```

- **ogImage**: Custom Open Graph image path (string)

  ```yaml
  ogImage: '/images/custom-og.png'
  ```

- **canonicalURL**: Canonical URL for cross-posted content (string)

  ```yaml
  canonicalURL: 'https://example.com/original-post'
  ```

- **showCTA**: Show/hide CTA block (boolean, default: true)

  ```yaml
  showCTA: false
  ```

- **showComments**: Show/hide comments section (boolean, default: true)

  ```yaml
  showComments: false
  ```

- **series**: Group posts into a series (object)
  ```yaml
  series:
    id: 'astro-guide'
    order: 1
  ```

## Draft Posts & Publication Date Filtering

Spaceship supports two ways to control post visibility:

### Draft Mode

Mark posts as drafts to hide them in production:

```yaml
draft: true
```

**Behavior:**

- **Development** (`pnpm dev`): Draft posts are visible with a yellow "DRAFT" badge
- **Production** (`pnpm build`): Draft posts are completely hidden

**Perfect for:**

- Work-in-progress posts
- Posts awaiting review
- Unfinished content

### Future-Dated Posts

Posts with **future publication dates** behave differently based on environment:

```yaml
pubDate: 2026-03-15 # Future date
```

**Behavior:**

- **Development** (`pnpm dev`): All posts visible, regardless of date
- **Production** (`pnpm build`): Only posts with `pubDate <= today` are shown

**Perfect for:**

- Scheduling posts for future publication
- Planning content calendar
- Time-sensitive announcements

### Combined Approach

You can use both approaches together:

```yaml
draft: true # Hide in production
pubDate: 2026-03-15 # Schedule for future
```

This post will:

- Show in development with "DRAFT" badge
- Remain hidden in production until March 15, 2026
- Automatically publish on that date (if `draft: false` is set)

## Working with Images

### Local Images

Store images in `src/assets/` and import them:

```mdx
---
title: 'Post with Images'
---

import myImage from '@/assets/my-image.png';
import { Image } from 'astro:assets';

<Image src={myImage} alt="Description" />
```

### Public Images

Place images in `public/images/` and reference directly:

```markdown
![Alt text](/images/my-image.png)
```

### Remote Images

```markdown
![Alt text](https://example.com/image.png)
```

### Image Optimization Tips

1. **Use WebP or AVIF** for better compression
2. **Optimize before upload** - use tools like ImageOptim or Squoosh
3. **Use descriptive alt text** for accessibility and SEO
4. **Consider lazy loading** for performance

## Working with Files

### Downloadable Files

Place files in `public/files/` and link to them:

```markdown
[Download PDF](/files/my-document.pdf)
```

### Code Files

For syntax-highlighted code snippets:

````markdown
```javascript
function hello() {
  console.log('Hello, World!');
}
```
````

Or import and display code files using MDX.

## Series Posts

Create a series of related posts:

```yaml
---
title: 'Getting Started with Astro - Part 1'
series:
  id: 'astro-guide'
  order: 1
---
```

```yaml
---
title: 'Getting Started with Astro - Part 2'
series:
  id: 'astro-guide'
  order: 2
---
```

All posts in the same series will show navigation links other.

## Multi-language Posts

If you have translations of the same post, you can link them together to allow readers to switch languages.

1. **Create separate files** for each language (e.g., `my-post-en.md` and `my-post-ru.md`).
2. **Explicitly set the `slug`** for each post to ensure stable URLs.
3. **Add `translatedPosts`** map to the frontmatter of each post, linking language codes to the slugs of the translations.

**English Post (`my-post-en.md`):**

```yaml
---
title: 'My Awesome Post'
slug: 'my-awesome-post'
lang: 'en'
translatedPosts:
  ru: 'my-awesome-post-ru'
---
```

**Russian Post (`my-post-ru.md`):**

```yaml
---
title: 'Мой Потрясающий Пост'
slug: 'my-awesome-post-ru'
lang: 'ru'
translatedPosts:
  en: 'my-awesome-post'
---
```

This will automatically display an "Available in: 🇷🇺 RU" link on the English post, and "Available in: 🇺🇸 EN" on the Russian post.

## Advanced Features

### MDX Support

Use `.mdx` extension to import components:

```mdx
---
title: 'Interactive Post'
---

import MyComponent from '@/components/MyComponent.svelte';

<MyComponent client:load />
```

### Custom CTA

The CTA (Call-to-Action) block at the end of posts is customizable via `site/cta.md`. To disable it for a specific post:

```yaml
showCTA: false
```

### Comments

Comments (via Giscus) can be disabled per post:

```yaml
showComments: false
```

## SEO Best Practices

1. **Write descriptive titles** (50-60 characters)
2. **Craft compelling descriptions** (150-160 characters)
3. **Use relevant tags** (3-5 tags per post)
4. **Add alt text to images**
5. **Use heading hierarchy** (H1 → H2 → H3)
6. **Include internal links** to related posts
7. **Set canonical URLs** for cross-posted content

## Publishing Workflow

1. **Create post** in `site/content/posts/`
2. **Add frontmatter** with required fields
3. **Write content** in Markdown/MDX
4. **Test locally** with `pnpm dev`
5. **Preview at** `http://localhost:4321/posts/your-post-slug`
6. **Commit and push** to deploy

## Quick Reference

### Minimal Post

```markdown
---
title: 'Hello World'
description: 'My first post'
pubDate: 2026-02-01
---

Hello, World!
```

### Full-Featured Post

```markdown
---
title: 'Complete Guide to Astro'
description: 'Everything you need to know about Astro framework'
pubDate: 2026-02-01
updatedDate: 2026-02-05
tags: ['astro', 'tutorial', 'web-development']
featured: true
ogImage: '/images/astro-guide-og.png'
series:
  id: 'astro-series'
  order: 1
---

Content here...
```

---

**Pro Tip:** Use the VSCode frontmatter snippet to quickly create post templates!
