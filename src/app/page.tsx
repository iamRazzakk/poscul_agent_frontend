import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Marquee } from "@/components/landing/marquee";
import { Services } from "@/components/landing/services";
import { Works } from "@/components/landing/works";
import { Process } from "@/components/landing/process";
import { Features } from "@/components/landing/features";
import { Stats } from "@/components/landing/stats";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { Faq } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="landing min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Services />
        <Works />
        <Process />
        <Features />
        <Stats />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
