'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquareText, X, CalendarClock, Zap, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { practices } from '@/lib/data';

const FIRM_DATA = {
    name: "Sagit Bederman Law Office",
    owner: {
        name: "Adv. Sagit Bederman",
        role: "Founder & Owner",
        highlights: [
            "Specialist in Complex Litigation & Crisis Management",
            "Co-Chair, Arbitration Committee (Central District)",
            "Mentor, Israel Bar Association 'Compass' Program"
        ]
    },
    expertise: [
        "Commercial Litigation",
        "Civil Law",
        "Family Wealth & Inheritance",
        "Torts & Damages",
        "Labor Law",
        "Notary Services"
    ],
    values: ["24/7 Urgent Availability", "Direct Access to Expertise", "Pro Bono for Seniors"],
    location: "Titanium House, Netanya",
    phone: "052-3100090"
};

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

export default function ConciergeChat() {
    const [isOpen, setIsOpen] = useState(false);
    const { lang } = useLanguage();
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const initialWelcomeMessage = lang === 'he'
        ? `שלום, אני הקונסיירז' הדיגיטלי של משרד עו"ד בדרמן.\n\nאני כאן לסייע במידע על תחומי ההתמחות, אודות עו"ד בדרמן, פרטי התקשרות או תיאום פגישה. כיצד אוכל לעזור?`
        : `Hello, I am the Digital Concierge for Bederman Law.\n\nI can assist with information about our expertise, Adv. Bederman, contact details, or scheduling. How may I assist you?`;

    // Initialize chat with welcome message once
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{
                id: 'welcome',
                text: initialWelcomeMessage,
                sender: 'bot',
                timestamp: new Date()
            }]);
        }
    }, [lang]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const generateResponse = (text: string): string => {
        const lowerText = text.toLowerCase();
        const isHebrew = lang === 'he';

        // Keywords Logic
        if (lowerText.includes('phone') || lowerText.includes('call') || lowerText.includes('number') || lowerText.includes('טלפון') || lowerText.includes('מספר') || lowerText.includes('להתקשר')) {
            return isHebrew
                ? `ניתן ליצור איתנו קשר ישיר במספר: ${FIRM_DATA.phone}.\nאנחנו זמינים 24/7 למקרים דחופים.`
                : `You can reach us directly at: ${FIRM_DATA.phone}.\nWe are available 24/7 for urgent matters.`;
        }

        if (lowerText.includes('address') || lowerText.includes('location') || lowerText.includes('where') || lowerText.includes('כתובת') || lowerText.includes('מיקום') || lowerText.includes('היכן')) {
            return isHebrew
                ? `המשרד שלנו ממוקם בבית טיטניום, נתניה (Titanium House).\nנשמח לארח אותך לפגישה.`
                : `Our office is located at Titanium House, Netanya.\nWe would look forward to hosting you.`;
        }

        if (lowerText.includes('cost') || lowerText.includes('price') || lowerText.includes('fee') || lowerText.includes('מחיר') || lowerText.includes('עלות') || lowerText.includes('שכר טרחה')) {
            return isHebrew
                ? `שכר הטרחה שלנו משקף את המומחיות והסטנדרט הבלתי מתפשר שאנו מעניקים.\nנשמח לדון בפרטים בפגישת ייעוץ אישית.`
                : `Our fees reflect the uncompromising expertise and standard we provide.\nWe would be happy to discuss details in a personal consultation.`;
        }

        if (lowerText.includes('meeting') || lowerText.includes('schedule') || lowerText.includes('appointment') || lowerText.includes('פגישה') || lowerText.includes('לתאם') || lowerText.includes('תור')) {
            return isHebrew
                ? `אשמח לסייע בתיאום פגישה. אנא לחץ על כפתור "תיאום פגישה" למטה למעבר מהיר לוואטסאפ של המשרד.`
                : `I'd be happy to help schedule a meeting. Please click the "Schedule" button below for quick access to our WhatsApp.`;
        }

        // Expertise Logic - Dynamic from Data
        const matchedPractice = practices.find(p =>
            lowerText.includes(p.title.en.toLowerCase()) ||
            lowerText.includes(p.title.he) ||
            (p.id === 'litigation' && (lowerText.includes('court') || lowerText.includes('lawsuit') || lowerText.includes('משפט') || lowerText.includes('תביעה'))) ||
            (p.id === 'real-estate' && (lowerText.includes('buying') || lowerText.includes('selling') || lowerText.includes('house') || lowerText.includes('home') || lowerText.includes('דירה') || lowerText.includes('מכירה') || lowerText.includes('קנייה'))) ||
            (p.id === 'commercial' && (lowerText.includes('business') || lowerText.includes('company') || lowerText.includes('corporate') || lowerText.includes('חברה') || lowerText.includes('עסק')))
        );

        if (matchedPractice) {
            return isHebrew
                ? `אכן, אנו מתמחים ב${matchedPractice.title.he}.\n${matchedPractice.shortDescription.he}\n\nהאם תרצה לתאם פגישה בנושא זה?`
                : `Yes, we specialize in ${matchedPractice.title.en}.\n${matchedPractice.shortDescription.en}\n\nWould you like to schedule a meeting regarding this?`;
        }

        // General Expertise Query
        if (lowerText.includes('specialty') || lowerText.includes('practice') || lowerText.includes('expert') || lowerText.includes('התמחות') || lowerText.includes('תחום') || lowerText.includes('עיסוק')) {
            const expertiseList = isHebrew
                ? practices.map(p => p.title.he).join(', ')
                : practices.map(p => p.title.en).join(', ');

            return isHebrew
                ? `משרדנו מתמחה במגוון תחומים: ${expertiseList}.\nאנו מספקים מעטפת משפטית מלאה ומותאמת אישית.`
                : `Our firm specializes in: ${expertiseList}.\nWe provide a comprehensive, personalized legal umbrella.`;
        }

        // Owner/Bio Logic
        if (lowerText.includes('who') || lowerText.includes('sagit') || lowerText.includes('bederman') || lowerText.includes('lawyer') || lowerText.includes('מי') || lowerText.includes('שגית') || lowerText.includes('בדרמן') || lowerText.includes('עורך דין') || lowerText.includes('עורכת דין')) {
            return isHebrew
                ? `${FIRM_DATA.owner.name} היא ${FIRM_DATA.owner.role}.\nהיא מתמחה ב${FIRM_DATA.owner.highlights[0]} ומשמשת כ${FIRM_DATA.owner.highlights[1]}.`
                : `${FIRM_DATA.owner.name} is the ${FIRM_DATA.owner.role}.\nShe is a ${FIRM_DATA.owner.highlights[0]} and serves as ${FIRM_DATA.owner.highlights[1]}.`;
        }

        // Default Fallback
        return isHebrew
            ? `תודה על השאלה. כדי שאוכל לעזור בצורה הטובה ביותר, ניתן לשאול אותי על תחומי ההתמחות, פרטי התקשרות, כתובת המשרד, או לקבוע פגישת ייעוץ.`
            : `Thank you for the question. To best assist you, you can ask me about our areas of expertise, contact details, office location, or schedule a consultation.`;
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        // Simulate typing delay
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: generateResponse(userMsg.text),
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={cn(
                    "fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50",
                    "w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center",
                    "hover:scale-110 transition-transform duration-300",
                    isOpen && "invisible opacity-0"
                )}
            >
                <div className="relative">
                    <MessageSquareText className="w-8 h-8 text-[#965c2a]" strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                </div>
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 w-[90vw] md:w-[380px] bg-[#fdfaf6] rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[600px]"
                        dir={lang === 'he' ? 'rtl' : 'ltr'}
                    >
                        {/* Header */}
                        <div className="bg-[#965c2a] p-4 flex items-center justify-between text-white shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm font-display tracking-wide">
                                        {lang === 'he' ? 'קונסיירז׳ משפטי' : 'Legal Concierge'}
                                    </h3>
                                    <p className="text-[10px] opacity-80 uppercase tracking-widest">
                                        {lang === 'he' ? 'זמין כעת לשיחה' : 'Online Now'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body - Messages Area */}
                        <div className="p-4 flex-1 overflow-y-auto flex flex-col gap-4 min-h-[300px]">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "max-w-[85%] rounded-xl p-3 text-sm leading-relaxed shadow-sm",
                                        msg.sender === 'bot'
                                            ? "bg-white border border-slate-100 text-slate-700 self-start"
                                            : "bg-[#965c2a] text-white self-end"
                                    )}
                                >
                                    <p className="whitespace-pre-line">{msg.text}</p>
                                    <span className={cn(
                                        "text-[10px] mt-1 block opacity-50",
                                        msg.sender === 'bot' ? "text-slate-400" : "text-white/70"
                                    )}>
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions (Sticky above input) */}
                        <div className="px-4 pb-2 pt-2 bg-[#fdfaf6] shrink-0">
                            <div className="flex gap-2 w-full">
                                <button
                                    onClick={() => { }}
                                    className="flex-1 bg-white hover:bg-slate-50 border border-slate-100 p-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-all group"
                                >
                                    <CalendarClock className="w-4 h-4 text-[#965c2a]" />
                                    <span className="text-[10px] font-bold text-slate-700">{lang === 'he' ? 'תיאום פגישה' : 'Setup a Meeting'}</span>
                                </button>
                                <button
                                    onClick={() => window.open('https://wa.me/972523100090?text=URGENT:%20I%20need%20legal%20assistance', '_blank')}
                                    className="flex-1 bg-white hover:bg-slate-50 border border-slate-100 p-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-all group"
                                >
                                    <Zap className="w-4 h-4 text-[#965c2a] group-hover:stroke-red-500 transition-colors" />
                                    <span className="text-[10px] font-bold text-slate-700">{lang === 'he' ? 'חירום בוואטסאפ' : 'WhatsApp Urgent'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-slate-100 shrink-0">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder={lang === 'he' ? 'כתוב הודעה כאן...' : 'Type a message...'}
                                    className="w-full bg-slate-50 border-none rounded-full py-3 px-4 pr-12 text-sm focus:ring-1 focus:ring-[#965c2a]/20 outline-none"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className={`absolute ${lang === 'he' ? 'left-2' : 'right-2'} p-2 bg-[#965c2a] text-white rounded-full hover:bg-[#7a4a22] transition-colors shadow-md`}
                                >
                                    <Send className="w-4 h-4 ml-0.5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
