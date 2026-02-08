export interface SiteConfig {
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lang: string;
  base: string;
  website: string;
  social: Record<string, string>;
  googleAnalyticsId?: string;
  homeHeroDescription: string;
  blogDescription: string;
  projectsDescription: string;

  // Homepage post counts
  featuredPostsCount: number;
  latestPostsCount: number;

  // Homepage projects
  homeProjects: {
    enabled: boolean;
    count: number;
  };

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: boolean;
    filePath: string; // Path to markdown file with CTA content
  };

  // Homepage Hero block
  hero: {
    enabled: boolean;
    filePath: string;
  };

  // Giscus comments configuration
  comments: {
    enabled: boolean;
    repo: string; // e.g., 'username/repo'
    repoId: string;
    category: string;
    categoryId: string;
    mapping: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
    reactionsEnabled: boolean;
    emitMetadata: boolean;
    inputPosition: 'top' | 'bottom';
    theme: string; // e.g., 'preferred_color_scheme', 'light', 'dark'
    lang: string;
  };
}

export const SITE: SiteConfig = {
  author: 'Xuanyu Chen',
  desc: 'Applied Math & Statistics @ Purdue | Quant / Data Analytics | Backtesting & NLP/LLM pipelines.',
  title: 'Xuanyu Chen',
  ogImage: 'og.png',
  lang: 'en-US',
  base: '/',
  website: 'https://xuanyuchen.com',

  social: {
    github: 'https://github.com/Xuanyu6Chen',
    linkedin: 'https://www.linkedin.com/in/xuanyu-chen-1046672aa/',
    email: 'mailto:YOUR_EMAIL_HERE',
  },

  googleAnalyticsId: '',

  homeHeroDescription:
    'Purdue Applied Math & Statistics student focused on quantitative research and data analytics. I build backtesting pipelines, analyze financial time-series, and develop data/LLM workflows for large-scale text analysis.',

  blogDescription:
    'Short research notes and project writeups: backtesting, markets, data analysis, and NLP/LLMs.',

  projectsDescription:
    'Selected projects in quantitative finance, data analytics, and applied machine learning.',

  featuredPostsCount: 0,
  latestPostsCount: 0,

  homeProjects: {
    enabled: true,
    count: 4,
  },

  cta: {
    enabled: false,
    filePath: 'site/cta.md',
  },

  hero: {
    enabled: true,
    filePath: 'site/hero.md',
  },

  comments: {
    enabled: false,
    repo: 'Xuanyu6Chen/xuanyu6chen.github.io',
    repoId: '',
    category: 'General',
    categoryId: '',
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme',
    lang: 'en',
  },
};
