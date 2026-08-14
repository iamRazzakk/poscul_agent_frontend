"use client";

import { useState } from "react";
import { Globe } from "lucide-react";

const stages = [
  "Reading the brief",
  "Setting type and color",
  "Composing layout",
  "Writing the copy",
  "Opening the rooms",
];

function SitePreview({ prompt }: { prompt: string }) {
  const pottery =
    /potter|kyoto|clay|ceramic|atelier/i.test(prompt) || !prompt;
  return pottery ? (
    <div className="min-h-[520px] bg-[#f3eee6] text-[#1c1914]">
      <div className="flex items-center justify-between px-8 py-5 text-[10px] tracking-[0.32em] uppercase text-[#8a7a5a]">
        <span>Kurogama</span>
        <span>Kyoto · Visit</span>
      </div>
      <div className="px-8 pb-10">
        <p className="font-serif text-5xl leading-[0.95]">
          Clay, fire,
          <br />
          <em>and quiet.</em>
        </p>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#5c5348]">
          A pottery house for vessels that hold light. Thrown slowly. Fired
          once. Meant to last longer than the room they sit in.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/studio/landscape.jpg"
            alt=""
            className="h-40 w-full rounded-xl object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/studio/still.jpg"
            alt=""
            className="h-40 w-full rounded-xl object-cover"
          />
        </div>
        <button
          type="button"
          className="mt-8 rounded-full bg-[#1c1914] px-5 py-2.5 text-[11px] tracking-[0.2em] text-[#f3eee6] uppercase"
        >
          The kiln calendar
        </button>
      </div>
    </div>
  ) : (
    <div className="min-h-[520px] bg-[#0c0c0e] text-[#f6f1e8]">
      <div className="flex items-center justify-between px-8 py-5 text-[10px] tracking-[0.32em] uppercase text-[#d4a853]">
        <span>Maison Noir</span>
        <span>Fragrance</span>
      </div>
      <div className="px-8 pb-10">
        <p className="font-serif text-5xl leading-[0.95]">
          The night
          <br />
          <em className="text-[#e8d5a3]">already knows.</em>
        </p>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#a8a29a]">
          Cedar, black tea, wet stone. A bottle for rooms that refuse to be
          photographed.
        </p>
        <div className="mt-8 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/studio/portrait.jpg"
            alt=""
            className="h-52 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export function SiteView() {
  const [prompt, setPrompt] = useState(
    "A one-page site for a Kyoto pottery atelier. Quiet, paper, fire, no hype.",
  );
  const [step, setStep] = useState(stages.length);
  const [busy, setBusy] = useState(false);
  const [built, setBuilt] = useState(true);
  const [live, setLive] = useState(prompt);

  function build() {
    if (!prompt.trim() || busy) return;
    setBusy(true);
    setBuilt(false);
    setStep(0);
    let i = 0;
    const tick = window.setInterval(() => {
      i += 1;
      setStep(i);
      if (i >= stages.length) {
        window.clearInterval(tick);
        setLive(prompt);
        setBusy(false);
        setBuilt(true);
      }
    }, 450);
  }

  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="flex w-full flex-col border-b border-line bg-ink p-5 lg:w-[380px] lg:border-r lg:border-b-0">
        <p className="flex items-center gap-2 text-[11px] tracking-[0.32em] text-gold uppercase">
          <Globe className="size-3.5" />
          Site studio
        </p>
        <h1 className="mt-3 font-serif text-3xl leading-tight">
          A website from one sentence.
        </h1>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={7}
          className="mt-6 w-full resize-none rounded-2xl border border-line bg-panel px-4 py-3 text-sm leading-relaxed outline-none focus:border-gold/40"
        />
        <ol className="mt-6 space-y-2">
          {stages.map((label, i) => (
            <li key={label} className="flex items-center gap-3 text-[13px]">
              <span
                className={`size-1.5 rounded-full ${i < step ? "bg-gold" : "bg-white/15"}`}
              />
              <span className={i < step ? "text-foreground" : "text-mist"}>
                {label}
              </span>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={build}
          disabled={busy}
          className="mt-auto rounded-full bg-gold py-3 text-[12px] font-medium tracking-[0.2em] text-void uppercase transition hover:bg-gold-soft disabled:opacity-50"
        >
          {busy ? "Building…" : "Build the site"}
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto bg-void p-4 sm:p-8">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[1.2rem] border border-line shadow-2xl">
          <div className="flex items-center gap-2 border-b border-line bg-panel px-4 py-2.5">
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] tracking-[0.18em] text-mist uppercase">
              preview · live
            </span>
          </div>
          {built ? (
            <SitePreview prompt={live} />
          ) : (
            <div className="flex min-h-[520px] items-center justify-center bg-ink text-sm text-mist">
              Composing the rooms
              <span className="animate-blink ml-1 text-gold">▍</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
