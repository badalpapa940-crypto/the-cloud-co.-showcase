import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Circle } from "lucide-react";

import cloudLogo from "@/assets/cloudco-logo.png.asset.json";
import ovrszdVideo from "@/assets/ovrszd-case-study.mp4.asset.json";
import ovrszdPoster from "@/assets/ovrszd-poster.jpg.asset.json";
import chikuVideo from "@/assets/chiku-recent.mp4.asset.json";
import chikuPoster from "@/assets/chiku-recent.jpg.asset.json";
import project03Video from "@/assets/project-03.mp4.asset.json";
import project03Poster from "@/assets/project-03.jpg.asset.json";
import project05Video from "@/assets/project-05.mp4.asset.json";
import project05Poster from "@/assets/project-05.jpg.asset.json";
import project06Video from "@/assets/project-06.mp4.asset.json";
import project06Poster from "@/assets/project-06.jpg.asset.json";
import project07Video from "@/assets/project-07.mp4.asset.json";
import project07Poster from "@/assets/project-07.jpg.asset.json";
import project08Video from "@/assets/project-08.mp4.asset.json";
import project08Poster from "@/assets/project-08.jpg.asset.json";
import { BrandStrip } from "@/components/brand-strip";
import { ProjectForm } from "@/components/project-form";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "the cloud co. — Websites that make brands impossible to ignore" },
      {
        name: "description",
        content:
          "The Cloud Co. designs and develops high-impact websites for fashion, beauty, hospitality, and modern brands.",
      },
      { property: "og:title", content: "the cloud co. — Web development studio" },
      {
        property: "og:description",
        content: "Distinctive, fast, conversion-ready websites built for ambitious brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  "Strategy & direction",
  "Web design",
  "Web development",
  "E-commerce",
  "Motion & interaction",
  "Launch support",
];

const additionalProjects = [
  {
    number: "03",
    name: "Project 03",
    tag: "Café menu",
    video: project03Video.url,
    poster: project03Poster.url,
    description: "A digital café menu made for quick browsing and effortless updates by the team behind the counter.",
  },
  {
    number: "05",
    name: "Project 05",
    tag: "Website",
    video: project05Video.url,
    poster: project05Poster.url,
    description: "A recent studio build—design and development, with the client story still being finalised.",
  },
  {
    number: "06",
    name: "Project 06",
    tag: "Travel packages",
    video: project06Video.url,
    poster: project06Poster.url,
    description: "A travel package site that lays out itineraries, inclusions, and enquiries in one clear flow.",
  },
  {
    number: "07",
    name: "Project 07",
    tag: "Doctor & clinic",
    video: project07Video.url,
    poster: project07Poster.url,
    description: "A clinic website for a doctor—services, credentials, and appointments easy to find on any screen.",
  },
  {
    number: "08",
    name: "Project 08",
    tag: "Café menu",
    video: project08Video.url,
    poster: project08Poster.url,
    description: "A second café menu with a warmer, menu-first layout built for guests on their phones.",
  },
];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-foreground/10">
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-5 md:px-10">
          <a href="#top" aria-label="The Cloud Co. home" className="block">
            <img src={cloudLogo.url} alt="the cloud co." className="h-7 w-auto" />
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-9 text-xs font-semibold uppercase md:flex">
            <a className="transition-opacity hover:opacity-55" href="#work">Work</a>
            <a className="transition-opacity hover:opacity-55" href="#services">Services</a>
            <a className="transition-opacity hover:opacity-55" href="#about">About</a>
          </nav>
          <Button asChild variant="studio" size="lg">
            <a href="#contact">Start a project <ArrowUpRight /></a>
          </Button>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[92svh] flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-12">
        <div className="relative mb-10 grid gap-8 lg:mb-4 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-[0.68rem] font-semibold uppercase">
              <span className="size-2 animate-pulse rounded-full bg-brand" /> Taking new projects
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
              Independent web studio turning sharp ideas into digital experiences that move people—and business.
            </p>
            <div className="flex gap-10 border-t border-foreground/15 pt-5">
              {[["07+", "Live builds"], ["5", "Industries"], ["24h", "Reply time"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold md:text-4xl">{n}</div>
                  <div className="text-[0.68rem] font-semibold uppercase text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden h-[22rem] sm:block">
            <div className="absolute left-0 top-10 w-[62%] -rotate-3 overflow-hidden rounded-sm bg-ink shadow-2xl">
              <video className="aspect-video w-full object-cover" src={ovrszdVideo.url} poster={ovrszdPoster.url} autoPlay muted loop playsInline aria-hidden="true" />
              <span className="block px-3 py-2 text-[0.62rem] font-semibold uppercase text-paper">01 · Fashion store</span>
            </div>
            <div className="absolute right-0 top-0 w-[52%] rotate-2 overflow-hidden rounded-sm bg-ink shadow-2xl">
              <video className="aspect-video w-full object-cover" src={chikuVideo.url} poster={chikuPoster.url} autoPlay muted loop playsInline aria-hidden="true" />
              <span className="block px-3 py-2 text-[0.62rem] font-semibold uppercase text-paper">02 · Salon</span>
            </div>
            <div className="absolute bottom-0 right-[12%] w-[46%] -rotate-1 overflow-hidden rounded-sm bg-ink shadow-2xl">
              <img className="aspect-video w-full object-cover" src={project06Poster.url} alt="" />
              <span className="block px-3 py-2 text-[0.62rem] font-semibold uppercase text-paper">06 · Travel</span>
            </div>
            <div className="absolute bottom-6 left-[6%] size-4 rounded-full bg-brand" />
          </div>
        </div>
        <h1 className="relative max-w-[1500px] font-display text-[clamp(4.1rem,12.5vw,12.5rem)] font-bold uppercase leading-[0.78]">
          We build<br />websites<span className="text-brand">.</span>
        </h1>
        <div className="mt-9 flex items-end justify-between border-t border-foreground/20 pt-5 text-xs font-semibold uppercase">
          <span>Design + Development</span>
          <a className="flex items-center gap-2 transition-opacity hover:opacity-55" href="#work">
            Recent projects <ArrowDownRight className="size-4" />
          </a>
        </div>
      </section>

      <BrandStrip />

      <section id="work" className="bg-ink px-5 py-20 text-paper md:px-10 md:py-28">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-12 flex items-end justify-between border-b border-paper/20 pb-5 md:mb-16">
            <h2 className="font-display text-4xl font-bold uppercase md:text-6xl">Recent projects</h2>
            <span className="text-xs font-semibold uppercase text-paper/55">2026 / 07 projects</span>
          </div>

          <article className="grid gap-6 border-b border-paper/20 pb-16 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-10">
            <div className="group relative aspect-video overflow-hidden bg-surface-dark">
              <video
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                src={ovrszdVideo.url}
                poster={ovrszdPoster.url}
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label="OVRSZD fashion store website demo"
              />
            </div>
            <div className="flex flex-col justify-between gap-8 md:py-1">
              <div>
                <span className="text-xs font-semibold uppercase text-brand">01 / Fashion · Shopify</span>
                <h3 className="mt-4 font-display text-4xl font-bold uppercase md:text-5xl">OVRSZD</h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/60">
                  A cinematic Shopify storefront for a fashion label—built around product, motion, and attitude.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[0.68rem] font-semibold uppercase text-paper/55">
                <span>Art direction</span><Circle className="size-2 fill-brand text-brand" /><span>Development</span>
              </div>
            </div>
          </article>

          <article className="mt-16 grid gap-6 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-10">
            <div className="order-2 flex flex-col justify-between gap-8 md:order-1 md:py-1">
              <div>
                <span className="text-xs font-semibold uppercase text-brand">02 / Salon</span>
                <h3 className="mt-4 font-display text-4xl font-bold uppercase md:text-5xl">Chiku</h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/60">
                  A salon website pairing immersive motion with a frictionless booking journey for new and regular guests.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[0.68rem] font-semibold uppercase text-paper/55">
                <span>3D interaction</span><Circle className="size-2 fill-brand text-brand" /><span>Development</span>
              </div>
            </div>
            <div className="group order-1 relative aspect-video overflow-hidden bg-surface-dark md:order-2">
              <video
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                src={chikuVideo.url}
                poster={chikuPoster.url}
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label="Chiku salon website demo"
              />
            </div>
          </article>

          {additionalProjects.map((project) => (
            <article key={project.number} className="mt-16 grid gap-6 border-t border-paper/20 pt-16 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-10">
              <div className="group relative aspect-video overflow-hidden bg-surface-dark">
                <video
                  className="h-full w-full object-contain"
                  src={project.video}
                  poster={project.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label={`${project.name} website demo`}
                />
              </div>
              <div className="flex flex-col justify-between gap-8 md:py-1">
                <div>
                  <span className="text-xs font-semibold uppercase text-brand">{project.number} / {project.tag}</span>
                  <h3 className="mt-4 font-display text-4xl font-bold uppercase md:text-5xl">{project.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-paper/60">{project.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold uppercase text-paper/55">
                  <span>Web design</span><Circle className="size-2 fill-brand text-brand" /><span>Development</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-screen-2xl gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="text-xs font-semibold uppercase text-brand">How we help</span>
            <h2 className="mt-5 max-w-lg font-display text-5xl font-bold uppercase leading-[0.92] md:text-7xl">
              From blank page to bold launch<span className="text-brand">.</span>
            </h2>
          </div>
          <ol className="border-t border-foreground/20">
            {services.map((service, index) => (
              <li key={service} className="flex items-center justify-between border-b border-foreground/20 py-5 md:py-6">
                <span className="font-display text-xl font-semibold md:text-3xl">{service}</span>
                <span className="text-xs text-muted-foreground">0{index + 1}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className="border-y border-foreground/15 bg-soft px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-screen-2xl gap-12 md:grid-cols-[1fr_2fr]">
          <span className="text-xs font-semibold uppercase text-brand">Small studio. Full attention.</span>
          <p className="font-display text-3xl font-semibold leading-tight md:text-6xl">
            We partner with brands that care how they show up. No templates, no layers of account management—just clear thinking and craft from first idea to final pixel.
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-ink px-5 pb-8 pt-20 text-paper md:px-10 md:pt-28">
        <div className="mx-auto max-w-screen-2xl">
          <span className="text-xs font-semibold uppercase text-brand">Have something in mind?</span>
          <h2 className="mt-7 max-w-6xl font-display text-[clamp(3.5rem,10vw,10rem)] font-bold uppercase leading-[0.82]">
            Let’s make it real<span className="text-brand">.</span>
          </h2>
          <p className="mt-10 max-w-md text-sm leading-relaxed text-paper/60">Answer a few quick questions—your brief lands straight in our WhatsApp and we reply the same day.</p>
          <ProjectForm />
          <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-paper/20 pt-5 text-[0.68rem] font-semibold uppercase text-paper/45">
            <span>© 2026 the cloud co.</span>
            <a href="#top" className="transition-colors hover:text-paper">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}