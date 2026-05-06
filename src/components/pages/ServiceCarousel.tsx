import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "../../styles/ServiceCarousel.css";

type ServiceCarouselItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ServiceCarouselProps = {
  data: ServiceCarouselItem[];
  testimonial?: string;
};

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({
  data,
  testimonial,
}) => {
  const isMobile = useIsMobile();

  return (
    <section className="sc-section">
      <div className="container px-0">
        {isMobile ? (
          <Splide
            options={{
              perPage: 1,
              gap: 16,
              arrows: true,
              pagination: false,
              drag: "free",
              type: "loop",
            }}
          >
            {data.map((item, index) => (
              <SplideSlide key={index}>
                <div className="sc-card">
                  <div className="sc-card-header">
                    <div className="sc-card-icon">{item.icon}</div>
                  </div>
                  <div className="sc-card-content">
                    <h3 className="sc-card-title">{item.title}</h3>
                    <p className="sc-card-description">{item.description}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="sc-grid">
            {data.map((item, index) => (
              <div key={index} className="sc-card">
                <div className="sc-card-header">
                  <div className="sc-card-icon">{item.icon}</div>
                </div>
                <div className="sc-card-content">
                  <h3 className="sc-card-title">{item.title}</h3>
                  <p className="sc-card-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="sc-testimonial">
          <p>
            <em>{testimonial}</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
