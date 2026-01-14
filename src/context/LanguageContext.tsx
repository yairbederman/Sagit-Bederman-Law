'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'he' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
    lang: Language;
    dir: Direction;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>('he');
    const [dir, setDir] = useState<Direction>('rtl');

    useEffect(() => {
        const newDir = lang === 'he' ? 'rtl' : 'ltr';
        setDir(newDir);
        document.documentElement.dir = newDir;
        document.documentElement.lang = lang;
    }, [lang]);

    const toggleLanguage = () => {
        setLang(prev => prev === 'he' ? 'en' : 'he');
    };

    const setLanguage = (newLang: Language) => {
        setLang(newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, dir, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
