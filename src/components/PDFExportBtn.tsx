"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { jsPDF } from 'jspdf';
import { Download } from 'lucide-react';

export default function PDFExportBtn() {
    const { t, language } = useLanguage();

    const handleExport = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 20;
        let yPos = 20;

        // Helper function to add text with word wrap
        const addText = (text: string, fontSize: number = 10, isBold: boolean = false) => {
            doc.setFontSize(fontSize);
            if (isBold) {
                doc.setFont('helvetica', 'bold');
            } else {
                doc.setFont('helvetica', 'normal');
            }

            const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
            doc.text(lines, margin, yPos);
            yPos += lines.length * (fontSize * 0.5) + 3;

            // Check if we need a new page
            if (yPos > 270) {
                doc.addPage();
                yPos = 20;
            }
        };

        const addSection = (title: string) => {
            yPos += 5;
            doc.setFillColor(59, 130, 246);
            doc.rect(margin, yPos - 5, pageWidth - 2 * margin, 8, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text(title, margin + 2, yPos);
            doc.setTextColor(0, 0, 0);
            yPos += 10;
        };

        // Title
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text(resumeData.personalInfo.name, margin, yPos);
        yPos += 10;

        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(resumeData.personalInfo.role, margin, yPos);
        yPos += 15;

        // Contact Info
        addSection(t('Informações de Contato', 'Contact Information'));
        addText(`Email: ${resumeData.personalInfo.email}`);
        addText(`${t('Telefone', 'Phone')}: ${resumeData.personalInfo.phone}`);
        addText(`LinkedIn: ${resumeData.personalInfo.linkedin}`);
        addText(`GitHub: ${resumeData.personalInfo.github}`);
        addText(`${t('Localização', 'Location')}: ${resumeData.personalInfo.location}`);

        // Summary
        addSection(t('Resumo Profissional', 'Professional Summary'));
        addText(language === 'pt' ? resumeData.summary.pt : resumeData.summary.en);

        // Experience
        addSection(t('Experiência Profissional', 'Professional Experience'));
        resumeData.experience.forEach((job) => {
            addText(`${job.company} - ${language === 'pt' ? job.role.pt : job.role.en}`, 11, true);
            addText(language === 'pt' ? job.period.pt : job.period.en, 9);
            addText(language === 'pt' ? job.description.pt : job.description.en);
            yPos += 3;
        });

        // Education
        addSection(t('Formação Acadêmica', 'Education'));
        resumeData.education.forEach((edu) => {
            addText(edu.institution, 11, true);
            addText(language === 'pt' ? edu.degree.pt : edu.degree.en);
            addText(language === 'pt' ? edu.period.pt : edu.period.en, 9);
            yPos += 3;
        });

        // Skills
        addSection(t('Habilidades Técnicas', 'Technical Skills'));
        resumeData.skills.forEach((skillGroup) => {
            const categoryName = language === 'pt' ? skillGroup.category.pt : skillGroup.category.en;
            addText(`${categoryName}: ${skillGroup.items.join(', ')}`);
        });

        // Projects
        addSection(t('Projetos', 'Projects'));
        resumeData.projects.forEach((project) => {
            addText(language === 'pt' ? project.title.pt : project.title.en, 11, true);
            addText(language === 'pt' ? project.description.pt : project.description.en);
            addText(`${t('Tecnologias', 'Technologies')}: ${project.tech.join(', ')}`, 9);
            if (project.link) {
                addText(`Link: ${project.link}`, 8);
            }
            yPos += 3;
        });

        // Save the PDF
        doc.save(`Curriculo_Murilo_Fray_${language.toUpperCase()}.pdf`);
    };

    return (
        <button
            onClick={handleExport}
            className="fixed bottom-8 right-8 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-110"
            title={t('Exportar para PDF', 'Export to PDF')}
        >
            <Download size={24} />
            <span className="hidden md:inline font-medium">{t('Baixar PDF', 'Download PDF')}</span>
        </button>
    );
}
