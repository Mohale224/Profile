import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AchievementsSection from './components/AchievementsSection';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen  bg-[#0c0c0c]">
        {/* Container for content with responsive padding */}
        <div className="w-full container mt-24 mx-auto px-4 sm:px-6 lg:px-12 py-4">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Achievements Section */}
          <AchievementsSection />
          
          {/* About Section */}
          <AboutSection />
          
          {/* Projects Section */}
          <ProjectsSection />
          
          {/* Email Section */}
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
