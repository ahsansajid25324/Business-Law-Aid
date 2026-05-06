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
            <span className="subtitle">WHAT WE SERVE</span>
          </div>{" "}
          <h2 className="main-heading">
            Serving the Legal Profession{" "}
          </h2>
          <p className="legal-description">
            LawAid management serves attorneys and law firms across
            the United States. Each engagement is structured to align with your
            practice focus, internal processes, timelines, and risk profile.
          </p>
        </div>
      </div>
      <PracticeAreas />
    </section>
  );
};

export default LegalSection;
