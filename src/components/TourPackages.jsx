import React, { useState } from 'react';
import { Map, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import arakuImage from '../assets/img9.png';
import lambasingiImage from '../assets/araku-valley.jpg';
import vizagImage from '../assets/vizag-tour.jpg';
import Modal from './Modal';

const TourPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 'araku',
      title: 'Araku Valley One Day Tour',
      tag: 'Most Popular',
      image: arakuImage,
      duration: '1 Day Trip',
      route: 'Visakhapatnam to Araku',
      description: 'Experience the breathtaking beauty of Araku Valley. Our comprehensive day tour covers all major attractions with comfortable travel and expert guidance.',
      highlights: [
        'Borra Caves',
        'Coffee Museum',
        'Padmapuram Gardens',
        'Tribal Museum',
        'Galikonda Viewpoint'
      ],
      modalHighlights: [
        'Scenic morning drive from Visakhapatnam to Araku',
        'Explore the million-year-old natural Borra Caves',
        'Visit the colorful Padmapuram Botanical Gardens',
        'Taste authentic organic coffee at the Araku Coffee Museum',
        'Discover local tribal culture & crafts at Tribal Museum',
        'Safe return drop-off to your doorstep in Visakhapatnam'
      ]
    },
    {
      id: 'lambasingi',
      title: 'Lambasingi Hills "Kashmir of AP"',
      tag: 'Hill Station',
      image: lambasingiImage,
      duration: '2 Days / 1 Night',
      route: 'Visakhapatnam to Lambasingi',
      description: 'Discover the misty clouds and chilly heights of Lambasingi. Enjoy apple orchards, strawberry farms, and serene morning mist in Andhra Pradesh\'s coolest getaway.',
      highlights: [
        'Cloud Peak View',
        'Thajangi Reservoir',
        'Susan Garden Flowers',
        'Strawberry Farms',
        'Kothapalli Waterfalls'
      ],
      modalHighlights: [
        'Comfortable ghat road journey through Eastern Ghats',
        'Experience freezing morning temperatures and blanket of fog',
        'Visit the scenic Thajangi Reservoir and boating points',
        'Explore the vibrant Susan Garden yellow flower fields',
        'Tour local strawberry & apple plantations',
        'Expert hilly terrain drivers with dedicated assistance'
      ]
    },
    {
      id: 'vizag',
      title: 'Vizag Coastal City Sightseeing',
      tag: 'City & Beach',
      image: vizagImage,
      duration: 'Full Day Tour',
      route: 'Across Visakhapatnam',
      description: 'Explore the City of Destiny in style. Tour the coastline, historic naval museums, hilltop temples, and panoramic viewpoints with complete comfort.',
      highlights: [
        'Kailasagiri Ropeway',
        'Submarine Museum',
        'Rishikonda Beach',
        'Simhachalam Temple',
        'TU 142 Aircraft Museum'
      ],
      modalHighlights: [
        'Panoramic hilltop views of the Bay of Bengal from Kailasagiri',
        'Visit the historic INS Kursura Submarine Museum at RK Beach',
        'Explore the TU 142 Aircraft War Museum',
        'Relax and enjoy water sports at the pristine Rishikonda Beach',
        'Seek blessings at the ancient Sri Varaha Lakshmi Narasimha Temple',
        'Flexible drop-offs and custom itinerary adjustments'
      ]
    }
  ];

  return (
    <section id="packages" className="section" style={{ background: 'var(--light-bg)' }}>
      <div className="container">
        <div className="text-center reveal">
          <h2 className="section-title">Popular Tour Packages</h2>
          <p className="section-subtitle">
            Experience the beauty of Andhra Pradesh with our specially curated, comfortable tour packages.
          </p>
        </div>

        <div className="tour-packages-grid">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="package-card reveal" 
              style={{ cursor: 'pointer' }} 
              onClick={() => setSelectedPackage(pkg)}
            >
              <div className="package-img">
                <img src={pkg.image} alt={pkg.title} />
                <span className="package-badge">{pkg.tag}</span>
              </div>
              <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-desc">{pkg.description}</p>
                
                <div className="package-highlights">
                  <div className="highlight-item">
                    <Clock size={16} className="text-primary-blue" /> 
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="highlight-item">
                    <Map size={16} className="text-primary-blue" /> 
                    <span>{pkg.route}</span>
                  </div>
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="highlight-item">
                      <CheckCircle size={16} className="text-primary-blue" /> 
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="package-actions">
                  <button 
                    className="btn btn-primary" 
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setSelectedPackage(pkg); 
                    }}
                  >
                    View Package Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
        title={selectedPackage?.title || 'Tour Details'}
      >
        {selectedPackage && (
          <div>
            <img 
              src={selectedPackage.image} 
              alt={selectedPackage.title} 
              style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }} 
            />
            <h4 style={{ fontSize: '1.25rem', color: 'var(--dark-blue)', marginBottom: '0.75rem' }}>
              Tour Itinerary & Highlights
            </h4>
            <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {selectedPackage.description}
            </p>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '1.5rem', color: '#555', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {selectedPackage.modalHighlights.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle size={18} className="text-primary-blue" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href={`https://wa.me/918247096395?text=${encodeURIComponent(`Hi MDR Travels, I would like to inquire and book the ${selectedPackage.title}. Could you share the detailed package cost and vehicle options?`)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
              style={{ width: '100%', fontSize: '1.1rem', padding: '1rem', justifyContent: 'center' }}
            >
              <MessageCircle size={20} /> Book on WhatsApp
            </a>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default TourPackages;
