import type { Publication } from "@/type";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";


export default function PublicationCard({ publication }: { publication: Publication }) {
    return (
        <div key={publication.title} className="border rounded-lg border-gray-300 p-4 mb-4 md:mx-20 mx-10 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">{publication.title}</h3>
            <p className="text-gray-700 mb-2">{publication.authors}</p>
            <p className="text-gray-500 mb-2 italic">{publication.venue}</p>
            
            {/* Show tags */}
            {publication.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 mb-4">
                    {publication.tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            )}

            {/* Award if applicable */}
            {publication.award && (
                <p className="inline-block mb-4 rounded-md bg-[#fff3cd] px-2 py-[3px] text-[0.8em] text-[#856404]">
                    🏆 {publication.award}
                </p>
            )}

            {/* Links for publication */}
            <div className="flex flex-row gap-4 mb-2">
                {publication.links.doi && (
                    <div className="flex flex-row gap-2 mb-2">
                        <img src={`/icons/doi.png`} alt="DOI" className="h-5 w-5" />
                        <a href={publication.links.doi} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
                            DOI
                        </a>
                    </div>
                )}
                {publication.links.pdf && (
                    <div className="flex flex-row gap-2 mb-2">
                        <img src={`/icons/pdf.png`} alt="PDF" className="h-5 w-5" />
                        <a href={`/pdfs/${publication.links.pdf}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
                            PDF
                        </a>
                    </div>
                )}
                {publication.links.slides && (
                    <div className="flex flex-row gap-2 mb-2">
                        <img src={`/icons/slides.png`} alt="Slides" className="h-5 w-5" />
                        <a href={`/slides/${publication.links.slides}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
                            Slides
                        </a>
                    </div>
                )}
                {publication.links.code && (
                    <div className="flex flex-row gap-2 mb-2">
                        <img src={`/icons/github.png`} alt="Code" className="h-5 w-5" />
                        <a href={publication.links.code} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            Code
                        </a>
                    </div>
                )}
            </div>

            {/* Collapsible abstract */}
            {publication.abstract && 
                <Collapsible className="mt-2">
                    <CollapsibleTrigger className="text-sm font-medium text-[#3B57F3] hover:underline">
                        Show abstract
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3 text-sm text-gray-600">
                        {publication.abstract}
                    </CollapsibleContent>
                </Collapsible>
            }
        </div>
    )
}