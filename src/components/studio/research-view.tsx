"use client";

import { useState } from "react";
import { Composer } from "@/components/studio/composer";
import { BookOpen, Globe, Quote } from "lucide-react";

const steps = [
  "Scoping the question",
  "Reading primary sources",
  "Cross-checking citations",
  "Composing the brief",
];

const sources = [
  { title: "Outrageously Large Neural Networks", year: "2017", kind: "Paper" },
  { title: "Switch Transformers", year: "2021", kind: "Paper" },
  { title: "Mixtral of Experts", year: "2024", kind: "Release" },
  { title: "DeepSeek-V3 technical report", year: "2025", kind: "Report" },
];

export function ResearchView() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(true);
  const [step, setStep] = useState(3);
  const [query, setQuery] = useState(
    "How did mixture-of-experts evolve from 2017 to 2026, and what actually shipped?",
  );

  function onSend(value: string) {
    setQuery(value);
    setDone(false);
    setRunning(true);
    setStep(0);
    let i = 0;
    const tick = window.setInterval(() => {
      i += 1;
      setStep(i);
      if (i >= steps.length) {
        window.clearInterval(tick);
        setRunning(false);
        setDone(true);
      }
    }, 700);
  }

  return (
    <div className="flex h-full">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-8">
          <div className="mx-auto max-w-2xl">
            <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
              Deep research
            </p>
            <h1 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              {query}
            </h1>

            <ol className="mt-8 space-y-3">
              {steps.map((label, i) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <span
                    className={`size-1.5 rounded-full ${
                      i <= step ? "bg-gold" : "bg-line"
                    }`}
                  />
                  <span className={i <= step ? "text-foreground" : "text-mist"}>
                    {label}
                    {running && i === step ? (
                      <span className="animate-blink ml-2 text-gold">▍</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ol>

            {done ? (
              <article className="mt-10 space-y-5 text-[15px] leading-7 text-foreground/90">
                <p>
                  Mixture-of-experts began as a way to grow capacity without
                  growing compute in lockstep. Shazeer et al. (2017) made the
                  idea operational: sparse gating, many experts, a router that
                  pays only for the ones it uses.
                </p>
                <p>
                  Switch Transformers (2021) simplified the route — one expert
                  per token — and made MoE a training recipe, not a curiosity.
                  Mixtral (2024) proved the recipe could feel like a dense
                  model in product. By 2025–26, sparse routing is the default
                  path for frontier scale, with the live debate now about
                  stability, expert specialization, and whether the router
                  should be learned or scheduled.
                </p>
                <blockquote className="border-l border-gold/50 pl-4 font-serif text-xl italic text-gold-soft">
                  The insight was never “more parameters.” It was paying for
                  thought only where the token needs it.
                </blockquote>
                <p>
                  What shipped: open sparse models you can actually run,
                  closed models that no longer advertise dense size, and a
                  research line that treats routing as the new architecture
                  surface — not an optimization trick.
                </p>
              </article>
            ) : null}
          </div>
        </div>
        <Composer
          placeholder="Ask for a brief — with sources, not a search page…"
          onSend={onSend}
          busy={running}
        />
      </div>
      <aside className="hidden w-80 shrink-0 overflow-y-auto border-l border-line bg-ink p-5 xl:block">
        <p className="flex items-center gap-2 text-[11px] tracking-[0.24em] text-mist uppercase">
          <BookOpen className="size-3.5" />
          Source trail
        </p>
        <ul className="mt-4 space-y-2">
          {sources.map((s) => (
            <li
              key={s.title}
              className="rounded-xl border border-line bg-panel p-3"
            >
              <p className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-gold uppercase">
                <Globe className="size-3" />
                {s.kind} · {s.year}
              </p>
              <p className="mt-2 text-sm leading-snug">{s.title}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-mist">
          <Quote className="mt-0.5 size-3.5 shrink-0 text-gold" />
          Citations are composed into the brief. Nothing is dumped as a link
          farm.
        </p>
      </aside>
    </div>
  );
}
