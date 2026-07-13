import Footer from "../components/pages/Footer";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import Touch from "../components/pages/Touch";
import Connect from "../components/pages/Connect";
import ContactImage from "../assets/ContactBg.png";

const Contact = () => {
 const heroData = {
    subtitle: "GET IN TOUCH",
    title: "Connect with LawAid Management",
    description:
      "We partner with established international brands, business owners, and foreign investors to build the legal, corporate, and strategic foundations required for a successful U.S. market entry. Reach out to our consulting team to evaluate your concept and start your expansion journey.",
  };

  // df
  return (
    <>
      <Navbar />
      <OtherHero
        subtitle={heroData.subtitle}
        title={heroData.title}
        backgroundImage={ContactImage}
        description={heroData.description}
      />

      <Touch />
      <Connect />
      <Footer />
    </>
  );
};

export default Contact;