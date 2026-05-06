import "../../styles/Practice.css";
import "../../styles/HeroSection.css";

const SubPractice = () => {
  return (
    <section className="practice-support-section">
      <div className="container px-0 practice-support-content">
        <div className="practice-support-left">
          <div className="d-flex align-items-center">
            <span className="subtitle-line"></span>
            <span className="subtitle">U.S MARKET ENTRY</span>
          </div>

          <h2 className="main-heading">
            Expand Your Business to the United States
          </h2>

          <p className="description">
            Entering the United States market presents significant opportunities
            for entrepreneurs and established businesses. However, expanding
            internationally requires careful planning, legal structuring, and
            coordination between multiple professional services.
          </p>

          <p className="description">
            LawAid Management helps businesses structure their expansion into
            the United States by creating the legal, strategic, and
            documentation frameworks required to establish operations in the
            U.S. market.
          </p>

          <p className="description">
            Our role is to help entrepreneurs prepare their businesses for
            expansion by coordinating the legal structures, documentation, and
            strategic planning required for international growth. While we
            assist in structuring the process, the business remains fully owned
            and operated by the entrepreneur or investor.
          </p>
        </div>

        <div className="practice-support-right">
          <img
            src={"expantion.png"}
            alt="Business Expansion"
            className="pro-image"
          />

          <div className="exec-stats-card">
            <h3 className="exec-stats-number text-dark"> 400+</h3>
            <p className="exec-stats-description">
              Businesses setup in United States{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubPractice;
