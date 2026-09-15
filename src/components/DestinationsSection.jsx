import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DestinationsSection = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Visakhapatnam",
      desc: "The City of Destiny, famous for its beaches and scenic coastal roads.",
      image: "/images/tour_vizag_beach.jpg"
    },
    {
      name: "Araku Valley",
      desc: "A breathtaking hill station known for its coffee plantations and misty mornings.",
      image: "/images/tour_araku_valley.jpg"
    },
    {
      name: "Lambasingi",
      desc: "The 'Kashmir of Andhra Pradesh', famous for its cool climate and apple orchards.",
      image: "/images/araku-valley.jpg"
    },
    {
      name: "Srikakulam",
      desc: "A spiritual destination featuring the historic Arasavilli Sun God Temple.",
      image: "/images/pkg_multi.png"
    },
    {
      name: "Rajahmundry",
      desc: "The cultural capital of Andhra Pradesh, famous for its Godavari river views.",
      image: "/images/pkg_multi.png"
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--light-bg)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">
            Travel across Andhra Pradesh with MDR Travels. We provide comfortable transportation to all major tourist and pilgrimage destinations.
          </p>
        </div>

        <div className="destinations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
          {destinations.map((dest, idx) => (
            <div key={idx} className="destination-card" style={{ transitionDelay: `${idx * 50}ms`, borderRadius: '16px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', width: '100%' }}>
                <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--dark-blue)', margin: '0 0 0.5rem 0' }}>{dest.name}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.5rem', flexGrow: 1 }}>{dest.desc}</p>
                <button 
                  onClick={() => navigate('/contact')} 
                  style={{ background: 'none', border: 'none', color: 'var(--primary-blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 0, cursor: 'pointer', fontSize: '1rem' }}
                >
                  Explore Destination <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
