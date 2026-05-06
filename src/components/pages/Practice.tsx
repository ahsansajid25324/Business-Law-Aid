import "../../styles/Practice.css";
import Support from "../../assets/Services.png";
import "../../styles/HeroSection.css";

const Practice = () => {
  return (
    <section className="practice-support-section">
      <div className="container px-0 practice-support-content">
        <div className="practice-support-left">
          <div className="d-flex align-items-center">
            <span className="subtitle-line"></span>
            <span className="subtitle">HOW WE SUPPORT LAW FIRMS</span>
          </div>

          <h2 className="main-heading">
            Professional Extension of Your Practice
          </h2>

          <p className="description">
            LawAid management provides structured, scalable immigration case
            support services designed exclusively for U.S. immigration attorneys
            and law firms. Our role is to strengthen attorney-led representation
            by handling documentation-intensive and process-driven components of
            case preparation.
          </p>

          <p className="description">
            We assist with evidence organization, compliance checks, drafting
            support, and case structuring—while ensuring that legal strategy,
            representation, and advocacy remain fully attorney-controlled.
          </p>

          <p className="description">
            Every engagement is guided by core principles: accuracy,
            confidentiality, compliance, and strategic alignment with firm goals
            and caseload realities.
          </p>
        </div>

        <div className="practice-support-right">
          <img src={Support} alt="Law Firm" className="pro-image" />

          <div className="exec-stats-card">
            <h3 className="exec-stats-number text-dark">2500+</h3>
            <p className="exec-stats-description">
              Cases delivered with precision and reliability{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practice;
