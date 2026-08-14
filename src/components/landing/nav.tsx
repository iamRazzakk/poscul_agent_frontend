"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/brand";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
      <div className="hero-nav-in pointer-events-auto flex w-full max-w-[920px] items-center justify-between rounded-full border border-white/70 bg-white/75 px-2 py-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <Logo className="pl-2" />
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-jakarta text-[14px] font-medium transition-colors ${
                  link.label === "Home"
                    ? "text-[#1aa7a1]"
                    : "text-zinc-700 hover:text-zinc-950"
                }`}
              >
                {link.label}
              </Link>
            ))}
        </nav>
        <div className="flex items-center gap-1">
          <Link
            href="/studio"
            className="rounded-full bg-[#1a1a1a] px-4 py-2.5 text-[13px] font-medium text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:bg-black"
          >
            Start a Project
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-zinc-800 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="pointer-events-auto absolute top-[72px] left-4 right-4 rounded-3xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-[15px] text-zinc-800"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
