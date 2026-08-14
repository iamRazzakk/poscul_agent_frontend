"use client";

import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -40, y: -40 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] hidden size-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference lg:block"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
