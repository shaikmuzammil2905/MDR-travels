import React, { useState } from 'react';
import { Map, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import arakuImage from '../assets/img9.png';
import Modal from './Modal';

const TourPackages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="packages" className="section" style={{ background: 'var(--light-bg)' }}>
      <div className="container">
        <div className="text-center reveal">
          <h2 className="section-title">Popular Tour Packages</h2>
          <p className="section-subtitle">
            Experience the beauty of Andhra Pradesh with our specially curated tour packages.
          </p>
        </div>

        <div className="package-card reveal" style={{ cursor: 'pointer' }} onClick={() => setIsModalOpen(true)}>
          <div className="package-img">
            <img src={arakuImage} alt="Araku Valley" />
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
              <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}>
                View Package Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Araku Valley Tour Details">
        <div>
          <img src={arakuImage} alt="Araku Valley" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }} />
          <h4 style={{ fontSize: '1.2rem', color: 'var(--dark-blue)', marginBottom: '1rem' }}>Tour Itinerary Highlights</h4>
          <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Escape to the misty hills of Araku Valley. This full-day guided tour begins with a morning pickup from your location in Visakhapatnam. We ensure a comfortable ride through the scenic Eastern Ghats.
          </p>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '1.5rem', color: '#555', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} className="text-primary-blue" /> Visakhapatnam to Araku scenic drive</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} className="text-primary-blue" /> Explore the million-year-old Borra Caves</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} className="text-primary-blue" /> Visit the picturesque Padmapuram Gardens</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} className="text-primary-blue" /> Taste authentic coffee at the Coffee Museum</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} className="text-primary-blue" /> Discover local culture at the Tribal Museum</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} className="text-primary-blue" /> Safe return drop-off to Visakhapatnam</li>
          </ul>
          <a 
            href={`https://wa.me/918247096395?text=${encodeURIComponent('Hi, I am interested in booking the Araku Valley One Day Tour. Can you share the pricing and availability?')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp"
            style={{ width: '100%', fontSize: '1.1rem', padding: '1rem', justifyContent: 'center' }}
          >
            <MessageCircle size={20} /> Book on WhatsApp
          </a>
        </div>
      </Modal>
    </section>
  );
};

export default TourPackages;
