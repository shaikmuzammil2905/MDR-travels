import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Briefcase } from 'lucide-react';

const VehicleCategories = ({ isHomePage }) => {
  const navigate = useNavigate();

  const categories = [
    {
      id: '4-seater-cars',
      title: "4-Seater Cars",
      image: "/src/assets/car_dzire.png",
      desc: "Comfortable and efficient, perfect for city travel, airport transfers, and couples.",
      seats: "4",
      bags: "2-3"
    },
    {
      id: 'suvs',
      title: "6–7 Seater SUVs",
      image: "/src/assets/car_innova.png",
      desc: "Spacious and comfortable options. Perfect for long-distance outstation trips and families.",
      seats: "6-7",
      bags: "3-4"
    },
    {
      id: 'tempo-travellers',
      title: "Tempo Travellers",
      image: "/src/assets/car_force12.png",
      desc: "Premium group travellers for large families, corporate outings, and extended tours.",
      seats: "12-17",
      bags: "8-10"
    }
  ];

  return (
    <div className="vehicles-page-wrapper">
      {!isHomePage && (
        <section className="about-hero-strip">
          <div className="container text-center">
            <h1 className="about-main-title">Our Vehicle Fleet</h1>
            <p className="about-main-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Choose a vehicle category based on your group size, destination and comfort requirements.
            </p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          {isHomePage && (
            <div className="reveal" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
              <h2 className="section-title">Our Vehicle Categories</h2>
              <p style={{ color: '#64748b', fontSize: '1.05rem' }}>Select a category to explore our available vehicles.</p>
            </div>
          )}
          
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {categories.map((cat, idx) => (
              <div key={idx} className="fleet-card reveal" style={{ transitionDelay: `${idx * 100}ms`, display: 'flex', flexDirection: 'column' }}>
                <div className="fleet-img" style={{ height: '220px', overflow: 'hidden' }}>
                  <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="fleet-content" style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="fleet-title" style={{ fontSize: '1.4rem', color: 'var(--dark-blue)', marginBottom: '0.75rem' }}>{cat.title}</h3>
                  <div className="fleet-features" style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <span className="feature"><Users size={16} /> Up to {cat.seats}</span>
                    <span className="feature"><Briefcase size={16} /> {cat.bags} Bags</span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                    {cat.desc}
                  </p>
                  <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate(`/vehicles/${cat.id}`)}>
                    Explore Category →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehicleCategories;
