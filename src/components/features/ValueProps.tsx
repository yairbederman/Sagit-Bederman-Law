'use client';

import { Scale, Briefcase, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function ValueProps() {
    const { lang } = useLanguage();

    const services = [
        {
            id: 1,
            title: lang === 'he' ? "דיני חברות" : "Corporate Law",
            description: lang === 'he'
                ? "ניווט מורכבויות של מיזוגים, רכישות וממשל תאגידי בדיוק רב."
                : "Navigating complex mergers, acquisitions, and corporate governance with precision.",
            icon: <Briefcase className="w-8 h-8 text-amber-500" />
        },
        {
            id: 2,
            title: lang === 'he' ? "ליטיגציה" : "Litigation",
            description: lang === 'he'
                ? "ייצוג בלתי מתפשר בסכסוכים בעלי פרופיל גבוה וקונפליקטים מסחריים."
                : "Uncompromising representation in high-stakes disputes and commercial conflicts.",
            icon: <Scale className="w-8 h-8 text-amber-500" />
        },
        {
            id: 3,
            title: lang === 'he' ? "ייעוץ אסטרטגי" : "Advisory",
            description: lang === 'he'
                ? "ייעוץ אסטרטגי למנהלים ודירקטוריונים בצמתים קריטיים."
                : "Strategic counsel for executives and boards facing critical turning points.",
            icon: <Users className="w-8 h-8 text-amber-500" />
        }
    ];

    return (
        <section className="bg-[#0f0f0f] py-32 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative p-8 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-amber-500/30 transition-colors duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit border border-white/10 group-hover:border-amber-500/20 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="font-serif text-2xl text-white mb-4">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-amber-500 text-sm font-bold uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    {lang === 'he' ? 'למידע נוסף' : 'Learn More'} <ArrowRight className={`w-4 h-4 ${lang === 'he' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
