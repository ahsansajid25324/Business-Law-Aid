import "../../styles/Execution.css";
import Support from "../../assets/AboutBg.png";
import "../../styles/HeroSection.css";

const ExecutionSupportSection = () => {
  return (
    <section className="execution-support-section">
      <div className="container px-0 execution-support-content">
        <div className="execution-support-left">
          <div className="d-flex align-items-center">
            <span className="subtitle-line"></span>
            <span className="subtitle">ABOUT LAWAID MANAGEMENT</span>
          </div>

          <h2 className="main-heading">
            Built to Bridge the Gap Between Legal Strategy and Reliable
            Execution
          </h2>

          <p className="description">
            LawAid management is a U.S - based Paralegal & business services consultancy formed over
            three years ago to address a critical gap in the legal & business services
            ecosystem: the disconnect between strategy and reliable
            execution.
          </p>

          <p className="description">
            We work extensively across the United States, partnering exclusively
            with attorneys and law firms to support immigration, business, and
            humanitarian legal matters.We also deal with helping out foreign businesses moved to the United States. LawAid management was built to strengthen
            attorney-led representation by providing structured case support,
            immigration-aligned business services, and operational consistency
            at scale.
          </p>

          <p className="description">
            Our role is not advisory in theory—we exist to execute with
            precision, discipline, and accountability within exclusively tailored
            frameworks.
          </p>
        </div>

        <div className="execution-support-right">
          <img src={Support} alt="Law Firm" className="main-image" />

          <div className="exec-stats-card">
            <h3 className="exec-stats-number text-dark">3+</h3>
            <p className="exec-stats-description">
              Years strengthening legal practices nationwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSupportSection;
