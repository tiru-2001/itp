import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import {
  IoCall,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  CiMenuBurger,
  MdCancel,
} from "../../assets/icons/index";

function Footer() {
  return (
    <>
      <footer>
        <section className="container flex gap-14">
          <section className="col">
            <section className="header">IndianTherapist</section>
            <section className="sub-text mb-10"></section>

            <section className="flex flex-row gap-14 wrap">
              <section className="social">
                <a href="https://www.facebook.com/yourdesidost">
                  <FaFacebookF />
                </a>
              </section>

              <section className="social">
                <a href="https://twitter.com/indiatherapist">
                  <FaTwitter />
                </a>
              </section>
              <section className="social">
                <a href="https://instagram.com/indiatherapist">
                  <FaInstagram />
                </a>
              </section>
              <section className="social">
                <a href="https://www.linkedin.com/in/indiatherapist/">
                  <FaLinkedin />
                </a>
              </section>
            </section>
          </section>
          <section className="col">
            <section className="header">Contact Info</section>

            <section className="contact-info">
              23 West Street, REDHILL, RH70 9WM
            </section>
            <section className="contact-info flex flex-col">
              <p>
                Phone: <a href="tel:+919384838353">+919384838353</a>
              </p>
              <p>
                Mail:{" "}
                <a href="mailto:customerservice@indiatherapist.com">
                  customerservice@indiatherapist.com
                </a>
              </p>
            </section>
            <section className="contact-info">
              <p>Mon - Fri: ( 9am - 6pm )</p>
              <p>Sat & Sun: CLOSED</p>
            </section>
          </section>
          <section className="col">
            <section className="header">Our Programs</section>
            <section className="program-list">
              <ul>
                <Link>
                  <li>Dating & Relationship</li>
                </Link>
                <Link>
                  <li>Grief & Loss</li>
                </Link>
                <Link>
                  <li>Self Esteem Therapy</li>
                </Link>
                <Link>
                  <li>Kids & Family</li>
                </Link>
                <Link>
                  <li>Life & Future Planning</li>
                </Link>
                <Link>
                  <li>Old Age Therapy</li>
                </Link>
              </ul>
            </section>
          </section>
          <section className="col">
            <section className="header">Book Appointment</section>

            <Link to="tel:1236547890">
              <section className="container-fluid">
                <section className="col dialnow">
                  <p>Let's Chat</p>
                  <section className="dialnow-number">
                    <a href="https://api.whatsapp.com/send?phone=919384838353">
                      +919384838353
                    </a>
                  </section>
                </section>
              </section>
            </Link>
          </section>
        </section>
        <section className="copyright">
          <section className="copyright-text">
            © Copyright 2024 India Therapist. All Rights Reserved
          </section>
          <section className="developed">
            <small>
              <a href="https://websort.in/">Developed by websort</a>{" "}
            </small>
          </section>
        </section>
      </footer>
    </>
  );
}

export default Footer;
