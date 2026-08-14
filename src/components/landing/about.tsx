import Link from "next/link";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-[#1e3a5f] bg-gradient-to-b from-[#0b1a30] to-[#07111f] px-5 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">About Poscul</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <h2 className="grad-text font-display text-[40px] leading-[1.1] italic tracking-[-0.04em] sm:text-[64px] sm:leading-[1.05] lg:text-[72px]">
            Five studios.{" "}
            <span className="font-ui not-italic">One AI workspace.</span>
          </h2>
          <div>
            <p className="text-[15px] leading-7 text-[#93a4c0]">
              Poscul is built for people who need more than a chatbot. Chat
              with AI, run deep research, generate images and video, then
              ship a website from a single prompt — without switching tools.
            </p>
            <blockquote className="mt-10 border-l border-[#3b82f6] pl-5">
              <p className="font-display text-[22px] leading-8 italic text-white">
                “Ask once. Chat, research, render, and publish in the same
                thread.”
              </p>
            </blockquote>
            <Link href="/studio" className="theme-btn mt-10">
              Open studio
            </Link>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["Chat", "Talk to AI models"],
            ["Research", "Deep briefs + sources"],
            ["Media", "Image & video"],
            ["Sites", "From one prompt"],
          ].map(([stat, label], i) => (
            <div
              key={label}
              className={`flex h-[180px] flex-col justify-between rounded-2xl border border-[#1e3a5f] bg-[#0b1a30] p-6 ${
                i % 2 === 1 ? "sm:mt-8" : ""
              }`}
            >
              <dt className="text-[13px] text-[#93a4c0]">{label}</dt>
              <dd className="font-display text-[36px] italic leading-none text-white">
                {stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
