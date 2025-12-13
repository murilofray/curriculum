"use client";

import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { Search, Calendar, ArrowLeft, Clock, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import type { ArticleMeta } from '@/lib/articles';
import MainHeader from '@/components/MainHeader';

interface ArticlesListClientProps {
    articles: ArticleMeta[];
}

function ArticlesContent({ articles }: ArticlesListClientProps) {
    const { t, language } = useLanguage();
    const { isDark } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        articles.forEach(a => a.tags.forEach(tag => tags.add(tag)));
        return Array.from(tags);
    }, [articles]);

    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const title = language === 'pt' ? article.title.pt : article.title.en;
            const excerpt = language === 'pt' ? article.excerpt.pt : article.excerpt.en;
            const matchesSearch = searchQuery === '' ||
                title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTag = !selectedTag || article.tags.includes(selectedTag);
            return matchesSearch && matchesTag;
        });
    }, [searchQuery, selectedTag, language, articles]);

    return (
        <main className={`min-h-screen selection:bg-blue-500/30 transition-colors ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
            <MainHeader />

            {/* Content */}
            <div className="pt-24 pb-16 min-h-screen flex flex-col">
                <div className="container mx-auto px-4 flex-1 flex flex-col">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-gradient">{t('Artigos', 'Articles')}</span>
                        </h1>
                        <p className={`max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {t(
                                'Estudos, análises técnicas e aprendizados que compartilho sobre desenvolvimento, IA e tecnologia.',
                                'Studies, technical analyses, and learnings I share about development, AI, and technology.'
                            )}
                        </p>
                    </motion.div>

                    {articles.length === 0 ? (
                        /* Coming Soon Card */
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 flex items-center justify-center"
                        >
                            <div className="glass-card p-12 rounded-3xl text-center max-w-md">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                                    <Rocket size={40} className="text-white" />
                                </div>
                                <h2 className="text-2xl font-bold mb-3">
                                    {t('Em breve', 'Coming Soon')}
                                </h2>
                                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                                    {t(
                                        'Estou preparando artigos incríveis para compartilhar aqui. Volte em breve!',
                                        'I am preparing amazing articles to share here. Come back soon!'
                                    )}
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <>
                            {/* Filters */}
                            <div className="flex flex-col md:flex-row gap-4 mb-8">
                                {/* Search */}
                                <div className="relative flex-1 max-w-md">
                                    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} size={18} />
                                    <input
                                        type="text"
                                        placeholder={t('Buscar artigos...', 'Search articles...')}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className={`w-full pl-10 pr-4 py-3 rounded-xl focus:outline-none transition-colors ${isDark
                                            ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50'
                                            : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                                            }`}
                                    />
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setSelectedTag(null)}
                                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${!selectedTag
                                            ? 'bg-emerald-500 text-white'
                                            : isDark ? 'bg-white/5 text-gray-400 hover:bg-white/10' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                            }`}
                                    >
                                        {t('Todos', 'All')}
                                    </button>
                                    {allTags.map(tag => (
                                        <button
                                            key={tag}
                                            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${selectedTag === tag
                                                ? 'bg-emerald-500 text-white'
                                                : isDark ? 'bg-white/5 text-gray-400 hover:bg-white/10' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                                }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Articles List */}
                            <div className="space-y-4">
                                {filteredArticles.map((article, index) => (
                                    <motion.div
                                        key={article.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={`/articles/${article.slug}`}
                                            className={`group block glass-card p-6 rounded-2xl transition-all ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-50'}`}
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-500 text-xs rounded-full">
                                                            {article.category}
                                                        </span>
                                                        <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                                            <Clock size={12} />
                                                            {article.readingTime} min
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">
                                                        {language === 'pt' ? article.title.pt : article.title.en}
                                                    </h3>
                                                    <p className={`text-sm line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                        {language === 'pt' ? article.excerpt.pt : article.excerpt.en}
                                                    </p>
                                                </div>
                                                <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                                    <Calendar size={12} />
                                                    {new Date(article.publishedAt).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {article.tags.map(tag => (
                                                    <span key={tag} className={`px-2 py-1 text-xs rounded ${isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {filteredArticles.length === 0 && (
                                <div className="text-center py-16">
                                    <p className={isDark ? 'text-gray-500' : 'text-gray-400'}>
                                        {t('Nenhum artigo encontrado.', 'No articles found.')}
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}

export default function ArticlesListClient({ articles }: ArticlesListClientProps) {
    return (
        <LanguageProvider>
            <ArticlesContent articles={articles} />
        </LanguageProvider>
    );
}
