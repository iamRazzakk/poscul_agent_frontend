"use client";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#1e3a5f] px-5 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="grad-text font-display mt-6 text-[42px] italic sm:text-[64px]">
            Start a thread.{" "}
            <span className="font-ui not-italic">We’ll help you ship.</span>
          </h2>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-[13px] text-[#60a5fa]">E-mail</dt>
              <dd className="mt-1 text-[20px]">hello@poscul.com</dd>
            </div>
            <div>
              <dt className="text-[13px] text-[#60a5fa]">Phone</dt>
              <dd className="mt-1 text-[20px]">+880 1700 000 000</dd>
            </div>
          </dl>
        </div>
        <form
          className="rounded-2xl border border-[#1e3a5f] bg-[#0b1a30] p-6 sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-[15px] font-medium">Tell us what you want to build</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="text-[12px] text-[#93a4c0]">Your name</span>
              <input
                required
                className="mt-1.5 w-full border-b border-[#1e3a5f] bg-transparent py-2 text-[15px] outline-none focus:border-[#60a5fa]"
              />
            </label>
            <label className="block">
              <span className="text-[12px] text-[#93a4c0]">Email</span>
              <input
                type="email"
                className="mt-1.5 w-full border-b border-[#1e3a5f] bg-transparent py-2 text-[15px] outline-none focus:border-[#60a5fa]"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-[12px] text-[#93a4c0]">
                Chat, research, image, video, or a website?
              </span>
              <textarea
                rows={4}
                className="mt-1.5 w-full resize-none border-b border-[#1e3a5f] bg-transparent py-2 text-[15px] outline-none focus:border-[#60a5fa]"
              />
            </label>
          </div>
          <button type="submit" className="theme-btn mt-8">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
