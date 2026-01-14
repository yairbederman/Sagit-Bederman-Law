import type { Metadata } from "next";
import { Noto_Serif_Hebrew, Assistant } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const notoSerifHebrew = Noto_Serif_Hebrew({
  subsets: ["hebrew", "latin"],
  variable: "--font-noto-serif-hebrew",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "שגית בדרמן - משרד עורכי דין | מצוינות משפטית",
  description: "משרד עורכי דין מוביל לליטיגציה, משפט מסחרי ונדל״ן. מצוינות ללא פשרות.",
};

import ConciergeChat from "@/components/features/ConciergeChat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body
        className={`${assistant.variable} ${notoSerifHebrew.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          {children}
          <ConciergeChat />
        </LanguageProvider>
      </body>
    </html>
  );
}
