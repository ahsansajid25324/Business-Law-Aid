import "@splidejs/react-splide/css";
import "../../styles/Connect.css";
import "../../styles/HeroSection.css";
import Dtick from "../../assets/Dtick.svg";
import { useNavigate } from "react-router-dom";

const Connect = () => {
  const nav = useNavigate();
  return (
    <section className="connect-section">
      <div className="container px-0 connect-content">
        <div className="connect-header">
          <h2 className="connect-heading">Business Planning Inquiry</h2>
        </div>

        <div className="connect-card">
          <div className="connect-content">
            <div className="connect-row">
              <img src={Dtick} alt="checkmark" className="connect-icon" />
              <span className="text-white">
                Use this form to request pricing, discuss your case, review
                deliverables, or connect the consultation workflow to Microsoft
                Bookings in production.
              </span>
            </div>
            <div className="connect-row">
              <img src={Dtick} alt="checkmark" className="connect-icon" />
              <span className="text-white">
                Name, email, phone, visa category, industry, and investment
                context all remain part of the form. Startup and existing
                business status remain included.
              </span>
            </div>
          </div>
          <hr className="connect-divider" />
          <div className="connect-action gap-3">
            <button
              className="connect-btn"
              onClick={() => {
                window.open("https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb", "_blank");
              }}
            >
              Start an Inquiry
            </button>
            <button
              className="btn-outline"
              onClick={() => {
                nav("/pricing");
              }}
            >
              View Pricing
            </button>
          </div>
          <div className="connect-note">
            All inquiries are treated with strict confidentiality
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
