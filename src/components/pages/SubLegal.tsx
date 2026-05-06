import "../../styles/LegalSupportSection.css";
import "../../styles/HeroSection.css";
import User from "../../assets/User.svg"; // Reuse for Ownership
import Compliance from "../../assets/Compliance.svg"; // Reuse for Strategy

const SubLegal = () => {
  return (
    <section className="legal-support-section">
      <div className="container px-0 legal-support-content">
        <div className="legal-support-left">
          <div className="d-flex align-items-center">
            <span className="subtitle-line"></span>
            <span className="subtitle">U.S. MARKET ENTRY</span>
          </div>
          <h2 className="main-heading">
            Expand Your Business to the United States
          </h2>
          <p className="description">
            Entering the United States market presents significant opportunities
            for entrepreneurs and established businesses. However, expanding
            internationally requires careful planning, legal structuring, and
            coordination between multiple professional services.
          </p>
          <p className="description">
            LawAid Management helps businesses structure their expansion into
            the United States by creating the legal, strategic, and
            documentation frameworks required to establish operations in the
            U.S. market.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <img src={Compliance} alt="Strategy Icon" />
              </div>
              <div className="feature-details">
                <h3>Strategic Planning</h3>
                <p>
                  Coordinating the legal structures and documentation required
                  for international growth.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src={User} alt="Ownership Icon" />
              </div>
              <div className="feature-details">
                <h3>Full Entrepreneur Ownership</h3>
                <p>
                  We structure the process, but the business remains fully owned
                  and operated by you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="legal-support-right">
          <img
            src={"expantion.png"}
            alt="U.S. Market Expansion"
            className="main-image"
          />
          <div className="stats-card">
            <h3 className="stats-number">400+</h3>
            <p className="stats-description">
              Businesses setup in Unites States
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubLegal;
