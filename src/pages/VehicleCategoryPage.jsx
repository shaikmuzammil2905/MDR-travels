import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Users, Briefcase, Settings, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedContent from '../components/RelatedContent';
import FAQSection from '../components/FAQSection';

const vehicleData = {
  '4-seater-cars': {
    title: '4-Seater Cars',
    intro: 'Ideal for city travel, airport transfers, couples, and small families. Enjoy a smooth, private ride in our well-maintained sedans and hatchbacks.',
    advantages: ['Perfect for up to 4 passengers', 'Great fuel efficiency for local trips', 'Easy to navigate in city traffic', 'Comfortable AC interiors'],
    vehicles: [
      { name: "Maruti Suzuki Dzire", type: "4-Seater Sedan", seats: 4, bags: 2, desc: "Comfortable and efficient, perfect for city travel and airport transfers.", ideal: "Airport transfers, couples, small families.", image: "/images/car_dzire.png" },
      { name: "Hyundai Aura", type: "4-Seater Sedan", seats: 4, bags: 2, desc: "Smooth ride with premium interiors for a relaxing journey.", ideal: "Business travel and comfortable city errands.", image: "/images/car_aura.png" },
      { name: "Tata Tigor", type: "4-Seater Sedan", seats: 4, bags: 2, desc: "Safe and sturdy compact sedan for safe local travel.", ideal: "Local sightseeing and short trips.", image: "/images/car_tigor.png" },
      { name: "Hyundai Grand i10 Nios", type: "4-Seater Hatchback", seats: 4, bags: 1, desc: "Compact and agile, great for navigating busy city streets.", ideal: "Quick city commutes and solo travelers.", image: "/images/car_i10.png" }
    ],
    related: [
      { title: '6-7 Seater SUVs', path: '/vehicles/suvs' },
      { point: 'Visakhapatnam City Tour', path: '/packages/visakhapatnam-city-tour', title: 'Visakhapatnam City Tour' },
      { title: 'Airport Transfers', path: '/services/airport-transfer' }
    ]
  },
  'suvs': {
    title: '6-7 Seater SUVs & Family Vehicles',
    intro: 'Spacious and comfortable options subject to availability. Perfect for long-distance outstation trips and medium-sized groups.',
    advantages: ['Extra legroom and luggage space', 'Higher ground clearance for diverse terrains', 'Ideal for long-distance comfort', 'Premium A/C and seating'],
    vehicles: [
      { name: "Toyota Innova Crysta", type: "6/7-Seater Premium SUV", seats: 7, bags: 4, desc: "The gold standard for long-distance comfort and reliability.", ideal: "Long-distance trips, family tours.", image: "/images/car_innova.png" },
      { name: "Maruti Suzuki Ertiga", type: "6-Seater MUV", seats: 6, bags: 3, desc: "Spacious and economical for medium-sized family trips.", ideal: "Weekend getaways and family outings.", image: "/images/car_ertiga.png" },
      { name: "Kia Carens", type: "6/7-Seater MUV", seats: 7, bags: 3, desc: "Modern features with comfortable third-row seating.", ideal: "Group trips and comfortable outstation journeys.", image: "/images/car_carens.png" },
      { name: "Mahindra Scorpio", type: "7-Seater SUV", seats: 7, bags: 3, desc: "Rugged and capable for exploring diverse terrains.", ideal: "Hill station trips and robust travel.", image: "/images/car_scorpio.png" }
    ],
    related: [
      { title: 'Tempo Travellers', path: '/vehicles/tempo-travellers' },
      { title: 'Araku Valley Tour', path: '/packages/araku-valley-tour' },
      { title: 'Outstation Travel', path: '/services/outstation-travel' }
    ]
  },
  'tempo-travellers': {
    title: 'Tempo Travellers for Group Travel',
    intro: 'Premium group travellers available on request for large families, corporate outings, and extended group tours.',
    advantages: ['Spacious push-back seating', 'Ample luggage space for long trips', 'High roof for easy movement', 'Dedicated A/C vents for all rows'],
    vehicles: [
      { name: "Force Traveller 12-Seater", type: "Group Traveller", seats: 12, bags: 8, desc: "Spacious group travel with push-back seats and AC.", ideal: "Corporate outings, extended families.", image: "/images/car_force12.png", note: "Available on request" },
      { name: "Premium Force Urbania", type: "Luxury Group Traveller", seats: 17, bags: 10, desc: "Next-generation luxury travel for larger groups.", ideal: "Premium group tours and long-distance travel.", image: "/images/car_urbania.png", note: "Vehicle options subject to availability" }
    ],
    related: [
      { title: '6-7 Seater SUVs', path: '/vehicles/suvs' },
      { title: 'Group Tours', path: '/services/group-tours' },
      { title: 'Multi-Destination Tour', path: '/packages/andhra-pradesh-multi-destination-tour' }
    ]
  }
};

const VehicleCategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (vehicleData[categoryId]) {
      setData(vehicleData[categoryId]);
    } else {
      navigate('/vehicles');
    }
  }, [categoryId, navigate]);

  if (!data) return null;

  return (
    <div className="page-wrapper">
      <Breadcrumbs />
      
      {/* Hero Banner */}
      <section className="about-hero-strip">
        <div className="container text-center">
          <h1 className="about-main-title">{data.title}</h1>
          <p className="about-main-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {data.intro}
          </p>
        </div>
      </section>

      {/* Intro & Advantages */}
      <section className="section">
        <div className="container reveal">
          <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Why Choose Our {data.title}?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {data.advantages.map((adv, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={22} className="text-primary-blue" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1.05rem', color: '#475569' }}>{adv}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Available Models</h2>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {data.vehicles.map((vehicle, idx) => (
              <div key={idx} className="fleet-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="fleet-img" style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={vehicle.image} alt={vehicle.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="fleet-badge">{vehicle.type}</div>
                </div>
                <div className="fleet-content" style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="fleet-title" style={{ fontSize: '1.35rem', color: 'var(--dark-blue)', marginBottom: '0.75rem' }}>{vehicle.name}</h3>
                  <div className="fleet-features" style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <span className="feature"><Users size={16} /> {vehicle.seats}</span>
                    <span className="feature"><Briefcase size={16} /> {vehicle.bags}</span>
                    <span className="feature"><Settings size={16} /> A/C</span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1rem', flexGrow: 1 }}>{vehicle.desc}</p>
                  <div style={{ marginBottom: '1.5rem', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--primary-blue)', textTransform: 'uppercase' }}>Ideal for:</strong>
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
            ))}
          </div>
        </div>
      </section>

      {/* Shared CTA */}
      <section className="section" style={{ background: 'var(--dark-blue)', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>Ready to Book Your Journey?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Contact our team via WhatsApp for instant quotes, availability checks, and booking confirmations.
          </p>
          <a href="https://wa.me/918247096395" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <FAQSection />
      <RelatedContent links={data.related} />
    </div>
  );
};

export default VehicleCategoryPage;
