export type StudioMode = "chat" | "research" | "image" | "video" | "site";

export const modes: {
  id: StudioMode;
  href: string;
  label: string;
  kicker: string;
}[] = [
  { id: "chat", href: "/studio", label: "Chat", kicker: "01" },
  { id: "research", href: "/studio/research", label: "Research", kicker: "02" },
  { id: "image", href: "/studio/image", label: "Image", kicker: "03" },
  { id: "video", href: "/studio/video", label: "Video", kicker: "04" },
  { id: "site", href: "/studio/site", label: "Site", kicker: "05" },
];

export const conversations = [
  { id: "1", title: "Brutalist villa at dusk", mode: "image" as const, time: "Now" },
  { id: "2", title: "MoE papers, 2014–2026", mode: "research" as const, time: "1h" },
  { id: "3", title: "Kyoto pottery atelier site", mode: "site" as const, time: "3h" },
  { id: "4", title: "Night drive through Tokyo", mode: "video" as const, time: "Yesterday" },
  { id: "5", title: "Launch copy for Maison Noir", mode: "chat" as const, time: "Yesterday" },
];

export const gallery = [
  {
    src: "/studio/arch.jpg",
    prompt: "Brutalist villa at dusk, candlelight, mist in the valley",
    ratio: "4 / 3",
  },
  {
    src: "/studio/portrait.jpg",
    prompt: "Editorial portrait, black silk, gold collar, studio grain",
    ratio: "3 / 4",
  },
  {
    src: "/studio/still.jpg",
    prompt: "Obsidian perfume, gold cap, marble, single specular",
    ratio: "1 / 1",
  },
  {
    src: "/studio/landscape.jpg",
    prompt: "Marble islands above a sea of clouds, golden hour",
    ratio: "16 / 9",
  },
];

export const chatSeed = [
  {
    role: "user" as const,
    content:
      "Write a quiet launch note for a fragrance called Maison Noir. No hype. Taste first.",
  },
  {
    role: "assistant" as const,
    content: `Maison Noir does not arrive. It is already in the room.

A dry cedar, a black tea that never quite steeps, the metallic hush of rain on a stone stair. We composed it for evenings that refuse to be photographed.

Available in 50ml. No limited edition. No countdown. Just the bottle, the cap, the dark.`,
  },
];
