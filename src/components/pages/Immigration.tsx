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
      <section className="imm-support-section">
        <div className="container px-0 imm-support-content">
          {/* TOP SECTION (keep as-is) */}
          <div>
            <h2 className="main-heading text-center">
              Immigration Case Support Services
            </h2>

            <p className="description text-center">
              Comprehensive support designed exclusively for law firms handling
              U.S. immigration matters
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>Immigrant Visa Case Support</h3>

              <p className="intro-text">
                LawAid management supports all major employment-based immigrant
                visa categories, including EB-1, EB-2, EB-2 NIW, EB-3, EB-4, and
                EB-5.
              </p>

              <h4>Our Support Includes:</h4>

              <ul className="support-list">
                <li>Eligibility review support and category alignment</li>
                <li>Structured organization of supporting documentation</li>
                <li>
                  Evidence mapping aligned with USCIS adjudication standards
                </li>
                <li>
                  Drafting and organization of case narratives, exhibits, and
                  supporting letters
                </li>
                <li>
                  Consistency review across forms, filings, and supporting
                  materials
                </li>
                <li>Pre-submission quality control to reduce RFE risk</li>
                <li>
                  Case tracking, deadline monitoring, and filing readiness
                  coordination
                </li>
              </ul>

              <div className="law-firm-box">
                <p className="law-text">For Law Firms, This Provides:</p>
                <ul>
                  <li>Scalable case preparation capacity</li>
                  <li>Consistent documentation quality across caseloads</li>
                  <li>
                    Reduced internal workload without compromising attorney
                    oversight
                  </li>
                  <li>Improved efficiency and submission readiness</li>
                </ul>
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={im} alt="Immigration Case Support" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 14 14 "
                      fill="none"
                    >
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="6"
                        stroke="#1A3A36"
                        strokeWidth="1"
                      />
                      <path
                        d="M4 7L6 9L9 5"
                        stroke="#1A3A36"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Attorney-Controlled
                </span>
                <div className="custom-card-subtitle">
                  Professional support while maintaining full attorney oversight
                  and control
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-0 imm-support-content">
          {/* MAIN CONTENT */}
          <div className="imm-reverse-grid">
            {/* LEFT CONTENT */}

            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={im2} alt="Immigration Case Support" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 14 14 "
                      fill="none"
                    >
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="6"
                        stroke="#1A3A36"
                        strokeWidth="1"
                      />
                      <path
                        d="M4 7L6 9L9 5"
                        stroke="#1A3A36"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Attorney-Controlled
                </span>
                <div className="custom-card-subtitle">
                  Professional support while maintaining full attorney oversight
                  and control
                </div>
              </div>
            </div>
            <div className="imm-support-text mt-0 mt-md-0">
              <h3>Non-Immigrant Visa Case Support</h3>

              <p className="intro-text">
                LawAid management provides comprehensive support across all
                major non-immigrant visa categories, including B, F, H, L, E, O,
                P, R, TN, and J visas.
              </p>

              <h4>Our Support Includes:</h4>

              <ul className="support-list">
                <li>Visa-specific eligibility framework support</li>
                <li>Case-level documentation planning and organization</li>
                <li>
                  Assembly and review of petitions and supporting exhibits
                </li>
                <li>
                  Compliance checks aligned with visa category requirements
                </li>
                <li>Deadline management and filing readiness support</li>
                <li>Internal review processes to reduce RFE exposure</li>
                <li>
                  Support for new filings, extensions, amendments, and renewals
                </li>
              </ul>

              <div className="law-firm-box">
                <p className="law-text">For Law Firms, This Provides:</p>
                <ul>
                  <li>
                    On-demand operational capacity during high-volume periods
                  </li>
                  <li>
                    Uniform quality standards across multiple visa categories
                  </li>
                  <li>Reduced dependency on in-house staffing and training</li>
                  <li>
                    Predictable execution within attorney-directed workflows
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-0 imm-support-content">
          {/* MAIN CONTENT */}
          <div className="imm-support-grid">
            {/* LEFT CONTENT */}

            {/* RIGHT IMAGE */}

            <div className="imm-support-text">
              <h3>Business Plan Creation (Immigration-Focused)</h3>

              <p className="intro-text">
                LawAid management develops immigration-compliant and
                adjudication-ready business plans used in support of E-2, L-1,
                EB-5, and other employment-based filings.
              </p>

              <h4>Key Components:</h4>

              <ul className="support-list">
                <li>Executive Summary</li>
                <li>Market Analysis</li>
                <li>Competitive Analysis</li>
                <li>Business Model & Operations</li>
                <li>Financial Projections</li>
                <li>Growth and Hiring Plans</li>
              </ul>

              <div className="imm-testimonial">
                <p>
                  <em>
                    All plans are tailored to the specific visa category,
                    business structure, and case strategy defined by the
                    attorney.
                  </em>
                </p>
              </div>
            </div>
            <div className="imm-support-image custom-card-image">
              <img src={im3} alt="Immigration Case Support" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 14 14 "
                      fill="none"
                    >
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="6"
                        stroke="#1A3A36"
                        strokeWidth="1"
                      />
                      <path
                        d="M4 7L6 9L9 5"
                        stroke="#1A3A36"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Attorney-Controlled
                </span>
                <div className="custom-card-subtitle">
                  Professional support while maintaining full attorney oversight
                  and control
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-0 imm-support-content">
          {/* MAIN CONTENT */}
          <div className="imm-reverse-grid">
            {/* LEFT CONTENT */}

            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={im4} alt="Immigration Case Support" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 14 14 "
                      fill="none"
                    >
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="6"
                        stroke="#1A3A36"
                        strokeWidth="1"
                      />
                      <path
                        d="M4 7L6 9L9 5"
                        stroke="#1A3A36"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Attorney-Controlled
                </span>
                <div className="custom-card-subtitle">
                  Professional support while maintaining full attorney oversight
                  and control
                </div>
              </div>
            </div>
            <div className="imm-support-text mt-0 mt-md-0">
              <h3>Company Formation Support (All U.S. States)</h3>

              <p className="intro-text">
                LawAid management assists law firms in supporting their clients
                with U.S. entity formation across all states.
              </p>

              <h4>Key Components:</h4>

              <ul className="support-list">
                <li>Entity structure coordination</li>
                <li>State registration filings</li>
                <li>EIN application support</li>
                <li>Initial compliance alignment</li>
              </ul>

              <div className="imm-testimonial">
                <p>
                  <em>
                    Our support ensures that entity formation decisions remain
                    aligned with immigration case strategy and regulatory
                    requirements.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-0 imm-support-content">
          {/* MAIN CONTENT */}
          <div className="imm-support-grid">
            {/* LEFT CONTENT */}

            {/* RIGHT IMAGE */}

            <div className="imm-support-text">
              <h3>Business Identification & Acquisition Support (E-2/ L-1)</h3>

              <p className="intro-text">
                LawAid management provides specialized operational support for
                law firms representing E-2 Treaty Investors and L-1
                Intra-Company Transfer clients.
              </p>

              <h4>Key Components:</h4>

              <ul className="support-list">
                <li>Immigration-aligned business eligibility screening</li>
                <li>Business sourcing and preliminary evaluation</li>
                <li>Operational and financial review support</li>
                <li>
                  Documentation coordination for acquisitions or new ventures
                </li>
              </ul>

              <div className="imm-testimonial">
                <p>
                  <em>
                    This service reduces risk for both attorneys and clients by
                    ensuring business decisions support visa eligibility and
                    long-term compliance.
                  </em>
                </p>
              </div>
            </div>
            <div className="imm-support-image custom-card-image">
              <img src={im5} alt="Immigration Case Support" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 14 14 "
                      fill="none"
                    >
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="6"
                        stroke="#1A3A36"
                        strokeWidth="1"
                      />
                      <path
                        d="M4 7L6 9L9 5"
                        stroke="#1A3A36"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Attorney-Controlled
                </span>
                <div className="custom-card-subtitle">
                  Professional support while maintaining full attorney oversight
                  and control
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-0 imm-support-content">
          {/* MAIN CONTENT */}
          <div className="imm-reverse-grid">
            {/* LEFT CONTENT */}

            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={im6} alt="Immigration Case Support" />
              <div className="custom-card-overlay">
                <span className="custom-badge">
                  <span className="custom-badge-dot">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 14 14 "
                      fill="none"
                    >
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="6"
                        stroke="#1A3A36"
                        strokeWidth="1"
                      />
                      <path
                        d="M4 7L6 9L9 5"
                        stroke="#1A3A36"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Attorney-Controlled
                </span>
                <div className="custom-card-subtitle">
                  Professional support while maintaining full attorney oversight
                  and control
                </div>
              </div>
            </div>
            <div className="imm-support-text mt-0 mt-md-0">
              <h3>Humanitarian Relief Case Support</h3>

              <p className="intro-text">
                LawAid management supports law firms handling humanitarian
                relief matters, including asylum, VAWA, U visas, T visas, TPS,
                CAT, and related protections.
              </p>

              <h4>Key Components:</h4>

              <ul className="support-list">
                <li>Organized evidence compilation</li>
                <li>Consistent narrative structuring</li>
                <li>Documentation accuracy and confidentiality</li>
                <li>Attorney-led case preparation support</li>
              </ul>

              <div className="imm-testimonial">
                <p>
                  <em>
                    All humanitarian case support is handled with heightened
                    sensitivity, confidentiality, and procedural care.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="imm-support-section">
        <div className="container px-0 imm-support-content">
          {/* TOP SECTION (keep as-is) */}
          <div>
            <h2 className="main-heading text-center">
              Foreign Business Support Services
            </h2>

            <p className="description text-center">
              Comprehensive support designed exclusively for law firms handling
              U.S. immigration matters
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>Our Role</h3>

              <p className="intro-text">
                LawAid Management focuses on building the legal and structural
                foundation that allows businesses to expand into the United
                States.
              </p>

              <p>
                We do not operate or manage businesses on behalf of our clients.
                Instead, we help ensure that the appropriate frameworks are in
                place so that entrepreneurs and investors can establish and
                operate their businesses independently.
              </p>

              <div className="law-firm-box">
                <p className="law-text">Our work typically involves: </p>
                <ul>
                  <li>Coordinating legal documentation</li>
                  <li>Expansion strategy</li>
                  <li>Immigration considerations</li>
                  <li>
                    Corporate structuring required to support U.S. market entry
                  </li>
                </ul>
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={"role.jpg"} alt="Immigration Case Support" />
              <div className="custom-card-overlay"></div>
            </div>
          </div>

          <div className="container px-0 imm-support-content">
            {/* MAIN CONTENT */}
            <div className="imm-reverse-grid">
              {/* LEFT CONTENT */}

              {/* RIGHT IMAGE */}
              <div className="imm-support-image custom-card-image">
                <img src={"business.jpg"} alt="Immigration Case Support" />
              </div>
              <div className="imm-support-text mt-0 mt-md-0">
                <h3>Businesses We Work With</h3>

                <p className="intro-text">
                  LawAid Management works primarily with established businesses
                  in Pakistan that demonstrate strong potential for
                  international expansion.
                </p>

                <p>
                  We focus on businesses with proven concepts, operational
                  stability, and scalable business models that can be
                  successfully introduced into the United States market.
                </p>

                <h4>Examples Include:</h4>

                <ul className="support-list">
                  <li>
                    <strong>Restaurant Brands:</strong> Restaurants with unique
                    menus, strong brand identity, and established operational
                    systems.
                  </li>
                  <li>
                    <strong>Clothing & Fashion Brands:</strong> Fashion labels
                    with distinctive designs, established production systems,
                    and growing market demand.
                  </li>
                  <li>
                    <strong>Retail Businesses:</strong> Retail concepts that can
                    expand through physical locations or franchised operations.
                  </li>
                  <li>
                    <strong>Specialty Food & Beverage Brands:</strong>{" "}
                    Businesses offering unique food products or beverage
                    concepts with strong branding potential.
                  </li>
                  <li>
                    <strong>Emerging Consumer Brands:</strong> Businesses that
                    have demonstrated consistent growth and operational success
                    within their local markets.
                  </li>
                </ul>

                <div className="law-firm-box">
                  <p className="law-text">Our Primary Focus:</p>
                  <p>
                    Consumer-facing brands that can be replicated and scaled in
                    international markets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>Direct Business Expansion to the United States</h3>

              <p className="intro-text">
                One of the most common pathways for international expansion is
                direct investment by the business owner.
              </p>

              <p>
                In this model, the entrepreneur establishes their own business
                in the United States, allowing them to operate and grow their
                brand within the U.S. market. LawAid Management helps coordinate
                the legal and strategic frameworks required for this expansion.
              </p>

              <h4>Our Support May Include:</h4>

              <ul className="support-list">
                <li>Structuring the legal framework required for expansion</li>
                <li>
                  Coordinating business immigration documentation where
                  applicable
                </li>
                <li>
                  Preparing business documentation required by regulatory
                  authorities
                </li>
                <li>
                  Supporting the preparation of USCIS-compliant business
                  materials
                </li>
                <li>
                  Assisting with corporate structuring and regulatory
                  requirements
                </li>
              </ul>

              <div className="law-firm-box">
                <p className="law-text">Ownership & Operations:</p>
                <p>
                  The business itself remains{" "}
                  <strong>fully owned and operated</strong> by the original
                  entrepreneur or investor. Our role is to ensure that the legal
                  and structural foundation is properly organized to support the
                  expansion process.
                </p>
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={"directBusiness.jpg"} alt="Immigration Case Support" />
            </div>
          </div>

          <div className="container px-0 imm-support-content">
            {/* MAIN CONTENT */}
            <div className="imm-reverse-grid">
              {/* LEFT CONTENT */}

              {/* RIGHT IMAGE */}
              <div className="imm-support-image custom-card-image">
                <img src={"franchise.jpg"} alt="Immigration Case Support" />
              </div>
              <div className="imm-support-text mt-0 mt-md-0">
                <h3>Franchise Development & Structuring</h3>

                <p className="intro-text">
                  Many successful businesses have strong concepts but are not
                  yet structured to offer franchise opportunities.
                </p>

                <p>
                  Franchising allows businesses to expand into new markets by
                  partnering with investors who operate locations under the
                  brand. LawAid Management assists businesses by developing the
                  legal and documentation framework required to establish a
                  franchise system, particularly for expansion into the United
                  States.
                </p>

                <h4>Our Services May Include:</h4>

                <ul className="support-list">
                  <li>Structuring franchise licensing frameworks</li>
                  <li>Preparing franchise agreements</li>
                  <li>Organizing franchise documentation</li>
                  <li>Structuring franchise opportunities for investors</li>
                  <li>
                    Establishing the legal foundation of the franchise system
                  </li>
                </ul>

                <div className="law-firm-box">
                  <p className="law-text">Operational Responsibility:</p>
                  <p>
                    Operational elements such as training systems, brand
                    management, and internal processes remain the responsibility
                    of the original business owner. Our role focuses on ensuring
                    that the <strong>legal structure</strong> supporting the
                    franchise system is properly established.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>Business Immigration & Legal Coordination</h3>

              <p className="intro-text">
                International expansion into the United States often involves
                complex business immigration considerations.
              </p>

              <p>
                LawAid Management assists by coordinating the legal frameworks
                required to support these pathways, ensuring that business
                expansion strategies align with all applicable immigration and
                regulatory requirements.
              </p>

              <h4>Our Work May Involve:</h4>

              <ul className="support-list">
                <li>Preparing investment structure documentation</li>
                <li>Coordinating immigration-related legal processes</li>
                <li>
                  Supporting the preparation of USCIS-compliant business
                  documentation
                </li>
                <li>
                  Providing strategic guidance regarding business immigration
                  pathways
                </li>
              </ul>

              <div className="law-firm-box">
                <p className="law-text">Strategic Alignment:</p>
                <p>
                  This coordination helps ensure that your business growth
                  objectives remain fully compliant with U.S. federal and state
                  regulatory standards throughout the expansion process.
                </p>
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img
                src={"businessImmigration.jpg"}
                alt="Immigration Case Support"
              />
            </div>
          </div>

          <div className="container px-0 imm-support-content">
            {/* MAIN CONTENT */}
            <div className="imm-reverse-grid">
              {/* LEFT CONTENT */}

              {/* RIGHT IMAGE */}
              <div className="imm-support-image custom-card-image">
                <img
                  src={"businessStructure.jpg"}
                  alt="Immigration Case Support"
                />
              </div>
              <div className="imm-support-text mt-0 mt-md-0">
                <h3>U.S. Business Structuring</h3>

                <p className="intro-text">
                  Establishing a business in the United States requires proper
                  corporate structuring and regulatory compliance.
                </p>

                <p>
                  LawAid Management helps coordinate the process of establishing
                  the appropriate business structure, ensuring your entity is
                  built on a solid legal foundation from day one.
                </p>

                <h4>Our Support May Include:</h4>

                <ul className="support-list">
                  <li>Business entity formation</li>
                  <li>Corporate structuring</li>
                  <li>Regulatory registrations</li>
                  <li>Compliance documentation</li>
                  <li>Preparation of required business documentation</li>
                </ul>

                <div className="law-firm-box">
                  <p className="law-text">Regulatory Note:</p>
                  <p>
                    While we do not operate businesses ourselves, we help ensure
                    that the
                    <strong> legal and structural framework</strong> required to
                    establish the business is properly organized and compliant
                    with U.S. standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>Investor & Franchisee Coordination</h3>

              <p className="intro-text">
                Expanding into a new market often requires the right partners to
                ensure sustainable growth and operational success.
              </p>

              <p>
                LawAid Management may assist businesses in connecting with
                investors or franchise operators interested in establishing
                businesses in the United States. We help facilitate the
                structural framework that supports these partnerships.
              </p>

              <h4>Our Role May Involve Coordinating:</h4>

              <ul className="support-list">
                <li>Investor introductions</li>
                <li>Franchisee discussions</li>
                <li>Partnership structuring</li>
                <li>Communication between franchisors and operators</li>
              </ul>

              <div className="law-firm-box">
                <p className="law-text">Partnership Dynamics:</p>
                <p>
                  The <strong>operational relationship</strong> remains directly
                  between the business owner and the operator or investor. Our
                  role is focused on organizing the structural and legal
                  alignment required to initiate the partnership.
                </p>
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={"investor.jpeg"} alt="Immigration Case Support" />
            </div>
          </div>

          <div className="container px-0 imm-support-content">
            {/* MAIN CONTENT */}
            <div className="imm-reverse-grid">
              {/* LEFT CONTENT */}

              {/* RIGHT IMAGE */}
              <div className="imm-support-image custom-card-image">
                <img src={"expantion.png"} alt="Immigration Case Support" />
              </div>
              <div className="imm-support-text mt-0 mt-md-0">
                <h3>Our Expansion Process</h3>

                <p className="intro-text">
                  Businesses that work with LawAid Management typically move
                  through a structured, multi-stage expansion process.
                </p>

                <div className="expansion-steps-container">
                  <ul className="support-list">
                    <li>
                      <strong>Step 1 — Business Evaluation:</strong> We evaluate
                      whether the business concept is suitable for expansion
                      into the United States.
                    </li>
                    <li>
                      <strong>Step 2 — Strategy Development:</strong> We help
                      determine the most appropriate expansion pathway, such as
                      direct investment expansion or franchising.
                    </li>
                    <li>
                      <strong>
                        Step 3 — Structural Framework Development:
                      </strong>{" "}
                      We coordinate the legal and structural frameworks required
                      to support the expansion strategy.
                    </li>
                    <li>
                      <strong>
                        Step 4 — Investor or Franchisee Coordination:
                      </strong>{" "}
                      Where appropriate, we assist in connecting businesses with
                      potential investors or operators.
                    </li>
                    <li>
                      <strong>Step 5 — U.S. Business Establishment:</strong> We
                      help coordinate the legal setup required to establish the
                      business in the United States.
                    </li>
                  </ul>
                </div>

                <div className="law-firm-box">
                  <p className="law-text">Post-Establishment:</p>
                  <p>
                    After establishment, the business continues to be
                    <strong> operated independently</strong> by the entrepreneur
                    or the designated operator. Our role is complete once the
                    legal and structural foundation is secured.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>The LawAid Management Advantage</h3>

              <p className="intro-text">
                International expansion often requires working with multiple
                professionals and specialized service providers to ensure a
                successful U.S. market entry.
              </p>

              <p>
                Navigating these requirements independently can be complex.
                Typically, businesses may need to coordinate with:
              </p>

              <ul className="support-list">
                <li>Immigration lawyers</li>
                <li>Corporate consultants</li>
                <li>Franchise advisors</li>
                <li>Legal documentation specialists</li>
              </ul>

              <div className="law-firm-box">
                <p className="law-text">The LawAid Solution:</p>
                <p>
                  LawAid Management provides a{" "}
                  <strong>structured platform</strong> that helps coordinate
                  these elements, allowing entrepreneurs to navigate the
                  expansion process more efficiently and with greater strategic
                  alignment.
                </p>
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={"advantage.jpeg"} alt="Immigration Case Support" />
            </div>
          </div>

          <div className="container px-0 imm-support-content">
            {/* MAIN CONTENT */}
            <div className="imm-reverse-grid">
              {/* LEFT CONTENT */}

              {/* RIGHT IMAGE */}
              <div className="imm-support-image custom-card-image">
                <img src={"experience.jpg"} alt="Immigration Case Support" />
              </div>
              <div className="imm-support-text mt-0 mt-md-0">
                <h3>Our Experience</h3>

                <p className="intro-text">
                  Through our work in business immigration and expansion
                  consulting, our team has supported the establishment of
                  hundreds of businesses in the United States.
                </p>

                <p>
                  This extensive experience allows us to navigate the
                  complexities involved in international business expansion,
                  providing structured guidance to entrepreneurs exploring
                  global opportunities.
                </p>

                <div className="law-firm-box">
                  <p className="law-text">Proven Track Record:</p>
                  <p>
                    Our deep understanding of the{" "}
                    <strong>U.S. market entry process</strong> ensures that the
                    businesses we support are positioned for long-term
                    operational stability and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="imm-support-grid">
            {/* LEFT CONTENT */}
            <div className="imm-support-text">
              <h3>Is Your Business Ready for U.S. Expansion?</h3>

              <p className="intro-text">
                The first step toward expanding internationally is determining
                whether your business is ready to enter the U.S. market.
              </p>

              <p>
                LawAid Management works closely with business owners to conduct
                a thorough pre-expansion assessment. We help you evaluate:
              </p>

              <ul className="support-list">
                <li>The scalability of your business model</li>
                <li>Potential expansion strategies</li>
                <li>Investment or franchising opportunities</li>
                <li>Legal and structural requirements</li>
              </ul>

              <div className="law-firm-box">
                <p className="law-text">Strategic Goal:</p>
                <p>
                  This initial evaluation helps determine the{" "}
                  <strong>most appropriate pathway</strong> for international
                  growth, ensuring your resources are aligned with a viable U.S.
                  market entry strategy.
                </p>
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div className="imm-support-image custom-card-image">
              <img src={"ready.jpg"} alt="Immigration Case Support" />
            </div>
          </div>

          <div className="container px-0 imm-support-content">
            {/* MAIN CONTENT */}
            <div className="imm-reverse-grid">
              {/* LEFT CONTENT */}

              {/* RIGHT IMAGE */}
              <div className="imm-support-image custom-card-image">
                <img src={"start.png"} alt="Immigration Case Support" />
              </div>
              <div className="imm-support-text mt-0 mt-md-0">
                <h3>Start Your U.S. Expansion Journey</h3>

                <p className="intro-text">
                  Expanding into the United States can open new opportunities
                  for growth, partnerships, and global brand development.
                </p>

                <p>
                  LawAid Management helps businesses structure the legal and
                  strategic foundation required to enter the U.S. market. If you
                  believe your business has the potential to expand
                  internationally, our team can help you explore the
                  possibilities.
                </p>

                <div className="law-firm-box">
                  <p className="law-text">Next Steps:</p>
                  <p>
                    Contact <strong>LawAid Management</strong> today to begin
                    evaluating your business for U.S. expansion and defining
                    your strategic pathway to the American market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Immigration;
