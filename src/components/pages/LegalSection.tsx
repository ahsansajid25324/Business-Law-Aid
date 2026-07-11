import "../../styles/Legal.css";
import "../../styles/HeroSection.css";
import PracticeAreas from "./PracticeArea";


const LegalSection = () => {
  return (
    <section className="legal-section">
      <div className="legal-container">
        <div className="d-flex align-items-center">
          <span className="subtitle-line"></span>{" "}
          <span className="subtitle ms-2">WHAT MAKES US DIFFERENT</span>
        </div>{" "}
        <h2 className="main-heading">
          {" "}
          Built strictly for E-2 and L-1 petition logic
        </h2>
        <p className="legal-description">
          Law Aid Management does not write generic SBA, lender-style, or
          general bank financing reports. Every single document we produce is
          uniquely structured around business immigration strategy, adjudication
          workflows, and rigorous legal frameworks.
        </p>
      </div>
      <PracticeAreas />
    </section>
  );
};

export default LegalSection;
