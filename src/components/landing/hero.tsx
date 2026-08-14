import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

function Tile({
  className,
  rot,
  children,
}: {
  className: string;
  rot: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`hero-tile absolute grid size-[52px] place-items-center rounded-[14px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] ${className}`}
      style={{ "--tile-rot": rot } as CSSProperties}
    >
      {children}
    </span>
  );
}

function DemandAccent() {
  return (
    <span className="relative ml-2 inline-flex h-[52px] w-[118px] align-middle sm:h-[58px] sm:w-[132px]">
      <span className="hero-pill absolute inset-0 rounded-full bg-gradient-to-r from-[#ff6a2b] via-[#ff3d1a] to-[#e01800]" />
      <Tile className="-top-7 left-1" rot="-18deg">
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
          <path fill="#E01E5A" d="M6 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          <path fill="#36C5F0" d="M12 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          <path fill="#2EB67D" d="M18 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          <path fill="#ECB22E" d="M12 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
      </Tile>
      <Tile className="hero-tile-2 -top-1 left-[38px]" rot="8deg">
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
          <rect width="24" height="24" rx="6" fill="#F24E1E" />
          <path
            fill="#fff"
            d="M7 7h4.2v4.2H7V7Zm5.8 0H17v4.2h-4.2V7ZM7 12.8h4.2V17H7v-4.2Zm5.8 2.1c0-1.16.94-2.1 2.1-2.1s2.1.94 2.1 2.1-.94 2.1-2.1 2.1-2.1-.94-2.1-2.1Z"
          />
        </svg>
      </Tile>
      <Tile className="hero-tile-3 top-6 left-[72px]" rot="16deg">
        <span className="grid size-8 place-items-center rounded-lg bg-[#5b5fc7] text-[11px] font-bold text-white">
          in
        </span>
      </Tile>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28">
      <div className="absolute inset-0 bg-[#ececee]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 8% 35%, rgba(0,0,0,0.07), transparent 55%), radial-gradient(ellipse 50% 40% at 18% 78%, rgba(0,0,0,0.05), transparent 50%)",
        }}
      />
      <div className="hero-blob pointer-events-none absolute inset-y-0 right-0 w-[58%] max-w-none will-change-transform">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-silk.jpg"
          alt=""
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ececee] via-[#ececee]/55 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="hero-in inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3.5 py-1.5 text-[13px] font-medium text-[#1aa7a1] shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
          <Sparkles className="size-3.5 fill-[#1aa7a1] text-[#1aa7a1]" />
          AI-Driven Agency
        </p>

        <h1 className="hero-in hero-in-1 font-jakarta mt-7 text-[42px] leading-[1.05] font-extrabold tracking-[-0.045em] text-[#111] sm:text-[64px] lg:text-[84px]">
          Your AI Sprint Team
          <span className="mt-1 flex flex-wrap items-center justify-center gap-x-1">
            on Demand
            <DemandAccent />
          </span>
        </h1>

        <p className="hero-in hero-in-2 mt-6 max-w-xl text-[15px] leading-7 text-zinc-500 sm:text-[16px]">
          From discovery to deployment, we plug into your stack to prototype,
          validate, and launch AI experiences your users actually love.
        </p>

        <div className="hero-in hero-in-3 mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#services"
            className="rounded-full bg-[#1a1a1a] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)] hover:bg-black"
          >
            Explore Services
          </Link>
          <Link
            href="#pricing"
            className="rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-[15px] font-medium text-zinc-900 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:bg-zinc-50"
          >
            View Pricing Plans
          </Link>
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll absolute bottom-6 left-1/2 z-10 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-4 py-2 text-[12px] text-zinc-600 backdrop-blur-md"
      >
        Scroll for more
        <ArrowDown className="size-3.5" />
      </a>
    </section>
  );
}
