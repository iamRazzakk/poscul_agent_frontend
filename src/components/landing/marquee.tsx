const brands = [
  "Chat",
  "Deep research",
  "Image generate",
  "Video generate",
  "Website from prompt",
  "GPT · Claude · Gemini",
];

export function Marquee() {
  const row = [...brands, ...brands];
  return (
    <section className="overflow-hidden border-y border-[#1e3a5f] py-8">
      <p className="mb-5 text-center text-[13px] text-[#60a5fa]">
        Everything you need in one workspace
      </p>
      <div className="flex w-max animate-marquee-rtl gap-12 pr-12">
        {row.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="text-[18px] font-medium tracking-tight text-[#64748b]"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
