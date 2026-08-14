import Link from "next/link";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-[#1f1f1f] bg-gradient-to-b from-[#1f1f1f] to-black px-5 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">About Us</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <h2 className="grad-text font-display text-[40px] leading-[1.1] italic tracking-[-0.04em] sm:text-[64px] sm:leading-[1.05] lg:text-[80px]">
            Human-Centered AI,{" "}
            <span className="font-ui not-italic">Built for Production</span>
          </h2>
          <div>
            <p className="text-[13px] font-medium text-[#999]">
              Available worldwide
            </p>
            <p className="mt-2 text-[22px] font-medium">Based in Dhaka</p>
            <p className="mt-8 max-w-md text-[15px] leading-7 text-[#999]">
              Trusted by teams shipping AI from idea to production. Chat,
              deep research, image, video, and a full website from a single
              prompt — in one workspace.
            </p>
            <blockquote className="mt-10 border-l border-[#4d4d4d] pl-5">
              <p className="font-display text-[22px] leading-8 italic text-white">
                “Good AI feels obvious — because the hard work is hidden.”
              </p>
              <footer className="mt-3 text-[13px] text-[#999]">
                Poscul product team
              </footer>
            </blockquote>
            <Link href="/studio" className="theme-btn mt-10">
              Start a Project
            </Link>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["12+", "Models in one thread"],
            ["5", "Creative studios"],
            ["8–10", "Weeks idea to v1"],
            ["99%", "Uptime on key flows"],
          ].map(([stat, label], i) => (
            <div
              key={label}
              className={`flex h-[200px] flex-col justify-between rounded-2xl border border-[#4d4d4d] p-6 ${
                i % 2 === 1 ? "sm:mt-8" : ""
              }`}
            >
              <dt className="text-[13px] text-[#999]">{label}</dt>
              <dd className="font-display text-[48px] italic leading-none">
                {stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
