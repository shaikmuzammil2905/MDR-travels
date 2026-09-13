import React from 'react';
import { Map, Clock, CheckCircle, MessageCircle } from 'lucide-react';

const TourPackages = () => {
  return (
    <section id="packages" className="section" style={{ background: 'var(--light-bg)' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Popular Tour Packages</h2>
          <p className="section-subtitle">
            Experience the beauty of Andhra Pradesh with our specially curated tour packages.
          </p>
        </div>

        <div className="package-card animate-fade-in">
          <div className="package-img">
            <img src="https://images.unsplash.com/photo-1625447665796-03f47e3a9cfa?auto=format&fit=crop&q=80&w=800" alt="Araku Valley" />
          </div>
          <div className="package-content">
            <h3 className="package-title">Araku Valley One Day Tour</h3>
            <p className="package-desc">
              Experience the breathtaking beauty of Araku Valley. Our comprehensive day tour covers all major attractions with comfortable travel and expert guidance.
            </p>
            
            <div className="package-highlights">
              <div className="highlight-item"><Clock size={20} className="text-primary-blue" /> 1 Day Trip</div>
              <div className="highlight-item"><Map size={20} className="text-primary-blue" /> Visakhapatnam to Araku</div>
              <div className="highlight-item"><CheckCircle size={20} className="text-primary-blue" /> Borra Caves</div>
              <div className="highlight-item"><CheckCircle size={20} className="text-primary-blue" /> Coffee Museum</div>
              <div className="highlight-item"><CheckCircle size={20} className="text-primary-blue" /> Padmapuram Gardens</div>
              <div className="highlight-item"><CheckCircle size={20} className="text-primary-blue" /> Tribal Museum</div>
            </div>

            <div className="package-actions">
              <a href="https://wa.me/918247096395?text=Hi,%20I%20want%20to%20book%20the%20Araku%20Valley%20One%20Day%20Tour." target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book This Package
              </a>
              <a href="https://wa.me/918247096395?text=Hi,%20I%20need%20more%20details%20about%20the%20Araku%20Valley%20Tour." target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <MessageCircle size={18} /> Inquire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
