import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import SkillsMatrix from "@/components/SkillsMatrix";
import ProjectsSection from "@/components/ProjectsSection";
import DataInAction from "@/components/DataInAction";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <RecruiterSnapshot />
        <SkillsMatrix />
        <ProjectsSection />
        <DataInAction />
        <ExperienceTimeline />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
