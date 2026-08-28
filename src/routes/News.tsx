import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

import NewsCard from '@/components/NewsCard';
import type { NewsItem } from '@/type';
import newsData from '@/assets/news.json';


export default function News() {

    const news = newsData.news as NewsItem[];
    const tags = [...new Set(news.flatMap(n => n.type))].sort();
    
    const [selectedType, setSelectedType] = useState<string | null>(null);
    
    const filteredNews = [...news]
        .filter((n) => selectedType === null || n.type === selectedType)
        .sort((a, b) => (b.year - a.year) || (b.month - a.month));
    const years = [...new Set(filteredNews.map(n => n.year))].sort((a, b) => b - a);


    return (
        <div>
            <Navbar />
            <div className="relative">
                <img 
                    src={`/website_images/whiteboard.png`} 
                    alt="Background"
                    className="w-full h-[250px] object-cover object-[center_50%]"
                />
                <div className="absolute inset-0 bg-[#3B57F3]/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-5xl font-bold text-center my-8">NEWS</div>
                </div>
            </div>

            <div className="sticky top-30 py-4 bg-muted">
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
                    <strong className="text-lg">Filters:</strong>
                    <Badge 
                        variant={selectedType === null ? "default" : "secondary"}
                        onClick={() => setSelectedType(null)}
                        className="text-md px-5 h-auto cursor-pointer hover:scale-105 transition-transform"
                    >
                        All
                    </Badge>
                    {tags.map((tag) => (
                        <Badge 
                            variant={selectedType === tag ? "default" : "secondary"}
                            onClick={() => setSelectedType(selectedType === tag ? null : tag)}
                            className="text-md px-5 h-auto cursor-pointer hover:scale-105 transition-transform"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>

            </div>
            
            {/* News grouped by years */}
            {years.map((year) => {
                const yearNews = filteredNews.filter(
                    (p) => p.year === year
                );

                if (yearNews.length === 0) return null;

                return (
                    <section key={year} id={`year-${year}`} className="scroll-mt-80">
                        <h2 className="mt-3 mb-3 text-2xl font-bold px-20">{year}</h2>

                        {yearNews.map((news) =>
                            NewsCard({ news })
                        )}
                    </section>
                );
            })}

            <Footer />
        </div>
    )
}; 