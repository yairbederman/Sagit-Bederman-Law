'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Testimonials() {
    const { lang } = useLanguage();

    const testimonials = [
        {
            id: 1,
            quote: lang === 'he'
                ? "שגית בדרמן הפכה תרחיש ליטיגציה בלתי אפשרי לניצחון מוחלט. העומק האסטרטגי שלהם הוא ללא תחרות."
                : "Sagit Bederman turned a seemingly impossible litigation scenario into a definitive victory. Their strategic depth is unmatched.",
            author: lang === 'he' ? "רונית ל." : "Ronit L.",
            role: lang === 'he' ? "מנכ״לית, טק-פלואו" : "CEO, TechFlow",
            col: 1
        },
        {
            id: 2,
            quote: lang === 'he'
                ? "רמת הדיוק והמסירות שקיבלנו במהלך המיזוג הייתה יוצאת דופן. שותפים אמיתיים בכל מובן."
                : "The level of precision and dedication we received during our merger was exceptional. A true partner in every sense.",
            author: lang === 'he' ? "דוד כהן" : "David Coh",
            role: lang === 'he' ? "דירקטור, אלפא אחזקות" : "Director, Alpha Holdings",
            col: 2
        },
        {
            id: 3,
            quote: lang === 'he'
                ? "כאשר נדרשת בהירות בכאוס, זה המשרד שמתקשרים אליו. הם לא רק עורכי דין; הם אדריכלי פתרונות."
                : "When clarity is needed in chaos, this is the firm you call. They don't just practice law; they architect solutions.",
            author: lang === 'he' ? "שרה מ." : "Sarah M.",
            role: lang === 'he' ? "שותפה בקרן הון סיכון" : "Venture Partner",
            col: 3
        },
        {
            id: 4,
            quote: lang === 'he'
                ? "מקצועיות במיטבה. הם צפו כל מהלך ושמרו אותנו שני צעדים לפני כולם."
                : "Professionalism at its finest. They anticipated every move and kept us two steps ahead.",
            author: lang === 'he' ? "יוסי א." : "Yossi A.",
            role: lang === 'he' ? "מייסד, רד-סטון" : "Founder, RedStone",
            col: 1
        },
        {
            id: 5,
            quote: lang === 'he'
                ? "נווה מדבר של רוגע ומקצועיות. מומלץ בחום למשא ומתן מסחרי מורכב."
                : "An oasis of calm and competence. Highly recommended for complex commercial negotiations.",
            author: lang === 'he' ? "מיכאל ב." : "Michael B.",
            role: lang === 'he' ? "סמנכ״ל כספים, גרין-אנרג׳י" : "CFO, GreenEnergy",
            col: 2
        },
        {
            id: 6,
            quote: lang === 'he'
                ? "צוות הייעוץ שלהם סיפק את התובנות הקריטיות שהיינו זקוקים להן כדי לנווט בנוף הרגולטורי."
                : "Their advisory team provided the crucial insights we needed to navigate the regulatory landscape.",
            author: lang === 'he' ? "תמר ג." : "Tamar G.",
            role: lang === 'he' ? "סמנכ״לית תפעול" : "VP Operations",
            col: 3
        }
    ];

    return (
        <section className="bg-[#0a0a0a] py-32 px-6 lg:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                        {lang === 'he' ? 'מובילי תעשייה בוחרים בנו' : 'Trusted by Industry Leaders'}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {lang === 'he'
                            ? 'המוניטין שלנו נבנה על עשרות שנים של מחויבות בלתי מתפשרת להצלחת לקוחותינו.'
                            : 'Our reputation is built on decades of unwavering commitment to our clients\' success.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                        {testimonials.filter(t => t.col === 1).map(t => (
                            <TestimonialCard key={t.id} testimonial={t} />
                        ))}
                    </div>
                    {/* Column 2 */}
                    <div className="flex flex-col gap-6">
                        {testimonials.filter(t => t.col === 2).map(t => (
                            <TestimonialCard key={t.id} testimonial={t} />
                        ))}
                    </div>
                    {/* Column 3 */}
                    <div className="flex flex-col gap-6">
                        {testimonials.filter(t => t.col === 3).map(t => (
                            <TestimonialCard key={t.id} testimonial={t} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-amber-500/20 transition-all shadow-lg"
        >
            <Quote className="w-8 h-8 text-amber-500/40 mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light italic">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-serif font-bold">
                    {testimonial.author[0]}
                </div>
                <div>
                    <div className="text-white font-medium">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
            </div>
        </motion.div>
    )
}
