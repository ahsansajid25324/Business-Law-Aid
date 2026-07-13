import "../../styles/Pricing.css";
import "../../styles/HeroSection.css";
import { useState } from "react";

const Pricing = () => {
  const [showModal, setShowModal] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  return (
    <section className="pricing-section">
      <div className="container px-0 pricing-content">
        <div>
          <div className="subtitle-with-line justify-content-center">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right text-center">
              CHOOSE YOUR PLAN
            </span>
            <span className="subtitle-line"></span>
          </div>
          <h2 className="main-heading text-center">
            Choose a Plan
            <br />
            That's Built For Your Business
          </h2>
          <p className="pricing-description text-center">
            Select the plan that fits your firm's needs. All plans include
            comprehensive paralegal support and can be customized for your
            practice.
          </p>
          <p className="pricing-description text-center">
            <strong>
              Pricing for moving your business to United States is customized to
              each business. Please fill out our form with your business
              information & our pricing team will get in contact with you
              shortly
            </strong>
          </p>
        </div>
      </div>

      {/* Pricing Layout updated with the 3 requested tiers */}
      <div className="pricing-layout d-flex gap-3 justify-content-center flex-wrap">
        
        {/* Card 1: Basic Immigration Business Plan */}
        <div className="general-pricing-card">
          <h4 className="card-title text-center m-auto mt-3">
            BASIC IMMIGRATION BUSINESS PLAN
          </h4>
          <h3 className="card-subtitle m-auto text-center mb-2">
            Starting at $500
          </h3>
          <p className="card-desc m-auto text-center mb-3">per plan</p>
          <button
            className="card-btn"
            onClick={() => {
              setIframeLoading(true);
              setShowModal(true);
            }}
          >
            Get Started
          </button>

          <ul className="card-list">
            <li>Built for straightforward filings</li>
            <li>Custom scope mapping</li>
            <li>Financial model included</li>
            <li>Standard turnaround time</li>
            <li>Comprehensive paralegal support</li>
          </ul>
        </div>

        {/* Card 2: Custom Case Package */}
        <div className="custom-pricing-card featured-card">
          <div className="card-badge">FLEXIBLE SOLUTION</div>
          <h4 className="card-title m-auto text-center mt-3">
            CUSTOM CASE PACKAGE
          </h4>
          <h3 className="card-subtitle m-auto text-center mb-2">
            Custom
          </h3>
          <p className="card-desc m-auto text-center mb-3">
            tailored to complexity
          </p>
          <button
            className="card-btn"
            onClick={() => {
              setIframeLoading(true);
              setShowModal(true);
            }}
          >
            Contact Sales
          </button>
          <ul className="card-list">
            <li>Case complexity adjustments</li>
            <li>Expanded research and modeling</li>
            <li>Strategic customization options</li>
            <li>Flexible scope alignments</li>
            <li>All basic support structures included</li>
          </ul>
        </div>

        {/* Card 3: Franchise Expansion Package */}
        <div className="general-pricing-card">
          <h4 className="card-title text-center m-auto mt-3">
            FRANCHISE EXPANSION PACKAGE
          </h4>
          <h3 className="card-subtitle m-auto text-center mb-2">
            Custom
          </h3>
          <p className="card-desc m-auto text-center mb-3">layered structures</p>
          <button
            className="card-btn"
            onClick={() => {
              setIframeLoading(true);
              setShowModal(true);
            }}
          >
            Inquire Now
          </button>

          <ul className="card-list">
            <li>For more layered corporate structures</li>
            <li>Multi-unit expansion frameworks</li>
            <li>Detailed expansion assumptions</li>
            <li>Operational scaling log & tracking</li>
            <li>Priority formatting & deep-dive research</li>
          </ul>
        </div>

      </div>

      {/* Modal Window */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: "#0f0f11",
              padding: 0,
              borderRadius: 8,
              maxWidth: "90vw",
              maxHeight: "90vh",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              position: "relative",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: 8,
                right: 12,
                background: "transparent",
                border: "none",
                fontSize: 24,
                cursor: "pointer",
                zIndex: 2,
                color: "#fff",
              }}
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Premium Spinner */}
            {iframeLoading && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#0f0f11",
                  zIndex: 1,
                }}
              >
                <div className="premium-spinner"></div>
              </div>
            )}

            <iframe
              src="https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb"
              title="garted Form"
              width="600"
              height="600"
              style={{
                border: "none",
                maxWidth: "80vw",
                maxHeight: "80vh",
                visibility: iframeLoading ? "hidden" : "visible",
              }}
              onLoad={() => setIframeLoading(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;