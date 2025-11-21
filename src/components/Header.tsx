"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import clsx from 'clsx';

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: t('Sobre', 'About'), href: '#about' },
        { label: t('Experiência', 'Experience'), href: '#experience' },
        { label: t('Projetos', 'Projects'), href: '#projects' },
        { label: t('Habilidades', 'Skills'), href: '#skills' },
        { label: t('Contato', 'Contact'), href: '#contact' },
    ];

    return (
        <header
            className={clsx(
                'fixed top-0 w-full z-50 transition-all duration-300',
                isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold tracking-tighter"
                >
                    <span className="text-gradient">MURILO FRAY</span>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item, i) => (
                        <motion.a
                            key={item.href}
                            href={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item.label}
                        </motion.a>
                    ))}

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                        className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs font-medium border border-white/10"
                    >
                        <Globe size={14} />
                        {language === 'pt' ? 'EN' : 'PT'}
                    </motion.button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden glass-panel border-t border-white/10"
                >
                    <nav className="flex flex-col p-4 gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-300 hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                setLanguage(language === 'pt' ? 'en' : 'pt');
                                setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-2 text-gray-300 hover:text-white"
                        >
                            <Globe size={16} />
                            {language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
                        </button>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
