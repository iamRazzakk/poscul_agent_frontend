import Link from "next/link";
import { Logo } from "@/components/brand";

export function Footer() {
  return (
    <footer className="border-t border-[#333]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-12">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-[14px] leading-6 text-[#666]">
            Your AI sprint team on demand. Chat, research, generate, and
            publish.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 text-[14px] text-[#999]">
          <Link href="#about" className="hover:text-white">
            About
          </Link>
          <Link href="#services" className="hover:text-white">
            Services
          </Link>
          <Link href="#works" className="hover:text-white">
            Works
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-[#333]">
        <p className="mx-auto max-w-[1440px] px-5 py-5 text-[12px] text-[#666] md:px-12">
          © {new Date().getFullYear()} Poscul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
