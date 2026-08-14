import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    for: "For individuals",
    price: "$0",
    period: "/ month",
    blurb: "Prove the workflow. Chat, a handful of stills, one site draft.",
    features: [
      "50 chat messages / day",
      "10 images / month",
      "1 site draft",
      "Open + GPT-class models",
    ],
  },
  {
    name: "Pro Plan",
    for: "For daily work",
    price: "$20",
    period: "/ month",
    blurb: "All studios unlocked — research, image, video, unlimited sites.",
    features: [
      "Everything in Starter",
      "Deep research",
      "Image + video generation",
      "Unlimited site drafts",
    ],
    featured: true,
  },
  {
    name: "Team Plan",
    for: "For organisations",
    price: "$30",
    period: "/ user / mo",
    blurb: "Shared threads, brand kits, SSO — compliance-ready delivery.",
    features: [
      "Everything in Pro",
      "Shared workspace",
      "Brand kits",
      "SSO and admin",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">Pricing Plans</p>
        <h2 className="grad-text font-display mt-6 max-w-3xl text-[42px] italic sm:text-[64px]">
          From pilot to enterprise,{" "}
          <span className="font-ui not-italic">clear scope.</span>
        </h2>
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.featured
                  ? "border-white bg-white text-black"
                  : "border-[#333] bg-[#0a0a0a]"
              }`}
            >
              <p className="text-[13px] text-[#999]">{p.for}</p>
              <h3 className="mt-2 text-[22px] font-medium">{p.name}</h3>
              <p className="mt-6 font-display text-[56px] italic leading-none">
                {p.price}
                <span className="ml-1 font-ui text-[16px] not-italic opacity-60">
                  {p.period}
                </span>
              </p>
              <p
                className={`mt-4 text-[14px] leading-6 ${p.featured ? "text-[#444]" : "text-[#999]"}`}
              >
                {p.blurb}
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[14px]">
                    <Check className="mt-0.5 size-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`mt-10 inline-flex justify-center rounded-full px-5 py-3 text-[14px] font-medium ${
                  p.featured
                    ? "bg-black text-white"
                    : "border border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                Get Started
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
