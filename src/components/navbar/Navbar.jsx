import "./navbar.scss";
import {
  IoCall,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "../../assets/icons/index";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { navLinks } from "../../utils/navbarutils/index";
const Navbar = () => {
  return (
    <div>
      <header>
        <nav class="first-nav">
          <section class="left">
            <section class="left-item1">
              <IoCall />
              <a href="tel:9393939">123456789</a>
            </section>
            <section class="left-item2">
              <i class="fa-regular fa-envelope"></i>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </section>
          </section>
          <section class="right">
            <section class="right-item1">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </section>

            <a href="" class="right-item2">
              Make an appointment
            </a>
          </section>
        </nav>

        <section class="second-nav-container">
          <nav class="second-nav">
            <section class="logo">
              <Link to={"/"}>
                <img src={logo} />
              </Link>
            </section>
            <section class="nav-items">
              {navLinks.map((item, ind) => (
                <Link to={item.path}>{item.title}</Link>
              ))}
            </section>
          </nav>
        </section>
      </header>
    </div>
  );
};

export default Navbar;
