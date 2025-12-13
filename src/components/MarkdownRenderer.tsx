"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTheme } from '@/context/ThemeContext';

interface MarkdownRendererProps {
    content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    const { isDark } = useTheme();

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                h1: ({ children }) => (
                    <h1 className={`text-3xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{children}</h1>
                ),
                h2: ({ children }) => (
                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{children}</h2>
                ),
                h3: ({ children }) => (
                    <h3 className={`text-xl font-bold mt-6 mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{children}</h3>
                ),
                p: ({ children }) => (
                    <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{children}</p>
                ),
                ul: ({ children }) => (
                    <ul className={`list-disc list-inside mb-4 space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className={`list-decimal list-inside mb-4 space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{children}</ol>
                ),
                li: ({ children }) => (
                    <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{children}</li>
                ),
                strong: ({ children }) => (
                    <strong className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{children}</strong>
                ),
                code: ({ className, children }) => {
                    const isInline = !className;
                    if (isInline) {
                        return (
                            <code className={`px-1.5 py-0.5 rounded text-sm ${isDark ? 'bg-white/10 text-emerald-400' : 'bg-gray-100 text-emerald-600'}`}>
                                {children}
                            </code>
                        );
                    }
                    return (
                        <code className="text-sm">{children}</code>
                    );
                },
                pre: ({ children }) => (
                    <pre className={`rounded-xl p-4 overflow-x-auto mb-4 text-sm ${isDark ? 'bg-gray-900 border border-white/10' : 'bg-gray-900 border border-gray-200 text-gray-100'}`}>
                        {children}
                    </pre>
                ),
                a: ({ href, children }) => (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 underline"
                    >
                        {children}
                    </a>
                ),
                blockquote: ({ children }) => (
                    <blockquote className={`border-l-4 border-blue-500 pl-4 italic my-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {children}
                    </blockquote>
                ),
                hr: () => <hr className={`my-8 ${isDark ? 'border-white/10' : 'border-gray-200'}`} />,
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
