import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 
import linkedinImage from '@/assets/icons/linkedin.png';
import googlescholarImage from '@/assets/icons/google_scholar.png';

type MemberCardProps = {
    name: string;
    role: string;
    imageUrl: string;
    description: string;
    linkedinUrl?: string;
    googlescholarUrl?: string;
};

export default function ActiveMemberCard({ name, role, imageUrl, description, linkedinUrl, googlescholarUrl }: MemberCardProps) {
    return (
        <div className="flex flex-col md:flex-row h-full px-40">
                <Avatar className="h-60 w-60">
                    <AvatarImage src={`src/assets/headshots/${imageUrl}`} alt={name} />
                    <AvatarFallback>{name}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col py-2">
                    <div className="flex flex-col space-y-1 ml-8 w-full">
                        <div className="text-2xl font-bold">{name}</div>
                        <div className="text-lg text-semibold">{role}</div>
                    </div>
                    <div className="mt-4 ml-8 w-full text-md space-y-4">{description}</div>
                    <div className="flex flex-row space-x-4 mt-4 ml-8">
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