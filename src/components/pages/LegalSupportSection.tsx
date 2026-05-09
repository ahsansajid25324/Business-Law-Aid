import "../../styles/LegalSupportSection.css";
import Support from "../../assets/Support2.png";
import "../../styles/HeroSection.css";
import Confidentiality from "../../assets/Confidentaility.svg"; // Can keep the same icons as they match corporate themes
import User from "../../assets/User.svg";
import Compliance from "../../assets/Compliance.svg";

const LegalSupportSection = () => {
  return (
    <section className="legal-support-section">
      <div className="container px-0 legal-support-content">
        <div className="legal-support-left">
          <div className="d-flex align-items-center">
            <span className="subtitle-line"></span>
            <span className="subtitle">U.S. MARKET ENTRY</span>
          </div>{" "}
          <h2 className="main-heading">
            Structured Global Expansion. Built for Established Brands.
          </h2>
          <p className="description">
            LawAid Management operates at the intersection of business immigration, corporate structuring, and international expansion. We support global business owners and investors by delivering structured expansion pathways, franchise frameworks, and dependable legal coordination across the U.S. market.
          </p>
          <p className="description">
            Unlike traditional consulting firms, LawAid Management provides an all-in-one, integrated framework. Our services are built to establish the legal, corporate, and structural foundation of your company—enabling your brand to scale and operate independently in the United States.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <img src={Confidentiality} alt="Security Icon" />
              </div>
              <div className="feature-details">
                <h3>Structured Frameworks</h3>
                <p>
                  Comprehensive corporate setups, LLC/C-Corp structures, and state registrations handled seamlessly.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src={User} alt="Independent Success Icon" />
              </div>
              <div className="feature-details">
                <h3>Independent Operation</h3>
                <p>
                  We build the pathways so that you can confidently own and operate your brand independently in the U.S.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src={Compliance} alt="USCIS Standards Icon" />
              </div>
              <div className="feature-details">
                <h3>Immigration & Compliance</h3>
                <p>
                  All corporate documentation meticulously aligned with business immigration and USCIS standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="legal-support-right">
          <img src={Support} alt="U.S. Corporate Office" className="main-image" />
          <div className="stats-card">
            <h3 className="stats-number">400+</h3>
            <p className="stats-description">
              Established businesses successfully structured in the United States
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSupportSection;