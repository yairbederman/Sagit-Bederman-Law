'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Send, ChevronDown } from 'lucide-react';

export default function ContactSection() {
    const { lang } = useLanguage();

    return (
        <section className="py-24 bg-[#fdfaf6] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
                    >
                        {lang === 'he' ? 'פנו אלינו לייעוץ דיסקרטי' : 'Contact Us for Discreet Consultation'}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg font-light max-w-2xl mx-auto"
                    >
                        {lang === 'he'
                            ? 'הדיסקרטיות שלכם היא בראש סדר העדיפויות שלנו. אנא השאירו פרטים ונחזור אליכם בהקדם.'
                            : 'Your privacy is our top priority. Please leave your details and we will get back to you shortly.'}
                    </motion.p>
                </div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100"
                >
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700">
                                    {lang === 'he' ? 'שם מלא' : 'Full Name'}
                                </label>
                                <input
                                    type="text"
                                    placeholder={lang === 'he' ? 'ישראל ישראלי' : 'John Doe'}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#965c2a]/20 focus:border-[#965c2a] transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700">
                                    {lang === 'he' ? 'כתובת אימייל' : 'Email Address'}
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#965c2a]/20 focus:border-[#965c2a] transition-all"
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700">
                                    {lang === 'he' ? 'מספר טלפון' : 'Phone Number'}
                                </label>
                                <input
                                    type="tel"
                                    placeholder="050-0000000"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#965c2a]/20 focus:border-[#965c2a] transition-all"
                                />
                            </div>

                            {/* Subject */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700">
                                    {lang === 'he' ? 'נושא הפנייה' : 'Subject'}
                                </label>
                                <div className="relative">
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#965c2a]/20 focus:border-[#965c2a] transition-all appearance-none cursor-pointer">
                                        <option value="">{lang === 'he' ? 'ליטיגציה' : 'Litigation'}</option>
                                        <option value="">{lang === 'he' ? 'מסחרי' : 'Commercial'}</option>
                                        <option value="">{lang === 'he' ? 'נדל"ן' : 'Real Estate'}</option>
                                        <option value="">{lang === 'he' ? 'אחר' : 'Other'}</option>
                                    </select>
                                    <ChevronDown className={`absolute ${lang === 'he' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none`} />
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-slate-700">
                                {lang === 'he' ? 'תיאור קצר של המקרה' : 'Short Description'}
                            </label>
                            <textarea
                                rows={4}
                                placeholder={lang === 'he' ? 'נשמח לשמוע במה נוכל לסייע...' : 'We would love to hear how we can help...'}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#965c2a]/20 focus:border-[#965c2a] transition-all resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col items-center gap-4 pt-4">
                            <button className="bg-[#8b5e34] hover:bg-[#6d4a29] text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto min-w-[300px]">
                                {lang === 'he' ? 'שליחת בקשה ליצירת קשר' : 'Send Contact Request'}
                            </button>
                            <p className="text-xs text-slate-400 text-center max-w-md">
                                {lang === 'he'
                                    ? 'במשלוח טופס זה הנך מסכים למדיניות הפרטיות שלנו. המידע שלך יישמר בדיסקרטיות מלאה.'
                                    : 'By sending this form you agree to our privacy policy. Your information will be kept strictly confidential.'}
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
