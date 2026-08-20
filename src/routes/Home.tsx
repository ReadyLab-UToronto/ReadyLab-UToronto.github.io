import ReactMarkdown from "react-markdown";

import { useNavigate } from 'react-router';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import members from '@/assets/members.json'; 
import newsData from '@/assets/news.json';
import type { NewsItem, Member } from '@/type';


const lab_photos = [
    "2026.jpeg",
    "2024.png", 
    "2023.png",
    "2022.png",
    "2020.png",
]

const roleOrder = {
    postdoc: 0, 
    phd: 1, 
    masc: 2, 
    meng: 3, 
    visiting: 4,
    undergrad: 5, 
}

export default function Home() {
    const navigate = useNavigate(); 

    const teamMembers = members.members as Member[];
    
    const news = newsData.news as NewsItem[];
    const latestNews = [...news]
        .sort((a, b) => (b.year - a.year) || (b.month - a.month))
        .slice(0, 10); // Get the latest 10 news items

    return (
        <div>
            <Navbar />
            <div className="relative mb-10">
                <img 
                    src={`/website_images/whiteboard.png`} 
                    alt="Background"
                    className="w-full h-[250px] object-cover object-[center_60%]"
                />
                <div className="absolute inset-0 bg-[#3B57F3]/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-5xl font-bold text-center my-8">READY FOR THE FUTURE OF DESIGN</div>
                </div>
            </div>

            {/* Lab description */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-30 px-30">
                <div className="basis-3/5 flex flex-col gap-4">
                    <div className="text-3xl font-semibold">Understanding collaborative engineering design work</div>
                    <div className="text-lg">
                        Our research aims to discover how engineering design teams can collaborate more efficiently and effectively using modern design tools, in the context of new product development and systems engineering. We use an interdisciplinary approach that combines our engineering design knowledge with concepts from human-computer interaction, psychology, software engineering, and management science. We extend the implications of our findings not just to engineering practice but also to engineering education, where we recommend updates to curricula to better prepare our students for an impactful future!
                    </div>
                </div>
                <div className="basis-2/5 flex justify-center shrink-0">
                    <img src={`/website_images/rocket-image.png`} alt="Rocket Image" className="w-auto h-100" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-30 px-30 mt-20">
                <Avatar className="h-70 w-70">
                    <AvatarImage src={`/headshots/alison_olechowski.jpg`} alt="Alison Olechowski" />
                    <AvatarFallback>Alison Olechowski</AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-1 ml-8 w-full">
                    <div className="text-2xl font-bold">Professor Alison Olechowski</div>
                    <div className="text-lg text-semibold">
                        Alison Olechowski is an Associate Professor in the <a href="https://www.mie.utoronto.ca/" target="_blank" className="text-blue-500 hover:underline">Department of Mechanical & Industrial Engineering</a> and the <a href="https://istep.utoronto.ca/" target="_blank" className="text-blue-500 hover:underline">Institute for Studies in Transdisciplinary Engineering Education and Practice (ISTEP)</a> at the University of Toronto.
                    </div>
                    <Button variant="outline" className="w-22 h-10 mt-4 border-[#3B57F3] text-[#3B57F3]" onClick={() => navigate(`/team`)}>Read Bio</Button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-30 px-30 mt-20">
                <div className="basis-2/5 flex justify-center shrink-0">
                    <img src={`/website_images/sticky-notes.png`} alt="Sticky Notes" className="w-auto h-100" />
                </div>
                <div className="basis-3/5 flex flex-col gap-4">
                    <div className="text-3xl font-semibold">Improving engineering design process and methods</div>
                    <div className="text-lg">
                        We seek to answer questions such as: what are best practices for collaborating in modern Computer-Aided Design? Do effective engineering teams communicate differently than ineffective teams? How can teams reach reliable decisions when assessing new technologies? How should Model-Based Systems Engineering tools be integrated with existing methods and analysis? How can we improve productivity and attitude on distributed engineering teams while working-from-home? Why are some identity groups under-represented in the engineering profession?
                    </div>
                </div>
            </div>

            {/* News Section */}
            <div className="flex flex-col justify-center lg:px-50 px-20 py-16">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">
                        Latest News
                    </h2>
                    <Button variant="outline" className="w-25 h-10 mt-4 border-[#3B57F3] text-[#3B57F3]" onClick={() => navigate(`/news`)}>View More</Button>
                </div>

                <div className="h-[250px] overflow-y-auto rounded-2xl border border-border/60 shadow-sm px-6 divide-y">
                    {latestNews.map((item) => (
                        <div key={`${item.year}-${item.month}-${item.content}`} className="flex py-4 gap-4 transition-colors hover:bg-muted/40 rounded-lg">
                        <p className="font-bold">{item.month}/{item.year}</p>
                        <ReactMarkdown
                            components={{
                                a: ({node, ...props}) => (
                                <a
                                    {...props}
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />
                                )
                            }}
                            >
                            {item.content}
                        </ReactMarkdown>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="text-4xl font-bold text-center my-20">Meet the team!</div>
            <div className="px-6 md:px-40">
                <Carousel className="w-[70%] mx-auto relative">
                    <CarouselContent>
                        {lab_photos.map((image) => (
                            <CarouselItem key={image}>
                                <div className="relative">
                                    <img 
                                        src={`/lab_photos/${image}`} alt={image} 
                                        className="w-full h-[600px] object-contain select-none pointer-events-none" 
                                        draggable={false} onContextMenu={(e) => e.preventDefault()}
                                    />
                                    <div className="absolute inset-0 bg-transparent"/>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="h-12 w-12 border-[#3B57F3] text-[#3B57F3] hover:bg-[#3B57F3] hover:text-white -left-16" />
                    <CarouselNext className="h-12 w-12 border-[#3B57F3] text-[#3B57F3] hover:bg-[#3B57F3] hover:text-white -right-16" />
                </Carousel>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-30 mt-20">
                {teamMembers
                    .filter((member) => member.active)
                    .sort((a, b) => roleOrder[a.role] - roleOrder[b.role])
                    .map((member) => (
                        <div className=" flex flex-col gap-4 justify-center items-center" key={member.name}>
                            <Avatar className="h-50 w-50">
                                <AvatarImage src={`/headshots/${member.imageUrl}`} alt={member.name} />
                                <AvatarFallback>{member.name}</AvatarFallback>
                            </Avatar>
                            <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                        </div>
                    ))}
            </div>
            <div className="flex justify-center mt-10">
                <Button variant="outline" className="w-30 h-10 mt-4 border-[#3B57F3] text-[#3B57F3]" onClick={() => navigate(`/team`)}>Read Team Bios</Button>
            </div>
            
            {/* Logos */}
            <div className="text-4xl font-bold text-center my-20">Affiliated with</div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-1 px-5 mt-10">
                <img src={`/logos/mie_logo.jpg`} alt="MIE Logo" className="w-auto h-16" />
                <img src={`/logos/fase_logo.jpg`} alt="FASE Logo" className="w-auto h-16" />
                <img src={`/logos/istep_logo.jpg`} alt="ISTEP Logo" className="w-auto h-16" />
            </div>
            
            <div className="text-4xl font-bold text-center my-20">Partners</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 mt-5 justify-items-center">
                <img src={`/logos/safran.png`} alt="Safran Logo" className="w-auto h-16" />
                <img src={`/logos/SSHRC.png`} alt="SSHRC Logo" className="w-auto h-16" />
                <img src={`/logos/CFI.png`} alt="CFI Logo" className="w-auto h-16" />
                <img src={`/logos/MDA.png`} alt="MDA Logo" className="w-auto h-16" />
                <img src={`/logos/avidbots.png`} alt="Avidbots Logo" className="w-auto h-16" />
                <img src={`/logos/Mitacs.png`} alt="Mitacs Logo" className="w-auto h-16" />
                <img src={`/logos/ptc.png`} alt="PTC Logo" className="w-auto h-16" />
                <img src={`/logos/NSERC.png`} alt="NSERC Logo" className="w-auto h-16" />
                <img src={`/logos/via.png`} alt="VIA Logo" className="w-auto h-16" />
                <img src={`/logos/RPComposites.png`} alt="RPComposites Logo" className="w-auto h-16" />
                <img src={`/logos/nfr.png`} alt="NFR Logo" className="w-auto h-16" />
                <img src={`/logos/alfred_sloan.png`} alt="Alfred Sloan Logo" className="w-auto h-16" />
            </div>
            
            <div className="text-4xl font-bold text-center my-20">Collaborators</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 mt-5 justify-items-center">
                <img src={`/logos/waterloo.png`} alt="University of Waterloo Logo" className="w-auto h-16" />
                <img src={`/logos/TUM.png`} alt="Technical University of Munich Logo" className="w-auto h-16" />
                <img src={`/logos/Tufts.png`} alt="Tufts University Logo" className="w-auto h-16" />
                <img src={`/logos/MIT.png`} alt="Massachusetts Institute of Technology Logo" className="w-auto h-16" />
                <img src={`/logos/northeastern.png`} alt="Northeastern University Logo" className="w-auto h-16" />
                <img src={`/logos/ece.png`} alt="UofT ECE Logo" className="w-auto h-16" />
            </div>

            <Footer />
        </div>
    )
}; 