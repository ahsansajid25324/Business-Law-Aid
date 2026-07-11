import React from "react";
import "../../styles/LegalSupportSection.css";
import Confidentiality from "../../assets/Confidentaility.svg"; 
import User from "../../assets/User.svg";
import Compliance from "../../assets/Compliance.svg";

interface CustomStyle extends React.CSSProperties {
  "--delay"?: string;
}

const LegalSupportSection = () => {
  return (
    <section className="legal-support-section">
      <div className="legal-support-container">
        {/* Left Side: Core Narrative & Strategy */}
        <div className="legal-support-left animate-item" style={{ "--delay": "100ms" } as CustomStyle}>
          <div className="subtitle-wrapper">
            <span className="subtitle-line"></span>
            <span className="subtitle-tag">WHY FIRMS CHOOSE US</span>
          </div>
          
          <h2 className="main-heading">
            Premium presentation backed by petition-focused substance.
          </h2>
          
          <p className="description">
            Every plan we write is structured around credibility, operational realism, and the strict standards USCIS actually applies. We sit right between low-cost generic writers and high-priced enterprise providers—combining premium quality, realistic financial modeling, and direct attorney collaboration in a modern, efficient process.
          </p>
          
          <p className="description">
            This approach is designed around visual blocks, comparison logic, and quick scanning rather than long, dry, report-style reading, effectively preserving and highlighting your core value proposition to adjudicators.
          </p>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <img src={Confidentiality} alt="Attorney Time Icon" />
              </div>
              <div className="feature-details">
                <h3>Attorney Time Stays Legal</h3>
                <p>
                  We absorb the heavy business documentation workload so attorneys can stay entirely focused on legal analysis, filing strategy, and client counsel.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img src={User} alt="Stronger Plans Icon" />
              </div>
              <div className="feature-details">
                <h3>Stronger Than Client Drafts</h3>
                <p>
                  We replace weak, self-prepared drafts with professionally structured, highly credible documents that speak directly to core adjudication concerns.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img src={Compliance} alt="Consistency Icon" />
              </div>
              <div className="feature-details">
                <h3>Consistent Across Cases</h3>
                <p>
                  Our reliable, premium support standard helps firms comfortably manage repeat E-2 and L-1 workflows with less variation and significantly lower risk.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Showcase Card with deep depth and contrast */}
        <div className="legal-support-right animate-item" style={{ "--delay": "300ms" } as CustomStyle}>
          <div className="stats-showcase-card">
            <span className="card-badge">APPLICATION DESIGN</span>
            <h3 className="stats-number-title">Designed for Review</h3>
            <div className="divider-line"></div>
            <p className="stats-description-text">
              USCIS aligned structures, realistic projections, and growth-ready strategic planning—built for review, not decoration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSupportSection;