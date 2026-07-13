import { useState } from "react";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import Vendor from "../components/pages/Vendor";
import Footer from "../components/pages/Footer";
import AboutBackground from "../assets/AboutBackground.png";
import {
  ChevronDown,
  ChevronUp,
  DollarSign,
  Flag,
  FolderOpen,
  TrendingUp,
} from "lucide-react";
import "../styles/AboutFaqs.css";
import EndSection from "../components/pages/EndSection";
import SemiContact from "../components/pages/SemiContact";

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const heroData = {
    subtitle: "ABOUT LAWAID MANAGEMENT",
    title: "Built for your petition, not pulled from a template",
    description:
      "Founded in 2023, Law Aid Management operates from Houston and serves immigration related business plan clients with a focused commitment to USCIS specific planning rather than generic commercial plan writing.",
    stats: [
      { number: "2023", label: "Founded In" },
      { number: "Houston", label: "Operations Base" },
      { number: "USCIS", label: "Specific Design" },
    ],
  };

  const faqData = [
    {
      question: "What is the core story and mission behind Law Aid Management?",
      answer:
        "We started with a simple observation. Too many immigration business plans were either cheap generic templates or expensive reports overloaded with filler and disconnected from actual petition strategy. Firms needed something better. Our model is built around premium quality, cleaner workflow, and immigration specific expertise. That means every plan is written around how the case will be reviewed, not how a generic startup plan is usually formatted.",
    },
    {
      question:
        "Why are immigration business plans structurally different from standard setups?",
      answer:
        "USCIS reviews business plans differently from lenders, investors, or startup accelerators. Officers look for operational realism, credible hiring assumptions, internal consistency, and direct support for the legal standards at issue. That is why our process is built around evidentiary logic rather than generic narrative polish alone.",
    },
    {
      question: "What is the strategic process for constructing every plan?",
      answer:
        "Our execution pipeline breaks down into four clear structural phases: 1. Case review and intake to identify filing goals and evidentiary pressure points. 2. Market and operations development connecting industry realities, customer metrics, and growth tracks. 3. Financial modeling built on accurate payroll and operational costs. 4. Detailed review and optimization based on direct attorney feedback.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <OtherHero
        subtitle={heroData.subtitle}
        title={heroData.title}
        backgroundImage={AboutBackground}
        description={heroData.description}
        stats={heroData.stats}
      />
      <Vendor />

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
      <SemiContact />
      <EndSection />

      {/* Structured Accordion FAQ Section */}
      <section className="about-faq-section my-5">
        <div className="about-faq-container">
          <div className="faq-header">
            <div className="subtitle-with-line justify-content-center">
              <span className="subtitle-line"></span>
              <span className="subtitle">DEEP DIVE DETAILS</span>
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

      <Footer />
    </>
  );
};

export default About;
