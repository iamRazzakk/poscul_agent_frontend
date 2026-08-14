import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    src: "/studio/still.jpg",
    name: "Product Still Engine",
    desc: "Campaign-ready stills from a one-line spec; cut art-direction time by 38%.",
    deliverables: "Image studio, prompt kits, brand ratios",
    industry: "SaaS",
  },
  {
    src: "/studio/arch.jpg",
    name: "Atelier Site, One Prompt",
    desc: "A live one-page site composed from a sentence — layout, type, and copy.",
    deliverables: "Site studio, live preview, copy",
    industry: "Brand",
  },
  {
    src: "/studio/video.jpg",
    name: "Night Drive Film",
    desc: "10-second anamorphic clip directed from chat, same thread as the stills.",
    deliverables: "Video studio, camera, duration",
    industry: "Media",
  },
  {
    src: "/studio/landscape.jpg",
    name: "Research Brief, Cited",
    desc: "Multi-hop reading returned as a sendable memo, not a dump of links.",
    deliverables: "Deep research, source trail",
    industry: "Strategy",
  },
];

export function Works() {
  return (
    <section id="works" className="px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">Featured Works</p>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="grad-text font-display text-[42px] italic sm:text-[64px]">
            Featured WOW{" "}
            <span className="font-ui not-italic">Projects</span>
          </h2>
          <p className="max-w-md text-[15px] leading-7 text-[#999]">
            Real outputs from Poscul studios — image, video, research, and
            sites, shipped from one thread.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {works.map((w) => (
            <article
              key={w.name}
              className="group overflow-hidden rounded-2xl border border-[#333]"
            >
              <div className="relative h-64 overflow-hidden sm:h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.src}
                  alt={w.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <Link
                  href="/studio"
                  className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-black"
                >
                  View Project <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <h3 className="text-[22px] font-medium">{w.name}</h3>
                <div className="space-y-3 text-[13px] text-[#999]">
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
