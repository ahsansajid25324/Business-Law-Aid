import { useNavigate } from "react-router-dom";
import "../../styles/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      {/* Premium Background Ambient Glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="container px-3 hero-wrapper">
        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="d-flex align-items-center mb-2 mb-md-3">
            <span className="subtitle-line"></span>
            <span className="subtitle">
              BUSINESS IMMIGRATION & GLOBAL EXPANSION CONSULTANCY
            </span>
          </div>
          <h1>
            Connecting Established Businesses to Opportunities in the United States
          </h1>
          <p>
            We build the legal, structural, and strategic frameworks that allow
            established international brands, entrepreneurs, and investors to
            successfully expand and operate in the U.S. market.
          </p>
          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => {
                window.open("https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb", "_blank");
              }}
            >
              Start an Inquiry
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/services")}
            >
              Explore Our Services
            </button>
          </div>
        </div>

        {/* Right Side: Hidden entirely on mobile/tablet */}
        <div className="hero-visual">
          <div className="framework-card card-primary">
            <div className="card-badge">Phase 01</div>
            <h3>U.S. Entity Structuring</h3>
            <p>Corporate formation, tax positioning, and governance alignment.</p>
          </div>
          <div className="framework-card card-secondary">
            <div className="card-badge">Phase 02</div>
            <h3>Immigration Pathways</h3>
            <p>Strategic executive transfers and investor visa frameworks.</p>
          </div>
        </div>
      </div>

      {/* Modernised Bottom Stats Bar */}
      <div className="stats-bar-container">
        <div className="container px-3 stats-grid">
          <div className="stat-box">
            <span className="stat-number">400+</span>
            <span className="stat-label">Businesses Structured</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">100%</span>
            <span className="stat-label">Independent Operation</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">Global</span>
            <span className="stat-label">Expansion Focus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;