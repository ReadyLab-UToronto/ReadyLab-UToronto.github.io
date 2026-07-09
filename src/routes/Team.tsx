import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ActiveMemberCard from '@/components/ActiveMemberCard';
import AlumniMemberCard from '@/components/AlumniMemberCard';

import members from '@/assets/data/members.json'; 


const roleOrder = {
    postdoc: 0, 
    phd: 1, 
    masc: 2, 
    meng: 3, 
    undergrad: 4, 
}

type memberProp = {
    name: string; 
    active: boolean;
    graduationYear: number; 
    imageUrl: string; 
    role: "postdoc" | "phd" | "masc" | "meng" | "undergrad";
    description: string; 
    linkedinUrl?: string; 
    googlescholarUrl?: string;
}

export default function Team() {
    const teamMembers = members.members as memberProp[];

    return (
        <div>
            <Navbar />
            <div className="text-4xl font-bold text-center my-8">THE READY LAB TEAM</div>
            
            {/* Alison's profile */}
            <div className="flex flex-col md:flex-row h-full px-40">
                <Avatar className="h-60 w-60">
                    <AvatarImage src={`src/assets/headshots/alison_olechowski.jpg`} alt="Alison Olechowski" />
                    <AvatarFallback>Alison Olechowski</AvatarFallback>
                </Avatar>
                <div className="flex flex-col py-2">
                    <div className="flex flex-col space-y-1 ml-8 w-full">
                        <div className="text-2xl font-bold">Professor Alison Olechowski, PhD, P.Eng.</div>
                        <div className="text-lg text-semibold">
                            Associate Professor <br />
                            Department of Mechanical & Industrial Engineering <br />
                            Institute for Studies in Transdisciplinary Engineering Education and Practice (ISTEP)
                        </div>
                    </div>
                    <div className="mt-4 ml-8 w-full text-md space-y-4">
                        <p>Alison Olechowski is an Associate Professor in the Department of Mechanical & Industrial Engineering and the Institute for Studies in Transdisciplinary Engineering Education & Practice (ISTEP) at the University of Toronto. Dr. Olechowski and her team study the processes and tools that teams of engineers use in industry as they design innovative new products. She has studied engineering products and projects in the automotive, electronics, aerospace, medical device and oil & gas industries.</p>
                        <p>Dr. Olechowski completed her PhD in Mechanical Engineering at the Massachusetts Institute of Technology. Her doctoral research involved the study of technology development in complex product and systems engineering with her advisor Prof. <a href="https://mitmgmtfaculty.mit.edu/eppinger/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Steven Eppinger</a> (MIT Sloan School of Management) and collaborator Prof. <a href="https://smgapps.bu.edu/mgmt_new/profiles/Joglekarnitin.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nitin Joglekar</a> (BU School of Management).</p>
                        <p>Dr. Olechowski received her master's degree in Mechanical Engineering from MIT, advised by Prof. <a href="https://meche.mit.edu/people/faculty/Seering@MIT.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Warren Seering</a>. Her master's research focused on product development processes, particularly investigating uncertainty and risk in engineering design. She received a B.S. in Mechanical Engineering from <a href="https://www.queensu.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Queen's University</a> in Kingston, Ontario.</p>
                        <p>Dr. Olechowski is the proud faculty advisor for the <a href="https://spark.skule.ca" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Spark Design Club</a>.</p>
                    </div>
                    <div className="flex flex-row space-x-4 mt-4 ml-8">
                        <a href="https://www.linkedin.com/in/alisonolechowski" target="_blank" rel="noopener noreferrer"><img src={`src/assets/icons/linkedin.png`} alt="LinkedIn" className="h-8 w-8" /></a>
                        <a href="https://scholar.google.ca/citations?user=P5yUQ-IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><img src={`src/assets/icons/google_scholar.png`} alt="Google Scholar" className="h-8 w-8" /></a>
                    </div>
                </div>
            </div>

            {/* Active lab members */}
            <div className="flex flex-col space-y-10 py-20">
            {teamMembers.filter(member => member.active).sort(
                (a, b) => roleOrder[a.role] - roleOrder[b.role]
                ).map(member => ActiveMemberCard(member))
            }
            </div>

            {/* Lab alumni */}
            <h2>Lab Alumni</h2>
            {teamMembers.filter(member => !member.active).sort(
                    (a, b) => roleOrder[a.role] - roleOrder[b.role]
                ).sort(
                    (a, b) => a.graduationYear - b.graduationYear
                ).map(member => AlumniMemberCard(member))}

            <Footer />
        </div>
    )
}; 