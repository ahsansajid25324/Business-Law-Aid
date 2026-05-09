import Footer from "../components/pages/Footer";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import ExecutionSection from "../components/pages/ExecutionSection";
import Professional from "../components/pages/Professional";
import Vendor from "../components/pages/Vendor";
import AboutBackground from "../assets/AboutBackground.png";

const About = () => {
  const heroData = {
    subtitle: "ABOUT LAWAID MANAGEMENT",
    title: "Structure. Coordination. Independence.",
    description:
      "LawAid Management exists to simplify international expansion. We build the legal, corporate, and strategic frameworks that allow established international brands and investors to successfully expand and run their businesses independently in the United States.",
    stats: [
      { number: "400+", label: "Businesses Structured" },
      { number: "100%", label: "Independent Operation" },
      { number: "Global", label: "Expansion Scope" },
    ],
  };

  return (
    <>
      <Navbar />
      <OtherHero
        subtitle={heroData.subtitle}
        title={heroData.title}
        backgroundImage={AboutBackground}
        description={heroData.description}
        stats={heroData.stats}
      />
      <ExecutionSection />
      <Professional />
      <Vendor />
      <Footer />
    </>
  );
};

export default About;