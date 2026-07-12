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

// Importing the dedicated stylesheet
import "../styles/E2Business.css";
import "../styles/AboutFaqs.css";


const E2Business = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const heroData = {
    subtitle: "E-2 TREATY INVESTOR PLANS",
    title: "Built for your petition, not pulled from a template",
    description:
      "We engineer comprehensive, visually structured business plans tailored specifically for E-2 visa applications. Our strategic frameworks address substantiality, investment risk, and non-marginality to withstand rigorous USCIS and consular scrutiny.",
    stats: [
      { number: "5-Year", label: "Projections & Growth" },
      { number: "At-Risk", label: "Capital Framing" },
      { number: "USCIS", label: "Compliant Design" },
    ],
  };

  const faqData = [
    {
      question: "Why do E-2 business plans fail under scrutiny?",
      answer:
        "Most weak plans rely on generic text, unrealistic revenue assumptions, vague hiring logic, or incomplete treatment of non-marginality and investment risk. Plans must show real operational numbers instead of wishful statements.",
    },
    {
      question: "Do all E-2 cases need the same planning methodology?",
      answer:
        "No. Every business plan is custom-built based on industry realities, capital requirements, and regional market data. A restaurant requires completely different operational framing and hiring roadmaps compared to a tech consulting firm.",
    },
    {
      question: "Can you work with my attorney on revisions?",
      answer:
        "Absolutely. We work directly alongside your immigration counsel to make sure the core legal theory, capital deployment schedules, and operational narratives line up perfectly with their petition legal frameworks.",
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
          {/* Left Column: Horizontal / Vertical flow steps */}
          <div className="e2-flow-column">
            <div className="subtitle-wrapper">
              <span className="subtitle-line"></span>
              <span className="subtitle-tag">Petitioner Requirements</span>
            </div>
            <h2 className="main-heading">Eligibility Flowchart</h2>
            <p className="description">
              Your business plan must clear every legal gateway seamlessly to
              ensure adjudicators recognize the validity of the deployment
              ecosystem.
            </p>

            <div className="flow-steps-stack">
              {[
                {
                  title: "Treaty national",
                  desc: "Applicant holds qualifying treaty country nationality.",
                },
                {
                  title: "Substantial investment",
                  desc: "Capital commitment matches the business type and startup cost.",
                },
                {
                  title: "Real enterprise",
                  desc: "Business is active, credible, and commercially viable.",
                },
                {
                  title: "Direct and develop",
                  desc: "Investor will actively run and grow the business.",
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

          {/* Right Column: Dynamic Checklists */}
          <div className="e2-checklists-column">
            {/* Box 1: Non marginality */}
            <div className="bento-card card-dark full-width-card">
              <span className="card-badge-dark">Compliance Imperatives</span>
              <h3 className="stats-number-title-dark">
                Non-marginality Infographic
              </h3>
              <div className="divider-line-gold"></div>
              <ul className="checklist-items">
                {[
                  "Revenue must show more than personal subsistence logic",
                  "Hiring should reflect real operating demand",
                  "Growth assumptions must be commercially realistic",
                  "Economic contribution should be visible in the plan",
                ].map((text, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} className="checklist-icon" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: USCIS checklist */}
            <div className="bento-card card-dark full-width-card">
              <span className="card-badge-dark font-uppercase">
                Adjudication Criteria
              </span>
              <h3 className="stats-number-title-dark">
                USCIS Review Checklist
              </h3>
              <div className="divider-line-gold"></div>
              <ul className="checklist-items">
                {[
                  "Substantiality documented clearly",
                  "Funds at risk supported by evidence",
                  "Operational role explained directly",
                  "Market and financial assumptions aligned",
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

      {/* Section 1: Process Timeline & Strategic Pillars */}
      <section className="e2-dark-section">
        <div className="e2-dark-container">
          <div className="faq-header text-center">
            <div className="subtitle-with-line justify-content-center">
              <span className="subtitle-line"></span>
              <span className="subtitle font-accent">STRATEGIC ROADMAP</span>
              <span className="subtitle-line"></span>
            </div>
            <h2 className="faq-main-heading text-white">
              Frameworks Engineered for Approvals
            </h2>
          </div>

          {/* 3-Step Overview Grid */}

          {/* 4 Core Pillars Grid */}
          <div className="e2-four-pillars-grid">
            <div className="bento-card card-dark">
              <div className="pillar-icon-wrapper">
                <DollarSign size={24} />
              </div>
              <h3>Substantiality</h3>
              <p>
                We explain why the capital committed is meaningful relative to
                the type and cost of the enterprise.
              </p>
            </div>

            <div className="bento-card card-dark">
              <div className="pillar-icon-wrapper">
                <Flag size={24} />
              </div>
              <h3>Funds at Risk</h3>
              <p>
                We frame the commitment as real, deployed, and exposed to
                business risk rather than merely intended.
              </p>
            </div>

            <div className="bento-card card-dark">
              <div className="pillar-icon-wrapper">
                <TrendingUp size={24} />
              </div>
              <h3>Hiring and Growth</h3>
              <p>
                Staffing forecasts are tied to operations and revenue capacity,
                not wishful planning.
              </p>
            </div>

            <div className="bento-card card-dark">
              <div className="pillar-icon-wrapper">
                <FolderOpen size={24} />
              </div>
              <h3>Deliverables</h3>
              <p>
                Executive summary, market analysis, operations plan,
                projections, investment analysis, and revision support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Flowcharts & Verification Checklists */}

      {/* Section 3: Industry Footprint Matrix */}
      <section className="e2-matrix-section">
        <div className="e2-matrix-container">
          <div className="matrix-card">
            <div className="matrix-icon-header">
              <Briefcase size={22} />
            </div>
            <h3>Industries we support</h3>
            <p>
              Restaurants, retail, ecommerce, professional services, logistics,
              franchising, technology, consulting, hospitality, and other
              operationally credible E-2 models.
            </p>
          </div>

          <div className="matrix-card">
            <div className="matrix-icon-header">
              <HelpCircle size={22} />
            </div>
            <h3>Sample deliverables</h3>
            <p>
              Redacted sections can include hiring tables, investment schedules,
              five year projections, and market analysis examples for review
              during consultation.
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
              <span className="subtitle">E-2 INSIGHTS DEEP DIVE</span>
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

export default E2Business;
