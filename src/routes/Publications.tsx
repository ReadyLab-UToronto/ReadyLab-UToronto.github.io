import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import PublicationCard from '@/components/PublicationCard';
import publicationData from '@/assets/data/publications.json';


type publicationProp = {
    title: string;
    authors: string;
    venue: string;
    year: number;
    tags: string[];
    image?: string;
    links: {
        doi: string;
        pdf?: string;
        slides?: string;
        code?: string;
    }; 
    award?: string;
    abstract: string;
}

export default function Publications() {
    const publications = publicationData.publications as publicationProp[];
    const sortedPublications = publications.sort((a, b) => b.year - a.year);

    const tags = [...new Set(publications.flatMap(pub => pub.tags))].sort();
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    return (
        <div>
            <Navbar />
            <div className="text-4xl font-bold text-center my-8">RESEARCH PUBLICATIONS</div>

            {/* Filters */}
            <div className="flex w-full flex-wrap justify-center gap-4">
                <strong className="text-xl">Filters:</strong>
                <Badge 
                    variant={selectedTag === null ? "default" : "secondary"}
                    onClick={() => setSelectedTag(null)}
                    className="text-xl"
                >
                    All
                </Badge>
                {tags.map((tag) => (
                    <Badge 
                        variant={selectedTag === tag ? "default" : "secondary"}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        className="text-xl"
                    >
                        {tag}
                    </Badge>
                ))}
            </div>
            <Footer />
        </div>
    )
}; 