import Cost from "../components/pages/Cost";
import Footer from "../components/pages/Footer";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import PricingSet from "../components/pages/Pricing";
import StartedSection from "../components/pages/StartedSection";
import PricingBg from "../assets/PricingBg.png";
const Pricing = () => {
  const heroData = {
    subtitle: "PRICING",
    title: "Transparent, Predictable Pricing",
    description:
      "Our pricing is designed to provide your business with predictable costs for immigration & business support services. All prices are per case and include comprehensive support within attorney-directed workflows.",
  };

  return (
    <>
      <Navbar />
      <OtherHero
        subtitle={heroData.subtitle}
        title={heroData.title}
        backgroundImage={PricingBg}
        description={heroData.description}
      />

      <PricingSet />
      <Cost />

      <StartedSection
        title="Ready to Partner with LawAid Management?"
        subtitle="Start with transparent pricing and scalable support designed specifically for immigration law firms and foreign businesses."
      />
      <Footer />
    </>
  );
};

export default Pricing;
