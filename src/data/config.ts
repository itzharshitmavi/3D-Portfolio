const config = {
  title: "Harshit Mavi | Full-Stack & AI Developer",
  description: {
    long: "Harshit Mavi is a B.Tech CSE student (Class of 2027) building full-stack, AI-integrated applications, REST APIs and ERP/CRM systems. Explore projects, skills, education and certifications.",
    short: "Software developer building full-stack and AI-integrated business applications.",
  },
  keywords: ["Harshit Mavi", "Software Developer", "Full-Stack Developer", "AI Developer", "Django", "FastAPI", "React", "Next.js", "ASP.NET Core", "PostgreSQL", "ERP", "CRM", "Meerut"],
  author: "Harshit Mavi",
  email: "itzharshitmavi@gmail.com",
  phone: "+919690806016",
  location: "Meerut, Uttar Pradesh, India",
  site: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, ""),
  githubUsername: "itzharshitmavi",
  githubRepo: process.env.NEXT_PUBLIC_GITHUB_REPO || "",
  get ogImg() { return this.site + "/assets/seo/og-image.png"; },
  social: {
    linkedin: "https://linkedin.com/in/harshit-mavi-928448397",
    github: "https://github.com/itzharshitmavi",
  },
};
export { config };
