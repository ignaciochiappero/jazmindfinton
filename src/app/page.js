import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-pink-300 via-pink-100 to-white">
      <div className="flex-grow container mt-24 mx-auto px-12 py-4">
        {/* <HeroSection /> */}
        <AboutSection />
        <EmailSection />
      </div>
      <div className="bg-gradient-to-b from-white via-pink-100 to-pink-300 w-full">
        <Footer />
      </div>
    </main>
  );
}
