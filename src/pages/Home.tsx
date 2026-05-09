import AdvantageSection from "../components/pages/AdvantageSection";
import EndSection from "../components/pages/EndSection";
import Footer from "../components/pages/Footer";
import HeroSection from "../components/pages/HeroSection";
import LegalSection from "../components/pages/LegalSection";
import LegalSupportSection from "../components/pages/LegalSupportSection";
import Navbar from "../components/pages/Navbar";
import SemiContact from "../components/pages/SemiContact";
import StartedSection from "../components/pages/StartedSection";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LegalSupportSection />

      <LegalSection />
      <EndSection />
      <AdvantageSection />
      <StartedSection
        title="Ready to Scale Your Brand to the United States?"
        subtitle="Partner with LawAid Management to build the legal, corporate, and structural frameworks needed for a successful and independent U.S. market entry."
      />
      <SemiContact />
      <Footer />
    </>
  );
};

export default Home;
