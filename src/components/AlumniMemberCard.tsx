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

export default function AlumniMemberCard({ name, role, imageUrl, description, linkedinUrl, googlescholarUrl }: MemberCardProps) {
    return (
        <div></div>
    )
}