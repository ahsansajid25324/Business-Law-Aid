import "../../styles/Professional.css";
import "../../styles/HeroSection.css";
import ServiceCarousel from "./ServiceCarousel";
import { CheckCircle2, Shield, Users, TrendingUp } from "lucide-react";

const Professional = () => {
  const serviceCarouselData = [
    {
      icon: <CheckCircle2 />,
      title: "All-in-One Framework",
      description:
        "Coordinating entity setup, corporate compliance, and structural design under a unified consulting partner.",
    },
    {
      icon: <Shield />,
      title: "Immigration Compliance",
      description:
        "Every strategic roadmap and document is meticulously designed to satisfy strict U.S. regulatory standards.",
    },
    {
      icon: <Users />,
      title: "Turnkey Franchise Setup",
      description:
        "Transforming established, profitable concepts into fully structured, investor-ready franchise systems.",
    },
    {
      icon: <TrendingUp />,
      title: "Operational Independence",
      description:
        "Providing the structural runway so that you can retain 100% ownership and run your business on your terms.",
    },
  ];

  return (
    <section className="pro-section">
      <div className="container px-0 pro-content">
        <div>
          <div className="subtitle-with-line justify-content-center">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right text-center">
              WHAT WE DO
            </span>
            <span className="subtitle-line"></span>
          </div>{" "}
          <h2 className="main-heading text-center">
            Strategic Infrastructure for Global Brands
          </h2>
          <p className="pro-description text-center">
            LawAid Management helps established businesses explore opportunities
            to expand into the United States. We do not run or manage daily operations
            on behalf of our clients. Instead, we act as a structural coordination partner—building 
            the legal, corporate, and strategic frameworks that allow entrepreneurs and investors 
            to confidently establish themselves and operate independently in the U.S. market.
          </p>
        </div>
      </div>
      <ServiceCarousel
        data={serviceCarouselData}
        testimonial="We focus on building compliant, independent corporate foundations—keeping operational control entirely in your hands."
      />

      <div className="container px-0 imm-support-grid">
        {/* LEFT CONTENT */}
        <div className="imm-support-text">
          <h3>Our Role</h3>

          <p className="intro-text">
            LawAid Management focuses on building the legal and structural
            foundation that allows businesses to expand into the United States.
          </p>

          <p>
            We do not operate or manage businesses on behalf of our clients.
            Instead, we help ensure that the appropriate frameworks are in place
            so that entrepreneurs and investors can establish and operate their
            businesses independently.
          </p>

          <div className="law-firm-box bg-white">
            <p className="law-text">Our work typically involves: </p>
            <ul>
              <li>Coordinating corporate & legal entity setup</li>
              <li>Designing market entry & expansion roadmaps</li>
              <li>Aligning setups with business immigration requirements</li>
              <li>Structuring turnkey franchise and investor frameworks</li>
            </ul>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="imm-support-image custom-card-image">
          <img src={"role.jpg"} alt="Corporate Structuring Support" />
          <div className="custom-card-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Professional;