"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What’s the typical timeline from idea to v1?",
    a: "A first site, still, or research brief can land in the same session. Full product copilots still take a focused sprint — most teams see a usable v1 in days, not quarters.",
  },
  {
    q: "What do we need to start?",
    a: "An email and a problem statement. No credit card on Starter. Bring sample copy, a brand hint, or a research question — that’s enough for the first thread.",
  },
  {
    q: "Which models and stack do you use?",
    a: "Frontier chat models, research with citations, image and video engines, and a site composer. Switch models inside one thread without losing context.",
  },
  {
    q: "Are model and API costs included in pricing?",
    a: "Starter and Pro include generation quotas. Heavy video and research on Team can add usage — we’ll show it before you run, not as a surprise invoice.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">FAQs</p>
        <h2 className="grad-text font-display mt-6 text-[42px] italic sm:text-[64px]">
          Frequently asked{" "}
          <span className="font-ui not-italic">questions</span>
        </h2>
        <div className="mt-12 divide-y divide-[#333] border-y border-[#333]">
          {faqs.map((item, i) => {
            const active = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[18px] font-medium sm:text-[22px]">
                    {item.q}
                  </span>
                  <Plus
                    className={`size-5 shrink-0 transition ${active ? "rotate-45" : ""}`}
                  />
                </button>
                {active ? (
                  <p className="max-w-3xl pb-6 text-[15px] leading-7 text-[#999]">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
