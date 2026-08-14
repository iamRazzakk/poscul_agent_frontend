"use client";

import { useState } from "react";
import { Clapperboard, Play } from "lucide-react";

const durations = ["5s", "10s", "15s"];

export function VideoView() {
  const [prompt, setPrompt] = useState(
    "A dark coupe on rain-soaked neon streets, anamorphic flare, slow push-in",
  );
  const [duration, setDuration] = useState("10s");
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(true);

  function generate() {
    setBusy(true);
    setReady(false);
    window.setTimeout(() => {
      setBusy(false);
      setReady(true);
    }, 1600);
  }

  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="flex min-h-0 flex-1 items-center justify-center p-6">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-[1.6rem] border border-line bg-ink shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/studio/video.jpg"
            alt="Generated film still"
            className={`aspect-video w-full object-cover ${busy ? "opacity-40" : ""}`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {busy ? (
              <p className="rounded-full border border-gold/30 bg-void/70 px-5 py-2 text-[12px] tracking-[0.22em] text-gold uppercase backdrop-blur-md">
                Directing {duration}
                <span className="animate-blink">▍</span>
              </p>
            ) : ready ? (
              <button
                type="button"
                className="grid size-16 place-items-center rounded-full border border-gold/40 bg-void/50 text-gold backdrop-blur-md transition hover:bg-gold hover:text-void"
                aria-label="Play"
              >
                <Play className="size-6 fill-current" />
              </button>
            ) : null}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-void via-void/40 to-transparent p-5">
            <div>
              <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
                Video studio · {duration} · anamorphic
              </p>
              <p className="mt-1 max-w-md text-sm text-foreground/90">
                {prompt}
              </p>
            </div>
            <Clapperboard className="size-5 text-gold-soft" />
          </div>
        </div>
      </div>

      <aside className="w-full shrink-0 border-t border-line bg-ink p-5 lg:w-96 lg:border-t-0 lg:border-l">
        <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
          Direction
        </p>
        <h1 className="mt-2 font-serif text-3xl">Motion from a sentence</h1>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={6}
          className="mt-6 w-full resize-none rounded-2xl border border-line bg-panel px-4 py-3 text-sm leading-relaxed outline-none focus:border-gold/40"
        />
        <p className="mt-5 text-[11px] tracking-[0.24em] text-mist uppercase">
          Duration
        </p>
        <div className="mt-2 flex gap-2">
          {durations.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDuration(d)}
              className={`rounded-full px-3 py-1.5 text-[12px] ${
                duration === d
                  ? "bg-gold text-void"
                  : "border border-line text-mist"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="mt-6 space-y-2 text-sm text-mist">
          <p>Camera · slow push-in</p>
          <p>Weather · rain, neon wet-down</p>
          <p>Grain · 35mm, mild</p>
        </div>
        <button
          type="button"
          onClick={generate}
          disabled={busy}
          className="mt-8 w-full rounded-full bg-gold py-3 text-[12px] font-medium tracking-[0.2em] text-void uppercase transition hover:bg-gold-soft disabled:opacity-50"
        >
          {busy ? "Rendering…" : "Generate film"}
        </button>
      </aside>
    </div>
  );
}
