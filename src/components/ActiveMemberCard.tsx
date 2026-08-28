import ReactMarkdown from "react-markdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 
import type { Member } from "@/type";


export default function ActiveMemberCard({ member }: { member: Member }) {
    return (
        <div className="flex flex-col md:flex-row h-full md:px-60 px-10" key={member.name}>
                <Avatar className="h-60 w-60">
                    <AvatarImage src={`/headshots/${member.imageUrl}`} alt={member.name} />
                    <AvatarFallback>{member.name}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col py-8">
                    <div className="text-2xl font-bold ml-8">{member.name}</div>
                    <div className="mt-4 ml-8 w-full space-y-4">
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
                            {member.description}
                        </ReactMarkdown>
                    </div>
                    <div className="flex flex-row space-x-4 mt-4 ml-8">
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