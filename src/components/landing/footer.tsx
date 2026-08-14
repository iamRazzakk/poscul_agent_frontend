import Link from "next/link";
import { Logo } from "@/components/brand";

export function Footer() {
  return (
    <footer className="border-t border-[#1e3a5f]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-12">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-[14px] leading-6 text-[#93a4c0]">
            Chat with AI, deep research, generate image and video, and make a
            website from one prompt.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 text-[14px] text-[#93a4c0]">
          <Link href="/studio" className="hover:text-white">
            Chat
          </Link>
          <Link href="/studio/research" className="hover:text-white">
            Research
          </Link>
          <Link href="/studio/image" className="hover:text-white">
            Image
          </Link>
          <Link href="/studio/video" className="hover:text-white">
            Video
          </Link>
          <Link href="/studio/site" className="hover:text-white">
            Website
          </Link>
        </div>
      </div>
      <div className="border-t border-[#1e3a5f]">
        <p className="mx-auto max-w-[1440px] px-5 py-5 text-[12px] text-[#64748b] md:px-12">
          © {new Date().getFullYear()} Poscul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
