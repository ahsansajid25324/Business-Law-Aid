import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../styles/AdvantageSection.css";
import "../../styles/HeroSection.css";
import Tick from "../../assets/tick.svg";
import {
  CheckCircle2,
  Shield,
  Users,
  TrendingUp,
  Lock,
  Target,
} from "lucide-react";
import WorkflowsImage from "../../assets/Workflows.png";

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
      icon: <CheckCircle2 />,
      title: "All-in-One Framework",
      description:
        "We coordinate your entire expansion strategy—from corporate entity setup to franchise system structuring.",
    },
    {
      icon: <Shield />,
      title: "Immigration-Compliant",
      description:
        "Every corporate document and business plan is meticulously aligned with strict USCIS evidentiary standards.",
    },
    {
      icon: <Users />,
      title: "Franchise Readiness",
      description:
        "We turn successful business models into turnkey, investor-ready franchise systems for the U.S. market.",
    },
    {
      icon: <TrendingUp />,
      title: "Market Transition Support",
      description:
        "Tailored strategies to help established international brands successfully adapt to U.S. consumers.",
    },
    {
      icon: <Lock />,
      title: "Independent Operation",
      description:
        "We build the structural runway, but you retain 100% ownership and operational control of your business.",
    },
    {
      icon: <Target />,
      title: "Strategic Coordination",
      description:
        "Deep collaboration with specialized partners to provide a seamless, hassle-free market entry.",
    },
  ];

  return (
    <section className="advantage-section">
      <div className="container px-0 advantage-content">
        <div className="set-advantage">
          <div className="subtitle-with-line">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right">
              WHY LAWAID MANAGEMENT
            </span>
            <span className="subtitle-line"></span>
          </div>
          <h2 className="main-heading">The LawAid Management Advantage</h2>
          <p className="advantage-description">
            Established global brands choose LawAid Management because we build the complete legal, corporate, and strategic foundation for U.S. market success.
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

      <div className="container workflows-section">
        <div className="workflows-image">
          <img src={WorkflowsImage} alt="Global Expansion Workflows" />
        </div>
        <div className="workflows-content">
          <h2>Simplifying Your Expansion Journey</h2>
          <p>
            Our structural coordination services provide a seamless bridge to the United States, managing the complexities of entity formation, licensing frameworks, and investment setups.
          </p>
          <ul>
            <li>
              <img src={Tick} alt="Check Icon" /> Completely transparent process with tailored engagement proposals
            </li>
            <li>
              <img src={Tick} alt="Check Icon" /> Comprehensive legal, corporate, and structural coordination under one roof
            </li>
            <li>
              <img src={Tick} alt="Check Icon" /> Fully independent operation—you own, control, and run your brand
            </li>
          </ul>
        </div>
      </div>

      <div className="container px-0 imm-support-grid">
        {/* LEFT CONTENT */}
        <div className="imm-support-text">
          <h3>Strategic Alignment for Global Brands</h3>

          <p className="intro-text">
            Expanding into the United States typically requires business owners to manage and synchronize multiple disjointed professional services.
          </p>

          <p>
            Without strategic alignment, navigating corporate setup, franchising laws, and immigration requirements independently can lead to costly operational delays. Typically, businesses must coordinate with:
          </p>

          <ul className="support-list">
            <li>Immigration lawyers</li>
            <li>Corporate structuring consultants</li>
            <li>Franchise legal advisors</li>
            <li>Business documentation specialists</li>
          </ul>

          <div className="law-firm-box bg-white">
            <p className="law-text">The LawAid Solution:</p>
            <p>
              LawAid Management acts as your single **structured platform**. We coordinate these critical elements to ensure that your legal, corporate, and investment strategies are completely aligned for an efficient U.S. market entry.
            </p>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="imm-support-image custom-card-image">
          <img src={"advantage.jpeg"} alt="Structured Business Expansion" />
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;