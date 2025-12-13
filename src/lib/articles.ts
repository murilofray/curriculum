import fs from 'fs';
import path from 'path';

export interface ArticleMeta {
    slug: string;
    title: { pt: string; en: string };
    excerpt: { pt: string; en: string };
    tags: string[];
    category: string;
    publishedAt: string;
    readingTime: number;
}

export interface Article extends ArticleMeta {
    content: { pt: string; en: string };
}

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');

export function getAllArticles(): ArticleMeta[] {
    if (!fs.existsSync(ARTICLES_DIR)) {
        return [];
    }

    const slugs = fs.readdirSync(ARTICLES_DIR);

    const articles: ArticleMeta[] = slugs
        .map((slug) => {
            const metaPath = path.join(ARTICLES_DIR, slug, 'meta.json');
            if (!fs.existsSync(metaPath)) {
                return null;
            }
            const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
            return { ...meta, slug };
        })
        .filter(Boolean) as ArticleMeta[];

    // Sort by date descending
    return articles.sort((a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getArticleBySlug(slug: string): Article | null {
    const articleDir = path.join(ARTICLES_DIR, slug);

    if (!fs.existsSync(articleDir)) {
        return null;
    }

    const metaPath = path.join(articleDir, 'meta.json');
    const ptPath = path.join(articleDir, 'pt.md');
    const enPath = path.join(articleDir, 'en.md');

    if (!fs.existsSync(metaPath)) {
        return null;
    }

    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    const ptContent = fs.existsSync(ptPath) ? fs.readFileSync(ptPath, 'utf-8') : '';
    const enContent = fs.existsSync(enPath) ? fs.readFileSync(enPath, 'utf-8') : '';

    return {
        ...meta,
        slug,
        content: { pt: ptContent, en: enContent }
    };
}

export function getAllArticleSlugs(): string[] {
    if (!fs.existsSync(ARTICLES_DIR)) {
        return [];
    }
    return fs.readdirSync(ARTICLES_DIR);
}
