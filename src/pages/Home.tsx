import AdvantageSection from "../components/pages/AdvantageSection";
import EndSection from "../components/pages/EndSection";
import Footer from "../components/pages/Footer";
import HeroSection from "../components/pages/HeroSection";
import LegalSection from "../components/pages/LegalSection";
import LegalSupportSection from "../components/pages/LegalSupportSection";
import Navbar from "../components/pages/Navbar";
import SemiContact from "../components/pages/SemiContact";
import StartedSection from "../components/pages/StartedSection";
import SubLegal from "../components/pages/SubLegal";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LegalSupportSection />
      <SubLegal />

      <LegalSection />
      <EndSection />
      <AdvantageSection />
      <StartedSection
        title="Ready to Strengthen Your Firm's Capacity?"
        subtitle="Partner with LawAid management to support your immigration, business, and
            humanitarian cases with precision, consistency, and scale."
      />
      <SemiContact />
      <Footer />
    </>
  );
};

export default Home;
