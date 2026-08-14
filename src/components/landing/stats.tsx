export function Stats() {
  return (
    <section className="px-5 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 rounded-2xl border border-[#333] bg-gradient-to-b from-[#1f1f1f] to-black p-8 md:grid-cols-2 md:p-14">
        <div>
          <p className="section-kicker">Statistic</p>
          <h2 className="grad-text font-display mt-6 text-[40px] italic sm:text-[56px]">
            Human-centered AI,{" "}
            <span className="font-ui not-italic">built for production</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-[#999]">
            Teams use Poscul to go from a messy brief to a still, a clip, and
            a live page in one sitting — without bouncing between six tools.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:self-end">
          {[
            ["230K", "Threads this year"],
            ["95%", "Uptime for key flows"],
            ["99%", "On-time renders"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="text-[12px] tracking-wide text-[#666] uppercase">
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
