import "../../styles/Pricing.css";
import "../../styles/HeroSection.css";
import Stop from "../../assets/Stop.svg";
import Blacktick from "../../assets/BlackTick.svg";
import Line from "../../assets/line.svg";
import { useState } from "react";
const Pricing = () => {
  const [showModal, setShowModal] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  return (
    <section className="pricing-section">
      <div className="container px-0 pricing-content">
        <div>
          <div className="subtitle-with-line  justify-content-center">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right text-center">
              CHOOSE YOUR PLAN
            </span>
            <span className="subtitle-line"></span>
          </div>
          <h2 className="main-heading  text-center">
            Choose a Plan
            <br></br>
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
      <div className="pricing-layout d-flex gap-3">
        <div className="general-pricing-card">
          <h4 className="card-title text-center m-auto mt-3">
            GENERAL PRICING
          </h4>
          <h3 className="card-subtitle m-auto text-center mb-2">
            Starting at $500{" "}
          </h3>

          <p className="card-desc m-auto text-center mb-3">per case</p>
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
            <li>Standardized per-case pricing</li>
            <li>
              All visa types covered (B1/B2, F1, H1B, O1, E1/E2, L1, etc.)
            </li>
            <li>No additional charges for dependents</li>
            <li>Business plan & company formation options</li>
            <li>Email & phone support</li>
            <li>Standard processing time</li>
            <li>Document review included</li>
          </ul>
        </div>

        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",

              height: "100vh",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
            onClick={() => setShowModal(false)}
          >
            <div
              style={{
                background: "#fff",
                padding: 0,
                borderRadius: 8,

                maxWidth: "90vw",
                maxHeight: "90vh",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{
                  position: "absolute",
                  top: 0,
                  right: 8,
                  background: "transparent",
                  border: "none",
                  fontSize: 24,
                  cursor: "pointer",
                  zIndex: 2,
                }}
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                &times;
              </button>

              {/* Spinner */}
              {iframeLoading && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                    zIndex: 1,
                  }}
                >
                  <div className="spinner"></div>
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

        <div className="custom-pricing-card">
          <div className="card-badge">FLEXIBLE SOLUTION</div>

          <h4 className="card-title m-auto text-center mt-3">CUSTOM PRICING</h4>
          <h3 className="card-subtitle m-auto text-center mb-2">Custom </h3>

          <p className="card-desc m-auto text-center mb-3">
            tailored to your needs
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
            <li>Volume-based discounts for high-volume firms</li>
            <li>Retainer arrangements available</li>
            <li>Custom service packages tailored to your practice</li>
            <li>Flexible payment terms</li>
            <li>Dedicated account manager</li>
            <li>Priority processing & rush options</li>
            <li>All General Pricing features included</li>
          </ul>
        </div>
      </div>
      <div className="pricing-layout d-flex flex-column">
        <div className="pricing-table-wrapper">
          <table className="pricing-set-table">
            <thead>
              <tr>
                <th>
                  <span>Services Included</span>
                </th>
                <th>General Pricing</th>
                <th style={{ color: "rgba(212, 165, 116, 1)" }}>Custom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standardized Per-Case Pricing</td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Volume-Based Discounts</td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Retainer Arrangements</td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Flexible Payment Terms</td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>

              <tr>
                <td>No Additional Charges for Dependents</td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Email Support</td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Phone Support</td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Dedicated Account Manager</td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Standard Processing Time</td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Priority Processing & Rush Options</td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pricing-table-wrapper">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>
                  <span>Service Name</span>
                </th>
                <th>Price Per Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BI/B2 (INITIAL FILING/COS/EXTENSION)</td>
                <td>$200</td>
              </tr>
              <tr>
                <td>F1 (INITIAL FILING/COS/EXTENSION)</td>
                <td>$200</td>
              </tr>
              <tr>
                <td>EI/E2 – CASE PREPARATION ONLY (INITIAL/COS/EXTENSION)</td>
                <td>$2,000</td>
              </tr>
              <tr className="highlight">
                <td>
                  EI/E2 – CASE PREP+BUSINESS PLAN+COMPANY FORMATION
                  (INITIAL/COS/EXTENSION)
                  <br></br>
                  <div className="badge">Complete Solution</div>
                </td>
                <td>$3,000</td>
              </tr>
              <tr>
                <td>L1 – CASE PREPARATION ONLY (INITIAL/COS/EXTENSION)</td>
                <td>$2,000</td>
              </tr>
              <tr className="highlight">
                <td>
                  L1 – CASE PREP+BUSINESS PLAN+COMPANY FORMATION
                  (INITIAL/COS/EXTENSION)
                  <br></br>
                  <div className="badge">Complete Solution</div>
                </td>
                <td>$3,000</td>
              </tr>
              <tr>
                <td>H1B (INITIAL FILING/COS/EXTENSION)</td>
                <td>$650</td>
              </tr>
              <tr>
                <td>O1 (INITIAL FILING/COS/EXTENSION)</td>
                <td>$2,500</td>
              </tr>
              <tr>
                <td>TN (INITIAL FILING/COS/EXTENSION)</td>
                <td>$1,200</td>
              </tr>
              <tr>
                <td>TN (BORDER ONLY)</td>
                <td>$500</td>
              </tr>
              <tr>
                <td>R1 (INITIAL FILING/COS/EXTENSION)</td>
                <td>$2,000</td>
              </tr>
              <tr>
                <td>P1 (INITIAL FILING/COS/EXTENSION)</td>
                <td className="custom">CUSTOM</td>
              </tr>
              <tr>
                <td>I130 FILING</td>
                <td>$1,000</td>
              </tr>
              <tr>
                <td>I140 FILING</td>
                <td>$1,500</td>
              </tr>
              <tr>
                <td>I485+I765+I131 (COMBO FILING)</td>
                <td>$1,000</td>
              </tr>
              <tr>
                <td>DS260</td>
                <td>$700</td>
              </tr>
              <tr>
                <td>N400</td>
                <td>$700</td>
              </tr>
              <tr>
                <td>ETA 9141</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>ETA 9089</td>
                <td>$500</td>
              </tr>
            </tbody>
          </table>

          <div className="important-pricing-note mt-4">
            <div className="icon-and-content">
              <img className="note-icon" src={Stop} alt="Important Note"></img>
              <div>
                <span className="note-title">Important Pricing Note</span>
                <p className="note-bold">
                  For all non-immigrant cases, we will not charge any extra
                  service charges for cases with dependents.
                </p>
                <p>
                  For example: If an E2 Change of Status has 1 principal and 3
                  dependents, our paralegal service will still cost $2,000.00
                  for that case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
