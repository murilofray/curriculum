"use client";

import React from 'react';

export default function Footer() {
    return (
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black">
            <p>© {new Date().getFullYear()} Murilo Fray. All rights reserved.</p>
        </footer>
    );
}
