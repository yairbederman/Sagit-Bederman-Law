'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TeamDirectory from "@/components/features/TeamDirectory";
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PracticeArea } from '@/lib/types';

interface PracticePageTemplateProps {
    practice: PracticeArea;
}

export default function PracticePageTemplate({ practice }: PracticePageTemplateProps) {
    const { lang } = useLanguage();
    const Arrow = lang === 'he' ? ArrowLeft : ArrowRight;

    return (
        <div className="min-h-screen flex flex-col font-body bg-white">
            <Header />

            <main className="flex-grow pt-24">
                {/* Hero / Header for Practice */}
                <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                        <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-6">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            {lang === 'he' ? 'תחום התמחות' : 'Practice Area'}
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold font-display mb-6">
                            {lang === 'he' ? practice.title.he : practice.title.en}
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light">
                            {lang === 'he' ? practice.shortDescription.he : practice.shortDescription.en}
                        </p>
                    </div>
                </section>

                {/* "The Proof" - Case Studies (Mock) */}
                <section className="py-20 bg-warm-beige/30 border-b border-warm-cream">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <h3 className="text-2xl font-bold font-display text-slate-900 mb-8 flex items-center gap-3">
                            <CheckCircle className="text-primary w-6 h-6" />
                            {lang === 'he' ? 'הצלחות מייצגות' : 'Representative Matters'}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white p-6 rounded-xl border border-warm-cream shadow-sm">
                                    <span className="text-primary font-bold text-sm mb-2 block">עיסקת ענק</span>
                                    <p className="text-slate-700 font-medium">
                                        ייצוג חברת תשתיות מובילה בפרויקט לאומי בהיקף של 500 מיליון ש"ח.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* "The Team" */}
                <section className="py-20">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="flex justify-between items-end mb-10">
                            <div>
                                <h2 className="text-3xl font-bold font-display text-slate-900">
                                    {lang === 'he' ? 'הצוות המוביל' : 'Our Team'}
                                </h2>
                                <p className="text-slate-500 mt-2">
                                    {lang === 'he' ? `מומחים ב${practice.title.he}` : `Experts in ${practice.title.en}`}
                                </p>
                            </div>
                        </div>

                        {/* Embed TeamDirectory with filtering locked to this practice */}
                        <TeamDirectory
                            initialPracticeId={practice.id}
                            hidePracticeFilter={true}
                        />
                    </div>
                </section>

                {/* "The CTA" */}
                <section className="bg-primary py-16 text-white text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold font-display mb-6">
                            {lang === 'he' ? 'זקוקים לייעוץ משפטי בתחום זה?' : 'Need legal counsel in this area?'}
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                            {lang === 'he'
                                ? 'הצוות שלנו זמין לטיפול במקרים מורכבים ודחופים. פנו אלינו לשיחת ייעוץ דיסקרטית.'
                                : 'Our team is available for complex and urgent matters. Contact us for a discrete consultation.'}
                        </p>
                        <button className="bg-white text-primary hover:bg-slate-100 font-bold h-12 px-8 rounded-full transition-colors shadow-lg flex items-center gap-2 mx-auto">
                            {lang === 'he' ? 'צרו קשר עם המחלקה' : 'Contact the Team'}
                            <Arrow className="w-5 h-5" />
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
