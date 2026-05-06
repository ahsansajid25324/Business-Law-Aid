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
      title: "Hybrid Service Model",
      description:
        "Legal expertise, business acumen, and operational excellence unified in a single partnership",
    },
    {
      icon: <Shield />,
      title: "Compliance-Driven Workflows",
      description:
        "Every deliverable structured to meet USCIS adjudication and evidentiary standards",
    },
    {
      icon: <Users />,
      title: "Scalable Without Overhead",
      description:
        "Expand your firm's capacity without hiring, training, or infrastructure investment",
    },
    {
      icon: <TrendingUp />,
      title: "Immigration-Specific Expertise",
      description:
        "Deep knowledge of visa categories, regulatory updates, and case strategy",
    },
    {
      icon: <Lock />,
      title: "Absolute Confidentiality",
      description:
        "Attorney work-product privilege maintained with the highest professional standards",
    },
    {
      icon: <Target />,
      title: "Outcome-Focused Partnership",
      description:
        "Long-term strategic alignment with your firm's goals and client success",
    },
  ];

  return (
    <section className="advantage-section">
      <div className="container px-0 advantage-content">
        <div className="set-advantage">
          <div className="subtitle-with-line">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right">
              WHY LAWAID MANAGEMENT{" "}
            </span>
            <span className="subtitle-line"></span>
          </div>
          <h2 className="main-heading">The LawAid Management Advantage</h2>
          <p className="advantage-description">
            Law firms partner with LawAid management because we deliver reliable
            execution without operational burden
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
          <img src={WorkflowsImage} alt="Law Firm Workflows" />
        </div>
        <div className="workflows-content">
          <h2>Built for Immigration Attorneys</h2>
          <p>
            Our services integrate seamlessly into attorney-led practices,
            enhancing capacity, consistency, and efficiency without compromising
            legal authority, confidentiality, or compliance.
          </p>
          <ul>
            <li>
              <img src={Tick}></img>No operational burden, staffing overhead, or
              infrastructure costs
            </li>
            <li>
              <img src={Tick}></img> Complete attorney control and client
              confidentiality maintained
            </li>
            <li>
              <img src={Tick}></img> Scalable support aligned with your firm's
              caseload and timeline
            </li>
          </ul>
        </div>
      </div>

      <div className="container px-0 imm-support-grid">
        {/* LEFT CONTENT */}
        <div className="imm-support-text">
          <h3>Advantage For Foreign Businesses</h3>

          <p className="intro-text">
            International expansion often requires working with multiple
            professionals and specialized service providers to ensure a
            successful U.S. market entry.
          </p>

          <p>
            Navigating these requirements independently can be complex.
            Typically, businesses may need to coordinate with:
          </p>

          <ul className="support-list">
            <li>Immigration lawyers</li>
            <li>Corporate consultants</li>
            <li>Franchise advisors</li>
            <li>Legal documentation specialists</li>
          </ul>

          <div className="law-firm-box bg-white">
            <p className="law-text">The LawAid Solution:</p>
            <p>
              LawAid Management provides a <strong>structured platform</strong>{" "}
              that helps coordinate these elements, allowing entrepreneurs to
              navigate the expansion process more efficiently and with greater
              strategic alignment.
            </p>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="imm-support-image custom-card-image">
          <img src={"advantage.jpeg"} alt="Immigration Case Support" />
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
