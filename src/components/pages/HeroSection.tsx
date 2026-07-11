import { useNavigate } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import "../../styles/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-landing-pane">
      <div className="hero-grid-container">
        
        {/* Editorial Text Column */}
        <div className="hero-narrative-block">
          <div className="tagline-badge">
            <span className="badge-dot"></span>
            GLOBAL EXPANSION & BUSINESS IMMIGRATION
          </div>
          
          <h1 className="hero-main-title">
            We architect U.S. market entry for global enterprises.
          </h1>
          
          <p className="hero-summary-paragraph">
            Providing premium corporate structuring, cross-border tax strategy, and 
            elite immigration pathways for established brands, corporate executives, and global investors.
          </p>
          
          <div className="hero-action-cluster">
            <button
              className="btn-solid"
              onClick={() => window.open("https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb", "_blank")}
            >
              Start an Inquiry <HiArrowUpRight />
            </button>
            <button
              className="btn-outline"
              onClick={() => navigate("/services")}
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Bento Grid Visual Element Grid */}
        <div className="hero-bento-visual">
          <div className="bento-cell cell-featured">
            <span className="cell-step">Phase 01</span>
            <h3>U.S. Entity Structuring</h3>
            <p>Corporate formation, multi-state tax architecture, and cross-border governance design.</p>
          </div>
          
          <div className="bento-cell cell-standard">
            <span className="cell-step">Phase 02</span>
            <h3>Immigration Pathways</h3>
            <p>Strategic executive transfers and premium visa setups.</p>
          </div>

          <div className="bento-cell cell-stat-hero">
            <span className="bento-stat-num">400+</span>
            <span className="bento-stat-desc">Entities Structured Worldwide</span>
          </div>

          <div className="bento-cell cell-stat-secondary">
            <span className="bento-stat-num">100%</span>
            <span className="bento-stat-desc">Compliance Rating Secured</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;