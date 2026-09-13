import React, { useState } from 'react';
import { Car, Map, Palmtree, Plane, Train, MessageCircle } from 'lucide-react';
import Modal from './Modal';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Car size={36} />,
      title: "Local Car Rentals",
      description: "Comfortable sedan and SUV rentals for local travel within Visakhapatnam, with flexible options for personal, family and business journeys."
    },
    {
      icon: <Map size={36} />,
      title: "Outstation Taxi Service",
      description: "Reliable outstation taxi services with comfortable vehicles and transparent per-kilometre pricing for your long-distance journeys."
    },
    {
      icon: <Palmtree size={36} />,
      title: "Araku Tour Packages",
      description: "Explore the beautiful Araku Valley with comfortable vehicles and dedicated one-day tour packages."
    },
    {
      icon: <Plane size={36} />,
      title: "Airport Pickup & Drop",
      description: "Convenient airport pickup and drop services designed for safe, comfortable and timely transfers."
    },
    {
      icon: <Train size={36} />,
      title: "Railway Station Pickup & Drop",
      description: "Easy and reliable railway station transfers for individuals, families and groups."
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
            <div key={index} className="service-card reveal" style={{ transitionDelay: `${index * 100}ms` }} onClick={() => setSelectedService(service)}>
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
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '2rem', background: 'rgba(7, 87, 184, 0.1)', borderRadius: '50%', color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>
              {selectedService.icon}
            </div>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#555', marginBottom: '2rem' }}>
              {selectedService.description}
            </p>
            <p style={{ fontWeight: 500, marginBottom: '2rem' }}>
              Contact us on WhatsApp to get the best quote for this service!
            </p>
            <a 
              href={`https://wa.me/918247096395?text=${encodeURIComponent(`Hi, I would like to inquire about the ${selectedService.title} service.`)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
              style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}
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
