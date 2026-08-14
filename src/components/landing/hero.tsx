import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowDown,
  Clapperboard,
  Globe,
  ImageIcon,
  MessageSquare,
  Sparkles,
} from "lucide-react";

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
      className={`hero-tile absolute grid size-[52px] place-items-center rounded-[14px] bg-white shadow-[0_12px_30px_rgba(0,20,60,0.28)] ${className}`}
      style={{ "--tile-rot": rot } as CSSProperties}
    >
      {children}
    </span>
  );
}

function DemandAccent() {
  return (
    <span className="relative ml-2 inline-flex h-[52px] w-[118px] align-middle sm:h-[58px] sm:w-[132px]">
      <span className="hero-pill absolute inset-0 rounded-full bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#38bdf8]" />
      <Tile className="-top-7 left-1" rot="-18deg">
        <MessageSquare className="size-5 text-[#2563eb]" />
      </Tile>
      <Tile className="hero-tile-2 -top-1 left-[38px]" rot="8deg">
        <ImageIcon className="size-5 text-[#0ea5e9]" />
      </Tile>
      <Tile className="hero-tile-3 top-6 left-[72px]" rot="16deg">
        <Globe className="size-5 text-[#1d4ed8]" />
      </Tile>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28">
      <div className="absolute inset-0 bg-[#07111f]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#1d4ed8]/25 blur-[120px]" />
      <div className="hero-blob pointer-events-none absolute -right-24 top-10 h-[560px] w-[560px] rounded-full bg-[#0ea5e9]/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[360px] w-[360px] rounded-full bg-[#1e3a8a]/35 blur-[90px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="hero-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-[#7dd3fc] shadow-[0_6px_24px_rgba(0,20,60,0.25)] backdrop-blur-md">
          <Sparkles className="size-3.5 text-[#60a5fa]" />
          Chat · Research · Image · Video · Sites
        </p>

        <h1 className="hero-in hero-in-1 font-jakarta mt-7 text-[40px] leading-[1.08] font-extrabold tracking-[-0.045em] text-white sm:text-[60px] lg:text-[78px]">
          Chat with AI. Create
          <span className="mt-1 flex flex-wrap items-center justify-center gap-x-1">
            on Demand
            <DemandAccent />
          </span>
        </h1>

        <p className="hero-in hero-in-2 mt-6 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-[16px]">
          Talk to models, run deep research, generate images and video, and
          build a full website from one prompt — all in Poscul.
        </p>

        <div className="hero-in hero-in-3 mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/studio"
            className="rounded-full bg-[#3b82f6] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_28px_rgba(59,130,246,0.4)] hover:bg-[#2563eb]"
          >
            Start chatting
          </Link>
          <Link
            href="#studios"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/10"
          >
            <Clapperboard className="size-4 text-[#60a5fa]" />
            See studios
          </Link>
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll absolute bottom-6 left-1/2 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] text-slate-300 backdrop-blur-md"
      >
        Scroll for more
        <ArrowDown className="size-3.5" />
      </a>
    </section>
  );
}
