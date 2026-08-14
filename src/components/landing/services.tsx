const services = [
  {
    n: "01",
    title: "Chat with AI",
    body: "Have a real conversation with frontier models. Ask, iterate, write code and copy — context stays in the thread.",
    tags: ["GPT · Claude · Gemini", "Long context", "Code & copy"],
  },
  {
    n: "02",
    title: "Deep research",
    body: "Ask a hard question. Poscul reads sources, follows citations, and returns a brief you can actually send.",
    tags: ["Citations", "Source trail", "Send-ready memo"],
  },
  {
    n: "03",
    title: "Generate images",
    body: "Product stills, UI frames, campaign art. Set aspect ratio and style, then iterate from the same prompt.",
    tags: ["1:1 · 16:9 · 9:16", "Style control", "Prompt history"],
  },
  {
    n: "04",
    title: "Generate video",
    body: "Turn a sentence into a clip. Control duration, camera, and motion without leaving the workspace.",
    tags: ["5s · 10s · 15s", "Camera", "Motion"],
  },
  {
    n: "05",
    title: "Make a website",
    body: "Describe the site in one prompt. Get layout, type, and copy as a live preview you can publish.",
    tags: ["One prompt", "Live preview", "Responsive"],
  },
];

export function Services() {
  return (
    <section id="studios" className="px-5 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-kicker">Studios</p>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="grad-text font-display max-w-xl text-[42px] leading-[1.1] italic sm:text-[64px]">
            What you can{" "}
            <span className="font-ui not-italic">do in Poscul</span>
          </h2>
          <p className="max-w-md text-[15px] leading-7 text-[#93a4c0]">
            Chat, deep research, image, video, and a full website — five
            studios, one agent.
          </p>
        </div>

        <div className="mt-16 divide-y divide-[#1e3a5f] border-y border-[#1e3a5f]">
          {services.map((s) => (
            <article
              key={s.n}
              className="grid gap-4 py-10 md:grid-cols-[80px_1fr_1.2fr] md:items-start md:gap-10"
            >
              <p className="font-display text-[28px] italic text-[#60a5fa]">
                ({s.n})
              </p>
              <h3 className="text-[28px] font-medium tracking-tight sm:text-[32px]">
                {s.title}
              </h3>
              <div>
                <p className="text-[15px] leading-7 text-[#93a4c0]">{s.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[#1e3a5f] px-3 py-1 text-[12px] text-[#93a4c0]"
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
