const steps = [
  {
    n: "01 / 03",
    time: "Start",
    title: "Chat with AI",
    body: "Open a thread. Ask anything — copy, code, strategy. Switch models without losing context.",
  },
  {
    n: "02 / 03",
    time: "Create",
    title: "Research & generate",
    body: "Run deep research, then generate the image or video from the same brief.",
  },
  {
    n: "03 / 03",
    time: "Ship",
    title: "Build the website",
    body: "Turn the thread into a live page with one prompt. Preview, then publish.",
  },
];

export function Process() {
  return (
    <section className="border-y border-[#1e3a5f] bg-gradient-to-b from-[#0b1a30] via-[#07111f] to-[#0b1a30] px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">How it works</p>
        <h2 className="grad-text font-display mt-6 text-[42px] italic sm:text-[64px]">
          From a question{" "}
          <span className="font-ui not-italic">to a live site</span>
        </h2>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="flex min-h-[280px] flex-col justify-between rounded-2xl border border-[#1e3a5f] bg-[#07111f] p-8"
            >
              <div className="flex items-start justify-between text-[13px] text-[#60a5fa]">
                <span>{s.n}</span>
                <span>{s.time}</span>
              </div>
              <div>
                <h3 className="text-[26px] font-medium">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#93a4c0]">
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
