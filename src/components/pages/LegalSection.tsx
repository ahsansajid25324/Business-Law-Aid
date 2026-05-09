import "../../styles/Legal.css";
import "../../styles/HeroSection.css";
import PracticeAreas from "./PracticeArea";

const LegalSection = () => {
  return (
    <section className="legal-section">
      <div className="container px-0 legal-content">
        <div>
          <div className="d-flex align-items-center">
            <span className="subtitle-line"></span>
            <span className="subtitle">WHO WE SERVE</span>
          </div>{" "}
          <h2 className="main-heading">
            Built for Proven, Scalable Concepts
          </h2>
          <p className="legal-description">
            LawAid Management serves established global brands, investors, and business concepts that have the potential to scale successfully in the United States. Each engagement is structured to align with your concept, expansion goals, timeline, and operational structure.
          </p>
        </div>
      </div>
      <PracticeAreas />
    </section>
  );
};

export default LegalSection;