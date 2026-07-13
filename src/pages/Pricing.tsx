import { useState } from "react";
import Cost from "../components/pages/Cost";
import Footer from "../components/pages/Footer";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import PricingSet from "../components/pages/Pricing";
import PricingBg from "../assets/PricingBg.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import "../styles/AboutFaqs.css"; // Reusing your existing accordion styles

const Pricing = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const heroData = {
    subtitle: "PRICING",
    title: "Flexible Premium Pricing",
    description:
      "Our pricing structures are designed around case complexity, visa category, and your specific timeline. Rather than forcing every matter into a rigid box, we offer premium, consultative packages tailored to the depth of research, strategic modeling, and attorney collaboration your case demands.",
  };

  const faqData = [
    {
      question: "Why is pricing flexible?",
      answer:
        "Because a startup retail E-2, a franchise expansion case, and an L-1 new office filing do not require the same level of research, modeling, or coordination.",
    },
    {
      question: "Do lower starting prices mean a lower quality plan?",
      answer:
        "Absolutely not. Every tier maintains our core standard of accuracy and presentation. Lower starting thresholds simply reflect more straightforward, template-ready corporate profiles that require less custom industry mapping.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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

      {/* Structured Accordion FAQ Section placed cleanly under Cost */}
      <section className="about-faq-section ">
        <div className="my-5 about-faq-container">
          <div className="faq-header">
            <div className="subtitle-with-line justify-content-center">
              <span className="subtitle-line"></span>
              <span className="subtitle">PRICING FAQ</span>
              <span className="subtitle-line"></span>
            </div>
            <h2 className="faq-main-heading text-center">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="faq-accordion-group">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-accordion-node ${isOpen ? "active-node" : ""}`}
                >
                  <button
                    className="faq-trigger"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon-wrapper">
                      {isOpen ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </span>
                  </button>
                  <div
                    className={`faq-panel ${isOpen ? "panel-expanded" : ""}`}
                  >
                    <p className="faq-panel-text">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;