"use client";

import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, FolderKanban, PenLine, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { resumeData } from '@/data/resume';
import MainHeader from '@/components/MainHeader';

function HomeContent() {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();
  const { personalInfo, summary } = resumeData;

  const sections = [
    {
      icon: FileText,
      title: t('Currículo', 'Resume'),
      description: t(
        'Minha formação, experiências profissionais e habilidades técnicas.',
        'My education, professional experiences, and technical skills.'
      ),
      href: '/curriculo',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FolderKanban,
      title: t('Projetos', 'Projects'),
      description: t(
        'Soluções de IA, aplicações web e ferramentas que desenvolvi.',
        'AI solutions, web applications, and tools I have developed.'
      ),
      href: '/projects',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: PenLine,
      title: t('Artigos', 'Articles'),
      description: t(
        'Estudos, análises técnicas e aprendizados que compartilho.',
        'Studies, technical analyses, and learnings I share.'
      ),
      href: '/articles',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <main className={`min-h-screen selection:bg-blue-500/30 transition-colors ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      <MainHeader />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {isDark && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black blur-3xl -z-10" />
        )}

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden border-2 mb-6 ${isDark ? 'border-white/20' : 'border-gray-200'}`}>
                <img
                  src="/eu.jpg"
                  alt="Murilo Fray"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {t('Olá, eu sou', 'Hi, I am')} <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
              </h1>
              <p className={`text-xl mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{personalInfo.role}</p>
            </div>

            <p className={`text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'pt' ? summary.pt : summary.en}
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-16">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-white hover:bg-gray-100 border-gray-200'}`}
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-white hover:bg-gray-100 border-gray-200'}`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-3 rounded-full border transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-white hover:bg-gray-100 border-gray-200'}`}
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Section Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={section.href}
                  className={`group block glass-card p-6 rounded-2xl transition-all duration-300 h-full ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-50'}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <section.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 transition-colors">
                    {section.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {section.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-blue-500 group-hover:gap-3 transition-all">
                    {t('Explorar', 'Explore')}
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        <p>© {new Date().getFullYear()} Murilo Fray. {t('Todos os direitos reservados.', 'All rights reserved.')}</p>
      </footer>
    </main>
  );
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
