const steps = [
  {
    n: "01 / 03",
    time: "Minutes",
    title: "Discover & Scope",
    body: "Start a thread. Name the problem, the model, and the output — chat, brief, still, clip, or site.",
  },
  {
    n: "02 / 03",
    time: "Same session",
    title: "Prototype",
    body: "Generate in-place. Switch studios without losing context. Iterate like a design tool, not a chat dump.",
  },
  {
    n: "03 / 03",
    time: "Ship",
    title: "Validate & Publish",
    body: "Keep the brief, the still, and the live preview in one file. Send, export, or open the site.",
  },
];

export function Process() {
  return (
    <section className="border-y border-[#1f1f1f] bg-gradient-to-b from-[#1f1f1f] via-black to-[#1f1f1f] px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">Process</p>
        <h2 className="grad-text font-display mt-6 text-[42px] italic sm:text-[64px]">
          From Idea{" "}
          <span className="font-ui not-italic">to Production</span>
        </h2>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="flex min-h-[280px] flex-col justify-between rounded-2xl border border-[#4d4d4d] p-8"
            >
              <div className="flex items-start justify-between text-[13px] text-[#999]">
                <span>{s.n}</span>
                <span>{s.time}</span>
              </div>
              <div>
                <h3 className="text-[26px] font-medium">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#999]">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
