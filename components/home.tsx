import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion";
import { ServiceRail } from "./service-rail";
import { Shell } from "./site-shell";
import { featuredProjects, liveProjects } from "@/data/liveProjects";
import { email, pricing, whatsapp } from "@/data/site";

const adPlans = [
  [
    "Start",
    "$250 minimum",
    "Agreed starter ad spend and Jaeger Media service fee for smaller campaigns and testing.",
  ],
  [
    "Grow",
    "$500",
    "A higher campaign budget and management scope for testing more creative and audience combinations.",
  ],
  [
    "Scale",
    "$800",
    "More active campaign management, creative testing and ongoing optimisation.",
  ],
];

export function HomePage() {
  return (
    <Shell hideCTA>
      <main className="jm-home">
        <section className="jm-hero jm-hero-v3">
          <div className="shell hero-v3-grid">
            <div className="hero-v3-copy">
              <p className="jm-kicker light">
                Independent creative agency · Zimbabwe
              </p>
              <h1>
                Make your brand
                <br />
                <em>impossible to ignore.</em>
              </h1>
              <p className="jm-lead">
                Jaeger Media brings websites, content and advertising into one
                sharp digital presence—built to be remembered and chosen.
              </p>
              <div className="jm-actions">
                <Link className="jm-btn pale" href={whatsapp}>
                  WhatsApp us ↗
                </Link>
                <a className="jm-btn dark-line" href={`mailto:${email}`}>
                  Email us
                </a>
              </div>
            </div>

            <div
              className="jm-signal-stage"
              role="img"
              aria-label="Jaeger Media creative signal"
            >
              <div className="signal-orbit orbit-one" aria-hidden="true" />
              <div className="signal-orbit orbit-two" aria-hidden="true" />
              <div className="signal-sweep" aria-hidden="true" />
              <div className="signal-core">
                <Image
                  src="/jaeger-logo-secondary.jpg"
                  alt="Jaeger Media monogram"
                  fill
                  sizes="(max-width: 700px) 65vw, 420px"
                  priority
                />
              </div>
              <span className="orbit-label label-web">WEB / 01</span>
              <span className="orbit-label label-ads">ADS / 02</span>
              <span className="orbit-label label-brand">BRAND / 03</span>
              <span className="signal-status">
                <i /> Signal live
              </span>
            </div>
          </div>
          <div
            className="hero-v3-ticker"
            role="region"
            aria-label="Jaeger Media capabilities"
          >
            <span>{liveProjects.length} published websites</span>
            <span>Where vision meets results</span>
            <span>Web · Ads · Content · Brand</span>
          </div>
        </section>

        <section className="jm-services">
          <div className="shell">
            <Reveal className="jm-section-head">
              <p className="jm-kicker light">What we do</p>
              <h2>
                The work behind
                <br />
                the results.
              </h2>
              <p>
                Everything we build connects back to how your business is seen,
                found and chosen.
              </p>
            </Reveal>
          </div>
          <ServiceRail />
        </section>

        <section className="jm-live">
          <div className="shell">
            <Reveal className="jm-section-head dark-text">
              <p className="jm-kicker">Live on the web</p>
              <h2>
                Real work.
                <br />
                Out in the world.
              </h2>
              <p>
                A selection of websites we’ve designed and pushed live for
                businesses we’ve worked with.
              </p>
            </Reveal>
          </div>
          <div className="logo-rail">
            <div className="logo-track">
              {[...liveProjects, ...liveProjects].map((project, i) => (
                <a
                  key={`${project.name}-${i}`}
                  className="live-logo"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={240}
                      height={110}
                    />
                  ) : (
                    <strong className="text-mark">{project.mark}</strong>
                  )}
                  <span>
                    <b>{project.name}</b>
                    <small>Website · View live ↗</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="shell selected-builds">
            <p className="jm-kicker">Selected builds</p>
            {featuredProjects.map((project, i) => (
              <Reveal className="build-row" key={project.name}>
                <div className="build-count">0{i + 1}</div>
                <div className="build-shot">
                  <Image
                    src={project.screenshot!}
                    alt={`${project.name} website preview`}
                    fill
                    sizes="(max-width: 800px) 100vw, 60vw"
                  />
                </div>
                <div className="build-info">
                  <span>{project.industry}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live site ↗
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="jm-story">
          <div className="shell story-grid">
            <Reveal>
              <p className="jm-kicker">The Jaeger story</p>
              <h2>
                Built from
                <br />
                the work.
              </h2>
            </Reveal>
            <Reveal>
              <p className="story-large">
                Jaeger Media started with a simple idea: businesses shouldn’t
                have to choose between looking professional and getting results.
              </p>
              <p>
                What began with designs, websites and direct outreach grew into
                an agency working across websites, advertising, content and
                ongoing brand management.
              </p>
              <p>
                We stay close to the work — talking to clients, building the
                product, launching the campaign and improving what comes next.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="jm-team">
          <div className="shell">
            <Reveal className="jm-section-head">
              <p className="jm-kicker light">The people behind it</p>
              <h2>
                Two sides.
                <br />
                One agency.
              </h2>
            </Reveal>
            <div className="team-layout">
              <Reveal className="team-person ronan">
                <div className="team-visual">
                  <span>FRONT</span>
                  <div className="team-initials">R</div>
                  <small>/public/team/ronan.png</small>
                </div>
                <div>
                  <p className="jm-kicker light">Clients · Creative · Growth</p>
                  <h3>Ronan</h3>
                  <h4>Founder / Creative & Client Lead</h4>
                  <p>
                    Ronan is the face of Jaeger Media — leading client
                    relationships, creative direction, strategy, content and the
                    growth side of the agency.
                  </p>
                </div>
              </Reveal>
              <Reveal className="team-person mikey">
                <div className="team-visual">
                  <span>BACK</span>
                  <div className="team-initials">M</div>
                  <small>/public/team/mikey.png</small>
                </div>
                <div>
                  <p className="jm-kicker light">
                    Development · Systems · Deployment
                  </p>
                  <h3>Michael “Mikey”</h3>
                  <h4>Development & Technical Lead</h4>
                  <p>
                    Mikey handles development, backend systems, deployment and
                    the infrastructure that turns creative direction into
                    working digital products.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="jm-web-pricing">
          <div className="shell">
            <Reveal className="jm-section-head">
              <p className="jm-kicker light">Website pricing</p>
              <h2>Websites.</h2>
              <p>
                Built around what the business actually needs — not unnecessary
                complexity.
              </p>
            </Reveal>
            <div className="jm-price-row">
              {pricing.map((plan, i) => (
                <Reveal
                  className={`jm-price ${i === 1 ? "featured" : ""}`}
                  key={plan.name}
                >
                  <span>0{i + 1}</span>
                  <h3>{plan.name}</h3>
                  <strong>USD {plan.price.slice(1)}</strong>
                  <p>{plan.note}</p>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href="/contact">Start a project ↗</Link>
                </Reveal>
              ))}
            </div>
            <div className="custom-build">
              <b>Custom builds</b>
              <span>Quoted according to scope.</span>
            </div>
          </div>
        </section>

        <section className="jm-ads">
          <div className="shell">
            <Reveal className="jm-section-head dark-text">
              <p className="jm-kicker">Paid advertising</p>
              <h2>
                Put the right offer
                <br />
                in front of the right people.
              </h2>
              <p>
                From campaign setup to creative and optimisation, we structure
                advertising around the offer, audience and budget.
              </p>
            </Reveal>
            <div className="ad-plans">
              {adPlans.map(([name, price, desc]) => (
                <Reveal key={name}>
                  <span>{name}</span>
                  <strong>USD {price}</strong>
                  <p>{desc}</p>
                  <Link href="/contact">Discuss campaign ↗</Link>
                </Reveal>
              ))}
            </div>
            <div className="commission">
              <h3>Performance / Commission</h3>
              <p>
                Custom commission-based structures are available for selected
                businesses and campaigns where appropriate.
              </p>
              <Link href="/contact">Contact us ↗</Link>
            </div>
            <p className="ad-note">
              Exact ad spend allocation, campaign duration, deliverables and
              management scope are confirmed before launch. Third-party platform
              costs are subject to the campaign agreement. Results are never
              guaranteed.
            </p>
          </div>
        </section>

        <section className="jm-process">
          <div className="shell">
            <Reveal className="jm-section-head dark-text">
              <p className="jm-kicker">How we work</p>
              <h2>
                Discover. Build.
                <br />
                Launch. Grow.
              </h2>
            </Reveal>
            <div className="process-line">
              {[
                ["Discover", "We understand the business, offer and audience."],
                [
                  "Build",
                  "We create the website, content or campaign around that objective.",
                ],
                ["Launch", "We test, refine and put the work live."],
                [
                  "Grow",
                  "For ongoing clients, we keep improving content, campaigns and digital presence.",
                ],
              ].map(([h, p], i) => (
                <Reveal key={h}>
                  <span>0{i + 1}</span>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="jm-support">
          <div className="shell support-grid">
            <Reveal>
              <p className="jm-kicker">Ongoing support</p>
              <h2>
                Stay visible.
                <br />
                Stay consistent.
              </h2>
            </Reveal>
            <Reveal>
              <div className="support-block">
                <span>Social media management</span>
                <p>
                  Content planning · design · short-form video · captions ·
                  posting · campaign support · community engagement · monthly
                  review where applicable.
                </p>
                <Link href="/contact">Get a management quote ↗</Link>
              </div>
              <div className="support-block">
                <span>Design & brand work</span>
                <p>
                  Logos · brand identity · flyers · campaign creatives · social
                  content · promo assets.
                </p>
                <Link href="/services">Explore services ↗</Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="jm-final">
          <div className="shell">
            <p className="jm-kicker light">Got something in mind?</p>
            <h2>
              Let’s build
              <br />
              <em>what’s next.</em>
            </h2>
            <p>
              Tell us what you’re working on and we’ll tell you how Jaeger Media
              can help.
            </p>
            <div className="jm-actions">
              <Link className="jm-btn pale" href={whatsapp}>
                WhatsApp us ↗
              </Link>
              <a className="jm-btn dark-line" href={`mailto:${email}`}>
                Email us
              </a>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
