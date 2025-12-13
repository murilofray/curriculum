"use client";

import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ExternalLink, Github, Tag } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

// Same data as listing - will be centralized later
const projectsData = [
    {
        slug: 'homebuilder-ai-agent',
        title: { pt: 'Agente IA para Homebuilders', en: 'AI Agent for Homebuilders' },
        description: {
            pt: 'Assistente virtual inteligente especializado no setor de construção civil, capaz de responder dúvidas técnicas, auxiliar em orçamentos e fornecer informações sobre materiais.',
            en: 'Intelligent virtual assistant specialized in the construction sector, capable of answering technical questions, assisting with budgets, and providing information about materials.'
        },
        content: {
            pt: `## Visão Geral

Este projeto desenvolve um assistente virtual inteligente para empresas do setor de construção civil (Homebuilders). O agente utiliza técnicas de RAG (Retrieval-Augmented Generation) para fornecer respostas precisas e contextualizadas.

## Funcionalidades

- Resposta a dúvidas técnicas sobre construção
- Auxílio em cálculos de orçamento
- Informações sobre materiais e fornecedores
- Integração com documentação técnica do cliente

## Arquitetura

O sistema utiliza LangChain para orquestração, com um banco de dados vetorial para armazenamento de embeddings da documentação técnica.`,
            en: `## Overview

This project develops an intelligent virtual assistant for construction companies (Homebuilders). The agent uses RAG (Retrieval-Augmented Generation) techniques to provide accurate and contextualized responses.

## Features

- Technical construction question answering
- Budget calculation assistance
- Materials and supplier information
- Integration with client technical documentation

## Architecture

The system uses LangChain for orchestration, with a vector database for storing embeddings of technical documentation.`
        },
        tags: ['AI', 'LangChain', 'RAG'],
        tech: ['Python', 'LangChain', 'Vector DB', 'FastAPI'],
        featured: true,
        publishedAt: '2024-10-15',
        github: 'https://github.com/murilofray',
    },
    {
        slug: 'lawyer-ai-agent',
        title: { pt: 'Agente IA para Advogados', en: 'AI Agent for Lawyers' },
        description: {
            pt: 'Ferramenta de IA para pesquisa jurídica automatizada e análise de documentos legais.',
            en: 'AI tool for automated legal research and legal document analysis.'
        },
        content: {
            pt: `## Visão Geral

Ferramenta de IA desenvolvida para auxiliar advogados em pesquisas jurídicas e análise de documentos legais.

## Funcionalidades

- Pesquisa automatizada de jurisprudência
- Análise de contratos
- Elaboração de petições
- Recuperação de informações contextualizadas`,
            en: `## Overview

AI tool developed to assist lawyers in legal research and document analysis.

## Features

- Automated jurisprudence search
- Contract analysis
- Petition drafting
- Contextualized information retrieval`
        },
        tags: ['AI', 'LangGraph', 'Legal'],
        tech: ['Python', 'LangGraph', 'PostgreSQL', 'RAG'],
        featured: true,
        publishedAt: '2024-09-20',
    },
    {
        slug: 'autonomous-customer-service',
        title: { pt: 'Atendimento ao Cliente com IA Autônoma', en: 'Customer Service with Autonomous AI' },
        description: {
            pt: 'Agente autônomo capaz de realizar atendimento completo ao cliente sem intervenção humana.',
            en: 'Autonomous agent capable of providing complete customer service without human intervention.'
        },
        content: {
            pt: `## Visão Geral

Sistema de atendimento ao cliente totalmente automatizado utilizando agentes autônomos.

## Funcionalidades

- Processamento de solicitações
- Resolução de problemas comuns
- Agendamento de compromissos
- Escalação inteligente para humanos`,
            en: `## Overview

Fully automated customer service system using autonomous agents.

## Features

- Request processing
- Common issue resolution
- Appointment scheduling
- Intelligent escalation to humans`
        },
        tags: ['AI', 'CrewAI', 'Automation'],
        tech: ['CrewAI', 'FastAPI', 'LangChain', 'PostgreSQL'],
        featured: false,
        publishedAt: '2024-08-10',
    },
    {
        slug: 'ai-copilot-agents',
        title: { pt: 'Copiloto IA para Atendentes', en: 'AI Copilot for Customer Service Agents' },
        description: {
            pt: 'Sistema de suporte em tempo real para atendentes humanos com sugestões inteligentes.',
            en: 'Real-time support system for human customer service agents with intelligent suggestions.'
        },
        content: {
            pt: `## Visão Geral

Sistema de suporte em tempo real que auxilia atendentes humanos durante conversas com clientes.

## Funcionalidades

- Análise de conversa em andamento
- Sugestões de respostas
- Recomendações de próximos passos
- Aprendizado contínuo`,
            en: `## Overview

Real-time support system that assists human agents during customer conversations.

## Features

- Ongoing conversation analysis
- Response suggestions
- Next steps recommendations
- Continuous learning`
        },
        tags: ['AI', 'Real-time', 'WebSocket'],
        tech: ['LangChain', 'WebSocket', 'FastAPI', 'React'],
        featured: false,
        publishedAt: '2024-07-05',
    },
];

function ProjectDetailContent() {
    const { t, language } = useLanguage();
    const params = useParams();
    const slug = params.slug as string;

    const project = useMemo(() => {
        return projectsData.find(p => p.slug === slug);
    }, [slug]);

    if (!project) {
        return (
            <main className="bg-black min-h-screen text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">{t('Projeto não encontrado', 'Project not found')}</h1>
                    <Link href="/projects" className="text-blue-400 hover:underline">
                        {t('Voltar para projetos', 'Back to projects')}
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500/30">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 glass-panel py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold tracking-tighter">
                        <span className="text-gradient">MURILO FRAY</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/curriculo" className="text-sm text-gray-300 hover:text-white transition-colors">
                            {t('Currículo', 'Resume')}
                        </Link>
                        <Link href="/projects" className="text-sm text-white font-medium">
                            {t('Projetos', 'Projects')}
                        </Link>
                        <Link href="/articles" className="text-sm text-gray-300 hover:text-white transition-colors">
                            {t('Artigos', 'Articles')}
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Content */}
            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Back Link */}
                    <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={16} />
                        {t('Voltar para projetos', 'Back to projects')}
                    </Link>

                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {/* Header */}
                        <header className="mb-8">
                            {project.featured && (
                                <span className="inline-block px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full mb-4">
                                    {t('Destaque', 'Featured')}
                                </span>
                            )}
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                {language === 'pt' ? project.title.pt : project.title.en}
                            </h1>
                            <p className="text-gray-400 text-lg mb-6">
                                {language === 'pt' ? project.description.pt : project.description.en}
                            </p>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                                <span className="flex items-center gap-2">
                                    <Calendar size={14} />
                                    {new Date(project.publishedAt).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 text-gray-400 text-sm rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                                    >
                                        <Github size={18} />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </header>

                        {/* Content */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            {(language === 'pt' ? project.content.pt : project.content.en).split('\n').map((line, i) => {
                                if (line.startsWith('## ')) {
                                    return <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-white">{line.replace('## ', '')}</h2>;
                                }
                                if (line.startsWith('- ')) {
                                    return <li key={i} className="text-gray-300 ml-4">{line.replace('- ', '')}</li>;
                                }
                                if (line.trim() === '') {
                                    return <br key={i} />;
                                }
                                return <p key={i} className="text-gray-300 mb-4">{line}</p>;
                            })}
                        </div>
                    </motion.article>
                </div>
            </div>
        </main>
    );
}

export default function ProjectDetailPage() {
    return (
        <LanguageProvider>
            <ProjectDetailContent />
        </LanguageProvider>
    );
}
