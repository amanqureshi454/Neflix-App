import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-f">
          <div className="row-f">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
                <li>
                  <a href="#">Subsribtions Status</a>
                </li>
                <li>
                  <a href="#">Subsribtions Expires</a>
                </li>
                <li>
                  <a href="#">Downloaded Movies</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online Movies</h4>
              <ul>
                <li>
                  <a href="#">Loki</a>
                </li>
                <li>
                  <a href="#">Faarzi</a>
                </li>
                <li>
                  <a href="#">Extraction 2</a>
                </li>
                <li>
                  <a href="#">Family Man</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <FaFacebook size={20} className="social_icons" />
                </a>
                <a href="#">
                  <FaTwitter size={20} className="social_icons" />
                </a>
                <a href="#">
                  <FaInstagram size={20} className="social_icons" />
                </a>
                <a href="#">
                  <FaLinkedin size={20} className="social_icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
