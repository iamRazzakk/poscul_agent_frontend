const quotes = [
  {
    text: "I asked a question, got a research brief, then generated the stills and a landing page in the same thread.",
    name: "Elena Ruiz",
    role: "Product lead",
  },
  {
    text: "Chat didn’t dump me into another app for image or video. That’s the whole point of Poscul.",
    name: "Marcus Tan",
    role: "Founder",
  },
  {
    text: "One prompt built the first version of our site. We edited copy in chat and republished.",
    name: "David Kim",
    role: "Marketing",
  },
];

export function Testimonials() {
  return (
    <section className="px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">Stories</p>
        <h2 className="grad-text font-display mt-6 text-[42px] italic sm:text-[64px]">
          Built for people{" "}
          <span className="font-ui not-italic">who ship</span>
        </h2>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-[#1e3a5f] bg-[#0b1a30] p-8"
            >
              <p className="font-display text-[22px] leading-8 italic">
                “{q.text}”
              </p>
              <footer className="mt-8">
                <p className="font-medium">{q.name}</p>
                <p className="text-[13px] text-[#93a4c0]">{q.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
