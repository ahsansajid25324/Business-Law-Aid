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
      title: "Precision Structuring",
      description:
        "Disciplined execution and structured workflows ensure absolute corporate precision. Our setups are built to align seamlessly with both complex state registration guidelines and federal corporate codes.",
    },
    {
      icon: <Shield />,
      title: "Compliant Frameworks",
      description:
        "We structure businesses with strict adherence to U.S. corporate regulations. Every operating agreement, licensing term, and documentation pathway is developed with clean corporate compliance at its core.",
    },
    {
      icon: <Scale />,
      title: "Immigration Alignment",
      description:
        "Our strategic roadmaps integrate seamlessly with U.S. business immigration standards, ensuring your business setup cleanly supports visa pathways like E-2, L-1, or EB-5 without operational delays.",
    },
    {
      icon: <Briefcase />,
      title: "Strategic Coordination",
      description:
        "Services tailored entirely to your expansion timeline and investment goals. We coordinate with specialized legal and financial partners to deliver a hassle-free transition into the U.S. market.",
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
            A Strategic Partner, Not a Transactional Agency
          </h2>

          <p className="vendor-description">
            LawAid Management operates as a committed long-term partner in your expansion journey. 
            Every client engagement is guided by core structural principles that ensure compliant setup, 
            reduced operational bottlenecks, and measurable value for international brands.
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
          Reliable Execution. Structured Growth. Operational Freedom.
        </h2>
        <p className="vendor-banner-subheading">
          Whether designing a direct expansion path for established business owners or structuring a turnkey franchise 
          system for international investors, our focus remains exactly the same: providing the operational and 
          corporate foundation to help you run your brand independently and successfully in the United States.
        </p>
      </div>
    </section>
  );
};

export default Vendor;