"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/brand";

export default function SignupPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-dvh flex-col bg-zinc-50">
      <header className="px-5 py-4">
        <Logo />
      </header>
      <div className="flex flex-1 items-center justify-center px-5 pb-16">
        <div className="w-full max-w-[360px]">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Free to start. No credit card.
          </p>
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/studio");
            }}
          >
            <label className="block">
              <span className="text-[13px] font-medium text-zinc-700">
                Name
              </span>
              <input
                required
                className="mt-1.5 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400"
                placeholder="Sabbir"
              />
            </label>
            <label className="block">
              <span className="text-[13px] font-medium text-zinc-700">
                Email
              </span>
              <input
                type="email"
                required
                className="mt-1.5 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400"
                placeholder="you@company.com"
              />
            </label>
            <label className="block">
              <span className="text-[13px] font-medium text-zinc-700">
                Password
              </span>
              <input
                type="password"
                required
                className="mt-1.5 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-md bg-zinc-950 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Get started
            </button>
          </form>
          <p className="mt-6 text-sm text-zinc-500">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-zinc-950">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
