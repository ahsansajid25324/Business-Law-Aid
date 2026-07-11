import "../../styles/EndSection.css";
import "../../styles/HeroSection.css";
import InfoCard from "./InfoCard";
import Icon1 from "../../assets/Support.svg";
import Icon2 from "../../assets/b.svg";
import Icon3 from "../../assets/c.svg";
import Icon4 from "../../assets/d.svg";
import Icon5 from "../../assets/e.svg";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1000);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

interface CustomStyle extends React.CSSProperties {
  "--delay"?: string;
}

const EndSection = () => {
  const isMobile = useIsMobile();

  const cardData = [
    {
      icon: <img src={Icon1} alt="Intake Clarity icon" />,
      title: "1. Intake Clarity",
      description:
        "We gather the facts that matter first, saving hours of unnecessary discovery.",
      items: [
        "Core company background",
        "Investment source validation",
        "Operational baseline metrics",
        "Initial timeline targets",
      ],
    },
    {
      icon: <img src={Icon2} alt="Case Framing icon" />,
      title: "2. Case Framing",
      description:
        "The entire business plan structure is strategically aligned with specific visa logic.",
      items: [
        "E-2 / L-1 petition logic mapping",
        "Substantial investment scaling",
        "Executive & managerial scope",
        "Adjudication risk analysis",
      ],
    },
    {
      icon: <img src={Icon3} alt="Draft Build icon" />,
      title: "3. Draft Build",
      description:
        "Operational, market, and financial data sections are meticulously developed together.",
      items: [
        "5-year financial projections",
        "Local market analysis",
        "Personnel hiring schedules",
        "Role-by-role descriptions",
      ],
    },
    {
      icon: <img src={Icon4} alt="Attorney Review icon" />,
      title: "4. Attorney Review",
      description:
        "Collaborative and targeted iterations to refine strategy before final output creation.",
      items: [
        "Legal framework cross-check",
        "Fast, collaborative iteration",
        "Workload burden relief",
        "Evidentiary gap checks",
      ],
    },
    {
      icon: <img src={Icon5} alt="Submission Ready icon" />,
      title: "5. Submission Ready",
      description:
        "The final product fits seamlessly within the broader corporate legal petition package.",
      items: [
        "White-label presentation layer",
        "High-converting visual formatting",
        "Final compliance verification",
        "Print & digital formats",
      ],
    },
  ];

  return (
    <section className="end-section">
      <div className="container px-0 end-content">
        <div className="set-margin animate-item" style={{ "--delay": "0ms" } as CustomStyle}>
          <div className="d-flex align-items-center">
            <span className="badge-dot"></span>
            <span className="tagline-badge ms-2 mb-0">OUR PROCESS</span>
          </div>{" "}
          <h2 className="main-heading">
            How We Build <span>Submission-Ready Plans</span>
          </h2>
          <p className="end-description">
            A modern, efficient process designed to align operational realism
            with the strict legal and evidentiary framework applied by USCIS
            reviewers.
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
                <div
                  className="end-card-wrapper animate-item"
                  style={{ "--delay": `${(index + 1) * 150}ms` } as CustomStyle}
                >
                  <InfoCard
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    items={card.items}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="info-grid">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="end-card-wrapper animate-item"
                style={{ "--delay": `${(index + 1) * 150}ms` } as CustomStyle}
              >
                <InfoCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  items={card.items}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EndSection;
