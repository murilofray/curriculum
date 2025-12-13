"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { resumeData } from '@/data/resume';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
    const { t, language } = useLanguage();
    const { isDark } = useTheme();
    const { skills } = resumeData;

    return (
        <section id="skills" className={`py-20 ${isDark ? 'bg-black/20' : 'bg-gray-100/50'}`}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">{t('Habilidades Técnicas', 'Technical Skills')}</span>
                    </h2>
                    <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {t(
                            'Tecnologias e ferramentas que utilizo para construir soluções escaláveis e inteligentes.',
                            'Technologies and tools I use to build scalable and intelligent solutions.'
                        )}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className={`text-xl font-bold mb-6 border-l-4 border-blue-500 pl-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {language === 'pt' ? skillGroup.category.pt : skillGroup.category.en}
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {skillGroup.items.map((skill, skillIndex) => (
                                    <motion.div
                                        key={`${index}-${skillIndex}`}
                                        whileHover={{ scale: 1.05 }}
                                        className={`glass-card p-4 rounded-xl flex items-center gap-3 transition-colors cursor-default group ${isDark ? 'hover:border-blue-500/30' : 'hover:border-blue-500/50'
                                            }`}
                                    >
                                        <CheckCircle2 className="text-blue-500 group-hover:text-blue-400 transition-colors flex-shrink-0" size={20} />
                                        <span className={`font-medium transition-colors text-sm ${isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                                            }`}>{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
