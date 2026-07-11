import "../../styles/Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Column 1 */}
        <div className="footer-col footer-about">
          <img src={Logo} alt="LawAid Management Logo" />
          <p>Business Immigration & Global Expansion Consultancy</p>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/lawaid-management/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a href="mailto:info@law-aid.org">
              <MdOutlineEmail />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col give-margin">
          {/* <h3>Our Programs</h3>
          <ul className="cursor-pointer">
            <li>
              <Link to="/services">Direct Business Expansion</Link>
            </li>
            <li>
              <Link to="/services">Franchise System Development</Link>
            </li>
            <li>
              <Link to="/services">U.S. Corporate Structuring</Link>
            </li>
            <li>
              <Link to="/services">Investment Pathways</Link>
            </li>
            <li>
              <Link to="/services">Immigration-Compliant Design</Link>
            </li>
            <li>
              <Link to="/services">Strategic Coordination</Link>
            </li>
          </ul> */}
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Compliance & Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Engagement Agreement</li>
            <li>Regulatory Compliance</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 LawAid Management. All rights reserved.</p>
        <p>Connecting Established Businesses to Opportunities in the United States</p>
      </div>
    </footer>
  );
};

export default Footer;