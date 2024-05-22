import type { departmentISO } from "./types";

export interface ColombiaDepartament {
    id: departmentISO;
    name: string;
    path: string;
}

export interface AvaibleSocialMedia {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    webpage?: string;
    mail?: string;
    youtube?: string;
}

export interface ChapterANEIC {
    departament: departmentISO;
    name: string;
    logo: string;
    status: "active" | "process"
    university: {
        name: string;
        webpage: string;
    },
    social_media: AvaibleSocialMedia
}