"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
    const { t } = useLanguage();
    const { personalInfo } = resumeData;

    return (
        <section id="contact" className="py-20 bg-gradient-to-t from-blue-900/10 to-transparent">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        <span className="text-gradient">{t('Vamos Conversar?', "Let's Talk?")}</span>
                    </h2>

                    <p className="text-gray-400 mb-12 text-lg">
                        {t(
                            'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!',
                            'I am always open to new opportunities and interesting projects. Get in touch!'
                        )}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="glass-card p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all group"
                        >
                            <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Mail size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="text-white font-medium">{personalInfo.email}</p>
                            </div>
                        </a>

                        <a
                            href={`https://wa.me/${personalInfo.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all group"
                        >
                            <div className="p-3 rounded-full bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <MessageSquare size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">WhatsApp</p>
                                <p className="text-white font-medium">{personalInfo.phone}</p>
                            </div>
                        </a>

                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all group"
                        >
                            <div className="p-3 rounded-full bg-blue-700/10 text-blue-500 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                                <Linkedin size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">LinkedIn</p>
                                <p className="text-white font-medium">/in/murilofray</p>
                            </div>
                        </a>

                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all group"
                        >
                            <div className="p-3 rounded-full bg-gray-700/10 text-gray-400 group-hover:bg-gray-700 group-hover:text-white transition-colors">
                                <Github size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">GitHub</p>
                                <p className="text-white font-medium">/murilofray</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
