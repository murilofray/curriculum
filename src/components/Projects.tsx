"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

export default function Projects() {
    const { language, t } = useLanguage();
    const { projects } = resumeData;

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">{t('Projetos em Destaque', 'Featured Projects')}</span>
                    </h2>
                    <div className="h-1 w-20 bg-purple-500 rounded-full" />
                </motion.div>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 ${project.highlight ? 'md:col-span-2 bg-gradient-to-br from-blue-900/20 to-purple-900/20' : ''
                                }`}
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-lg bg-white/5 w-fit">
                                        <Layers className="text-blue-400" size={24} />
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                            title={t('Ver projeto', 'View project')}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-white">
                                    {language === 'pt' ? project.title.pt : project.title.en}
                                </h3>

                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                    {language === 'pt' ? project.description.pt : project.description.en}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
