import type { Metadata } from "next";
import { Inter, Heebo, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/context/LanguageContext';
import ConciergeChat from "@/components/features/ConciergeChat";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const heebo = Heebo({ subsets: ["hebrew", "latin"], variable: '--font-heebo' });

export const metadata: Metadata = {
  title: "שגית בדרמן - משרד עורכי דין | מצוינות משפטית",
  description: "משרד עורכי דין מוביל לליטיגציה, משפט מסחרי ונדל״ן. מצוינות ללא פשרות.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${heebo.variable} ${playfair.variable} font-sans antialiased bg-slate-50 relative`}>
        <LanguageProvider>
          {children}
          <ConciergeChat />
        </LanguageProvider>
      </body>
    </html>
  );
}
