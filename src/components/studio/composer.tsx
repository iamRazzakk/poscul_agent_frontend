"use client";

import { useState } from "react";
import { ArrowUp, Paperclip } from "lucide-react";

export function Composer({
  placeholder,
  onSend,
  busy,
}: {
  placeholder: string;
  onSend: (value: string) => void;
  busy?: boolean;
}) {
  const [value, setValue] = useState("");

  function submit() {
    const next = value.trim();
    if (!next || busy) return;
    onSend(next);
    setValue("");
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-6">
      <div className="rounded-[1.6rem] border border-line bg-panel p-2 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)]">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
          rows={2}
          placeholder={placeholder}
          className="w-full resize-none bg-transparent px-4 py-3 text-[15px] leading-relaxed text-foreground outline-none placeholder:text-mist/70"
        />
        <div className="flex items-center justify-between px-2 pb-1">
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full text-mist hover:bg-white/5 hover:text-foreground"
            aria-label="Attach"
          >
            <Paperclip className="size-4" />
          </button>
          <button
            type="button"
            onClick={submit}
            disabled={busy || !value.trim()}
            className="grid size-10 place-items-center rounded-full bg-gold text-void transition hover:bg-gold-soft disabled:opacity-40"
            aria-label="Send"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
