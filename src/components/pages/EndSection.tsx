import "../../styles/EndSection.css";
import "../../styles/HeroSection.css";
import InfoCard from "./InfoCard";
import Icon1 from "../../assets/Support.svg";
import Icon2 from "../../assets/b.svg";
import Icon3 from "../../assets/c.svg";
import Icon4 from "../../assets/d.svg";
import Icon5 from "../../assets/e.svg";
import Icon6 from "../../assets/f.svg";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Simple hook to detect mobile screen
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1000);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

const EndSection = () => {
  const isMobile = useIsMobile();
  const cardData = [
    {
      icon: <img src={Icon1} alt="International Expansion Consulting icon" />,
      title: "International Expansion Consulting",
      description:
        "Comprehensive operational strategies to transition global concepts into the U.S. market.",
      items: [
        "Market viability evaluation",
        "Scale & adaptation analysis",
        "Expansion roadmap design",
        "Operational framework setup",
      ],
    },
    {
      icon: <img src={Icon2} alt="Franchise System Development icon" />,
      title: "Franchise Development",
      description:
        "Structuring and formalizing successful brand models into turnkey franchise systems.",
      items: [
        "Franchise licensing setup",
        "Investor-ready documentation",
        "Disclosure document support",
        "Process standardization",
      ],
    },
    {
      icon: <img src={Icon3} alt="U.S. Corporate Structuring icon" />,
      title: "U.S. Corporate Structuring",
      description: "Establishing bulletproof legal and entity frameworks across all U.S. jurisdictions.",
      items: [
        "LLC & C-Corp formation",
        "Operating agreements",
        "State registrations & EIN",
        "Corporate compliance setups",
      ],
    },
    {
      icon: <img src={Icon4} alt="Investment Structuring Pathways icon" />,
      title: "Investment Structuring",
      description: "Securing and organizing funding channels to satisfy strategic expansion targets.",
      items: [
        "Capital flow organization",
        "Ownership structure models",
        "Financial viability frameworks",
        "Escrow & transaction setups",
      ],
    },
    {
      icon: <img src={Icon5} alt="Immigration-Compliant Coordination icon" />,
      title: "Immigration-Compliant Design",
      description: "Meticulous documentation aligned with strict business immigration regulations.",
      items: [
        "USCIS-aligned business plans",
        "Investment trail tracking",
        "E-2, L-1, and EB-5 support docs",
        "Regulatory file prep",
      ],
    },
    {
      icon: <img src={Icon6} alt="Strategic Client Management icon" />,
      title: "Strategic Coordination",
      description: "End-to-end management from initial evaluation to final U.S. establishment.",
      items: [
        "Project execution tracking",
        "Partner legal team integration",
        "Corporate milestone reviews",
        "Independent owner handovers",
      ],
    },
  ];

  return (
    <section className="end-section">
      <div className="container px-0 end-content">
        <div className="set-margin">
          <div className="d-flex align-items-center">
            <span className="subtitle-line"></span>
            <span className="subtitle">CORE SERVICES</span>
          </div>{" "}
          <h2 className="main-heading text-white">
            Comprehensive Corporate & Expansion Solutions
          </h2>
          <p className="end-description text-white">
            Providing the strategic, legal, and operational foundation that enables international businesses and investors to thrive independently in the United States.
          </p>
        </div>

        {isMobile ? (
          <Splide
            options={{
              perPage: 2,
              gap: 20,
              arrows: true,
              pagination: false,
              drag: "free",
              type: "loop",
              breakpoints: {
                768: {
                  perPage: 1,
                  gap: 0,
                },
              },
            }}
          >
            {cardData.map((card, index) => (
              <SplideSlide key={index}>
                <InfoCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  items={card.items}
                />
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="info-grid">
            {cardData.map((card, index) => (
              <InfoCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                items={card.items}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EndSection;