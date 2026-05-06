import "../../styles/StartedSection.css";
import "../../styles/HeroSection.css";
import { useNavigate } from "react-router-dom";

interface StartedSectionProps {
  title: string;
  subtitle: string;
}
const StartedSection = ({ title, subtitle }: StartedSectionProps) => {
  const navigate = useNavigate();
  return (
    <section className="started-section">
      <div className="container px-0 started-content">
        <div className="set-started">
          <div className="subtitle-with-line">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right">GET STARTED</span>
            <span className="subtitle-line"></span>
          </div>{" "}
          <h2 className="main-heading text-white">{title}</h2>
          <p className="started-description text-white ">{subtitle}</p>
        </div>
        <div className="hero-actions">
          <button
            onClick={() => {
              window.open("https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb", "_blank");
            }}
            className="primary-btn"
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
    </section>
  );
};

export default StartedSection;
