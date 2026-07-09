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
            <div className="relative mb-10">
                <img 
                    src={`src/assets/website_images/whiteboard.png`} 
                    alt="Background"
                    className="w-full h-[250px] object-cover object-[center_18%]"
                />
                <div className="absolute inset-0 bg-[#3B57F3]/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-5xl font-bold text-center my-8">RESEARCH PUBLICATIONS</div>
                </div>
            </div>

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