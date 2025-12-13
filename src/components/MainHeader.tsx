"use client";

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';
import { Home, Globe } from 'lucide-react';

export default function MainHeader() {
    const { t, language, setLanguage } = useLanguage();
    const { isDark } = useTheme();
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');
    const isHome = pathname === '/';

    return (
        <header className="fixed top-0 w-full z-50 glass-panel py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    <span className="text-gradient">MURILO FRAY</span>
                </Link>
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-6">
                        {!isHome && (
                            <Link
                                href="/"
                                className={`text-sm transition-colors flex items-center gap-1 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                <Home size={14} />
                                {t('Início', 'Home')}
                            </Link>
                        )}
                        <Link
                            href="/curriculo"
                            className={`text-sm transition-colors ${isActive('/curriculo')
                                ? 'font-medium'
                                : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {t('Currículo', 'Resume')}
                        </Link>
                        <Link
                            href="/projects"
                            className={`text-sm transition-colors ${isActive('/projects')
                                ? 'font-medium'
                                : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {t('Projetos', 'Projects')}
                        </Link>
                        <Link
                            href="/articles"
                            className={`text-sm transition-colors ${isActive('/articles')
                                ? 'font-medium'
                                : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {t('Artigos', 'Articles')}
                        </Link>
                    </nav>
                    <button
                        onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors ${isDark
                                ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                            }`}
                        aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
                    >
                        <Globe size={14} />
                        <span className="font-medium">{language === 'pt' ? 'EN' : 'PT'}</span>
                    </button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
