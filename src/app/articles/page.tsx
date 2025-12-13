import { getAllArticles } from '@/lib/articles';
import ArticlesListClient from './ArticlesListClient';

export default function ArticlesPage() {
    const articles = getAllArticles();

    return <ArticlesListClient articles={articles} />;
}
