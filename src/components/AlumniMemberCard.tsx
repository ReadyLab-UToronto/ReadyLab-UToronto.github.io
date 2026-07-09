import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 
import linkedinImage from '@/assets/icons/linkedin.png';
import googlescholarImage from '@/assets/icons/google_scholar.png';

type MemberCardProps = {
    name: string;
    role: "postdoc" | "phd" | "masc" | "meng" | "undergrad";
    graduationYear: number;
    imageUrl: string;
    linkedinUrl?: string;
    googlescholarUrl?: string;
};


const roleDisplay = {
    postdoc: "Postdoctoral Fellow",
    phd: "PhD",
    masc: "MASc",
    meng: "MEng",
    undergrad: "Undergraduate"
}

export default function AlumniMemberCard({ name, role, graduationYear, imageUrl, linkedinUrl, googlescholarUrl }: MemberCardProps) {
    return (
        <div className="flex flex-row items-start gap-4 rounded-lg border p-5 transition-shadow hover:shadow-md">
            <Avatar className="h-30 w-30">
                <AvatarImage src={`src/assets/headshots/${imageUrl}`} alt={name} />
                <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <div className="text-xl font-bold leading-tight">{name}</div>
                <div className="text-lg mt-1 text-muted-foreground">{roleDisplay[role]} ({graduationYear})</div>
                <div className="flex flex-row gap-3 mt-4">
                    { linkedinUrl && (
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImage} alt="LinkedIn" className="h-8 w-8" />
                        </a>
                    )}
                    { googlescholarUrl && (
                        <a href={googlescholarUrl} target="_blank" rel="noopener noreferrer">
                            <img src={googlescholarImage} alt="Google Scholar" className="h-8 w-8" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}