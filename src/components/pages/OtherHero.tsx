import React from "react";
import "../../styles/OtherHero.css";

interface Stat {
  number: string;
  label: string;
}

interface CustomStyle extends React.CSSProperties {
  "--delay"?: string;
}

interface OtherHeroProps {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage?: string; // Optional now since we use the luxury premium background colors
  stats?: Stat[];
}

const OtherHero = ({
  subtitle,
  title,
  description,
  stats,
}: OtherHeroProps) => (
  <section className="other-landing-pane">
    <div className="other-grid-container">
      <div className="other-hero-section">
        
        {/* Subtitle / Tagline */}
        <div 
          className="tagline-badge animate-item"
          style={{ "--delay": "100ms" } as CustomStyle}
        >
          <span className="badge-text">{subtitle}</span>
        </div>

        {/* Main Title */}
        <h1 
          className="other-hero-title animate-item"
          style={{ "--delay": "250ms" } as CustomStyle}
        >
          {title}
        </h1>

        {/* Description Paragraph */}
        <p 
          className="other-summary-paragraph animate-item"
          style={{ "--delay": "400ms" } as CustomStyle}
        >
          {description}
        </p>

        {/* Premium Minimal Stats Layout */}
        {stats && stats.length > 0 && (
          <div 
            className="other-stats-cluster animate-item"
            style={{ "--delay": "550ms" } as CustomStyle}
          >
            {stats.map((stat, index) => (
              <div key={index} className="other-stat-node">
                <span className="other-stat-num">{stat.number}</span>
                <span className="other-stat-desc">{stat.label}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  </section>
);

export default OtherHero;