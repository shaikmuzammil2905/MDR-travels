import React from 'react';
import { Car, Map, Palmtree, Plane, Train, MessageCircle } from 'lucide-react';

const Services = () => {
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
        <div className="text-center">
          <h2 className="section-title">Our Travel Services</h2>
          <p className="section-subtitle">
            Reliable travel solutions for local journeys, outstation trips,
            airport transfers and memorable tours.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-fade-in">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-actions">
                <a href={`https://wa.me/918247096395?text=${encodeURIComponent(`Hi, I'm interested in your ${service.title} service.`)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{flex: 1}}>
                  Get Quote
                </a>
                <a href={`https://wa.me/918247096395?text=${encodeURIComponent(`Hi, I would like to inquire about ${service.title}.`)}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{padding: '0.75rem'}}>
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
