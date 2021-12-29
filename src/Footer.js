import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const FooterApi = ["Company", "Support", "Services"];
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="other-links">
          {FooterApi.map((curEl, index) => {
            return (
              <div className="name-links">
                <h5>{curEl}</h5>
                <div className="links">
                  <p className="link">About</p>
                  <p className="link">About</p>
                  <p className="link">About</p>
                  <p className="link">About</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="follow-links">
          <h5>Follow Us</h5>
          <div className="social-links">
            <div className="follow-links-icon" >
              <FaFacebookF />
            </div>
            <div className="follow-links-icon">
              <FaInstagram />
            </div>
            <div className="follow-links-icon">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="copyright">
          <hr />
          <p>Copyright @ 2021 ZoroPay. All rights resserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
