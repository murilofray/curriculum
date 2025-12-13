"use client";

import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import MainHeader from '@/components/MainHeader';

function ProjectsContent() {
    const { t } = useLanguage();
    const { isDark } = useTheme();

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
                            <span className="text-gradient">{t('Projetos', 'Projects')}</span>
                        </h1>
                        <p className={`max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {t(
                                'Aqui você encontrará os projetos que desenvolvi ao longo da minha carreira.',
                                'Here you will find the projects I have developed throughout my career.'
                            )}
                        </p>
                    </motion.div>

                    {/* Coming Soon Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 flex items-center justify-center"
                    >
                        <div className="glass-card p-12 rounded-3xl text-center max-w-md">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                <Rocket size={40} className="text-white" />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">
                                {t('Em breve', 'Coming Soon')}
                            </h2>
                            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                                {t(
                                    'Estou preparando projetos incríveis para compartilhar aqui. Volte em breve!',
                                    'I am preparing amazing projects to share here. Come back soon!'
                                )}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

export default function ProjectsPage() {
    return (
        <LanguageProvider>
            <ProjectsContent />
        </LanguageProvider>
    );
}
