import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import type { Member } from '@/type';
import ActiveMemberCard from '@/components/ActiveMemberCard';
import AlumniMemberCard from '@/components/AlumniMemberCard';

import members from '@/assets/members.json'; 


const roleOrder = {
    postdoc: 0, 
    phd: 1, 
    masc: 2, 
    meng: 3, 
    visiting: 4,
    undergrad: 5, 
}


export default function Team() {
    const teamMembers = members.members as Member[];

    return (
        <div>
            <Navbar />
            <div className="relative mb-10">
                <img 
                    src={`/website_images/whiteboard.png`} 
                    alt="Background"
                    className="w-full h-[250px] object-cover object-[center_100%]"
                />
                <div className="absolute inset-0 bg-[#3B57F3]/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-5xl font-bold text-center my-8">THE READY LAB TEAM</div>
                </div>
            </div>
            
            
            {/* Alison's profile */}
            <div className="flex flex-col md:flex-row h-full md:px-60 px-10">
                <Avatar className="h-60 w-60">
                    <AvatarImage src={`/headshots/alison_olechowski.jpg`} alt="Alison Olechowski" />
                    <AvatarFallback>Alison Olechowski</AvatarFallback>
                </Avatar>
                <div className="flex flex-col py-2">
                    <div className="flex flex-col space-y-4 ml-8 w-full">
                        <div className="text-2xl font-bold">Professor Alison Olechowski, PhD, P.Eng.</div>
                        <div className="text-lg font-bold">
                            Associate Professor <br />
                            Department of Mechanical & Industrial Engineering <br />
                            Institute for Studies in Transdisciplinary Engineering Education and Practice (ISTEP)
                        </div>
                    </div>
                    <div className="mt-8 ml-8 w-full text-md space-y-4">
                        <p>Alison Olechowski is an Associate Professor in the Department of Mechanical & Industrial Engineering and the Institute for Studies in Transdisciplinary Engineering Education & Practice (ISTEP) at the University of Toronto. Dr. Olechowski and her team study the processes and tools that teams of engineers use in industry as they design innovative new products. She has studied engineering products and projects in the automotive, electronics, aerospace, medical device and oil & gas industries.</p>
                        <p>Dr. Olechowski completed her PhD in Mechanical Engineering at the Massachusetts Institute of Technology. Her doctoral research involved the study of technology development in complex product and systems engineering with her advisor Prof. <a href="https://mitmgmtfaculty.mit.edu/eppinger/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Steven Eppinger</a> (MIT Sloan School of Management) and collaborator Prof. <a href="https://smgapps.bu.edu/mgmt_new/profiles/Joglekarnitin.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nitin Joglekar</a> (BU School of Management).</p>
                        <p>Dr. Olechowski received her master's degree in Mechanical Engineering from MIT, advised by Prof. <a href="https://meche.mit.edu/people/faculty/Seering@MIT.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Warren Seering</a>. Her master's research focused on product development processes, particularly investigating uncertainty and risk in engineering design. She received a B.S. in Mechanical Engineering from <a href="https://www.queensu.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Queen's University</a> in Kingston, Ontario.</p>
                        <p>Dr. Olechowski is the proud faculty advisor for the <a href="https://spark.skule.ca" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Spark Design Club</a>.</p>
                    </div>
                    <div className="flex flex-row space-x-4 mt-4 ml-8">
                        <a href="https://www.linkedin.com/in/alisonolechowski" target="_blank" rel="noopener noreferrer"><img src={`/icons/linkedin.png`} alt="LinkedIn" className="h-8 w-8" /></a>
                        <a href="https://scholar.google.ca/citations?user=P5yUQ-IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><img src={`/icons/google_scholar.png`} alt="Google Scholar" className="h-8 w-8" /></a>
                    </div>
                </div>
            </div>

            {/* Active lab members */}
            <div className="flex flex-col space-y-10 py-20">
                {teamMembers.filter(member => member.active).sort(
                    (a, b) => roleOrder[a.role] - roleOrder[b.role]
                    ).map(member => ActiveMemberCard({member}))
                }
            </div>

            {/* Lab alumni */}
            <h2 className="text-2xl font-bold mb-4 px-20">Lab Alumni</h2>
            <div className="grid grid-cols-1 gap-6 px-20 md:grid-cols-3">
                {teamMembers.filter(member => !member.active).sort(
                    (a, b) => roleOrder[a.role] - roleOrder[b.role]
                ).sort(
                    (a, b) => b.graduationYear - a.graduationYear
                ).map(member => AlumniMemberCard({member}))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-12 px-20">In Memoriam</h2>
            <div className="flex flex-col md:flex-row h-full md:px-30 px-10">
                <Avatar className="h-60 w-60">
                    <AvatarImage src={`/headshots/janice_zhou.jpg`} alt="Janice Zhou" />
                    <AvatarFallback>Janice Zhou</AvatarFallback>
                </Avatar>
                <div className="flex flex-col py-2">
                    <div className="text-2xl ml-8 font-bold">Janice Zhou</div>
                    <div className="flex flex-row space-x-4 mt-4 ml-8">
                        <p>Janice Zhou was a 4th year Mechanical Engineering student who completed her undergraduate thesis with Prof. Olechowski. Janice worked during her Professional Experience Year at a toy company called <a href="https://www.spinmaster.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Spin Master</a> as a Product Development Engineer. She was the Co-President of <a href="http://sparkuoft.wixsite.com/sparkuoft" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Spark Design Club</a>, an engineering student club that creates electro-mechanical interactive displays. Janice next pursued a Master's Degree at MIT.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}; 