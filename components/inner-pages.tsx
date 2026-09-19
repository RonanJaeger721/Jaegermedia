"use client";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Shell } from "./site-shell";
import { Reveal } from "./motion";
import { email, services, whatsapp } from "@/data/site";
import { agencyProjects, projectCategories } from "@/data/projects";

const primaryServices = [
  ["Social Media", "Planning, graphics, Reels, captions, publishing and ongoing brand management."],
  ["Paid Advertising", "Meta, Instagram and TikTok campaigns built around the offer, audience and next action."],
  ["Lead Generation", "Connected paths from content and ads to landing pages, WhatsApp, forms and real conversations."],
  ["Content Creation", "Campaign ideas, filming, editing, social creative and short-form video."],
  ["Web Development", "Responsive digital home bases that build trust and turn traffic into enquiries."],
  ["Branding", "Identity, graphics, flyers and campaign assets that make the business recognisable."],
] as const;

function ServicesPage() {
  return <>
    <section className="services-opening">
      <div className="shell services-opening-grid">
        <div><p>Services · Harare, Zimbabwe</p><h1>What<br/>we<br/>handle.</h1></div>
        <div className="service-index">{primaryServices.map(([title],index)=><a key={title} href={`#service-${index+1}`}><span>0{index+1}</span><b>{title}</b><i>↗</i></a>)}</div>
        <p className="services-intro">The complete digital side of the business, from what customers see to how they respond.</p>
      </div>
    </section>
    <section className="service-editorial shell">{primaryServices.map(([title,copy],index)=><Reveal className="service-chapter" key={title}><span id={`service-${index+1}`}>0{index+1}</span><div><h2>{title}</h2><p>{copy}</p><div>{services[index]?.items.map(item=><small key={item}>{item}</small>)}</div><Link href="/contact">Discuss this service <ArrowRight size={15}/></Link></div></Reveal>)}</section>
  </>;
}

function WorkPage() {
  const [filter,setFilter]=useState<(typeof projectCategories)[number]>("All");
  const shown=filter==="All"?agencyProjects:agencyProjects.filter(project=>project.category===filter);
  const preview=shown.find(project=>project.cover) ?? agencyProjects.find(project=>project.cover);
  return <>
    <section className="work-opening">
      <div className="shell work-mast"><p>2025 to 2026</p><h1>Selected<br/>work.</h1><span>Websites today. Social, paid, content and brand work can be added through the same project system as approved assets arrive.</span></div>
      <div className="work-filter shell" role="group" aria-label="Filter projects">{projectCategories.map(category=><button key={category} className={filter===category?"active":""} onClick={()=>setFilter(category)}>{category}</button>)}</div>
    </section>
    <section className="work-browser shell">
      <div className="work-list">{shown.length?shown.map((project,index)=><a href={project.liveUrl ?? `/case-studies#${project.id}`} target={project.liveUrl?"_blank":undefined} rel={project.liveUrl?"noopener noreferrer":undefined} key={project.id}><span>{String(index+1).padStart(2,"0")}</span><div><b>{project.title}</b><small>{project.category} · {project.year}</small></div><i>↗</i></a>):<div className="work-empty"><b>No approved work in this category yet.</b><p>The filter is ready for future projects without changing the layout.</p></div>}</div>
      <div className="work-preview">{preview?.cover?<Image src={preview.cover} alt={`${preview.client} project preview`} fill sizes="48vw"/>:<span>JM</span>}</div>
    </section>
  </>;
}

function AboutPage() {
  return <>
    <section className="about-opening shell">
      <div className="about-title"><p>Jaeger Media · Social Media Marketing Agency · Harare</p><h1>Two brothers.<br/><em>One agency.</em></h1></div>
      <div className="about-portraits"><div><Image src="/team/ronan.jpg" alt="Ronan, co-founder of Jaeger Media" fill priority sizes="45vw"/><span>Ronan · Co-founder</span></div><div><Image src="/team/mikey.jpg" alt="Michael Mikey, co-founder of Jaeger Media" fill priority sizes="45vw"/><span>Mikey · Co-founder</span></div></div>
      <p className="about-intro">Jaeger Media was founded by brothers Ronan and Michael, combining the creative, client-facing and marketing side of the business with the technical systems behind the work.</p>
    </section>
    <section className="about-story"><div className="shell about-story-grid"><Reveal><p>Our story</p><h2>Built around<br/>the work.</h2></Reveal><Reveal><p className="story-lead">JAEGER MEDIA IS A SOCIAL MEDIA MARKETING AGENCY BASED IN HARARE, ZIMBABWE.</p><p>Founded by brothers Ronan and Michael, the agency started by building websites, designing creative work and approaching businesses directly.</p><p>That grew into a wider digital operation covering social media management, paid advertising, content creation, lead generation, branding and the systems businesses use to turn online attention into enquiries.</p><b>Where Vision Meets Results.</b></Reveal></div></section>
  </>;
}

const adsPlans=[
  {name:"Start",total:"$250",service:"$150",spend:"$100",copy:"A starter campaign for testing an offer, audience or campaign direction with professional setup and management."},
  {name:"Grow",total:"$500",service:"$250",spend:"$250",copy:"A stronger campaign budget for reaching more people, testing creative and running a more substantial campaign."},
  {name:"Scale",total:"$800",service:"$500",spend:"$300",copy:"Higher-touch management with increased creative involvement and optimisation."},
] as const;
const webPlans=[
  {name:"Starter",total:"$150",copy:"A clean professional online presence for focused service businesses."},
  {name:"Growth",total:"$250",copy:"Expanded pages, stronger visual design, portfolio, contact systems and enhanced motion."},
  {name:"Premium",total:"$400",copy:"Custom layouts, more pages, advanced interaction and functionality according to scope."},
] as const;

function PricingPage() {
  const [tab,setTab]=useState<"Ads"|"Web"|"Social">("Ads");
  return <>
    <section className="pricing-opening shell"><p>Clear commercial options</p><h1>What does it cost<br/>to work with JM?</h1><div className="pricing-tabs" role="tablist">{(["Ads","Web","Social"] as const).map(item=><button role="tab" aria-selected={tab===item} className={tab===item?"active":""} onClick={()=>setTab(item)} key={item}>{item}</button>)}</div></section>
    <section className="pricing-stage">
      <div className="shell">
        {tab==="Ads"&&<><div className="transparent-pricing">{adsPlans.map(plan=><article key={plan.name}><span>{plan.name}</span><strong>{plan.total}</strong><small>Total campaign budget</small><div><b>{plan.service}<i>Service fee</i></b><b>{plan.spend}<i>Ad spend</i></b></div><p>{plan.copy}</p><Link href="/contact">Choose {plan.name} ↗</Link></article>)}</div><div className="performance-row"><b>Performance · Commission-based</b><span>Available for selected campaigns. Structure depends on the offer, objective, sales process, budget and scope.</span></div><p className="pricing-disclaimer">Ad spend is the portion allocated to the advertising platform. The Jaeger Media service fee covers campaign planning, setup, creative direction, audience targeting, monitoring, optimisation and management according to the agreed package. Campaign duration and deliverables are confirmed before launch. Results are never guaranteed.</p></>}
        {tab==="Web"&&<div className="transparent-pricing web-price">{webPlans.map(plan=><article key={plan.name}><span>{plan.name}</span><strong>{plan.total}</strong><small>One-time website fee</small><p>{plan.copy}</p><Link href="/contact">Choose {plan.name} ↗</Link></article>)}</div>}
        {tab==="Social"&&<div className="social-price"><span>Social media management</span><h2>Custom monthly<br/>package.</h2><p>Content planning, social graphics, Reels, filming, editing, captions, posting, scheduling, community engagement and campaign support, scoped around what the business needs.</p><Link href="/contact">Get a monthly quote ↗</Link></div>}
      </div>
    </section>
  </>;
}

function ContactPage() {
  const [sent,setSent]=useState(false);
  function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();const form=new FormData(event.currentTarget);const message=`Hi Jaeger Media, I'm ${form.get("name")} from ${form.get("business")}. I need: ${form.get("service")}. Budget: ${form.get("budget")}. ${form.get("message")}`;window.open(`https://wa.me/263789937251?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");setSent(true)}
  return <section className="contact-opening shell"><div className="contact-intro"><p>Harare, Zimbabwe</p><h1>Let&apos;s talk<br/>about your<br/>business.</h1><div><a href={whatsapp}>WhatsApp · +263 78 993 7251 ↗</a><a href={`mailto:${email}`}>{email} ↗</a><span>Social · Ads · Leads · Content · Web · Brand</span></div></div><form className="clean-form" onSubmit={submit}><h2>Tell us what you need.</h2><div className="form-grid"><Field label="Name"><input required name="name"/></Field><Field label="Business"><input name="business"/></Field><Field label="Phone / WhatsApp"><input required name="phone" type="tel"/></Field><Field label="Email"><input required name="email" type="email"/></Field><Field label="What do you need?" full><select name="service" defaultValue="Multiple Services"><option>Social Media Management</option><option>Paid Advertising</option><option>Lead Generation</option><option>Website</option><option>Branding / Design</option><option>Content</option><option>Multiple Services</option><option>Other</option></select></Field><Field label="Budget" full><select name="budget" defaultValue="Let's discuss"><option>Under $150</option><option>$150 to $300</option><option>$300 to $500</option><option>$500+</option><option>Let&apos;s discuss</option></select></Field><Field label="Message" full><textarea required name="message" placeholder="What are you trying to achieve?"/></Field><div className="field full"><button type="submit">Send enquiry <ArrowRight size={15}/></button>{sent&&<p role="status">WhatsApp has opened with your enquiry ready to send.</p>}</div></div></form></section>;
}

function ProcessPage(){return <><section className="process-opening shell"><p>How we work</p><h1>Clear steps.<br/>Close collaboration.</h1></section><section className="process-editorial shell">{[["01","Discover","Understand the business, offer and audience."],["02","Plan","Shape the message, creative and conversion path."],["03","Create","Produce the content, campaign or digital experience."],["04","Launch","Test, refine and put the work in front of people."],["05","Grow","Manage, learn and improve what comes next."]].map(([n,h,p])=><Reveal key={n}><span>{n}</span><h2>{h}</h2><p>{p}</p></Reveal>)}</section></>}
function CasesPage(){return <><section className="cases-opening shell"><p>Case studies</p><h1>The work<br/>behind the work.</h1></section><section className="work-browser shell"><div className="work-list">{agencyProjects.filter(p=>p.featured).map((project,index)=><a id={project.id} href={project.liveUrl} target="_blank" rel="noopener noreferrer" key={project.id}><span>0{index+1}</span><div><b>{project.title}</b><small>{project.services.join(" · ")}</small><p>{project.description}</p></div><i>↗</i></a>)}</div></section></>}

function Field({label,children,full=false}:{label:string;children:React.ReactNode;full?:boolean}){return <label className={`field ${full?"full":""}`}><span>{label}</span>{children}</label>}

export function InnerPage({type}:{type:string}){
  let page:React.ReactNode;
  if(type==="services") page=<ServicesPage/>; else if(type==="work") page=<WorkPage/>; else if(type==="about") page=<AboutPage/>; else if(type==="pricing") page=<PricingPage/>; else if(type==="contact") page=<ContactPage/>; else if(type==="process") page=<ProcessPage/>; else page=<CasesPage/>;
  return <Shell><main className={`inner-${type}`}>{page}</main></Shell>;
}
