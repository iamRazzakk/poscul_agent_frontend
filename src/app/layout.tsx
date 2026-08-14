import type { Metadata } from "next";
import {
  Arapey,
  Geist,
  Geist_Mono,
  Plus_Jakarta_Sans,
  Urbanist,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const arapey = Arapey({
  variable: "--font-arapey",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poscul — Your AI workspace on demand",
  description:
    "From chat to research, image, video, and a website from one prompt. Poscul plugs into how you already work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${arapey.variable} ${jakarta.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
