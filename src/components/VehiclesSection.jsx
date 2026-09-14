import React, { useState } from 'react';
import { Users, Briefcase, Settings, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VehiclesSection = ({ isHomePage }) => {
  const navigate = useNavigate();

  const cars = [
    {
      name: "Maruti Suzuki Dzire",
      type: "4-Seater Sedan",
      seats: 4,
      bags: 2,
      desc: "Comfortable and efficient, perfect for city travel and airport transfers.",
      ideal: "Airport transfers, couples, small families and city travel.",
      image: "/src/assets/car_dzire.png"
    },
    {
      name: "Hyundai Aura",
      type: "4-Seater Sedan",
      seats: 4,
      bags: 2,
      desc: "Smooth ride with premium interiors for a relaxing journey.",
      ideal: "Business travel and comfortable city errands.",
      image: "/src/assets/car_aura.png"
    },
    {
      name: "Tata Tigor",
      type: "4-Seater Sedan",
      seats: 4,
      bags: 2,
      desc: "Safe and sturdy compact sedan for safe local travel.",
      ideal: "Local sightseeing and short trips.",
      image: "/src/assets/car_tigor.png"
    },
    {
      name: "Hyundai Grand i10 Nios",
      type: "4-Seater Hatchback",
      seats: 4,
      bags: 1,
      desc: "Compact and agile, great for navigating busy city streets.",
      ideal: "Quick city commutes and solo travelers.",
      image: "/src/assets/car_i10.png"
    }
  ];

  const suvs = [
    {
      name: "Toyota Innova Crysta",
      type: "6/7-Seater Premium SUV",
      seats: 7,
      bags: 4,
      desc: "The gold standard for long-distance comfort and reliability.",
      ideal: "Long-distance trips, family tours and outstation travel.",
      image: "/src/assets/car_innova.png"
    },
    {
      name: "Maruti Suzuki Ertiga",
      type: "6-Seater MUV",
      seats: 6,
      bags: 3,
      desc: "Spacious and economical for medium-sized family trips.",
      ideal: "Weekend getaways and family outings.",
      image: "/src/assets/car_ertiga.png"
    },
    {
      name: "Kia Carens",
      type: "6/7-Seater MUV",
      seats: 7,
      bags: 3,
      desc: "Modern features with comfortable third-row seating.",
      ideal: "Group trips and comfortable outstation journeys.",
      image: "/src/assets/car_carens.png"
    },
    {
      name: "Mahindra Scorpio",
      type: "7-Seater SUV",
      seats: 7,
      bags: 3,
      desc: "Rugged and capable for exploring diverse terrains.",
      ideal: "Hill station trips and robust travel.",
      image: "/src/assets/car_scorpio.png"
    }
  ];

  const tempos = [
    {
      name: "Force Traveller 12-Seater",
      type: "Group Traveller",
      seats: 12,
      bags: 8,
      desc: "Spacious group travel with push-back seats and AC.",
      ideal: "Corporate outings, extended families, and group tours.",
      image: "/src/assets/car_force12.png",
      note: "Available on request"
    },
    {
      name: "Premium Force Urbania",
      type: "Luxury Group Traveller",
      seats: 17,
      bags: 10,
      desc: "Next-generation luxury travel for larger groups.",
      ideal: "Premium group tours and long-distance travel.",
      image: "/src/assets/car_urbania.png",
      note: "Vehicle options subject to availability"
    }
  ];

  const renderVehicleCard = (vehicle, idx) => (
    <div key={idx} className="fleet-card" style={{ transitionDelay: `${idx * 50}ms` }}>
      <div className="fleet-img" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img src={vehicle.image} alt={vehicle.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="fleet-badge">{vehicle.type}</div>
      </div>
      <div className="fleet-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <h3 className="fleet-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--dark-blue)' }}>{vehicle.name}</h3>
        <div className="fleet-features" style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
          <span className="feature"><Users size={16} /> {vehicle.seats}</span>
          <span className="feature"><Briefcase size={16} /> {vehicle.bags}</span>
          <span className="feature"><Settings size={16} /> A/C</span>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1rem', flexGrow: 1 }}>
          {vehicle.desc}
        </p>
        <div style={{ marginBottom: '1.5rem', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
          <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ideal for:</strong>
          <span style={{ fontSize: '0.9rem', color: '#475569' }}>{vehicle.ideal}</span>
        </div>
        {vehicle.note && (
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic', marginBottom: '1rem', textAlign: 'center' }}>*{vehicle.note}</p>
        )}
        <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/contact')}>
          Enquire Now
        </button>
      </div>
    </div>
  );

  return (
    <div className="vehicles-page-wrapper">
      {/* Hero */}
      {!isHomePage && (
        <section className="about-hero-strip">
          <div className="container text-center">
            <h1 className="about-main-title">Our Vehicle Fleet</h1>
            <p className="about-main-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Choose a vehicle based on your group size, destination and comfort requirements. From compact sedans to spacious group travellers, we have the right vehicle for your journey.
            </p>
          </div>
        </section>
      )}

      {/* 4-Seater Cars */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>4-Seater Cars</h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem' }}>Popular vehicle options for quick commutes, couples, and small families.</p>
          </div>
          <div className="services-grid">
            {cars.map(renderVehicleCard)}
          </div>
        </div>
      </section>

      {/* SUVs */}
      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>SUV / 6–7 Seater Vehicles</h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem' }}>Spacious and comfortable options subject to availability. Perfect for long-distance trips.</p>
          </div>
          <div className="services-grid">
            {suvs.map(renderVehicleCard)}
          </div>
        </div>
      </section>

      {/* Tempo Travellers */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Tempo Travellers for Group Travel</h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem' }}>Premium group travellers available on request for large families and corporate outings.</p>
          </div>
          <div className="services-grid">
            {tempos.map(renderVehicleCard)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehiclesSection;
