import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 
import type { Member } from "@/type";

const roleDisplay = {
    postdoc: "Postdoctoral Fellow",
    phd: "PhD",
    masc: "MASc",
    meng: "MEng",
    undergrad: "Undergraduate"
}

export default function AlumniMemberCard({ member }: { member: Member }) {
    return (
        <div className="flex flex-row items-start gap-4 rounded-lg border p-5 transition-shadow hover:shadow-md" key={member.name}>
            <Avatar className="h-30 w-30">
                <AvatarImage src={`/headshots/${member.imageUrl}`} alt={member.name} />
                <AvatarFallback>{member.name}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <div className="text-xl font-bold leading-tight">{member.name}</div>
                <div className="text-lg mt-1 text-muted-foreground">{roleDisplay[member.role]} ({member.graduationYear})</div>
                <div className="flex flex-row gap-3 mt-4">
                    { member.linkedinUrl && (
                        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <img src={`/icons/linkedin.png`} alt="LinkedIn" className="h-8 w-8" />
                        </a>
                    )}
                    { member.googlescholarUrl && (
                        <a href={member.googlescholarUrl} target="_blank" rel="noopener noreferrer">
                            <img src={`/icons/google_scholar.png`} alt="Google Scholar" className="h-8 w-8" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}