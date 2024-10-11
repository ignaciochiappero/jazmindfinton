import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>



      <main className="flex flex-col   bg-gradient-to-b from-pink-300 via-pink-100 to-white">
        <div className="flex-grow container xl:mt-20 md:mt-10 max-sm:mt-24 mx-auto px-12 pt-4 ">
          {/* <HeroSection /> */}
          <AboutSection />
          <EmailSection />

         
          <Footer />
        </div>

      </main>
    </div>
  );
}
