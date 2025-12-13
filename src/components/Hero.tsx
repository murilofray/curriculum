"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { resumeData } from '@/data/resume';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
    const { language, t } = useLanguage();
    const { isDark } = useTheme();
    const { personalInfo, summary } = resumeData;

    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            {isDark && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black blur-3xl -z-10" />
            )}

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        {t('Olá, eu sou', 'Hi, I am')} <br />
                        <span className="text-gradient">{personalInfo.name}</span>
                    </h1>

                    <h2 className={`text-xl md:text-2xl mb-6 font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {personalInfo.role}
                    </h2>

                    <p className={`text-lg leading-relaxed mb-8 max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {language === 'pt' ? summary.pt : summary.en}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className={`px-8 py-3 rounded-full font-bold transition-colors flex items-center gap-2 ${isDark
                                    ? 'bg-white text-black hover:bg-gray-200'
                                    : 'bg-gray-900 text-white hover:bg-gray-800'
                                }`}
                        >
                            {t('Entre em contato', 'Get in touch')}
                            <ArrowRight size={18} />
                        </a>

                        <div className="flex items-center gap-4 px-6">
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                                <Github size={24} />
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                                <Linkedin size={24} />
                            </a>
                            <a href={`mailto:${personalInfo.email}`} className={`transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                        <div className={`relative w-full h-full rounded-2xl overflow-hidden border glass-card flex items-center justify-center group ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                            <img
                                src="/eu.jpg"
                                alt="Murilo Fray"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
