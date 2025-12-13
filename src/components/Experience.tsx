"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { resumeData } from '@/data/resume';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
    const { language, t } = useLanguage();
    const { isDark } = useTheme();
    const { experience } = resumeData;

    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">{t('Experiência Profissional', 'Professional Experience')}</span>
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 rounded-full" />
                </motion.div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />

                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 mt-1.5 hidden md:block shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="md:w-1/2" />

                            <div className="md:w-1/2">
                                <div className={`glass-card p-6 rounded-2xl transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-50'}`}>
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{job.company}</h3>
                                            <p className="text-blue-500 font-medium text-sm">
                                                {language === 'pt' ? job.role.pt : job.role.en}
                                            </p>
                                        </div>
                                        <div className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full border ${isDark ? 'text-gray-500 bg-white/5 border-white/5' : 'text-gray-500 bg-gray-100 border-gray-200'
                                            }`}>
                                            <Briefcase size={12} />
                                            {language === 'pt' ? job.period.pt : job.period.en}
                                        </div>
                                    </div>

                                    <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {language === 'pt' ? job.description.pt : job.description.en}
                                    </p>

                                    {job.image && (
                                        <div className={`mb-4 rounded-xl overflow-hidden border ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                                            <img
                                                src={job.image}
                                                alt={job.company}
                                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}

                                    {job.link && (
                                        <a
                                            href={job.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 transition-colors"
                                        >
                                            {language === 'pt' ? 'Ver notícia completa' : 'Read full news'}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
