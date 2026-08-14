const items = [
  {
    title: "Agent-Powered Workflows",
    body: "Chat, research, image, video, and sites as one flow — with a clear handoff back to you.",
  },
  {
    title: "Eval-First Quality",
    body: "Research returns sources. Media keeps prompt history. You see why the output looks that way.",
  },
  {
    title: "Private Knowledge",
    body: "Bring the brief into the thread. Poscul treats your context as the source of truth.",
  },
  {
    title: "Human-Centered AI UX",
    body: "Interfaces and error states designed so the smart thing is the obvious thing to do.",
  },
  {
    title: "Secure by Design",
    body: "SSO-ready team plans, audit-friendly threads, and no spoofed identity at the gateway.",
  },
  {
    title: "Seamless Stack",
    body: "The models you already pay for — OpenAI, Anthropic, Google, Flux, Runway — in one composer.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">Features</p>
        <h2 className="grad-text font-display mt-6 text-[42px] italic sm:text-[64px]">
          All Features{" "}
          <span className="font-ui not-italic">in One</span>
        </h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#333] bg-[#333] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="bg-black p-8">
              <h3 className="text-[20px] font-medium">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-[#999]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
