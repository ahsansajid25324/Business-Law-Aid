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
          <p>U.S.-based Paralegal & Business Consultation Services</p>

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
          <h3>Services</h3>
          <ul className="cursor-pointer">
            <li>
              <Link to="/services">Immigration Support</Link>
            </li>
            <ul className="cursor-pointer">
              <li>
                <Link to="/services">Foreign Business Support</Link>
              </li>
            </ul>
            <ul className="cursor-pointer">
              <li>
                <Link to="/services">Business Support</Link>
              </li>
            </ul>
            <ul className="cursor-pointer">
              <li>
                <Link to="/services">Company Formation</Link>
              </li>
            </ul>
            <ul className="cursor-pointer">
              <li>
                <Link to="/services">Business Acquisition</Link>
              </li>
            </ul>
            <ul className="cursor-pointer">
              <li>
                <Link to="/services">Humanitarian Relief</Link>
              </li>
            </ul>
            <ul className="cursor-pointer">
              <li>
                <Link to="/services">Legal Operations</Link>
              </li>
            </ul>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
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
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Confidentiality Agreement</li>
            <li>Professional Ethics</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 LawAid Management. All rights reserved.</p>
        <p>Serving U.S. Law Firms & Foreign Businesses with Precision and Integrity</p>
      </div>
    </footer>
  );
};

export default Footer;
