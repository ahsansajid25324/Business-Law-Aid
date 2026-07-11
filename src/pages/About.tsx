import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";

import Vendor from "../components/pages/Vendor";
import Footer from "../components/pages/Footer";
import AboutBackground from "../assets/AboutBackground.png";

const About = () => {
  const heroData = {
    subtitle: "ABOUT LAWAID MANAGEMENT",
    title: "Built for your petition, not pulled from a template",
    description:
      "Founded in 2023, Law Aid Management operates from Houston and serves immigration related business plan clients with a focused commitment to USCIS specific planning rather than generic commercial plan writing.",
    stats: [
      { number: "2023", label: "Founded In" },
      { number: "Houston", label: "Operations Base" },
      { number: "USCIS", label: "Specific Design" },
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
      <Vendor />
      <Footer />
    </>
  );
};

export default About;