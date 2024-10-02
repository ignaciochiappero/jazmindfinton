import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-pink-300 via-pink-100 to-white">
      
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />

        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
