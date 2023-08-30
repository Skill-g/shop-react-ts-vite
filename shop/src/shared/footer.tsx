import React from "react";
import { FaDiscord, FaVk, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="links">
            <h3 className="quick-links-h3">Quick Links</h3>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3 className="services-h3">Services</h3>

            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>

              <li>
                <a href="#">App Design</a>
              </li>

              <li>
                <a href="#">SEO Optimization</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3 className="categories-h3">Categories</h3>

            <ul>
              <li>
                <a href="#">Design</a>
              </li>

              <li>
                <a href="#">Blogger</a>
              </li>

              <li>
                <a href="#">Web</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3 className="contact-h3">Get In Touch</h3>

            <ul>
              <li>Email: contact@gmail.com</li>

              <li>Mobile No.: +1-111-111-1111</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright"></div>

          <div className="social">
            <a href="#">
              <FaDiscord />
            </a>

            <a href="#">
              <FaVk />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
