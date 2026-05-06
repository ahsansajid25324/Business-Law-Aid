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
      icon: <img src={Icon2} alt="Humanitarian Relief Support icon" />,
      title: "Immigration Case Support",
      description:
        "Comprehensive preparation for immigrant & non-immigrant visa categories",
      items: [
        "Family-based petitions",
        "Employment visas",
        "Investment visas",
        "Consular processing",
      ],
    },
    {
      icon: <img src={Icon1} alt="Humanitarian Relief Support icon" />,
      title: "Business Plan Creation",
      description:
        "Immigration-compliant business plans for investor and entrepreneur visas",
      items: [
        "E-2 Treaty Investor",
        "EB-5 Immigrant Investor",
        "L-1 Intracompany Transfer",
        "Market analysis",
      ],
    },
    {
      icon: <img src={Icon3} alt="Humanitarian Relief Support icon" />,
      title: "Company Formation Support",
      description: "Entity formation and structuring across all U.S. states",
      items: [
        "Corporate structuring",
        "Operating agreements",
        "Immigration compliance",
        "State registration",
      ],
    },
    {
      icon: <img src={Icon4} alt="Humanitarian Relief Support icon" />,
      title: "Business Acquisition Support",
      description: "Strategic guidance for E-2 and L-1 visa business purchases",
      items: [
        "Business identification",
        "Due diligence support",
        "Valuation analysis",
        "Acquisition structuring",
      ],
    },
    {
      icon: <img src={Icon5} alt="Humanitarian Relief Support icon" />,
      title: "Humanitarian Relief Support",
      description: "Specialized case preparation for vulnerable populations",
      items: [
        "Asylum applications",
        "VAWA petitions",
        "U & T visas",
        "TPS & CAT",
      ],
    },
    {
      icon: <img src={Icon6} alt="Humanitarian Relief Support icon" />,
      title: "Legal Operations Support",
      description: "Comprehensive law firm operational services",
      items: [
        "Case documentation",
        "Research & analysis",
        "Form preparation",
        "Client communication",
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
            End-to-End Legal Support Services
          </h2>
          <p className="end-description text-white">
            Comprehensive support designed to strengthen attorney-led
            representation across immigration, business, and humanitarian
            matters.
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
