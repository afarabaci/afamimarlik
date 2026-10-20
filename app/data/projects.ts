export type Project = {
    slug: string;
    title: string;
    category: { tr: string; en: string };
    location: string;
    year: string;
    description: string;
    cover: string;
    images: string[];
};

export const projects: Project[] = [
    {
        slug: "proje1",
        title: "Twin Houses",
        category: { tr: "Mimari Tasarım", en: "Architectural Design" },
        location: "Erdemli/Mersin",
        year: "2023",
        description: "",
        cover: "/projects/proje1/cover.jpg",
        images: [
            "/projects/proje1/01.jpg",
            "/projects/proje1/02.jpg",
            "/projects/proje1/03.jpg",
            "/projects/proje1/04.jpg"
        ]
    }
];

export function getProject(slug: string) {
    return projects.find(project => project.slug === slug);
}
