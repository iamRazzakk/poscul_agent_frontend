"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/studio/sidebar";
import { modes, type StudioMode } from "@/lib/studio";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function StudioShell({
  mode,
  children,
}: {
  mode: StudioMode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="studio-root dark flex h-dvh overflow-hidden bg-void text-foreground">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center gap-3 border-b border-line px-4 lg:px-6">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid size-9 place-items-center rounded-full border border-line text-mist lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu className="size-4" />
          </button>
          <nav className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
            {modes.map((m) => (
              <Link
                key={m.id}
                href={m.href}
                className={cn(
                  "shrink-0 rounded-md px-3 py-1.5 text-[13px] transition",
                  m.id === mode
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                {m.label}
              </Link>
            ))}
          </nav>
        </header>
        <div className="min-h-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
