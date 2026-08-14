"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus, Search } from "lucide-react";
import { Logo, Mark } from "@/components/brand";
import { conversations, modes, type StudioMode } from "@/lib/studio";
import { cn } from "@/lib/utils";

export function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const activeMode = (modes.find((m) =>
    m.href === "/studio" ? pathname === "/studio" : pathname.startsWith(m.href),
  )?.id ?? "chat") as StudioMode;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/50 lg:hidden",
          open ? "block" : "hidden",
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-[272px] flex-col border-r border-line bg-ink transition-transform lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Logo href="/" light />
        </div>

        <div className="px-3">
          <Link
            href="/studio"
            className="flex items-center justify-center gap-2 rounded-md bg-white py-2 text-[13px] font-medium text-zinc-950 hover:bg-zinc-200"
          >
            <Plus className="size-3.5" />
            New thread
          </Link>
        </div>

        <div className="mt-6 px-4">
          <p className="px-1 text-[10px] tracking-[0.28em] text-mist uppercase">
            Studios
          </p>
          <nav className="mt-2 space-y-0.5">
            {modes.map((mode) => (
              <Link
                key={mode.id}
                href={mode.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition",
                  activeMode === mode.id
                    ? "bg-gold/10 text-gold-soft"
                    : "text-mist hover:bg-white/5 hover:text-foreground",
                )}
              >
                <span>{mode.label}</span>
                <span className="font-mono text-[10px] opacity-60">
                  {mode.kicker}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex-1 overflow-y-auto px-4 pb-6">
          <p className="flex items-center gap-2 px-1 text-[10px] tracking-[0.28em] text-mist uppercase">
            <Search className="size-3" />
            Threads
          </p>
          <ul className="mt-2 space-y-0.5">
            {conversations.map((c) => (
              <li key={c.id}>
                <Link
                  href={
                    modes.find((m) => m.id === c.mode)?.href ?? "/studio"
                  }
                  onClick={onClose}
                  className="block rounded-xl px-3 py-2.5 hover:bg-white/5"
                >
                  <p className="truncate text-[13px] text-foreground/90">
                    {c.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-mist">
                    {c.mode} · {c.time}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line p-4">
          <div className="flex items-center gap-3 rounded-xl border border-line bg-panel px-3 py-2.5">
            <Mark className="size-8" />
            <div className="min-w-0">
              <p className="truncate text-sm">Sabbir</p>
              <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                House plan
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
