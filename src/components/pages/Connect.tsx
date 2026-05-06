import "@splidejs/react-splide/css";
import "../../styles/Connect.css";
import "../../styles/HeroSection.css";
import Dtick from "../../assets/Dtick.svg";
const Connect = () => {
  return (
    <section className="connect-section">
      <div className="container px-0 connect-content">
        <div className="connect-header">
          <h2 className="connect-heading">Connect With Our Team</h2>
        </div>

        <div className="connect-card">
          <div className="connect-content">
            <div className="connect-row">
              <img src={Dtick} alt="checkmark" className="connect-icon" />
              <span>
                Law firms & foreign businesses may initiate contact via email or phone to discuss
                partnership opportunities, service scope, or workflow
                integration. Every inquiry is reviewed confidentially and
                handled with professionalism, discretion, and respect for
                attorney–client boundaries.
              </span>
            </div>
            <div className="connect-row">
              <img src={Dtick} alt="checkmark" className="connect-icon" />
              <span>
                Following initial contact, our team will coordinate a structured
                discussion to understand your business’s needs and determine the
                most effective engagement model.
              </span>
            </div>
          </div>
          <hr className="connect-divider" />
          <div className="connect-action">
            <button
              className="connect-btn"
              onClick={() => {
                window.open("https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb", "_blank");
              }}
            >
              Start a Partnership Inquiry{" "}
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
