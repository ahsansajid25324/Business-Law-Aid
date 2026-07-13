import "../../styles/Cost.css";
import "../../styles/HeroSection.css";
import ServiceCarousel from "./ServiceCarousel";
import { CheckCircle2 } from "lucide-react";

const Cost = () => {
  // Updated with the new packages and pricing philosophy details
  const serviceCarouselData = [
    {
      icon: <CheckCircle2 />,
      title: "Basic Plan - Starting at $500",
      description:
        "Built for straightforward filings. Includes custom scope, financial model, and standard turnaround.",
    },
    {
      icon: <CheckCircle2 />,
      title: "Custom Case Package",
      description:
        "Tailored to complexity with adjustments, expanded research, modeling, and strategic customization.",
    },
    {
      icon: <CheckCircle2 />,
      title: "Attorney Collaboration",
      description:
        "Direct coordination support, revision-driven workflow, and tight filing strategy alignment.",
    },
    {
      icon: <CheckCircle2 />,
      title: "Specialized Expansions",
      description:
        "Expedited priority delivery for tight deadlines, and Franchise Packages for layered structures.",
    },
  ];

  return (
    <section className="cost-section">
      <div className="container px-0 cost-content">
        <div>
          <div className="cost-with-line">
            <span className="cost-line"></span>
            <span className="cost cost-right">
              {" "}
              FLEXIBLE PREMIUM PRICING
            </span>
            <span className="cost-line"></span>
          </div>{" "}
          <h2 className="main-heading text-center">
            Flexible Pricing with Room for Case Complexity
          </h2>
          <p className="cost-description text-center">
            Rather than forcing every matter into a rigid package, we scope around visa category, industry complexity, staffing requirements, attorney involvement, speed, and documentation depth.
          </p>
        </div>
      </div>
      <ServiceCarousel
        data={serviceCarouselData}
        testimonial="Why is pricing flexible? Because a startup retail E-2, a franchise expansion, and an L-1 new office filing do not require the same level of research, modeling, or coordination."
      />
    </section>
  );
};

export default Cost;