import { useEffect, useState } from "react";
import "../../styles/Navbar.css";
import Logo from "../../assets/LogoW.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {/* Desktop Navbar */}
      <div className={`main-navbar${scrolled ? " scrolled" : ""}`}>
        <nav className="container px-0 py-3 navbar">
          <div className="logo">
            <img width={110} src={Logo} alt="LawAid Logo" />
          </div>

          <div className="d-flex gap-4 align-items-center">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className={location.pathname === link.path ? "active" : ""}
                >
                  <Link to={link.path} onClick={handleNavClick}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              className="consult-btn"
              onClick={() => {
                window.open("https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb", "_blank");
              }}
            >
              Begin Consultation
            </button>
          </div>
        </nav>
      </div>

      <div className={`mobile-navbar${scrolled ? " scrolled" : ""}`}>
        <nav className="container px-0 navbar">
          <div className="logo">
            <img width={80} src={Logo} alt="LawAid Logo" />
          </div>

          <GiHamburgerMenu
            color="#fff"
            size={20}
            onClick={() => setOpenDrawer(true)}
            style={{ cursor: "pointer" }}
          />
        </nav>
      </div>

      {/* Overlay */}
      {openDrawer && (
        <div className="drawer-overlay" onClick={() => setOpenDrawer(false)} />
      )}

      {/* Drawer */}
      <div className={`mobile-drawer ${openDrawer ? "open" : ""}`}>
        <div className="drawer-header">
          <span>Menu</span>
          <IoClose
            size={22}
            style={{ cursor: "pointer" }}
            onClick={() => setOpenDrawer(false)}
          />
        </div>

        <ul className="drawer-links">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={location.pathname === link.path ? "active" : ""}
              onClick={() => {
                handleNavClick();
                setOpenDrawer(false);
                navigate(link.path);
              }}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            window.open("https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb", "_blank");
          }}
          className="drawer-btn"
        >
          Begin Consultation
        </button>
      </div>
    </>
  );
};

export default Navbar;
