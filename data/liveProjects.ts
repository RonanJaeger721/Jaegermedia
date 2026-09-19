export type LiveProject = {
  name: string;
  logo?: string;
  mark?: string;
  screenshot?: string;
  url: string;
  service: string;
  industry: string;
  description: string;
};
const web = "Website Design & Development";
export const liveProjects: LiveProject[] = [
  {
    name: "Inner Living",
    logo: "/clients/inner-living.jpg",
    screenshot: "/projects/inner-living-hero.jpg",
    url: "https://www.innerlivingdesign.co.zw/",
    service: web,
    industry: "Interiors & Lifestyle",
    description:
      "A content-rich interiors experience bringing services, catalogue pieces and renovation stories into one clear digital home.",
  },
  {
    name: "Strive Africa",
    logo: "/clients/strive-africa.jpeg",
    screenshot: "/projects/africa-strive-hero.png",
    url: "https://www.africastrive.com/",
    service: web,
    industry: "Education",
    description:
      "A student-focused platform for applications, guidance and real journeys.",
  },
  {
    name: "Smartview",
    logo: "/clients/smartview.png",
    screenshot: "/projects/smartview-hero.png",
    url: "https://www.smartview.co.zw/",
    service: web,
    industry: "Aluminium & Glass",
    description:
      "A live digital presence for a specialist aluminium and glass business.",
  },
  {
    name: "Skin Essentials",
    logo: "/clients/skin-essentials.png",
    screenshot: "/projects/skin-essentials-hero.png",
    url: "https://www.skinessentials.co.zw/",
    service: web,
    industry: "Skincare",
    description:
      "A clear, product-led skincare experience designed for confident discovery.",
  },
  {
    name: "EM Nutrition",
    logo: "/clients/em-nutrition.jpeg",
    screenshot: "/projects/em-nutrition-hero.png",
    url: "https://www.emnutrition.co.zw/",
    service: web,
    industry: "Nutrition",
    description:
      "A calm, personal nutrition platform focused on services and enquiries.",
  },
  {
    name: "Fambai Travel",
    logo: "/clients/fambai.jpeg",
    url: "https://www.fambaitravelagency.co.zw/",
    service: web,
    industry: "Travel",
    description:
      "A practical travel and vehicle-hire website for fast customer action.",
  },
  {
    name: "The Briarcliff Group",
    mark: "THE BRIARCLIFF GROUP",
    url: "https://www.bcgp.co.zw/",
    service: web,
    industry: "Group Portfolio",
    description:
      "A refined group website bringing distinct business units into one story.",
  },
  {
    name: "Truck Gear Auto",
    logo: "/clients/truck-gear.png",
    url: "https://truckgearauto.co.zw/",
    service: web,
    industry: "Automotive",
    description:
      "A specialist parts experience built for quick product and contact discovery.",
  },
  {
    name: "Winnie's Flowers",
    logo: "/clients/winnies.jpeg",
    url: "https://www.winniesflowers.co.zw/",
    service: web,
    industry: "Floristry",
    description:
      "A visual storefront for flowers, gifting and direct enquiries.",
  },
  {
    name: "True Line",
    mark: "TRUE LINE PROPERTY SERVICES",
    url: "https://www.truelineservices.co.zw/",
    service: web,
    industry: "Property Services",
    description:
      "A direct-response service website shaped around calls and WhatsApp enquiries.",
  },
  {
    name: "Frontline Contracting",
    logo: "/clients/frontline.png",
    url: "https://frontlinecontracting.net/",
    service: web,
    industry: "Construction",
    description:
      "A confident contracting website built around capability and trust.",
  },
  {
    name: "Doxler Think Green",
    mark: "DOXLER SOLAR",
    url: "https://www.doxlerthinkgreen.co.zw/",
    service: web,
    industry: "Solar",
    description:
      "A product and solutions website for solar customers in Zimbabwe.",
  },
  {
    name: "Frozen Solutions",
    logo: "/clients/snow-company.svg",
    url: "https://www.snowcompany.co.zw/",
    service: web,
    industry: "Cooling",
    description:
      "A modern equipment website covering products, service and quotations.",
  },
  {
    name: "Dent Doctor ZW",
    logo: "/clients/dent-doctor.png",
    url: "https://www.dentdoctorzw.co.zw/",
    service: web,
    industry: "Automotive",
    description:
      "A before-and-after-led repair website with direct booking paths.",
  },
  {
    name: "Field Mowers Husqvarna",
    mark: "HUSQVARNA",
    url: "https://www.husqvarnamowers.co.zw/",
    service: web,
    industry: "Equipment",
    description:
      "A product catalogue and dealer website for premium outdoor equipment.",
  },
  {
    name: "Rivasos Enterprises",
    mark: "RIVASOS ENTERPRISES",
    url: "https://www.rivasosenterprises.co.zw/",
    service: web,
    industry: "Fabrication",
    description:
      "An industrial website presenting services, work and quotation tools.",
  },
  {
    name: "Vebrech Civil Works",
    logo: "/clients/vebrech.png",
    url: "https://www.vebrechcivilworks.co.zw/",
    service: web,
    industry: "Civil Works",
    description:
      "A project-driven civil works presence balancing capability and proof.",
  },
];
export const featuredProjects = liveProjects.filter(
  (project) => project.screenshot,
);
