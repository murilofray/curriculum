"use client";

import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import MainHeader from '@/components/MainHeader';
import type { Article } from '@/lib/articles';

interface ArticleDetailClientProps {
    article: Article;
}

function ArticleContent({ article }: ArticleDetailClientProps) {
    const { t, language } = useLanguage();
    const { isDark } = useTheme();

    const content = language === 'pt' ? article.content.pt : article.content.en;

    return (
        <main className={`min-h-screen selection:bg-blue-500/30 transition-colors ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
            <MainHeader />

            {/* Content */}
            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {/* Header */}
                        <header className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-500 text-xs rounded-full">
                                    {article.category}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                {language === 'pt' ? article.title.pt : article.title.en}
                            </h1>
                            <p className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {language === 'pt' ? article.excerpt.pt : article.excerpt.en}
                            </p>

                            {/* Meta */}
                            <div className={`flex flex-wrap items-center gap-4 text-sm mb-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                <span className="flex items-center gap-2">
                                    <Calendar size={14} />
                                    {new Date(article.publishedAt).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock size={14} />
                                    {article.readingTime} min {t('de leitura', 'read')}
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-emerald-500/20 text-emerald-500 text-sm rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </header>

                        {/* Divider */}
                        <hr className={`mb-8 ${isDark ? 'border-white/10' : 'border-gray-200'}`} />

                        {/* Content */}
                        <div className="prose prose-lg max-w-none">
                            <MarkdownRenderer content={content} />
                        </div>
                    </motion.article>
                </div>
            </div>
        </main>
    );
}

export default function ArticleDetailClient({ article }: ArticleDetailClientProps) {
    return (
        <LanguageProvider>
            <ArticleContent article={article} />
        </LanguageProvider>
    );
}
