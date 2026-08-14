const brands = [
  "OpenAI",
  "Anthropic",
  "Google",
  "Meta",
  "Mistral",
  "Flux",
  "Runway",
  "Luma",
  "Perplexity",
  "xAI",
];

export function Marquee() {
  const row = [...brands, ...brands];
  return (
    <section className="overflow-hidden border-y border-[#333] py-8">
      <p className="mb-5 text-center text-[13px] text-[#666]">
        Trusted by 100+ top-tier brands
      </p>
      <div className="flex w-max animate-marquee-rtl gap-12 pr-12">
        {row.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="text-[18px] font-medium tracking-tight text-[#4d4d4d]"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
