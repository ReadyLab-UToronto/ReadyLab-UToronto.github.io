import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PublicationCard from '@/components/PublicationCard';
import publicationData from '@/assets/data/publications.json';
import type { Publication } from '@/type';


export default function Publications() {
    const publications = publicationData.publications as Publication[]; 
    const tags = [...new Set(publications.flatMap(pub => pub.tags))].sort();
    
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const filteredPublications = publications.filter((p) => {
        const query = searchQuery.toLowerCase();

        const matchesSearch =
            p.title.toLowerCase().includes(query) ||
            p.abstract?.toLowerCase().includes(query) ||
            p.authors.toLowerCase().includes(query) ||
            p.venue.toLowerCase().includes(query);

        const matchesTag =
            selectedTag === null ||
            p.tags.includes(selectedTag);

        return matchesSearch && matchesTag;
    });
    const years = [...new Set(filteredPublications.map(p => p.year))].sort((a, b) => b - a);


    return (
        <div>
            <Navbar />
            <div className="relative">
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

            <div className="sticky top-30 py-2 bg-muted">
                {/* Year navigation */}
                <div className="overflow-x-auto">
                    <nav className="flex w-max min-w-full justify-center gap-2 px-4">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() =>
                                    document
                                        .getElementById(`year-${year}`)
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="
                                    shrink-0 px-4 py-2 rounded-md
                                    text-sm font-medium
                                    text-muted-foreground
                                    hover:bg-secondary hover:text-foreground
                                    transition-colors
                                "
                            >
                                {year}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Filters */}
                <div className="flex w-full flex-wrap justify-center items-center gap-4 mt-4 mb-2">
                    <strong className="text-md">Filters:</strong>
                    <Badge 
                        variant={selectedTag === null ? "default" : "secondary"}
                        onClick={() => setSelectedTag(null)}
                        className="text-sm px-5 h-auto cursor-pointer hover:scale-105 transition-transform"
                    >
                        All
                    </Badge>
                    {tags.map((tag) => (
                        <Badge 
                            variant={selectedTag === tag ? "default" : "secondary"}
                            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                            className="text-md px-5 h-auto cursor-pointer hover:scale-105 transition-transform"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Search bar */}
                <div className="flex justify-center mb-2">
                    <Input
                        placeholder="Search publications..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-1/2 text-sm py-6"
                    />
                </div>
            </div>
            
            {/* Publications grouped by years */}
            {years.map((year) => {
                const yearPublications = filteredPublications.filter(
                    (p) => p.year === year
                );

                if (yearPublications.length === 0) return null;

                return (
                    <section key={year} id={`year-${year}`} className="scroll-mt-80">
                        <h2 className="mt-6 mb-6 text-3xl font-bold px-20">{year}</h2>

                        {yearPublications.map((publication) =>
                            PublicationCard({ publication })
                        )}
                    </section>
                );
            })}

            <Footer />
        </div>
    )
}; 