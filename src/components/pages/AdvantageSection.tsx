import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../styles/AdvantageSection.css";
import "../../styles/HeroSection.css";
import {
  FileText,
  BarChart3,
  Scale,
  TrendingUp,
} from "lucide-react";

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 900);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

const AdvantageSection = () => {
  const isMobile = useIsMobile();
  const advantages = [
    {
      icon: <FileText />,
      title: "USCIS Aligned Structure",
      description:
        "Every plan maps directly to the evidentiary requirements and underlying legal logic applied to E-2 and L-1 cases.",
    },
    {
      icon: <BarChart3 />,
      title: "Realistic Projections",
      description:
        "We build defensible, data-driven financial models and operational structures that withstand intense adjudication scrutiny.",
    },
    {
      icon: <Scale />,
      title: "Attorney Collaboration",
      description:
        "We speak the language of corporate immigration law, integrating seamlessly into your existing petition timelines and strategies.",
    },
    {
      icon: <TrendingUp />,
      title: "Growth Ready Planning",
      description:
        "Our plans balance technical visa guidelines with authentic corporate strategy, positioning entities for sustainable long-term execution.",
    },
  ];

  return (
    <section className="advantage-section">
      <div className="container px-0 advantage-content">
        <div className="set-advantage">
          <div className="subtitle-with-line">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right">
              DESIGNED FOR REVIEW, NOT DECORATION
            </span>
            <span className="subtitle-line"></span>
          </div>
          <h2 className="main-heading">The Law Aid Management Standards</h2>
          <p className="advantage-description">
            Every business plan is meticulously structured around systemic credibility, operational realism, 
            and the exact evidentiary standards applied by USCIS adjudicators.
          </p>
        </div>

        {isMobile ? (
          <Splide
            options={{
              perPage: 1,
              gap: 0,
              arrows: true,
              pagination: false,
              drag: "free",
              type: "loop",
            }}
          >
            {advantages.map((advantage, index) => (
              <SplideSlide key={index}>
                <div className="advantage-card">
                  <div className="advantage-icon">{advantage.icon}</div>
                  <h3 className="advantage-card-title">{advantage.title}</h3>
                  <p className="advantage-card-description">
                    {advantage.description}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="advantage-cards-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-icon">{advantage.icon}</div>
                <h3 className="advantage-card-title">{advantage.title}</h3>
                <p className="advantage-card-description">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdvantageSection;