"use client";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#1f1f1f] px-5 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="grad-text font-display mt-6 text-[42px] italic sm:text-[64px]">
            Let’s build{" "}
            <span className="font-ui not-italic">intelligent things</span>
          </h2>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-[13px] text-[#666]">E-mail address</dt>
              <dd className="mt-1 text-[20px]">hello@poscul.com</dd>
            </div>
            <div>
              <dt className="text-[13px] text-[#666]">Phone number</dt>
              <dd className="mt-1 text-[20px]">+880 1700 000 000</dd>
            </div>
          </dl>
        </div>
        <form
          className="rounded-2xl border border-[#333] bg-[#0a0a0a] p-6 sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-[15px] font-medium">Fill this form below</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="text-[12px] text-[#999]">Your Name</span>
              <input
                required
                className="mt-1.5 w-full border-b border-[#333] bg-transparent py-2 text-[15px] outline-none focus:border-white"
              />
            </label>
            <label className="block">
              <span className="text-[12px] text-[#999]">Your Phone</span>
              <input
                className="mt-1.5 w-full border-b border-[#333] bg-transparent py-2 text-[15px] outline-none focus:border-white"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-[12px] text-[#999]">
                More about the project
              </span>
              <textarea
                rows={4}
                className="mt-1.5 w-full resize-none border-b border-[#333] bg-transparent py-2 text-[15px] outline-none focus:border-white"
              />
            </label>
          </div>
          <button type="submit" className="theme-btn mt-8">
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
}
