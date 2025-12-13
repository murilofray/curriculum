"use client";

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
    const { isDark } = useTheme();

    return (
        <footer className={`py-8 text-center text-sm border-t ${isDark ? 'text-gray-500 border-white/5 bg-black' : 'text-gray-500 border-gray-200 bg-gray-50'
            }`}>
            <p>© {new Date().getFullYear()} Murilo Fray. All rights reserved.</p>
        </footer>
    );
}
