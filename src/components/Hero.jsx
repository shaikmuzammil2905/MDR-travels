import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import heroBg from '../assets/hero-bright.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="MDR Travels Luxury Bus" />
      </div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-layout">
        <div className="hero-content reveal">
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
              <ArrowRight size={18} />
            </Link>
            <a 
              href="https://wa.me/918247096395" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp hero-btn"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
