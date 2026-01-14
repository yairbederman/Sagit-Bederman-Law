export type Language = 'he' | 'en';

export type LocalizedString = {
    he: string;
    en: string;
};

export type LawyerRole = 'Partner' | 'Associate' | 'Counsel' | 'Founder';

export interface Lawyer {
    id: string;
    name: LocalizedString;
    role: LawyerRole;
    roleTitle: LocalizedString; // e.g., "Founding Partner"
    practices: string[]; // Practice IDs
    languages: string[]; // e.g., "Hebrew", "English"
    bio: LocalizedString;
    image: string;
    email: string;
    phone?: string;
    quote?: {
        he: string;
        en: string;
    };
    storyTitle?: {
        he: string;
        en: string;
    };
    storyContent?: {
        he: string;
        en: string;
    }[];
    vCard?: string;
}

export interface PracticeArea {
    id: string;
    title: LocalizedString;
    shortDescription: LocalizedString; // "The Hook"
    fullDescription: LocalizedString;
    image: string; // URL to practice area image
    icon?: string; // Material symbol name
}

export interface Insight {
    id: string;
    title: LocalizedString;
    date: string;
    category: 'Client Alert' | 'Deal' | 'Press' | 'Article';
    authorId?: string;
    link?: string;
}

export interface SiteConfig {
    name: LocalizedString;
    description: LocalizedString;
    navItems: {
        label: LocalizedString;
        href: string;
    }[];
}
