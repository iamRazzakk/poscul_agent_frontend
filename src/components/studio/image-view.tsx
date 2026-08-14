"use client";

import { useState } from "react";
import { gallery } from "@/lib/studio";
import { Download, Ratio, Sparkles } from "lucide-react";

const ratios = ["1:1", "4:3", "3:4", "16:9"];
const styles = ["Editorial", "Architecture", "Product", "Film still"];

export function ImageView() {
  const [prompt, setPrompt] = useState(
    "Brutalist villa at dusk, candlelight, mist in the valley",
  );
  const [ratio, setRatio] = useState("4:3");
  const [style, setStyle] = useState("Architecture");
  const [busy, setBusy] = useState(false);
  const [items, setItems] = useState(gallery);

  function generate() {
    if (!prompt.trim() || busy) return;
    setBusy(true);
    window.setTimeout(() => {
      setItems((prev) => [
        {
          src: prev[0]?.src ?? "/studio/arch.jpg",
          prompt,
          ratio: ratio.replace(":", " / "),
        },
        ...prev,
      ]);
      setBusy(false);
    }, 1200);
  }

  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="min-h-0 flex-1 overflow-y-auto p-5 lg:p-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
              Image studio
            </p>
            <h1 className="mt-2 font-serif text-3xl">Directed stills</h1>
          </div>
          <p className="hidden text-sm text-mist sm:block">House library</p>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
          {items.map((item, i) => (
            <figure
              key={`${item.src}-${i}`}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-[1.2rem] border border-line bg-panel"
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.prompt}
                  className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  style={{ aspectRatio: item.ratio }}
                />
                <button
                  type="button"
                  className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-void/70 text-gold-soft opacity-0 backdrop-blur-md transition group-hover:opacity-100"
                  aria-label="Download"
                >
                  <Download className="size-4" />
                </button>
              </div>
              <figcaption className="px-4 py-3 text-[13px] leading-snug text-mist">
                {item.prompt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <aside className="w-full shrink-0 border-t border-line bg-ink p-5 lg:w-96 lg:border-t-0 lg:border-l">
        <label className="text-[11px] tracking-[0.24em] text-mist uppercase">
          Prompt
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={5}
          className="mt-2 w-full resize-none rounded-2xl border border-line bg-panel px-4 py-3 text-sm leading-relaxed outline-none focus:border-gold/40"
        />
        <p className="mt-5 flex items-center gap-2 text-[11px] tracking-[0.24em] text-mist uppercase">
          <Ratio className="size-3.5" />
          Frame
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {ratios.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRatio(r)}
              className={`rounded-full px-3 py-1.5 text-[12px] tracking-[0.12em] ${
                ratio === r
                  ? "bg-gold text-void"
                  : "border border-line text-mist hover:text-foreground"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
        <p className="mt-5 text-[11px] tracking-[0.24em] text-mist uppercase">
          House style
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {styles.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStyle(s)}
              className={`rounded-full px-3 py-1.5 text-[12px] ${
                style === s
                  ? "bg-gold/15 text-gold-soft"
                  : "border border-line text-mist hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={generate}
          disabled={busy}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-[12px] font-medium tracking-[0.2em] text-void uppercase transition hover:bg-gold-soft disabled:opacity-50"
        >
          <Sparkles className="size-4" />
          {busy ? "Rendering…" : "Generate still"}
        </button>
      </aside>
    </div>
  );
}
