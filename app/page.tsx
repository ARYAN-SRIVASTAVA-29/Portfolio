import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingParticles } from "@/components/floating-particles"
import { ScrollObserver } from "@/components/scroll-observer"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <FloatingParticles />
      <ScrollObserver />
      <Navigation />
      <main id="main-content" className="min-h-screen relative z-10">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}
