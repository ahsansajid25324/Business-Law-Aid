import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import "../../styles/HeroSection.css";

interface CustomStyle extends React.CSSProperties {
  "--delay"?: string;
}

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-landing-pane">
      <div className="hero-grid-container">
        {/* Editorial Text Column */}
        <div className="hero-narrative-block">
          <div
            className="tagline-badge animate-item"
            style={{ "--delay": "100ms" } as CustomStyle}
          >
            PREMIUM IMMIGRATION BUSINESS PLANNING
          </div>

          <h1
            className="hero-main-title animate-item"
            style={{ "--delay": "250ms" } as CustomStyle}
          >
            USCIS-Compliant Business Plans for E-2 and L-1 Petitions
          </h1>

          <p
            className="hero-summary-paragraph animate-item"
            style={{ "--delay": "400ms" } as CustomStyle}
          >
            Law Aid Management prepares immigration business plans built
            specifically for petition strategy, adjudication review, and
            attorney scrutiny. Structured around credibility, operational
            realism, and the actual legal frameworks applied by USCIS.
          </p>

          <div
            className="hero-action-cluster animate-item"
            style={{ "--delay": "550ms" } as CustomStyle}
          >
            <button
              className="btn-solid"
              onClick={() =>
                window.open("https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb", "_blank")
              }
            >
              Start an Inquiry <HiArrowUpRight />
            </button>
            <button
              className="btn-outline"
              onClick={() => navigate("/pricing")}
            >
              Request Pricing
            </button>
          </div>
        </div>

        {/* Bento Grid Visual Element Grid - Value Propositions & Specs */}
        <div className="hero-bento-visual">
          <div
            className="bento-cell cell-featured animate-item"
            style={{ "--delay": "300ms" } as CustomStyle}
          >
            <span className="cell-step">E-2 and L-1</span>
            <h3>Specialized Only</h3>
            <p>
              Built exclusively around visa petition logic, not generic SBA or
              lender-style templates.
            </p>
          </div>

          <div
            className="bento-cell cell-standard animate-item"
            style={{ "--delay": "450ms" } as CustomStyle}
          >
            <span className="cell-step">From $500</span>
            <h3>Introductory Pricing</h3>
            <p>
              Premium presentation, realistic financial modeling, and direct
              attorney collaboration.
            </p>
          </div>

          <div
            className="bento-cell cell-stat-hero animate-item"
            style={{ "--delay": "600ms" } as CustomStyle}
          >
            <span className="bento-stat-num">5-7 Days</span>
            <span className="bento-stat-desc">Standard Turnaround</span>
          </div>

          <div
            className="bento-cell cell-stat-secondary animate-item"
            style={{ "--delay": "750ms" } as CustomStyle}
          >
            <span className="bento-stat-num">Unlimited</span>
            <span className="bento-stat-desc">Revisions Until Submission</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
