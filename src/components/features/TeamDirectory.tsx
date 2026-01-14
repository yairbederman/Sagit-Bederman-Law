'use client';

import Image from 'next/image';
import { lawyers } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function TeamDirectory() {
    const { lang } = useLanguage();
    // Featured Founder
    const featuredLawyer = lawyers[0];

    return (
        <section className="py-24 bg-[#FDFBF7] relative overflow-hidden" dir={lang === 'he' ? 'rtl' : 'ltr'}>
            {/* Background Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section - Full Width */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-gold-500" />
                        <span className="text-gold-600 font-bold uppercase tracking-widest text-sm">
                            {lang === 'he' ? 'סיפור המשרד' : 'The Firm Story'}
                        </span>
                        <div className="h-px w-12 bg-gold-500" />
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 leading-tight">
                        {lang === 'he' ? featuredLawyer.storyTitle?.he : featuredLawyer.storyTitle?.en}
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        {/* Story Content */}
                        <div className="text-slate-600 space-y-6 leading-relaxed text-lg">
                            {featuredLawyer.storyContent?.map((paragraph, idx) => (
                                <p key={idx}>
                                    {lang === 'he' ? paragraph.he : paragraph.en}
                                </p>
                            ))}
                        </div>

                        {/* Signature Block */}
                        <div className="pt-8 flex items-center gap-5">
                            <div className="w-16 h-16 rounded-full bg-[#E5E0D5] flex items-center justify-center font-display font-bold text-xl text-primary border border-primary/10 shadow-sm">
                                SB
                            </div>
                            <div className="flex flex-col">
                                <h4 className="font-bold text-slate-900 text-xl font-display">
                                    {lang === 'he' ? featuredLawyer.name.he : featuredLawyer.name.en}
                                </h4>
                                <span className="text-slate-500 text-sm tracking-wide">
                                    {lang === 'he' ? featuredLawyer.roleTitle.he : featuredLawyer.roleTitle.en}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative px-4 lg:px-0">
                        {/* Border Frame */}
                        <div className="relative aspect-[4/5] bg-bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-slate-900/5">
                            <Image
                                src={featuredLawyer.image}
                                alt={lang === 'he' ? featuredLawyer.name.he : featuredLawyer.name.en}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Quote Card - Positioned differently based on language/direction if needed, 
                            but absolute positioning relies on the container.
                            Design shows bottom-right relative to image.
                        */}
                        {featuredLawyer.quote && (
                            <div className={`
                                absolute -bottom-10 bg-white/95 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg max-w-sm border border-slate-100 z-20
                                ${lang === 'he' ? 'left-8 lg:-left-16 text-right' : 'right-8 lg:-right-16 text-left'}
                            `}>
                                <div className={`absolute top-6 text-gold-400 opacity-40 ${lang === 'he' ? 'right-6' : 'left-6'}`}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                                    </svg>
                                </div>
                                <div className="relative z-10 pt-6">
                                    <p className="text-slate-800 font-medium leading-relaxed font-serif text-xl tracking-wide">
                                        {lang === 'he' ? featuredLawyer.quote.he : featuredLawyer.quote.en}
                                    </p>
                                    <div className={`h-1 w-12 bg-gold-400 mt-6 ${lang === 'he' ? 'ml-auto' : 'mr-auto'}`} />
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
