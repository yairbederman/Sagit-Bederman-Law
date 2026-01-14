import { practices } from '@/lib/data';
import { notFound } from 'next/navigation';
import PracticePageTemplate from '@/components/templates/PracticePageTemplate';

interface Props {
    params: { id: string };
}

// Generate static params for all practices in lib/data
export async function generateStaticParams() {
    return practices.map((practice) => ({
        id: practice.id,
    }));
}

export default function PracticePage({ params }: Props) {
    const { id } = params;
    const practice = practices.find(p => p.id === id);

    if (!practice) {
        notFound();
    }

    return <PracticePageTemplate practice={practice} />;
}
