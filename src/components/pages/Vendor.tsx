import React from "react";
import "../../styles/Vendor.css";
import "../../styles/HeroSection.css";
import { Award, Clock, Coins, RotateCcw } from "lucide-react";

const Vendor = () => {
  const vendors = [
    {
      icon: <Award size={22} />,
      title: "Predictable Quality",
      description:
        "Every single business plan is built precisely around evidentiary logic, legal framework criteria, and specific USCIS requirements to ensure unmatched documentation rigor.",
    },
    {
      icon: <Clock size={22} />,
      title: "Fast Turnaround",
      description:
        "Engineered with a reliable 5-7 days turnaround process that allows legal teams and businesses to hit critical petition filing milestones without friction.",
    },
    {
      icon: <Coins size={22} />,
      title: "Realistic Financial Logic",
      description:
        "Revenue, payroll, scaling costs, and hiring goals are modeled to reflect actual industry realities rather than inflated spreadsheet optimism.",
    },
    {
      icon: <RotateCcw size={22} />,
      title: "Responsive Revisions",
      description:
        "We offer highly collaborative and unlimited revisions up until your final submission date, ensuring total alignment with attorney strategies.",
    },
  ];

  return (
    <section className="vendor-section">
      <div className="container px-0 vendor-content">
        <div className="vendor-header">
          <div className="subtitle-with-line">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right">WHY LAW FIRMS CHOOSE US</span>
            <span className="subtitle-line"></span>
          </div>

          <h2 className="vendor-heading">
            Reducing Documentation Friction Across Repeat Filings
          </h2>

          <p className="vendor-description">
            Law Aid Management works directly with legal practitioners and global investors to prepare 
            strategically precise materials built around how actual adjudication officers evaluate cases.
          </p>
        </div>

        {/* Clean semantic HTML grid container */}
        <div className="vendor-cards-grid">
          {vendors.map((vendor, index) => (
            <div key={index} className="vendor-card">
              <div className="vendor-icon">{vendor.icon}</div>
              <div className="vendor-card-text">
                <h3 className="vendor-card-title">{vendor.title}</h3>
                <p className="vendor-card-description">{vendor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vendor-banner">
        <h2 className="vendor-banner-heading">
          Our Commitment to Quality
        </h2>
        <p className="vendor-banner-subheading">
          We do not sell volume-based filler. We build clear, strategically useful documents 
          that can successfully withstand detailed attorney feedback and deep USCIS scrutiny.
        </p>
      </div>
    </section>
  );
};

export default Vendor;