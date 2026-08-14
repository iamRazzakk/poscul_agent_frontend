const items = [
  {
    title: "Chat with AI",
    body: "One composer for GPT, Claude, Gemini, and open models. The thread is the source of truth.",
  },
  {
    title: "Deep research",
    body: "Multi-hop reading with citations. You get a brief, not a search page.",
  },
  {
    title: "Image generation",
    body: "Directed stills with ratio and style. Iterate without leaving chat.",
  },
  {
    title: "Video generation",
    body: "Clips from a sentence — duration, camera, and motion in one panel.",
  },
  {
    title: "Website from a prompt",
    body: "Layout, type, and copy as a live preview. One sentence in, a page out.",
  },
  {
    title: "All in one thread",
    body: "Switch studios without losing the brief. Chat, research, render, publish.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">Features</p>
        <h2 className="grad-text font-display mt-6 text-[42px] italic sm:text-[64px]">
          All five{" "}
          <span className="font-ui not-italic">in one place</span>
        </h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#1e3a5f] bg-[#1e3a5f] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="bg-[#07111f] p-8">
              <h3 className="text-[20px] font-medium">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-[#93a4c0]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
