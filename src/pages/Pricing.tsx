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
    title: "Flexible Premium Pricing",
    description:
      "Our pricing structures are designed around case complexity, visa category, and your specific timeline. Rather than forcing every matter into a rigid box, we offer premium, consultative packages tailored to the depth of research, strategic modeling, and attorney collaboration your case demands.",
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
        subtitle="Bring clarity to your next filing. Start with tailored pricing and consultative support designed specifically for custom immigration strategy."
      />
      <Footer />
    </>
  );
};

export default Pricing;
