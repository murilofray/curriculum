"use client";

import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PDFExportBtn from '@/components/PDFExportBtn';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="bg-black min-h-screen text-white selection:bg-blue-500/30">
        <Header />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <PDFExportBtn />
      </main>
    </LanguageProvider>
  );
}
