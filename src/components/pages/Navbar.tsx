import { useEffect, useState } from "react";
import "../../styles/Navbar.css";
import Logo from "../../assets/LogoW.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpenDrawer(false);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-container">
          <div className="brand-logo" onClick={() => navigate("/")}>
            <img src={Logo} alt="LawAid Logo" />
          </div>

          <nav className="desktop-navigation">
            <ul className="nav-menu-list">
              {navLinks.map((link) => (
                <li key={link.name} className={location.pathname === link.path ? "is-active" : ""}>
                  <Link to={link.path} onClick={handleNavClick}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button 
              className="cta-action-btn"
            >
              Start an Enquiry
            </button>
          </nav>

          <button className="mobile-toggle-btn" onClick={() => setOpenDrawer(true)} aria-label="Open Menu">
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Slide-out */}
      <div className={`navigation-drawer ${openDrawer ? "is-open" : ""}`}>
        <div className="drawer-inner-header">
          <img src={Logo} alt="LawAid Logo" className="drawer-logo" />
          <button className="drawer-close-btn" onClick={() => setOpenDrawer(false)}>
            <IoCloseOutline size={28} />
          </button>
        </div>

        <ul className="drawer-menu-links">
          {navLinks.map((link) => (
            <li 
              key={link.name} 
              className={location.pathname === link.path ? "drawer-active-item" : ""}
              onClick={() => {
                navigate(link.path);
                handleNavClick();
              }}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => window.open("https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb", "_blank")}
          className="drawer-cta-btn"
        >
          Begin Consultation
        </button>
      </div>
      {openDrawer && <div className="drawer-backdrop-blur" onClick={() => setOpenDrawer(false)} />}
    </>
  );
};

export default Navbar;