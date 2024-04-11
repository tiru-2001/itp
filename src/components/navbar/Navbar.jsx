import "./navbar.scss";
import { useState } from "react";
import {
  IoCall,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  CiMenuBurger,
  MdCancel,
} from "../../assets/icons/index";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { navLinks } from "../../utils/navbarutils/index";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <header>
        <nav className="first-nav">
          <section className="left">
            <section className="left-item1">
              <IoCall />
              <a href="tel:9393939">123456789</a>
            </section>
            <section className="left-item2">
              <i className="fa-regular fa-envelope"></i>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </section>
          </section>
          <section className="right">
            <section className="right-item1">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </section>

            <Link to="/contact" className="right-item2">
              Make an appointment
            </Link>
          </section>
        </nav>

        {/* desktop version */}
        <section className="second-nav-container">
          <nav className="second-nav">
            <section className="logo">
              <Link to={"/"}>
                <img src={logo} />
              </Link>
            </section>
            <section className="nav-items">
              {navLinks.map((item, ind) => (
                <Link key={ind} to={item.path}>
                  {item.title}
                </Link>
              ))}
            </section>
            <section className="mobile_version_nav">
              {!toggle && (
                <section className="menubtn_container">
                  <CiMenuBurger
                    className="menu_icon"
                    onClick={() => {
                      setToggle((prev) => !prev);
                    }}
                  />
                </section>
              )}
              {/* {toggle} */}
              {toggle && (
                <section className="toggleContainer">
                  {toggle && (
                    <section className="cancelbutton_container">
                      <MdCancel
                        className="cancelButton"
                        onClick={() => {
                          setToggle((prev) => !prev);
                        }}
                      />
                    </section>
                  )}
                  <section className="mobile_navitems_container">
                    {navLinks.map((item, ind) => (
                      <Link
                        onClick={() => {
                          setToggle((prev) => !prev);
                        }}
                        className="links"
                        to={item.path}
                        key={ind}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </section>
                </section>
              )}
            </section>
          </nav>
        </section>
      </header>
    </div>
  );
};

export default Navbar;
