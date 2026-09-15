import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import heroBgDesktop from '../assets/hero-official.png';
import heroBgMobile from '../assets/hero-mobile.png';

const Hero = () => {
  return (
    <section className="hero">
      {/* Desktop Background */}
      <div className="hero-bg desktop-bg">
        <img src={heroBgDesktop} alt="MDR Travels Coastal Journey" style={{ objectFit: 'cover', objectPosition: 'center' }} />
      </div>

      <div 
        className="hero-bg mobile-bg"
        style={{ backgroundImage: `url(${heroBgMobile})` }}
      ></div>

      <div className="hero-overlay"></div>
      
      <div className="container hero-layout">
        <div className="hero-content">
          <h1 className="hero-title">
            Travel Comfortably.<br />
            Travel With <span className="highlight-text">MDR</span>.
          </h1>
          <p className="hero-subtitle">
            Safe, comfortable and reliable travel services in Visakhapatnam and
            across destinations in Andhra Pradesh.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary hero-btn">
              <span>Explore Services</span>
              <ArrowRight size={14} className="btn-icon" />
            </Link>
            <a 
              href="https://wa.me/918247096395" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp hero-btn"
            >
              <MessageCircle size={14} className="btn-icon" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
