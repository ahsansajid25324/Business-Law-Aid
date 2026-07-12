import { useState } from "react";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import SemiContact from "../components/pages/SemiContact";
import Footer from "../components/pages/Footer";
import AboutBackground from "../assets/AboutBackground.png";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Flag,
  DollarSign,
  Briefcase,
  TrendingUp,
  HelpCircle,
  FolderOpen,
} from "lucide-react";

// Using the shared styles to keep layouts matching seamlessly
import "../styles/E2Business.css"; 
import "../styles/AboutFaqs.css";

const L1Business = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const heroData = {
    subtitle: "L-1 INTRACOMPANY TRANSFEREE PLANS",
    title: "Visually structured guidance for L-1A and L-1B petitions",
    description:
      "We build reporting and role structures that clearly distinguish leadership from operational execution. Our strategic frameworks address role capacity, organizational depth, and strict new office trajectories to survive aggressive USCIS scrutiny.",
    stats: [
      { number: "1-Year", label: "Office Trajectory" },
      { number: "Staged", label: "Staffing Depth" },
      { number: "RFE", label: "Preemptive Design" },
    ],
  };

  const faqData = [
    {
      question: "Why should L-1A and L-1B business plans be separated?",
      answer:
        "The qualifying standards differ materially. An L-1A plan focuses entirely on executive or managerial support structures, requiring clear tier systems and professional staff. An L-1B plan centers on proprietary or advanced organizational knowledge and operational necessity, proving the worker cannot be easily replaced by a generic domestic hire.",
    },
    {
      question: "What makes L-1 new office cases specifically difficult?",
      answer:
        "USCIS heavily scrutinizes whether a startup entity can realistically support an executive or managerial role within a strict one-year window. Thin organization charts, vague job descriptions, or generic hiring roadmaps create avoidable weaknesses that trigger immediate denials.",
    },
    {
      question: "Can the business plan support attorney strategy in RFE-heavy cases?",
      answer:
        "Absolutely. We act alongside your immigration counsel to make sure the core operational logic aligns with their legal theory. By tying hiring milestones and revenue metrics to organizational growth, we provide the factual foundation necessary to counter common boilerplate RFEs.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="e2-page-wrapper">
      <Navbar />

      {/* Hero Section */}
      <OtherHero
        subtitle={heroData.subtitle}
        title={heroData.title}
        backgroundImage={AboutBackground}
        description={heroData.description}
        stats={heroData.stats}
      />

      <section className="e2-light-section">
        <div className="e2-light-container">
          {/* Left Column: New Office Timeline */}
          <div className="e2-flow-column">
            <div className="subtitle-wrapper">
              <span className="subtitle-line"></span>
              <span className="subtitle-tag">New Office Timeline</span>
            </div>
            <h2 className="main-heading">Operational Trajectory</h2>
            <p className="description">
              Your growth roadmaps must reflect clear, sequential milestones to prove 
              first-year operational viability to cautious adjudicators.
            </p>

            <div className="flow-steps-stack">
              {[
                {
                  title: "Entity Setup",
                  desc: "Clarify ownership, equity structures, and parent-subsidiary relationships.",
                },
                {
                  title: "Office Readiness",
                  desc: "Establish physical presence, lease execution, and immediate infrastructure.",
                },
                {
                  title: "Staffing Roadmap",
                  desc: "Execute early-stage hires to build critical operational role separation.",
                },
                {
                  title: "Revenue Viability",
                  desc: "Achieve self-sufficiency to fully support a qualifying manager role by month 12.",
                },
              ].map((step, idx) => (
                <div key={idx} className="flow-step-wrapper">
                  <div className="flow-step-card">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                  <div className="flow-arrow-container">
                    <ArrowRight size={20} className="flow-arrow" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: L-1 Specific Checklists */}
          <div className="e2-checklists-column">
            {/* Box 1: L-1A Imperatives */}
            <div className="bento-card card-dark full-width-card">
              <span className="card-badge-dark">L-1A Managerial & Executive</span>
              <h3 className="stats-number-title-dark">
                Capacity Requirements
              </h3>
              <div className="divider-line-gold"></div>
              <ul className="checklist-items">
                {[
                  "Clear vertical separation between leadership and execution",
                  "Staffing depth sufficient to offload daily operational duties",
                  "Detailed oversight of core functions, departments, or professionals",
                  "Credible one-year scaling roadmap for new office locations",
                ].map((text, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} className="checklist-icon" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: L-1B Imperatives */}
            <div className="bento-card card-dark full-width-card">
              <span className="card-badge-dark font-uppercase">
                L-1B Specialized Knowledge
              </span>
              <h3 className="stats-number-title-dark">
                Knowledge Articulation
              </h3>
              <div className="divider-line-gold"></div>
              <ul className="checklist-items">
                {[
                  "Clear framing of proprietary systems or tools",
                  "Evidence showing knowledge is advanced and non-generic",
                  "Direct connection between the transferree and U.S. survival",
                  "Deep operational strategy rather than just a basic role title",
                ].map((text, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} className="checklist-icon" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Strategic Pillars */}
      <section className="e2-dark-section">
        <div className="e2-dark-container">
          <div className="faq-header text-center">
            <div className="subtitle-with-line justify-content-center">
              <span className="subtitle-line"></span>
              <span className="subtitle font-accent">USCIS REVIEW EXPECTATIONS</span>
              <span className="subtitle-line"></span>
            </div>
            <h2 className="faq-main-heading text-white">
              Core Pillars Aligned to Projections
            </h2>
          </div>

          <div className="e2-four-pillars-grid">
            <div className="bento-card card-dark">
              <div className="pillar-icon-wrapper">
                <DollarSign size={24} />
              </div>
              <h3>Revenue Logic</h3>
              <p>
                Financial forecasts are directly tied to headcount expansion, market entry logistics, and true production capacity.
              </p>
            </div>

            <div className="bento-card card-dark">
              <div className="pillar-icon-wrapper">
                <Flag size={24} />
              </div>
              <h3>Relationship Focus</h3>
              <p>
                Intracompany structures are mapped clearly via relationship diagrams to confirm valid entity ties instantly.
              </p>
            </div>

            <div className="bento-card card-dark">
              <div className="pillar-icon-wrapper">
                <TrendingUp size={24} />
              </div>
              <h3>Staffing Growth</h3>
              <p>
                Hiring schedules are staged in a granular, time-phased format that naturally justifies organizational viability.
              </p>
            </div>

            <div className="bento-card card-dark">
              <div className="pillar-icon-wrapper">
                <FolderOpen size={24} />
              </div>
              <h3>Included Deliverables</h3>
              <p>
                Organizational structures, market framing, U.S. expansion strategy, and 5-year operational viability forecasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Footprint Matrix */}
      <section className="e2-matrix-section">
        <div className="e2-matrix-container">
          <div className="matrix-card">
            <div className="matrix-icon-header">
              <Briefcase size={22} />
            </div>
            <h3>Structures We Map</h3>
            <p>
              Functional managers, traditional multi-tiered executive hierarchies, corporate affiliates, joint ventures, and high-growth technology subsidiaries scaling into American markets.
            </p>
          </div>

          <div className="matrix-card">
            <div className="matrix-icon-header">
              <HelpCircle size={22} />
            </div>
            <h3>Sample Deliverables</h3>
            <p>
              Redacted baseline models detailing structured organizational charts, employee tier breakdowns, and corporate flowcharts are available for review during legal consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: FAQs Deep Dive */}
      <section className="about-faq-section">
        <div className="about-faq-container mt-5">
          <div className="faq-header">
            <div className="subtitle-with-line justify-content-center">
              <span className="subtitle-line"></span>
              <span className="subtitle">L-1 ADJUDICATION INSIGHTS</span>
              <span className="subtitle-line"></span>
            </div>
            <h2 className="faq-main-heading text-center">
              Frequently Explored Insights
            </h2>
          </div>

          <div className="faq-accordion-group">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-accordion-node ${isOpen ? "active-node" : ""}`}
                >
                  <button
                    className="faq-trigger"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon-wrapper">
                      {isOpen ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </span>
                  </button>
                  <div
                    className={`faq-panel ${isOpen ? "panel-expanded" : ""}`}
                  >
                    <p className="faq-panel-text">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SemiContact />
      <Footer />
    </div>
  );
};

export default L1Business;