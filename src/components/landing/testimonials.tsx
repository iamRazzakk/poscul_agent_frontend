const quotes = [
  {
    text: "We shipped the first copilot flow in days, not quarters. The research brief and the site lived in the same thread.",
    name: "Elena Ruiz",
    role: "VP Product, Cantos",
  },
  {
    text: "Latency stayed under 300ms on p95 for chat. Image and video didn’t kick us into another app.",
    name: "Marcus Tan",
    role: "CTO, VectorPay",
  },
  {
    text: "The best workspace we’ve used for agentic work — planning, tools, and a page we could actually publish.",
    name: "David Kim",
    role: "Director, Northway",
  },
];

export function Testimonials() {
  return (
    <section className="px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">Testimonials</p>
        <h2 className="grad-text font-display mt-6 text-[42px] italic sm:text-[64px]">
          What our{" "}
          <span className="font-ui not-italic">clients say</span>
        </h2>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-[#333] p-8"
            >
              <p className="font-display text-[22px] leading-8 italic">
                “{q.text}”
              </p>
              <footer className="mt-8">
                <p className="font-medium">{q.name}</p>
                <p className="text-[13px] text-[#999]">{q.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
