export function Stats() {
  return (
    <section className="px-5 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 rounded-2xl border border-[#1e3a5f] bg-gradient-to-b from-[#0b1a30] to-[#07111f] p-8 md:grid-cols-2 md:p-14">
        <div>
          <p className="section-kicker">Why Poscul</p>
          <h2 className="grad-text font-display mt-6 text-[40px] italic sm:text-[56px]">
            Stop hopping{" "}
            <span className="font-ui not-italic">between six tools</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-[#93a4c0]">
            Chat, research, image, video, and a website — one workspace so
            the brief never gets lost in another tab.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:self-end">
          {[
            ["5", "Studios"],
            ["1", "Prompt to a site"],
            ["12+", "Models"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="text-[12px] tracking-wide text-[#60a5fa] uppercase">
                {l}
              </dt>
              <dd className="font-display mt-2 text-[44px] italic">{n}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
