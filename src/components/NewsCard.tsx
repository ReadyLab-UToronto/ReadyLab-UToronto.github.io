import ReactMarkdown from "react-markdown";
import type { NewsItem } from "@/type";


const iconMap = {
    "Member": "/icons/member.jpg", 
    "Graduation": "/icons/graduation.jpg",
    "Award": "/icons/award.png",
    "Publication": "/icons/publication.png",
    "Presentation": "/icons/presentation.png",
    "Other": "/icons/event.jpeg"
}

const monthNames = [
    "",
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];


export default function NewsCard({ news }: { news: NewsItem }) {
    return (
       <div className="flex items-center md:mx-20 mx-10 gap-5 py-2 hover:bg-muted/40 transition-colors">
            <img src={iconMap[news.type]} alt={news.type} className="h-10 w-10 rounded-full" />

            <div className="ml-5 mr-5 shrink-0 text-sm text-muted-foreground">
                {monthNames[news.month]}
            </div>

            <div className="flex-1 text-md">
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
                    {news.content}
                </ReactMarkdown>
            </div>
        </div>
    )
}