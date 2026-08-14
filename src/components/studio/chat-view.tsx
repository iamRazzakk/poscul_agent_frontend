"use client";

import { useEffect, useRef, useState } from "react";
import { Composer } from "@/components/studio/composer";
import { chatSeed } from "@/lib/studio";
import { Mark } from "@/components/brand";

type Msg = { role: "user" | "assistant"; content: string };

const replies = [
  `Here is a tighter cut — still quiet, still certain:

Maison Noir is a room, not a launch. Cedar, black tea, wet stone. Wear it when you do not need to be seen.

If you want, I can write the bottle copy, the site hero, and a 10-second film still in the same register.`,
  `Kept the temperature low. Three lines for the campaign:

1. The night already knows this scent.
2. No limited edition. No countdown.
3. Just the bottle, the cap, the dark.

Shall I render the still, or draft the one-page site next?`,
];

export function ChatView() {
  const [messages, setMessages] = useState<Msg[]>(chatSeed);
  const [busy, setBusy] = useState(false);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    end.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function onSend(value: string) {
    setMessages((m) => [...m, { role: "user", content: value }]);
    setBusy(true);
    window.setTimeout(() => {
      const reply = replies[messages.length % replies.length];
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
      setBusy(false);
    }, 900);
  }

  return (
    <div className="flex h-full flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl space-y-8 px-4 py-10">
          {messages.map((msg, i) => (
            <article key={i} className="flex gap-4">
              {msg.role === "assistant" ? (
                <Mark className="mt-0.5 size-8 shrink-0" />
              ) : (
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-gold/15 text-[11px] tracking-[0.12em] text-gold">
                  YOU
                </span>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-[11px] tracking-[0.22em] text-mist uppercase">
                  {msg.role === "assistant" ? "Poscul" : "You"}
                </p>
                <div className="mt-2 whitespace-pre-wrap text-[15px] leading-7 text-foreground/95">
                  {msg.content}
                </div>
              </div>
            </article>
          ))}
          {busy ? (
            <p className="flex items-center gap-3 text-sm text-mist">
              <Mark className="size-6" />
              Composing
              <span className="animate-blink text-gold">▍</span>
            </p>
          ) : null}
          <div ref={end} />
        </div>
      </div>
      <Composer
        placeholder="Ask the model — copy, strategy, code, taste…"
        onSend={onSend}
        busy={busy}
      />
    </div>
  );
}
