import { liveProjects } from "./liveProjects";

export const projectCategories = [
  "All",
  "Social Media",
  "Paid Ads",
  "Websites",
  "Branding",
  "Flyers",
  "Business Cards",
  "Content",
  "Other",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type AgencyProject = {
  id: string;
  client: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  services: string[];
  logo?: string;
  cover?: string;
  gallery: string[];
  liveUrl?: string;
  description: string;
  year: string;
  featured: boolean;
  type: "live-site" | "campaign" | "identity" | "content";
};

const featuredNames = new Set(["Inner Living", "Skin Essentials", "Smartview", "EM Nutrition"]);

export const agencyProjects: AgencyProject[] = liveProjects.map((project) => ({
  id: project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  client: project.name,
  title: project.name,
  category: "Websites",
  services: [project.service],
  logo: project.logo,
  cover: project.screenshot,
  gallery: project.screenshot ? [project.screenshot] : [],
  liveUrl: project.url,
  description: project.description,
  year: "2025 to 2026",
  featured: featuredNames.has(project.name),
  type: "live-site",
}));
