"use client";

import { LanguageProvider } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import MainHeader from '@/components/MainHeader';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PDFExportBtn from '@/components/PDFExportBtn';

function CurriculoContent() {
    const { isDark } = useTheme();

    return (
        <main className={`min-h-screen selection:bg-blue-500/30 transition-colors ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
            <MainHeader />
            <Hero />
            <Experience />
            <Skills />
            <Contact />
            <Footer />
            <PDFExportBtn />
        </main>
    );
}

export default function CurriculoPage() {
    return (
        <LanguageProvider>
            <CurriculoContent />
        </LanguageProvider>
    );
}
