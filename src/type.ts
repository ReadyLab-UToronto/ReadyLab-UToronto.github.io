export type Publication = {
    title: string;
    authors: string;
    venue: string;
    year: number;
    tags: string[];
    links: {
        doi: string;
        pdf?: string;
        slides?: string;
        code?: string;
    }; 
    award?: string;
    abstract: string;
}

export type Member = {
    name: string; 
    active: boolean;
    graduationYear: number; 
    imageUrl: string; 
    role: "postdoc" | "phd" | "masc" | "meng" | "undergrad";
    description: string; 
    linkedinUrl?: string; 
    googlescholarUrl?: string;
}

export type NewsItem = {
    year: number; 
    month: number;
    type: "Member" | "Graduation" | "Award" | "Publication" | "Other"; 
    content: string; 
}