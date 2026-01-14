'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function TrustTicker() {
    const { lang } = useLanguage();

    return (
        <section className="relative z-20 mb-12 lg:mb-20 px-6 pt-12 lg:pt-20">
            <div className="max-w-[1440px] mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col lg:flex-row items-center justify-between border border-slate-100 gap-8 lg:gap-0">

                    {/* Chat/Action Button */}
                    <a
                        href="https://wa.me/972523100090?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A2%D7%95%D7%B4%D7%93%20%D7%91%D7%93%D7%A8%D7%9E%D7%9F%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8.%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%91%D7%93%D7%95%D7%A7%20%D7%96%D7%9E%D7%99%D7%A0%D7%95%D7%AA%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%9E%D7%A9%D7%A4%D7%98%D7%99%20%D7%91%D7%A0%D7%95%D7%A9%D7%90%3A%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group flex-shrink-0 cursor-pointer"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 group-hover:scale-110 transition-transform">
                            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" className="opacity-20" />
                            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    <div className="hidden lg:block h-20 w-px bg-slate-100 mx-4" />

                    {/* Stat Type 1 */}
                    <div className="flex flex-col items-center text-center group cursor-default px-6 transition-all duration-300 hover:-translate-y-1">
                        <h4 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors">Top-Tier</h4>
                        <span className="text-base font-bold text-primary mt-2">דירוג איכות</span>
                        <span className="text-xs font-serif italic text-gold-600 mt-1 opacity-60 group-hover:opacity-100 transition-opacity">BDI/Chambers Recognition</span>
                    </div>

                    <div className="hidden lg:block h-20 w-px bg-slate-100 mx-4" />

                    {/* Stat Type 2 */}
                    <div className="flex flex-col items-center text-center group cursor-default px-6 transition-all duration-300 hover:-translate-y-1">
                        <h4 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors">85%</h4>
                        <span className="text-base font-bold text-primary mt-2">סגירת תיקים לפני הליך</span>
                        <span className="text-xs font-serif italic text-gold-600 mt-1 opacity-60 group-hover:opacity-100 transition-opacity">&quot;We solve it before it gets messy&quot;</span>
                    </div>

                    <div className="hidden lg:block h-20 w-px bg-slate-100 mx-4" />

                    {/* Stat Type 3 */}
                    <div className="flex flex-col items-center text-center group cursor-default px-6 transition-all duration-300 hover:-translate-y-1">
                        <h4 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors" dir="ltr">+₪800M</h4>
                        <span className="text-base font-bold text-primary mt-2">נכסים מנוהלים בחירום</span>
                        <span className="text-xs font-serif italic text-gold-600 mt-1 opacity-60 group-hover:opacity-100 transition-opacity">&quot;We handle big money&quot;</span>
                    </div>

                    <div className="hidden lg:block h-20 w-px bg-slate-100 mx-4" />

                    {/* Stat Type 4 */}
                    <div className="flex flex-col items-center text-center group cursor-default px-6 transition-all duration-300 hover:-translate-y-1">
                        <h4 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors">90%</h4>
                        <span className="text-base font-bold text-primary mt-2">הצלחה בסטנדרטים זמניים</span>
                        <span className="text-xs font-serif italic text-gold-600 mt-1 opacity-60 group-hover:opacity-100 transition-opacity">&quot;We stop the bleeding immediately&quot;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
