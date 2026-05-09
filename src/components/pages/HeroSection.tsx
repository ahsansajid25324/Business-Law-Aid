import { useNavigate } from "react-router-dom";
import "../../styles/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="landing-container">
        <div className="container px-0  hero-section">
          <div className="d-flex align-items-center">
            <span className="subtitle-line"></span>
            <span className="subtitle">
              BUSINESS IMMIGRATION & GLOBAL EXPANSION CONSULTANCY
            </span>
          </div>
          <h1>
            Connecting Established Businesses to Opportunities in the United
            States
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
          <div className="stats">
            <div>
              <span className="stat-number">400+</span>
              <span className="stat-label">Businesses Structured</span>
            </div>
            <div>
              <span className="stat-number">100%</span>
              <span className="stat-label">Independent Operation</span>
            </div>
            <div>
              <span className="stat-number">Global</span>
              <span className="stat-label">Expansion Focus</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
