'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, X, Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { practices } from '@/lib/data';

import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { lang, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-none",
                isScrolled
                    ? "bg-transparent backdrop-blur-md py-2"
                    : "bg-transparent py-4 text-slate-900"
            )}
        >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

                {/* Logo Area */}
                <div className="flex items-center gap-4">
                    <div className="size-10 bg-primary text-white rounded-full flex items-center justify-center shadow-md">
                        <span className="font-serif font-bold text-xl">S</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold tracking-tight leading-none font-display text-slate-900">
                            {lang === 'he' ? 'שגית בדרמן' : 'Sagit Bederman'}
                        </h1>
                        <span className="text-xs font-semibold tracking-wider text-primary mt-1 uppercase">
                            {lang === 'he' ? 'משרד עורכי דין' : 'Law Firm'}
                        </span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/about" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                        {lang === 'he' ? 'אודות' : 'About'}
                    </Link>

                    <div className="group relative">
                        <button className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-primary transition-colors py-4">
                            {lang === 'he' ? 'תחומי מומחיות' : 'Expertise'}
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {/* Mega Menu Dropdown */}
                        <div className="absolute top-full right-0 min-w-[240px] bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 flex flex-col gap-2">
                            {practices.map((practice) => (
                                <Link
                                    key={practice.id}
                                    href={`/practice/${practice.id}`}
                                    className="p-2 hover:bg-white/10 rounded-lg group/item transition-all duration-200 text-right"
                                >
                                    <div className="font-bold text-sm text-slate-600 group-hover/item:text-primary">
                                        {lang === 'he' ? practice.title.he : practice.title.en}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/insights" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                        {lang === 'he' ? 'תובנות' : 'Insights'}
                    </Link>

                    <Link href="/team" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                        {lang === 'he' ? 'הצוות' : 'Team'}
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="hidden lg:flex items-center gap-2 text-slate-600 hover:text-primary text-sm font-semibold"
                    >
                        <Globe className="w-4 h-4" />
                        <span>{lang === 'he' ? 'EN' : 'עב'}</span>
                    </button>

                    <button className="hidden lg:flex items-center gap-2 text-slate-600 hover:text-primary">
                        <Search className="w-5 h-5" />
                    </button>

                    <Link
                        href="/contact"
                        className="hidden lg:flex bg-primary hover:bg-primary-dark text-white text-sm font-bold h-10 px-6 rounded-full transition-all items-center justify-center shadow-lg hover:-translate-y-0.5"
                    >
                        {lang === 'he' ? 'צור קשר' : 'Contact'}
                    </Link>

                    <button
                        className="lg:hidden p-2 text-slate-900"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col p-6 animate-in fade-in slide-in-from-top-10 duration-200">
                    <div className="flex justify-between items-center mb-8">
                        <span className="font-display font-bold text-2xl text-slate-900">תפריט</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-warm-beige rounded-full">
                            <X className="w-6 h-6 text-slate-900" />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-6 text-xl font-bold text-slate-900">
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>אודות</Link>
                        <Link href="/team" onClick={() => setIsMobileMenuOpen(false)}>הצוות</Link>
                        <div className="flex flex-col gap-3 pl-4 border-r-2 border-primary/20">
                            <span className="text-sm text-primary uppercase tracking-widest">תחומי מומחיות</span>
                            {practices.map(p => (
                                <Link key={p.id} href={`/practice/${p.id}`} onClick={() => setIsMobileMenuOpen(false)} className="text-base font-normal">
                                    {p.title.he}
                                </Link>
                            ))}
                        </div>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>צור קשר</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
