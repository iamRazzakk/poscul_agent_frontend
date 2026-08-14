const services = [
  {
    n: "01",
    title: "Chat with Models",
    body: "One thread across GPT, Claude, Gemini, and open models. Context stays when you switch.",
    tags: ["Multi-model", "Long context", "Code & copy"],
  },
  {
    n: "02",
    title: "Deep Research",
    body: "Ask a real question. Poscul reads sources, follows citations, and returns a brief you can send.",
    tags: ["Citations", "Source trail", "Eval-ready briefs"],
  },
  {
    n: "03",
    title: "Image Generation",
    body: "Product stills, UI frames, campaign art. Set ratio and style, then iterate in the same thread.",
    tags: ["Aspect control", "House style", "Prompt history"],
  },
  {
    n: "04",
    title: "Video Generation",
    body: "Turn a sentence into a clip. Duration, camera, and motion — without leaving the workspace.",
    tags: ["5–15s clips", "Camera", "Motion boards"],
  },
  {
    n: "05",
    title: "Website from One Prompt",
    body: "Describe the page. Get layout, type, and copy as a live preview — a first version you can actually use.",
    tags: ["Live preview", "Brand voice", "Responsive structure"],
  },
];

export function Services() {
  return (
    <section id="services" className="px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">Services</p>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="grad-text font-display max-w-xl text-[42px] leading-[1.1] italic sm:text-[64px]">
            End-to-End{" "}
            <span className="font-ui not-italic">AI Services</span>
          </h2>
          <p className="max-w-md text-[15px] leading-7 text-[#999]">
            We turn ambiguous ideas into production features — chat, research,
            generation, and sites in one agent workspace.
          </p>
        </div>

        <div className="mt-16 divide-y divide-[#333] border-y border-[#333]">
          {services.map((s) => (
            <article
              key={s.n}
              className="grid gap-4 py-10 md:grid-cols-[80px_1fr_1.2fr] md:items-start md:gap-10"
            >
              <p className="font-display text-[28px] italic text-[#666]">
                ({s.n})
              </p>
              <h3 className="text-[28px] font-medium tracking-tight sm:text-[32px]">
                {s.title}
              </h3>
              <div>
                <p className="text-[15px] leading-7 text-[#999]">{s.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[#333] px-3 py-1 text-[12px] text-[#999]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
