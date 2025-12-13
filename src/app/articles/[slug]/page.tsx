import { getArticleBySlug, getAllArticleSlugs } from '@/lib/articles';
import { notFound } from 'next/navigation';
import ArticleDetailClient from './ArticleDetailClient';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllArticleSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function ArticleDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return <ArticleDetailClient article={article} />;
}
