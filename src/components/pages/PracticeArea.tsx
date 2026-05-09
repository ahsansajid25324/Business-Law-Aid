import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../styles/PracticeArea.css";

const practiceAreasData = [
  {
    title: "Restaurant Brands",
    number: "01",
    description:
      "Established dining concepts, quick-service models, and unique menus ready for U.S. consumer adaptation.",
  },
  {
    title: "Clothing & Fashion Labels",
    number: "02",
    description:
      "Distinctive fashion and lifestyle brands ready to capture market demand with brick-and-mortar setups.",
  },
  {
    title: "Retail & Consumer Concepts",
    number: "03",
    description:
      "Proven, brick-and-mortar storefront formats and scalable retail models ready to cross international borders.",
  },
  {
    title: "Specialty Food & Beverage",
    number: "04",
    description:
      "Unique consumer goods and localized dining experiences looking to establish a strong corporate U.S. footprint.",
  },
];

// Simple hook to detect mobile screen
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

const PracticeAreas: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="practice-areas-section">
      <div className="px-0 container">
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
            {practiceAreasData.map((area, index) => (
              <SplideSlide key={index}>
                <div className="practice-area-card">
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">{area.title}</h3>
                      <span className="card-number">{area.number}</span>
                    </div>
                    <p className="card-description">{area.description}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="practice-areas-grid">
            {practiceAreasData.map((area, index) => (
              <div className="practice-area-card" key={index}>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">{area.title}</h3>
                    <span className="card-number">{area.number}</span>
                  </div>
                  <p className="mt-2 card-description">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="testimonial-box">
          <p>
            <em>
              We provide the framework, but the operational control, training, and execution{" "}
              <span className="italic">remain entirely in your hands</span> as independent business owners.
            </em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;