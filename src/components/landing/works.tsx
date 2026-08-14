import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    src: "/studio/still.jpg",
    name: "Image generation",
    desc: "Product stills and campaign frames from one prompt.",
    deliverables: "Image studio",
    industry: "Create",
    href: "/studio/image",
  },
  {
    src: "/studio/arch.jpg",
    name: "Website from one prompt",
    desc: "A live page — layout, type, and copy — from a single sentence.",
    deliverables: "Site studio",
    industry: "Publish",
    href: "/studio/site",
  },
  {
    src: "/studio/video.jpg",
    name: "Video generation",
    desc: "A 10-second clip directed from chat: camera, weather, motion.",
    deliverables: "Video studio",
    industry: "Motion",
    href: "/studio/video",
  },
  {
    src: "/studio/landscape.jpg",
    name: "Deep research",
    desc: "A cited brief you can send — not a dump of search links.",
    deliverables: "Research studio",
    industry: "Insight",
    href: "/studio/research",
  },
];

export function Works() {
  return (
    <section id="works" className="px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">Featured Works</p>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="grad-text font-display text-[42px] italic sm:text-[64px]">
            Made in{" "}
            <span className="font-ui not-italic">the studios</span>
          </h2>
          <p className="max-w-md text-[15px] leading-7 text-[#93a4c0]">
            Image, video, research, and sites — all generated inside Poscul.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {works.map((w) => (
            <article
              key={w.name}
              className="group overflow-hidden rounded-2xl border border-[#1e3a5f] bg-[#0b1a30]"
            >
              <div className="relative h-64 overflow-hidden sm:h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.src}
                  alt={w.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <Link
                  href={w.href}
                  className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-[#3b82f6] px-3 py-1.5 text-[12px] font-medium text-white"
                >
                  View Project <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <h3 className="text-[22px] font-medium">{w.name}</h3>
                <div className="space-y-3 text-[13px] text-[#93a4c0]">
                  <p>
                    <span className="text-white">Description. </span>
                    {w.desc}
                  </p>
                  <p>
                    <span className="text-white">Deliverables. </span>
                    {w.deliverables}
                  </p>
                  <p>
                    <span className="text-white">Industry. </span>
                    {w.industry}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
