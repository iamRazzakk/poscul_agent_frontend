import Link from "next/link";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-7 place-items-center rounded-full bg-zinc-950 text-[13px] font-semibold text-white",
        className,
      )}
      aria-hidden
    >
      P
    </span>
  );
}

export function Logo({
  href = "/",
  className,
  light,
}: {
  href?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link href={href} className={cn("flex items-center gap-2", className)}>
      <Mark
        className={light ? "bg-white text-zinc-950" : undefined}
      />
      <span
        className={cn(
          "text-[15px] font-semibold tracking-tight",
          light ? "text-white" : "text-zinc-950",
        )}
      >
        Poscul
      </span>
    </Link>
  );
}
