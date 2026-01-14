'use client';

import { ArrowRight, ArrowLeft, Trophy, Award, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { lang } = useLanguage();
    const Arrow = lang === 'he' ? ArrowLeft : ArrowRight;

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            <div className="absolute inset-0 bg-slate-900">
                <Image
                    src="/images/hero-bg.png"
                    alt="Tel Aviv Office Skyline"
                    fill
                    className="object-cover object-center opacity-40"
                    priority
                    quality={100}
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-warm-beige via-warm-beige/80 to-transparent"></div>

            <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
                <div className="max-w-3xl flex flex-col gap-8">
                    <div className="flex items-center gap-3 text-primary font-bold tracking-wider text-sm animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                        <span className="w-10 h-[1px] bg-primary/40"></span>
                        <span>{lang === 'he' ? 'ליווי משפטי בסטנדרט פלטינום' : 'Platinum Standard Legal Counsel'}</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.2] drop-shadow-sm font-display animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                        {lang === 'he' ? (
                            <>
                                מצוינות משפטית <br />
                                <span className="text-primary italic">ללא פשרות</span>
                            </>
                        ) : (
                            <>
                                Legal Excellence <br />
                                <span className="text-primary italic">Without Compromise</span>
                            </>
                        )}
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl border-r-4 border-primary/10 pr-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                        {lang === 'he'
                            ? 'עם ניסיון של עשורים בליטיגציה מורכבת ומשפט מסחרי, אנו מעניקים ביטחון, חשיבה אסטרטגית והגנה בלתי מתפשרת עבור אלו שדורשים את הטוב ביותר.'
                            : 'With decades of experience in complex litigation and commercial law, we provide security, strategic thinking, and uncompromising protection for those who demand the best.'}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500">
                        <button className="bg-primary hover:bg-primary-dark text-white text-base font-bold h-14 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                            <span>{lang === 'he' ? 'תיאום פגישת ייעוץ' : 'Schedule Consultation'}</span>
                            <Arrow className="w-5 h-5" />
                        </button>
                        <button className="bg-white hover:bg-warm-cream text-slate-900 border border-warm-cream text-base font-bold h-14 px-10 rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2">
                            <span>{lang === 'he' ? 'קצת עלינו' : 'Learn More'}</span>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}
