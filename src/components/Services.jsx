import React, { useState } from 'react';
import { Car, Map, Palmtree, Plane, Train, MessageCircle, CheckCircle } from 'lucide-react';
import Modal from './Modal';
import defaultServiceImg from '../assets/image copy 3.png';
import outstationImg from '../assets/img8.png';
import arakuImg from '../assets/img9.png';
import railwayImg from '../assets/img10.png';
import airportImg from '../assets/img11.png';
import localCarImg from '../assets/img14.png';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Car size={36} />,
      title: "Local Car Rentals",
      description: "Comfortable sedan and SUV rentals for local travel within Visakhapatnam, with flexible options for personal, family and business journeys.",
      image: localCarImg,
      features: [
        "Flexible hourly and daily rental packages",
        "Clean, well-maintained air-conditioned vehicles",
        "Professional, locally knowledgeable drivers",
        "Perfect for city tours, shopping, and business meetings",
        "Transparent pricing with no hidden charges"
      ]
    },
    {
      icon: <Map size={36} />,
      title: "Outstation Taxi Service",
      description: "Reliable outstation taxi services with comfortable vehicles and transparent per-kilometre pricing for your long-distance journeys.",
      image: outstationImg,
      features: [
        "Safe and comfortable intercity travel",
        "Experienced drivers for highway driving",
        "Round-trip and one-way drop options available",
        "Regular vehicle health checks before long trips",
        "24/7 customer support during your journey"
      ]
    },
    {
      icon: <Palmtree size={36} />,
      title: "Araku Tour Packages",
      description: "Explore the beautiful Araku Valley with comfortable vehicles and dedicated one-day tour packages.",
      image: arakuImg,
      features: [
        "Dedicated guided tours to Araku Valley",
        "Visits to Borra Caves, Coffee Museum, and Gardens",
        "Comfortable seating for the ghat road journey",
        "Customizable itineraries for families and groups",
        "Knowledgeable drivers acting as local guides"
      ]
    },
    {
      icon: <Plane size={36} />,
      title: "Airport Pickup & Drop",
      description: "Convenient airport pickup and drop services designed for safe, comfortable and timely transfers.",
      image: airportImg,
      features: [
        "Punctual and reliable airport transfers",
        "Flight tracking to adjust for delays",
        "Meet and greet service at arrivals",
        "Spacious vehicles for extra luggage",
        "Available for late-night and early-morning flights"
      ]
    },
    {
      icon: <Train size={36} />,
      title: "Railway Station Pickup & Drop",
      description: "Easy and reliable railway station transfers for individuals, families and groups.",
      image: railwayImg,
      features: [
        "Timely pickups for train departures",
        "Wait-and-pick service for arriving trains",
        "Hassle-free parking and loading assistance",
        "Suitable vehicles for varying group sizes",
        "Pre-booking available for peace of mind"
      ]
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="text-center reveal">
          <h2 className="section-title">Our Travel Services</h2>
          <p className="section-subtitle">
            Reliable travel solutions for local journeys, outstation trips,
            airport transfers and memorable tours.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal" style={{ transitionDelay: `${index * 100}ms`, cursor: 'pointer' }} onClick={() => setSelectedService(service)}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-actions">
                <button className="btn btn-outline" style={{flex: 1}} onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)} title={selectedService?.title}>
        {selectedService && (
          <div>
            <img src={selectedService.image || defaultServiceImg} alt={selectedService.title} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.8rem', background: 'rgba(7, 87, 184, 0.1)', borderRadius: '50%', color: 'var(--primary-blue)' }}>
                {selectedService.icon}
              </div>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--dark-blue)', margin: 0 }}>Service Overview</h4>
            </div>
            
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#555', marginBottom: '1.5rem' }}>
              {selectedService.description}
            </p>

            <h5 style={{ fontSize: '1.1rem', color: 'var(--dark-text)', marginBottom: '1rem' }}>Key Features:</h5>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '1.5rem', color: '#555', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {selectedService.features.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle size={18} className="text-primary-blue" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> 
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-yellow)' }}>
              <p style={{ fontWeight: 500, margin: 0, color: 'var(--dark-blue)' }}>
                Need a custom itinerary or specific vehicle? Our team is ready to help you plan the perfect trip.
              </p>
            </div>

            <a 
              href={`https://wa.me/918247096395?text=${encodeURIComponent(`Hi, I would like to inquire about the ${selectedService.title} service. Could you provide more information and pricing?`)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
              style={{ width: '100%', fontSize: '1.1rem', padding: '1rem', justifyContent: 'center' }}
            >
              <MessageCircle size={20} /> Inquire Now on WhatsApp
            </a>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Services;
