import "../../styles/Execution.css";
import Support from "../../assets/about.jpg";
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
            Built to Bridge the Gap Between Expansion Strategy and Reliable Execution
          </h2>

          <p className="description">
            LawAid Management is a Houston, Texas-headquartered business immigration and global expansion consultancy. We established our firm to address a critical gap in the market entry ecosystem: the complex disconnect between strategic expansion plans and compliant corporate execution.
          </p>

          <p className="description">
            We work with established global brands, investors, and entrepreneurs to build structured investment pathways, coordinate corporate setups, and develop turnkey franchise licensing frameworks. By acting as the strategic bridge to the United States, we help businesses launch and scale their operations while ensuring absolute alignment with U.S. corporate regulations and business immigration standards.
          </p>

          <p className="description">
            Our role is not to operate businesses ourselves. Instead, we exist to build the legal and structural pathways that allow businesses and investors to establish themselves, scale successfully, and operate independently in the U.S. market.
          </p>
        </div>

        <div className="execution-support-right">
          <img src={Support} alt="U.S. Business Expansion" className="main-image" />

          <div className="exec-stats-card">
            <h3 className="exec-stats-number text-dark">400+</h3>
            <p className="exec-stats-description">
              Businesses structured and established in the United States
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSupportSection;