import { Background } from "../components/landing/Background";
import { Hero } from "../components/landing/Hero";
import { LatestPost } from "../components/landing/LatestPost";
import { Newsletter } from "../components/landing/Newsletter";
import { Manifesto } from "../components/landing/Manifesto";
import { Timeline } from "../components/landing/Timeline";
import { Differential } from "../components/landing/Differential";
import { Footer } from "../components/landing/Footer";
import { SEO } from "../components/blog/SEO";

export function LandingPage() {
  return (
    <div className="relative min-h-screen font-sans bg-[#F8FAFC] text-[#132A4A] overflow-x-hidden selection:bg-[#2563EB] selection:text-white">
      <SEO
        title="Wendel Batista - Finanças & Gestão"
        description="Landing page pessoal corporativa de Wendel Batista, especialista em Finanças & Gestão. Conheça projetos, certificações e textos sobre economia, cultura e política."
        type="website"
      />
      <Background />
      
      <main className="relative z-10">
        <Hero />
        <LatestPost />
        <Newsletter />
        <Manifesto />
        <Timeline />
        <Differential />
      </main>
      
      <Footer />
    </div>
  );
}