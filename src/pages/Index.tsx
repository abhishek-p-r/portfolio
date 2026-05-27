import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleCanvas />
      <div className="noise-overlay" />
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
