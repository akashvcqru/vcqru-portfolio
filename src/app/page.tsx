import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Snapshot from "@/components/Snapshot";
import ExperienceJourney from "@/components/Timeline";
import IndustryExperience from "@/components/Industries";
import PatanjaliTransformation from "@/components/Patanjali";
import TransformationProjects from "@/components/Projects";
import LeadershipEcosystem from "@/components/Expertise";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col bg-background text-primary-text">
        {/* Section 01: Hero Experience */}
        <Hero />
        
        {/* Section 02: Impact at Scale */}
        <Impact />

        {/* Section 03: Leadership Snapshot */}
        <Snapshot />
        
        {/* Section 04: Transformation Journey */}
        <ExperienceJourney />
        
        {/* Section 05: Enterprise Footprint */}
        <IndustryExperience />
        
        {/* Section 06: Flagship Case Study */}
        <PatanjaliTransformation />
        
        {/* Section 07: Enterprise Programs */}
        <TransformationProjects />
        
        {/* Section 08: Leadership Ecosystem */}
        <LeadershipEcosystem />
        
        {/* Section 09: Recognition */}
        <Awards />
        
        {/* Section 10: Education */}
        <Education />
      </main>
      
      {/* Section 11: Vision & Footer */}
      <Footer />
    </>
  );
}
