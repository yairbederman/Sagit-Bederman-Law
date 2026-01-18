'use client';

import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CTASection() {
    const { lang } = useLanguage();

    return (
        <section className="bg-[#0f0f0f] py-40 px-6 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
                    {lang === 'he' ? 'מוכנים לשדרג את' : 'Ready to Elevate Your'} <br />
                    {lang === 'he' ? 'האסטרטגיה המשפטית שלכם?' : 'Legal Strategy?'}
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                    {lang === 'he'
                        ? 'תן לנו לספק את הבהירות והדיוק שהאתגרים שלך דורשים. קבע פגישת ייעוץ פרטית עוד היום.'
                        : 'Let us provide the clarity and precision your challenges demand. Schedule a private consultation today.'}
                </p>

                <button className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-white transition-all duration-200 bg-transparent font-sans tracking-widest uppercase hover:scale-105">
                    {/* Rainbow Border / Glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-purple-500 to-blue-500 opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-gradient-xy"></div>
                    <div className="absolute inset-[2px] rounded-full bg-[#0a0a0a]"></div>

                    <span className="relative z-10 flex items-center gap-3">
                        {lang === 'he' ? 'בקש פגישת ייעוץ' : 'Request a Consultation'} <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${lang === 'he' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    </span>
                </button>
            </div>
        </section>
    );
}
