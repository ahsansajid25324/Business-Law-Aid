import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../styles/PracticeArea.css";

const practiceAreasData = [
  {
    title: "Solo Immigration Attorneys",
    number: "01",
    description:
      "Individual practitioners seeking reliable case support and documentation services to scale their practice",
  },
  {
    title: "Boutique Immigration & Humanitarian Firms",
    number: "02",
    description:
      "Specialized practices requiring expert case preparation and research support",
  },
  {
    title: "Multi-Attorney Practices",
    number: "03",
    description:
      "Firms managing high-volume caseloads with complex procedural requirements",
  },
  {
    title: "Immigration Specialists",
    number: "04",
    description:
      "Firms handling complex or high volume cases",
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
              Each engagement is structured to align with the firm's practice
              focus, <span className="italic">internal processes</span>,
              timelines
            </em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
