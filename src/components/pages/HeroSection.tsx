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
              HELPING INDIVIDUALS & COMPANIES GROW THEIR BUSINESS ACROSS THE
              US{" "}
            </span>
          </div>
          <h1>Legal Precision. Efficient Workflows. Reliable Execution.</h1>
          <p>
            Structured, scalable support designed for U.S. Immigration Attorneys/ law firms & foreign businesses-through reliable execution.
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
              <span className="stat-number">20+</span>
              <span className="stat-label">Law Firms Served</span>
            </div>
            <div>
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div>
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div>
              <span className="stat-number">400+</span>
              <span className="stat-label">Businesses Setup</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
