import "../../styles/LegalSupportSection.css";
import Support from "../../assets/Support2.png";
import "../../styles/HeroSection.css";
import Confidentiality from "../../assets/Confidentaility.svg";
import User from "../../assets/User.svg";
import Compliance from "../../assets/Compliance.svg";

const LegalSupportSection = () => {
  return (
    <section className="legal-support-section">
      <div className="container px-0 legal-support-content">
        <div className="legal-support-left">
          <div className="d-flex align-items-center">
            <span className="subtitle-line"></span>
            <span className="subtitle">WHO WE ARE</span>
          </div>{" "}
          <h2 className="main-heading">
            Structured Legal Support.Built for Law Firms.
          </h2>
          <p className="description">
            LawAid management operates at the intersection of law, business, and
            legal operations. We support attorneys and law firms by delivering
            structured case preparation, immigration-aligned business
            documentation, and dependable execution across complex legal
            matters.
          </p>
          <p className="description">
            Unlike traditional staffing solutions or paralegal services, LawAid
            management is built specifically for law firm workflows. Our
            services integrate seamlessly into attorney-led practices—enhancing
            capacity, consistency, and efficiency without compromising legal
            authority, confidentiality, or compliance.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <img src={Confidentiality} alt="Confidentiality Icon" />
              </div>
              <div className="feature-details">
                <h3>Confidentiality First</h3>
                <p>
                  Attorney-work product privilege maintained throughout every
                  engagement
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src={User} alt="User Icon" />
              </div>
              <div className="feature-details">
                <h3>Attorney-Centric Model</h3>
                <p>
                  Designed to support, not replace, your legal expertise and
                  judgment
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src={Compliance} alt="Compliance Icon" />
              </div>
              <div className="feature-details">
                <h3>Compliance-Driven</h3>
                <p>
                  Every deliverable aligned with USCIS adjudication standards
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="legal-support-right">
          <img src={Support} alt="Law Firm" className="main-image" />
          <div className="stats-card">
            <h3 className="stats-number">2,500+</h3>
            <p className="stats-description">
              Successful cases delivered to law firms nationwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSupportSection;
