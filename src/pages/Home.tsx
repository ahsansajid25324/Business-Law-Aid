import AdvantageSection from "../components/pages/AdvantageSection";
import EndSection from "../components/pages/EndSection";
import Footer from "../components/pages/Footer";
import HeroSection from "../components/pages/HeroSection";
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

      <EndSection />
      <AdvantageSection />
      <StartedSection
        title="Ready to Build a USCIS-Compliant Business Plan?"
        subtitle="Partner with Law Aid Management to combine premium writing, realistic financial modeling, and direct attorney collaboration into your E-2 or L-1 petition strategy."
      />
      <SemiContact />
      <Footer />
    </>
  );
};

export default Home;
