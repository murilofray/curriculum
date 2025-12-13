"use client";

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';

export default function MainHeader() {
    const { t } = useLanguage();
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
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
