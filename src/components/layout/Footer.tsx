'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, Scale, ChevronLeft, ChevronRight, Printer } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { lang } = useLanguage();

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1e1c19] text-slate-400 py-20 border-t border-[#3d3934]">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center lg:text-start">

                    {/* Column 1: Brand */}
                    <div className="space-y-6 flex flex-col items-center lg:items-start">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-[#965c2a] text-white rounded-full flex items-center justify-center shadow-lg">
                                <Scale strokeWidth={1.5} className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#f9f4ee] tracking-tight font-display">
                                {lang === 'he' ? 'שגית בדרמן' : 'Sagit Bederman'}
                            </h2>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs text-slate-400">
                            {lang === 'he'
                                ? 'ייצוג משפטי בסטנדרט פלטינום הממוקד באסטרטגיה, עוצמה ותוצאות ללא פשרות.'
                                : 'Platinum standard legal representation focused on strategy, power, and uncompromising results.'}
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-[#f9f4ee] font-bold mb-8 font-display text-lg tracking-wide">
                            {lang === 'he' ? 'המשרד' : 'The Firm'}
                        </h3>
                        <ul className="space-y-4 text-sm w-full">
                            <li>
                                <Link href="/about" className="hover:text-[#965c2a] transition-colors duration-300 flex items-center justify-center lg:justify-start gap-2 group">
                                    {lang === 'he' && <ChevronLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                    <span>{lang === 'he' ? 'אודותינו' : 'About Us'}</span>
                                    {lang !== 'he' && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-[#965c2a] transition-colors duration-300 flex items-center justify-center lg:justify-start gap-2 group">
                                    {lang === 'he' && <ChevronLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                    <span>{lang === 'he' ? 'הצוות שלנו' : 'Our Team'}</span>
                                    {lang !== 'he' && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-[#965c2a] transition-colors duration-300 flex items-center justify-center lg:justify-start gap-2 group">
                                    {lang === 'he' && <ChevronLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                    <span>{lang === 'he' ? 'קריירה' : 'Careers'}</span>
                                    {lang !== 'he' && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="hover:text-[#965c2a] transition-colors duration-300 flex items-center justify-center lg:justify-start gap-2 group">
                                    {lang === 'he' && <ChevronLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                    <span>{lang === 'he' ? 'חדשות ועדכונים' : 'News & Updates'}</span>
                                    {lang !== 'he' && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Practice Areas */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-[#f9f4ee] font-bold mb-8 font-display text-lg tracking-wide">
                            {lang === 'he' ? 'תחומי התמחות' : 'Practice Areas'}
                        </h3>
                        <ul className="space-y-4 text-sm w-full">
                            <li>
                                <Link href="/practice/commercial" className="hover:text-[#965c2a] transition-colors duration-300 flex items-center justify-center lg:justify-start gap-2 group">
                                    {lang === 'he' && <ChevronLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                    <span>{lang === 'he' ? 'משפט מסחרי' : 'Commercial Law'}</span>
                                    {lang !== 'he' && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                </Link>
                            </li>
                            <li>
                                <Link href="/practice/litigation" className="hover:text-[#965c2a] transition-colors duration-300 flex items-center justify-center lg:justify-start gap-2 group">
                                    {lang === 'he' && <ChevronLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                    <span>{lang === 'he' ? 'ליטיגציה' : 'Litigation'}</span>
                                    {lang !== 'he' && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                </Link>
                            </li>
                            <li>
                                <Link href="/practice/real-estate" className="hover:text-[#965c2a] transition-colors duration-300 flex items-center justify-center lg:justify-start gap-2 group">
                                    {lang === 'he' && <ChevronLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                    <span>{lang === 'he' ? 'נדל"ן' : 'Real Estate'}</span>
                                    {lang !== 'he' && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                </Link>
                            </li>
                            <li>
                                <Link href="/practice/wealth" className="hover:text-[#965c2a] transition-colors duration-300 flex items-center justify-center lg:justify-start gap-2 group">
                                    {lang === 'he' && <ChevronLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                    <span>{lang === 'he' ? 'ניהול הון משפחתי' : 'Wealth Management'}</span>
                                    {lang !== 'he' && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-[#f9f4ee] font-bold mb-8 font-display text-lg tracking-wide">
                            {lang === 'he' ? 'צור קשר' : 'Contact Us'}
                        </h3>
                        <ul className="space-y-6 text-sm w-full">
                            {/* Address */}
                            <li className="flex items-start justify-center lg:justify-start gap-4 group">
                                <div className="p-2 bg-[#965c2a]/10 rounded-full group-hover:bg-[#965c2a] transition-colors duration-300">
                                    <MapPin className="text-[#965c2a] w-5 h-5 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-1 group-hover:text-[#965c2a] transition-colors duration-300">
                                        {lang === 'he' ? 'רחוב הגביש 4ב\', בית טיטניום, נתניה' : 'Titanium House, 4B HaGavish St., Netanya'}
                                    </span>
                                    <span className="text-xs text-slate-500 mt-1">
                                        {lang === 'he' ? 'ת.ד. 8911, נתניה 4250407' : 'P.O.B 8911, Netanya 4250407'}
                                    </span>
                                </div>
                            </li>

                            {/* Phone */}
                            <li className="flex items-center justify-center lg:justify-start gap-4 group">
                                <div className="p-2 bg-[#965c2a]/10 rounded-full group-hover:bg-[#965c2a] transition-colors duration-300">
                                    <Phone className="text-[#965c2a] w-5 h-5 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span dir="ltr" className="group-hover:text-[#965c2a] transition-colors duration-300 font-medium tracking-wide">09-8330-338</span>
                            </li>

                            {/* Fax */}
                            <li className="flex items-center justify-center lg:justify-start gap-4 group">
                                <div className="p-2 bg-[#965c2a]/10 rounded-full group-hover:bg-[#965c2a] transition-colors duration-300">
                                    <Printer className="text-[#965c2a] w-5 h-5 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span dir="ltr" className="group-hover:text-[#965c2a] transition-colors duration-300 font-medium tracking-wide">077-5558766</span>
                            </li>

                            {/* Email */}
                            <li className="flex items-center justify-center lg:justify-start gap-4 group">
                                <div className="p-2 bg-[#965c2a]/10 rounded-full group-hover:bg-[#965c2a] transition-colors duration-300">
                                    <Mail className="text-[#965c2a] w-5 h-5 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="group-hover:text-[#965c2a] transition-colors duration-300">contact@nbs-law.co.il</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#3d3934] flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-[#7d7873]">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                        <p>
                            © {currentYear} {lang === 'he' ? 'שגית בדרמן משרד עורכי דין. כל הזכויות שמורות.' : 'Sagit Bederman Law Firm. All rights reserved.'}
                        </p>
                        <div className="hidden lg:block w-px h-3 bg-[#3d3934]" />
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-[#965c2a] transition-colors duration-300">{lang === 'he' ? 'מדיניות פרטיות' : 'Privacy Policy'}</Link>
                            <Link href="/terms" className="hover:text-[#965c2a] transition-colors duration-300">{lang === 'he' ? 'תנאי שימוש' : 'Terms of Use'}</Link>
                            <Link href="/accessibility" className="hover:text-[#965c2a] transition-colors duration-300">{lang === 'he' ? 'הצהרת נגישות' : 'Accessibility'}</Link>
                        </div>
                    </div>

                    <p className="opacity-60 text-center lg:text-end max-w-sm lg:max-w-none">
                        {lang === 'he' ? 'המידע כאן אינו מהווה ייעוץ משפטי.' : 'The information herein does not constitute legal advice.'}
                    </p>
                </div>
            </div>
        </footer>
    );
}
