import "../../styles/Immigration.css";
import "../../styles/HeroSection.css";
import im from "../../assets/Service1.png";
import im2 from "../../assets/Service2.png";
import im3 from "../../assets/Service3.png";
import im4 from "../../assets/Service4.png";
import im5 from "../../assets/Service5.png";
import im6 from "../../assets/Service6.png";

const Immigration = () => {
  return (
    <div>
      {/* SECTION 1: PROGRAMS & CONSULTING SERVICES */}
      <section className="imm-support-section">
        <div className="container px-0 imm-support-content">
          {/* TOP SECTION */}
          <div>
            <h2 className="main-heading text-center">
              Core Expansion Programs
            </h2>
            <p className="description text-center">
              Comprehensive consulting and structural frameworks built to transition established brands into the U.S. market.
            </p>
          </div>

          {/* BLOCK 1: Direct Business Expansion */}
          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>Direct Business Expansion</h3>
              <p className="intro-text">
                One of the most direct pathways for international growth is direct investment, establishing your own brand-owned corporate footprint in the United States.
              </p>

              <h4>Our Support Includes:</h4>
              <ul className="support-list">
                <li>Designing target market expansion roadmaps</li>
                <li>Strategic site evaluation coordination</li>
                <li>Drafting comprehensive, investor-ready business plans</li>
                <li>Analyzing local competitor layouts and market entry feasibility</li>
                <li>Structuring multi-year operational and scaling timelines</li>
                <li>Pre-submission file quality control to minimize regulatory bottlenecks</li>
                <li>Milestone coordination from corporate planning to launch readiness</li>
              </ul>

              <div className="law-firm-box">
                <p className="law-text">Ownership & Operations:</p>
                <ul>
                  <li>100% independent operational ownership is maintained by you</li>
                  <li>No loss of administrative or creative control over your brand</li>
                  <li>Clear, customized framework aligned with long-term expansion goals</li>
                  <li>Seamless handover once compliance baselines are met</li>
                </ul>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={im} alt="Direct Business Expansion" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg width="18" height="20" viewBox="0 0 14 14" fill="none">
                      <circle cx="6.5" cy="6.5" r="6" stroke="#1A3A36" strokeWidth="1" />
                      <path d="M4 7L6 9L9 5" stroke="#1A3A36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>{" "}
                  Independent Control
                </span>
                <div className="custom-card-subtitle">
                  We build the regulatory framework while you maintain complete brand ownership.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 2: Franchise System Development */}
        <div className="container px-0 imm-support-content">
          <div className="imm-reverse-grid">
            {/* LEFT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={im2} alt="Franchise System Development" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg width="18" height="20" viewBox="0 0 14 14" fill="none">
                      <circle cx="6.5" cy="6.5" r="6" stroke="#1A3A36" strokeWidth="1" />
                      <path d="M4 7L6 9L9 5" stroke="#1A3A36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>{" "}
                  Scalable Systems
                </span>
                <div className="custom-card-subtitle">
                  Transforming localized business concepts into turnkey franchise systems.
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="imm-support-text mt-0 mt-md-0">
              <h3>Franchise System Development</h3>
              <p className="intro-text">
                We assist established businesses in structuring, formalizing, and formatting their concepts to offer compliant franchise opportunities to U.S. investors.
              </p>

              <h4>Our Support Includes:</h4>
              <ul className="support-list">
                <li>Structuring scalable franchise licensing agreements</li>
                <li>Developing comprehensive franchise disclosure document layouts</li>
                <li>Formatting brand guideline manuals and operational checklists</li>
                <li>Assembling investor-ready project presentations</li>
                <li>Aligning franchise setups with business-immigration pathways</li>
                <li>Reviewing brand continuity across independent franchise partners</li>
                <li>Drafting regional site selection protocols</li>
              </ul>

              <div className="law-firm-box">
                <p className="law-text">Our Strategic Goal:</p>
                <ul>
                  <li>Standardized, repeatable operational systems built to scale</li>
                  <li>Minimized brand dilution through robust legal licensing</li>
                  <li>Clean pathways for foreign investors looking for active visa setups</li>
                  <li>Faster cross-border scaling without heavy corporate overhead</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 3: Business Plan Creation (Immigration-Compliant) */}
        <div className="container px-0 imm-support-content">
          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>Immigration-Compliant Business Plans</h3>
              <p className="intro-text">
                LawAid Management coordinates and designs comprehensive, highly detailed business plans tailored specifically to satisfy USCIS adjudication criteria.
              </p>

              <h4>Key Components:</h4>
              <ul className="support-list">
                <li><strong>Executive Summary:</strong> Highlighting business model, ownership, and investment details.</li>
                <li><strong>Industry & Market Analysis:</strong> Grounded data showing demand inside the designated state.</li>
                <li><strong>Competitive Analysis:</strong> Detailing local competitive metrics and positioning maps.</li>
                <li><strong>Operational Setup:</strong> Structured corporate hierarchy matching regulatory demands.</li>
                <li><strong>Comprehensive Financial Projections:</strong> 5-year break-even, balance sheets, and cash flow models.</li>
                <li><strong>Immigration-Aligned Hiring Schedules:</strong> Compliant hiring timelines with clear job duties.</li>
              </ul>

              <div className="imm-testimonial">
                <p>
                  <em>
                    All business plans are meticulously aligned with Matter of Ho standards to satisfy E-2, L-1, and EB-5 visa requirements.
                  </em>
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={im3} alt="Immigration Business Plans" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg width="18" height="20" viewBox="0 0 14 14" fill="none">
                      <circle cx="6.5" cy="6.5" r="6" stroke="#1A3A36" strokeWidth="1" />
                      <path d="M4 7L6 9L9 5" stroke="#1A3A36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>{" "}
                  USCIS-Compliant
                </span>
                <div className="custom-card-subtitle">
                  Adjudication-ready business models built to satisfy evidentiary benchmarks.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 4: U.S. Corporate Structuring */}
        <div className="container px-0 imm-support-content">
          <div className="imm-reverse-grid">
            {/* LEFT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={im4} alt="U.S. Corporate Structuring" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg width="18" height="20" viewBox="0 0 14 14" fill="none">
                      <circle cx="6.5" cy="6.5" r="6" stroke="#1A3A36" strokeWidth="1" />
                      <path d="M4 7L6 9L9 5" stroke="#1A3A36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>{" "}
                  Legal Setup
                </span>
                <div className="custom-card-subtitle">
                  Solid corporate structures organized across all 50 states.
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="imm-support-text mt-0 mt-md-0">
              <h3>U.S. Business Structuring</h3>
              <p className="intro-text">
                Proper business structuring is necessary to safeguard foreign capital and satisfy local, state, and federal guidelines.
              </p>

              <h4>Our Services Include:</h4>
              <ul className="support-list">
                <li>State selection and LLC or C-Corp entity formation</li>
                <li>Drafting structured Operating Agreements and corporate bylaws</li>
                <li>Federal EIN registrations and tax classification setup</li>
                <li>Corporate compliance calendar design and registration monitoring</li>
              </ul>

              <div className="imm-testimonial">
                <p>
                  <em>
                    We handle the administrative complexities of corporate registration so you can focus entirely on operational execution.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 5: Investment Structuring */}
        <div className="container px-0 imm-support-content">
          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>Investment Structuring</h3>
              <p className="intro-text">
                Securing capital and demonstrating its legal acquisition and transfer is vital to securing a solid foothold in the United States.
              </p>

              <h4>Our Services Include:</h4>
              <ul className="support-list">
                <li>Mapping the legal source and path of investment funds</li>
                <li>Structuring multi-party capital distribution frameworks</li>
                <li>Assisting with transactional escrow setup coordination</li>
                <li>Validating equity structures to satisfy immigration-specific investment ratios</li>
              </ul>

              <div className="imm-testimonial">
                <p>
                  <em>
                    Every framework ensures that foreign investments are structured correctly from both a business and regulatory perspective.
                  </em>
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={im5} alt="Investment Structuring" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg width="18" height="20" viewBox="0 0 14 14" fill="none">
                      <circle cx="6.5" cy="6.5" r="6" stroke="#1A3A36" strokeWidth="1" />
                      <path d="M4 7L6 9L9 5" stroke="#1A3A36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>{" "}
                  Capital Integrity
                </span>
                <div className="custom-card-subtitle">
                  Structured pathways to ensure your capital meets compliance and tracking requirements.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 6: Strategic Coordination */}
        <div className="container px-0 imm-support-content">
          <div className="imm-reverse-grid">
            {/* LEFT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={im6} alt="Strategic Coordination" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg width="18" height="20" viewBox="0 0 14 14" fill="none">
                      <circle cx="6.5" cy="6.5" r="6" stroke="#1A3A36" strokeWidth="1" />
                      <path d="M4 7L6 9L9 5" stroke="#1A3A36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>{" "}
                  Consulting Alliance
                </span>
                <div className="custom-card-subtitle">
                  Bridging the gap between corporate planning and final launch coordination.
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="imm-support-text mt-0 mt-md-0">
              <h3>Strategic Coordination</h3>
              <p className="intro-text">
                Expanding into a new market is a multi-step process. We help coordinate the entire journey, aligning all specialized professionals.
              </p>

              <h4>Our Services Include:</h4>
              <ul className="support-list">
                <li>Managing milestones from initial evaluation to physical launch</li>
                <li>Integrating efforts across immigration lawyers, brokers, and consultants</li>
                <li>Coordinating administrative tasks to avoid costly corporate delays</li>
                <li>Structuring smooth handovers directly to independent business owners</li>
              </ul>

              <div className="imm-testimonial">
                <p>
                  <em>
                    We provide the structural runway, allowing you to confidently enter and navigate the U.S. market.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CLIENT PATHWAYS & SECTOR FOCUS */}
      <section className="imm-support-section bg-light">
        <div className="container px-0 imm-support-content">
          {/* TOP SECTION */}
          <div>
            <h2 className="main-heading text-center">
              Businesses We Work With
            </h2>
            <p className="description text-center">
              We focus on established consumer-facing brands and unique business concepts with proven potential to scale successfully in the U.S.
            </p>
          </div>

          {/* BLOCK A: Our Role & Scope */}
          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>Our Role</h3>
              <p className="intro-text">
                LawAid Management coordinates the initial corporate, licensing, and structural steps needed to setup. We build the foundation—we do not operate or manage your business day-to-day.
              </p>
              <p>
                Our services ensure that all corporate entities, regulatory registrations, and operational plans are perfectly synchronized, enabling independent owners to run their business with total autonomy.
              </p>

              <div className="law-firm-box">
                <p className="law-text">Our work typically involves: </p>
                <ul>
                  <li>Coordinating legal corporate entity setups</li>
                  <li>Designing market entry expansion roadmaps</li>
                  <li>Aligning business setups with immigration parameters</li>
                  <li>Structuring turnkey franchise and investor frameworks</li>
                </ul>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src="role.jpg" alt="Our Role in Expansion" />
            </div>
          </div>

          {/* BLOCK B: Target Industries */}
          <div className="container px-0 imm-support-content">
            <div className="imm-reverse-grid">
              {/* LEFT IMAGE */}
              <div className="imm-support-image custom-card-image">
                <img src="business.jpg" alt="Target Expansion Industries" />
              </div>

              {/* RIGHT CONTENT */}
              <div className="imm-support-text mt-0 mt-md-0">
                <h3>Target Expansion Industries</h3>
                <p className="intro-text">
                  We specialize in helping established brands across key consumer-focused categories structure their U.S. presence.
                </p>

                <h4>Our Core Industries Include:</h4>
                <ul className="support-list">
                  <li>
                    <strong>Restaurant Brands:</strong> Food concepts, quick-service models, and dining experiences ready for U.S. consumers.
                  </li>
                  <li>
                    <strong>Clothing & Fashion Labels:</strong> Fashion brands with proven manufacturing processes and strong market appeal.
                  </li>
                  <li>
                    <strong>Retail storefront formats:</strong> Physical storefront concepts and brick-and-mortar setups looking to cross borders.
                  </li>
                  <li>
                    <strong>Specialty Food & Beverage:</strong> Food manufacturers, specialty products, and localized coffee or beverage concepts.
                  </li>
                  <li>
                    <strong>Emerging Consumer Concepts:</strong> Businesses that have achieved local market success and are ready to capture international demand.
                  </li>
                </ul>

                <div className="law-firm-box">
                  <p className="law-text">Key Requirement:</p>
                  <p>
                    Proven scalability. We focus exclusively on solid, operational business models with a clear pathway to replication in the U.S. market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK C: Investor and Franchisee Coordination */}
          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>Investor & Franchisee Coordination</h3>
              <p className="intro-text">
                Successful cross-border expansion requires aligning with the right operational partners and local investors.
              </p>
              <p>
                We facilitate the coordination process by structuring investment-ready profiles and ensuring your business model is properly packaged to present to potential U.S. master franchisees or expansion partners.
              </p>

              <h4>Our Services Include:</h4>
              <ul className="support-list">
                <li>Structuring clear, transparent investor-owner agreements</li>
                <li>Assembling compliant capital verification files</li>
                <li>Designing structured joint venture operating agreements</li>
                <li>Managing information flow to keep transactions highly aligned</li>
              </ul>

              <div className="law-firm-box">
                <p className="law-text">Unified Communication:</p>
                <p>
                  We keep all regulatory, business, and legal teams synchronized. This ensures that negotiations proceed smoothly without compromising legal compliance or corporate structure.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src="businessImmigration.jpg" alt="Investor and Franchisee Coordination" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Immigration;