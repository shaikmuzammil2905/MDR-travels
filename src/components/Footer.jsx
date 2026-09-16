import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo-official.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-logo">
              <img src={logo} alt="MDR Travels Logo" style={{ height: '60px', background: 'white', padding: '5px', borderRadius: '8px', marginBottom: '1.5rem' }} />
            </Link>
            <p className="footer-about">
              MDR Travels provides premium, reliable, and comfortable travel services in Visakhapatnam and across Andhra Pradesh. Your journey, our priority.
            </p>
          </div>
          
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/vehicles" className="footer-link">Vehicles</Link>
              <Link to="/packages" className="footer-link">Tour Packages</Link>
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
              <a href="mailto:Mdrtravels2026@gmail.com">Mdrtravels2026@gmail.com</a>
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
