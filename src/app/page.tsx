'use client';

import ScrollytellingHero from "@/components/features/ScrollytellingHero";
import ValueProps from "@/components/features/ValueProps";
import Testimonials from "@/components/features/Testimonials";
import CTASection from "@/components/features/CTASection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-amber-500/30 font-sans">
      <Header />
      <ScrollytellingHero />
      <ValueProps />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
