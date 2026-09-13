import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/image.png';

const Footer = () => {
  return (
    <footer id="about" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#home" className="footer-logo">
              <img src={logo} alt="MDR Travels Logo" />
            </a>
            <p className="footer-about">
              MDR Travels provides premium, reliable, and comfortable travel services in Visakhapatnam and across Andhra Pradesh. Your journey, our priority.
            </p>
          </div>
          
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#vehicles" className="footer-link">Vehicles</a>
              <a href="#packages" className="footer-link">Tour Packages</a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">Contact Us</h4>
            <div className="footer-contact-item">
              <MapPin className="footer-contact-icon" size={20} />
              <span>58-32-6, Adharsha Nagar,<br />Kancharapalem, Visakhapatnam</span>
            </div>
            <div className="footer-contact-item">
              <Phone className="footer-contact-icon" size={20} />
              <a href="tel:8247096395">8247096395</a>
            </div>
            <div className="footer-contact-item">
              <Mail className="footer-contact-icon" size={20} />
              <a href="mailto:mdrtravels26@gmail.com">mdrtravels26@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MDR Travels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
