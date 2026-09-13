import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/image copy 3.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="MDR Travels Premium Bus" />
      </div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-layout">
        <div className="hero-content reveal">
          <h1 className="hero-title">
            Travel Comfortably.<br />
            Travel With <span style={{ color: 'var(--primary-yellow)' }}>MDR</span>.
          </h1>
          <p className="hero-subtitle">
            Safe, comfortable and reliable travel services in Visakhapatnam and
            across destinations in Andhra Pradesh.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              <span>Explore Services</span>
              <ArrowRight size={20} />
            </Link>
            <a href="https://wa.me/918247096395" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

