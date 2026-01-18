'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function VideoHero() {
    const { lang } = useLanguage();

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
                poster="/Hero/frame_000.jpg" // Fallback if available, or omit
            >
                <source src="/ezgif.com-video-to-webp-converter.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 tracking-tight drop-shadow-2xl leading-tight">
                        {lang === 'he' ? 'מהמור ומורכב' : 'From Ambiguity'} <br />
                        <span className="text-slate-200">
                            {lang === 'he' ? 'לראייה בהירה.' : 'to Clarity.'}
                        </span>
                    </h1>
                </motion.div>

                {/* Sub-headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                >
                    <p className="font-sans text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-10 tracking-wide">
                        {lang === 'he'
                            ? 'אנחנו מביאים איזון ודיוק לאתגרים המשפטיים המורכבים ביותר שלך.'
                            : 'We bring balance and precision to your most complex legal challenges.'}
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                    <button className="group relative overflow-hidden rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-3 font-sans font-bold uppercase tracking-widest text-sm md:text-base">
                            {lang === 'he' ? 'תיאום ייעוץ' : 'Schedule Consultation'}
                            <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${lang === 'he' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                        </span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
