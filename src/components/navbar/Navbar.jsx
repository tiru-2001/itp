import "./navbar.scss";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
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
              <img src="https://gracethemesdemo.com/psyclone/wp-content/themes/psyclone-pro/images/logo.png" />
            </section>
            <section class="nav-items">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Templates</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Gallery</a>
                </li>

                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </section>
          </nav>
        </section>
      </header>
    </div>
  );
};

export default Navbar;
