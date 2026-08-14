"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What can I do in Poscul?",
    a: "Chat with AI, run deep research, generate images and video, and build a website from one prompt — all in the same workspace.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. Starter includes chat, a set of images, and one website draft. Upgrade when you need research, video, or unlimited sites.",
  },
  {
    q: "Can I switch from chat to image or video?",
    a: "Yes. Stay in the thread and open Image, Video, Research, or Site. The brief stays with you.",
  },
  {
    q: "How does the one-prompt website work?",
    a: "Describe the page in a sentence. Poscul composes layout, type, and copy and shows a live preview you can iterate on.",
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
        <div className="mt-12 divide-y divide-[#1e3a5f] border-y border-[#1e3a5f]">
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
                  <p className="max-w-3xl pb-6 text-[15px] leading-7 text-[#93a4c0]">
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
