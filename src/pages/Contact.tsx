import Footer from "../components/pages/Footer";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import Touch from "../components/pages/Touch";
import Connect from "../components/pages/Connect";
import ContactImage from "../assets/ContactBg.png";
const Contact = () => {
  const heroData = {
    subtitle: "GET IN TOUCH",
    title: "Contact LawAid Management",
    description:
      "LawAid management partners with U.S. immigration attorneys/ law firms & foreign businesses to provide structured, reliable legal support services. If your business is seeking scalable capacity, consistent execution, or specialized case support, our team is ready to assist.",
  };

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
