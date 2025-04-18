// Footer.js
import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaTripadvisor } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
          <p className='img' style={{fontFamily:'Moon Walk', fontSize:'3rem', color:'#e63946'}}>Bites</p>          </div>
          <p className="footer-tagline">
            Fresh ingredients, exceptional flavors - delivered
          </p>
          <div className="footer-icons">
            <a href="#" aria-label="Twitter"><BsTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><BsInstagram /></a>
            <a href="#" aria-label="TripAdvisor"><FaTripadvisor /></a>
            <a href="#" aria-label="YouTube"><BsYoutube /></a>
          </div>
        </div>

        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Explore</span>
            <span>Menu</span>
            <span>Gallery</span>
            <span>Events</span>
            <span>About Us</span>
            <span>Chef's Story</span>
          </div>
          
          <div className="footer-section-columns">
            <span>Help</span>
            <span><MdDeliveryDining /> +234 815 343 0276</span>
            <span>hello@restaurant.com</span>
            <span>press@restaurant.com</span>
            <span>123 Gourmet Street, Lagos</span>
          </div>
          
          <div className="footer-section-columns">
            <span>Legal</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bites. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;