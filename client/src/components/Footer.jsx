import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaTwitter,
  FaFacebook,
  FaBehance,
  FaGlobe,
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-area d-flex gap-5">
          <div className="cart single-footer-caption">
            <div className="single-footer-caption ">
              <div className="footer-logo">
                <Link>
                  <img
                    src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo2_footer.png"
                    alt=""
                  />
                </Link>
              </div>
              <p>
                Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf
                sed do eiusmod tem.
              </p>
            </div>
          </div>
          <div className="cart footer-tittle">
            <h4>Quick Links</h4>
            <ul>
              <Link>About</Link>

              <Link>Offers & Discounts</Link>

              <Link>Get Coupon</Link>

              <Link>Contact Us</Link>
            </ul>
          </div>
          <div className="cart footer-tittle">
            <h4>New Products</h4>
            <ul>
              <Link>Woman Cloth</Link>

              <Link>Fashion Accessories</Link>

              <Link>Man Accessories</Link>

              <Link>Rubber made Toys</Link>
            </ul>
          </div>
          <div className="cart footer-tittle">
            <h4>Support</h4>
            <ul>
              <Link>Frequently Asked Questions</Link>

              <Link>Terms & Conditions</Link>

              <Link>Privacy Policy</Link>

              <Link>Report a Payment Issue</Link>
            </ul>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between">
          <p>
            Copyright ©2024 All rights reserved | This template is made with
            <FaHeart className="heart" />
            by <Link>Colorlib</Link>
          </p>
          <div className="footer-social d-flex gap-4">
            <FaTwitter />
            <FaFacebook />
            <FaBehance />
            <FaGlobe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
