import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../styles/Vendor.css";
import "../../styles/HeroSection.css";
import { Target, Shield, Scale, Briefcase } from "lucide-react";
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 900);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const Vendor = () => {
  const isMobile = useIsMobile();

  const vendors = [
    {
      icon: <Target />,
      title: "Accuracy",
      description:
        "Disciplined documentation and structured workflows ensure precision in every deliverable. Our systems are built to eliminate errors and maintain consistency across complex case portfolios.",
    },
    {
      icon: <Shield />,
      title: "Confidentiality",
      description:
        "Strict data protection and ethical handling protocols safeguard client information. We maintain attorney-work product privilege and adhere to the highest standards of professional discretion.",
    },
    {
      icon: <Scale />,
      title: "Compliance",
      description:
        "Alignment with immigration standards and attorney oversight ensures every document meets regulatory requirements. Our work integrates seamlessly with USCIS adjudication frameworks.",
    },
    {
      icon: <Briefcase />,
      title: "Strategic Alignment",
      description:
        "Services tailored to firm goals and caseload realities. Whether supporting a solo attorney/ multi-attorney practice or a foreign business, our focus remains the same: reliable execution and measurable value.",
    },
  ];

  return (
    <section className="vendor-section">
      <div className="container px-0 vendor-content">
        <div className="vendor-header">
          <div className="subtitle-with-line">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right ">OUR APPROACH</span>
            <span className="subtitle-line"></span>
          </div>

          <h2 className="vendor-heading">
            Long-Term Partner, Not Transactional Vendor
          </h2>

          <p className="vendor-description">
            LawAid management operates as a long-term partner, not a transactional vendor.
            Every engagement is guided by core principles that ensure reliable
            execution, reduced burden, and measurable operational value.
          </p>
        </div>

        {isMobile ? (
          <Splide
            options={{
              perPage: 1,
              arrows: true,
              pagination: false,
              drag: "free",
              type: "loop",
            }}
          >
            {vendors.map((vendor, index) => (
              <SplideSlide key={index}>
                <div className="vendor-card">
                  <div className="vendor-icon">{vendor.icon}</div>
                  <h3 className="vendor-card-title">{vendor.title}</h3>
                  <p className="vendor-card-description">
                    {vendor.description}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="vendor-cards-grid">
            {vendors.map((vendor, index) => (
              <div key={index} className="vendor-card">
                <div className="vendor-icon">{vendor.icon}</div>
                <h3 className="vendor-card-title">{vendor.title}</h3>
                <p className="vendor-card-description">{vendor.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="vendor-banner">
        <h2 className="vendor-banner-heading">
          Reliable Execution. Reduced Burden. Measurable Value.
        </h2>
        <p className="vendor-banner-subheading">
          Whether supporting a solo attorney/ multi-attorney practice or a foreign business move to the United States, our
          focus remains the same: delivering operational excellence that
          strengthens your firm's capacity & your presence in the U.S. to serve clients effectively.
        </p>
      </div>
    </section>
  );
};

export default Vendor;
