import React from 'react';
import { Users, Briefcase, Settings, MessageCircle } from 'lucide-react';

const FleetPricing = () => {
  const fleet = [
    {
      name: "Sedan (4 Seater)",
      type: "Dzire / Etios",
      seats: 4,
      bags: 2,
      ac: true,
      price: "13",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "SUV (6-7 Seater)",
      type: "Innova / Ertiga",
      seats: 6,
      bags: 4,
      ac: true,
      price: "18",
      image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Tempo Traveller",
      type: "12-14 Seater",
      seats: 12,
      bags: 8,
      ac: true,
      price: "25",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="vehicles" className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Choose Your Travel Comfort</h2>
          <p className="section-subtitle">
            Well-maintained, clean and comfortable vehicles for all your travel needs.
          </p>
        </div>

        <div className="services-grid">
          {fleet.map((vehicle, index) => (
            <div key={index} className="fleet-card animate-fade-in">
              <div className="fleet-img">
                <img src={vehicle.image} alt={vehicle.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="fleet-badge">{vehicle.type}</div>
              </div>
              <div className="fleet-content">
                <h3 className="fleet-title">{vehicle.name}</h3>
                <div className="fleet-features">
                  <span className="feature"><Users size={16} /> {vehicle.seats}</span>
                  <span className="feature"><Briefcase size={16} /> {vehicle.bags}</span>
                  <span className="feature"><Settings size={16} /> {vehicle.ac ? 'A/C' : 'Non A/C'}</span>
                </div>
                <div className="fleet-price">
                  ₹{vehicle.price} <span className="price-unit">/ km</span>
                </div>
                <a href={`https://wa.me/918247096395?text=${encodeURIComponent(`Hi, I'm looking to book a ${vehicle.name} (${vehicle.type}).`)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{width: '100%'}}>
                  <MessageCircle size={18} /> Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetPricing;
