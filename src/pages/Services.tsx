import Footer from "../components/pages/Footer";
import Immigration from "../components/pages/Immigration";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import StartedSection from "../components/pages/StartedSection";
import ServiceBg from "../assets/ServiceBg.png";

const Services = () => {
  const heroData = {
    subtitle: "OUR PROGRAMS & SERVICES",
    title: "U.S. Corporate Setup & Expansion Consulting",
    description:
      "We provide the strategic, legal, and operational frameworks designed to help international brands and investors establish themselves and operate independently in the U.S. market.",
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
        backgroundImage={ServiceBg}
        description={heroData.description}
        stats={heroData.stats}
      />

      <Immigration />
      <StartedSection
        title="Ready to Scale Your Brand to the United States?"
        subtitle="Partner with LawAid Management to build the legal, corporate, and structural frameworks needed for a successful and independent U.S. market entry."
      />
      <Footer />
    </>
  );
};

export default Services;
