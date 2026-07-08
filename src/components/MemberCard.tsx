import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 


type MemberCardProps = {
    name: string;
    role: string;
    imageUrl: string;
    description: string;
    linkedinUrl?: string;
    googlescholarUrl?: string;
};

export default function MemberCard({ name, role, imageUrl, description, linkedinUrl, googlescholarUrl }: MemberCardProps) {
    return (
        <div></div>
    )
}