import { Lawyer, PracticeArea, Insight } from './types';

export const practices: PracticeArea[] = [
    {
        id: 'litigation',
        title: { he: 'ליטיגציה', en: 'Litigation' },
        shortDescription: {
            he: 'ייצוג נחוש בסכסוכים אזרחיים ומסחריים מורכבים.',
            en: 'Resolute representation in complex civil and commercial disputes.'
        },
        fullDescription: { he: '', en: '' },
        image: 'https://images.unsplash.com/photo-1758518727707-b023e285b709?fm=jpg&q=80&w=1200',
        icon: 'gavel'
    },
    {
        id: 'commercial',
        title: { he: 'משפט מסחרי', en: 'Commercial Law' },
        shortDescription: {
            he: 'ליווי אסטרטגי למיזוגים, רכישות וממשל תאגידי.',
            en: 'Strategic guidance for M&A and corporate governance.'
        },
        fullDescription: { he: '', en: '' },
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
        icon: 'corporate_fare'
    },
    {
        id: 'real-estate',
        title: { he: 'נדל"ן ומקרקעין', en: 'Real Estate' },
        shortDescription: {
            he: 'ייעוץ מומחה בעסקאות נדל"ן יוקרתיות ותכנון.',
            en: 'Expert advice in luxury real estate transactions and planning.'
        },
        fullDescription: { he: '', en: '' },
        image: 'https://images.unsplash.com/photo-1762660343977-8e0aef349661?fm=jpg&q=80&w=1200',
        icon: 'apartment'
    }
];

export const lawyers: Lawyer[] = [
    {
        id: 'sagit-bederman',
        name: { he: 'שגית בדרמן', en: 'Sagit Bederman' },
        role: 'Founder',
        roleTitle: { he: 'שותפה מייסדת ומנהלת', en: 'Founding Partner' },
        practices: ['litigation', 'commercial', 'real-estate'],
        languages: ['Hebrew', 'English'],
        bio: {
            he: 'עם ניסיון של עשורים בליטיגציה מורכבת...',
            en: 'With decades of experience in complex litigation...'
        },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuG0O6lEdNprZrYsMVTGfDOxg4KAk4J0BNEEO21bXN60_nRTJEIlmor5FqJX1PWHqb2EYQBU9MLqBuF2kIvORQpi2WijnIqkuXyRF_6thDPIPdTBsMaaLZND694bS0SWW8MK5-ensEH4SKPHaUUoXcqbVX10FNjN5XG7hJ-xKem-qyJ_ABrNK6vFkjIjmVez3-bhcZnED-vS1aaYLSo8jd-p0B3dPdG7Oo7dbQy5RV-3bgMs8VQQEHNXrHownJJx_nWlqnGje1YQ',
        email: 'sagit@bederman-law.com',
        phone: '+972-3-555-1234',
        quote: {
            he: 'אנחנו לא מסתפקים בטוב. אנחנו מתכננים את היוצא מן הכלל.',
            en: 'We do not settle for good. We plan for the exceptional.'
        },
        storyTitle: {
            he: 'מורשת של ביטחון, עוצמה ודיוק.',
            en: 'A Legacy of Security, Power, and Precision.'
        },
        storyContent: [
            {
                he: 'שנית בדרמן הקימה את המשרד על בסיס עיקרון פשוט: אתגרים מורכבים מחייבים פתרונות מתוחכמים. אנחנו לא רק מפרשים את החוק; אנו רותמים אותו כדי לבנות חומת הגנה סביב האינטרסים של לקוחותינו.',
                en: 'Sagit Bederman founded the firm on a simple principle: complex challenges require sophisticated solutions. We do not merely interpret the law; we harness it to build a protective wall around our clients\' interests.'
            },
            {
                he: 'מליטיגציה עסקית ועד עסקאות נדל״ן מורכבות, הגישה שלנו היא כירורגית. אנו מנטרלים את רעשי הרקע ומתמקדים אך ורק בתוצאה, תוך מתן יחס אישי המעניק ללקוחותינו שקט נפשי וביטחון מלא לאורך כל הדרך.',
                en: 'From commercial litigation to complex real estate transactions, our approach is surgical. We neutralize background noise and focus solely on the result, providing personal attention that grants our clients peace of mind and complete confidence every step of the way.'
            }
        ]
    },
    // Mock Associates
    {
        id: 'david-cohen',
        name: { he: 'דוד כהן', en: 'David Cohen' },
        role: 'Associate',
        roleTitle: { he: 'עורך דין', en: 'Associate' },
        practices: ['litigation'],
        languages: ['Hebrew', 'English'],
        bio: { he: 'מתמחה בליטיגציה...', en: 'Specializes in litigation...' },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuRHRi_-7n1QP3AfeOM0YtGwajPRaa6xD7kIaCim9GKQJgDAeZNUEkWeGO4h68wftTQ_GjZ3GhWpmQOvXpgiCVuqsEN0Xmu4G1Askeroux25Nau7_Fkl9w8XFXvYKVzTFZptdqGsXuxv-quFnqNXS3fA_pOinAA6XAwoYOZCdK1X44bYtNXsXYoB2Yo5eNbeddFWrmF7vEp7nyxEWsWdMu7jDh8sZ_KtDr1fiRsp2-0dRfiOVT52k5kgZooHUHdrsl4kLTCxFgSQ', // Using the second image from html as generic lawyer
        email: 'david@bederman-law.com'
    }
];

export const insights: Insight[] = [
    {
        id: '1',
        title: { he: 'עדכון רגולטורי: שינויים בחוק החברות', en: 'Regulatory Update: Corporate Law Changes' },
        date: '2024-03-15',
        category: 'Client Alert'
    },
    {
        id: '2',
        title: { he: 'ניצחון בתיק ייצוגי נגד חברת ביטוח', en: 'Victory in Class Action against Insurance Co.' },
        date: '2024-02-20',
        category: 'Press'
    }
];
