'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/features/Hero";
import TrustTicker from "@/components/features/TrustTicker";
import TeamDirectory from "@/components/features/TeamDirectory";
import ContactSection from "@/components/features/ContactSection";
import { practices, insights } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Gavel, Building2, Landmark } from "lucide-react";
import React from "react";
import { useLanguage } from '@/context/LanguageContext';

// Mock icons mapping for practices
const iconMap: Record<string, React.ReactNode> = {
  litigation: <Gavel className="w-8 h-8" />,
  commercial: <Building2 className="w-8 h-8" />,
  "real-estate": <Landmark className="w-8 h-8" />,
};

export default function Home() {
  const { lang } = useLanguage();
  const Arrow = lang === 'he' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />

      <main className="flex-grow">
        <Hero />
        <TrustTicker />

        {/* Practice Areas Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                {lang === 'he' ? 'תחומי התמחות' : 'Practice Areas'}
              </h2>
              <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
                {lang === 'he' ? 'מעטפת משפטית כוללת' : 'Comprehensive Legal Coverage'}
              </h3>
              <p className="text-slate-600 text-lg">
                {lang === 'he'
                  ? 'אנו מתמחים בנושאים מורכבים הדורשים טיפול רגיש, חשיבה אסטרטגית וביצוע מדויק במגוון דיסציפלינות.'
                  : 'We specialize in complex matters requiring sensitive handling, strategic thinking, and precise execution across various disciplines.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practices.map((practice) => (
                <Link
                  key={practice.id}
                  href={`/practice/${practice.id}`}
                  className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={practice.image}
                    alt={lang === 'he' ? practice.title.he : practice.title.en}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h4 className="text-3xl font-display font-bold text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {lang === 'he' ? practice.title.he : practice.title.en}
                    </h4>
                    <p className="text-slate-200 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {lang === 'he' ? practice.shortDescription.he : practice.shortDescription.en}
                    </p>
                    <span className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      {lang === 'he' ? 'למידע נוסף' : 'Learn More'} <Arrow className="w-4 h-4 mr-2" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <TeamDirectory />

        {/* Insights / News Feed */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                  {lang === 'he' ? 'חדשות ועדכונים' : 'News & Insights'}
                </h2>
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
                  {lang === 'he' ? 'מה קורה בשטח' : 'Latest Updates'}
                </h3>
              </div>
              <Link href="/news" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
                {lang === 'he' ? 'לכל הכתבות' : 'All Article'} <Arrow className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              {insights.map(insight => (
                <div key={insight.id} className="group flex flex-col md:flex-row gap-6 md:items-center p-6 border border-warm-cream rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                  <div className="min-w-[120px]">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${insight.category === 'Client Alert' ? 'bg-red-100 text-red-600' :
                      insight.category === 'Press' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'
                      }`}>
                      {insight.category}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold font-display text-slate-900 group-hover:text-primary transition-colors mb-2">
                      {lang === 'he' ? insight.title.he : insight.title.en}
                    </h4>
                    <span className="text-sm text-slate-500">{insight.date}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                    <Arrow className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
