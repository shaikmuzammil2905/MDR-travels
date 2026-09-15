import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedContent from '../components/RelatedContent';
import FAQSection from '../components/FAQSection';

const serviceData = {
  'local-city-travel': {
    title: 'Local City Travel',
    intro: 'Reliable and comfortable local travel services for your daily commutes, sightseeing, and errands within the city.',
    features: ['Point-to-point transfers', 'Hourly rental packages (e.g., 4hrs/40km, 8hrs/80km)', 'Experienced local drivers', 'Clean & well-maintained vehicles'],
    related: [{ title: 'Airport Transfers', path: '/services/airport-transfer' }, { title: '4-Seater Cars', path: '/vehicles/4-seater-cars' }]
  },
  'airport-transfer': {
    title: 'Airport Transfers',
    intro: 'Punctual pickup and drop-off services to and from the airport. We track your flight to ensure we are always on time.',
    features: ['24/7 Availability', 'Help with luggage', 'No waiting charges for delayed flights', 'Choice of sedans and SUVs'],
    related: [{ title: 'Local City Travel', path: '/services/local-city-travel' }, { title: 'Outstation Travel', path: '/services/outstation-travel' }]
  },
  'outstation-travel': {
    title: 'Outstation Travel',
    intro: 'Comfortable long-distance journeys with experienced drivers who know the highways and outstation routes.',
    features: ['Well-planned routes with rest stops', 'Multi-day packages', 'Safe night driving', 'Spacious SUVs and Tempo Travellers available'],
    related: [{ title: '6-7 Seater SUVs', path: '/vehicles/suvs' }, { title: 'Family Trips', path: '/services/family-trips' }]
  },
  'family-trips': {
    title: 'Family Trips',
    intro: 'Safe and comfortable travel solutions designed specifically for families travelling together.',
    features: ['Child-friendly driving', 'Spacious vehicles for luggage and comfort', 'Flexible stopping for breaks', 'Reliable and courteous drivers'],
    related: [{ title: '6-7 Seater SUVs', path: '/vehicles/suvs' }, { title: 'Pilgrimage Travel', path: '/services/pilgrimage-travel' }]
  },
  'corporate-travel': {
    title: 'Corporate Travel',
    intro: 'Professional transportation services for executives, delegates, and corporate teams.',
    features: ['Premium vehicles', 'Punctual service', 'Monthly billing options', 'Professional chauffeurs'],
    related: [{ title: 'Airport Transfers', path: '/services/airport-transfer' }, { title: 'Local City Travel', path: '/services/local-city-travel' }]
  },
  'pilgrimage-travel': {
    title: 'Pilgrimage Travel',
    intro: 'Dedicated travel packages for devotees visiting prominent temples across Andhra Pradesh.',
    features: ['Drivers experienced with temple routes', 'Assistance with local coordination', 'Comfortable travel for elderly passengers', 'Customizable itineraries'],
    related: [{ title: 'Vizag Local Temple Tour', path: '/packages/vizag-local-temples' }, { title: 'Pancharama Temples', path: '/packages/pancharama-temples' }]
  },
  'group-tours': {
    title: 'Group Tours',
    intro: 'Transport solutions for large families, corporate outings, and educational trips.',
    features: ['12 to 17 seater Tempo Travellers', 'Experienced group coordinators', 'Adequate luggage space', 'A/C comfort for all passengers'],
    related: [{ title: 'Tempo Travellers', path: '/vehicles/tempo-travellers' }, { title: 'Araku & Lambasingi', path: '/packages/araku-lambasingi' }]
  }
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (serviceId && serviceData[serviceId]) {
      setData(serviceData[serviceId]);
    } else {
      navigate('/services');
    }
  }, [serviceId, navigate]);

  if (!data) return null;

  return (
    <div className="page-wrapper">
      <Breadcrumbs />
      
      <section className="about-hero-strip">
        <div className="container text-center">
          <h1 className="about-main-title">{data.title}</h1>
          <p className="about-main-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {data.intro}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="detail-page-layout">
            
            {/* Left Content */}
            <div className="detail-content" data-aos="fade-up">
              
              {/* Huge Related Content and Pictorial Representation */}
              <div style={{ marginBottom: '2.5rem' }}>
                <img 
                  src="/images/vizag-tour.jpg" 
                  alt={data.title} 
                  style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} 
                  data-aos="zoom-in"
                />
                <h2 style={{ fontSize: '2rem', color: 'var(--dark-blue)', marginBottom: '1rem' }}>Experience the Best {data.title}</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '1rem' }}>
                  At MDR Travels, we understand that every journey is unique. Our <strong>{data.title}</strong> service is meticulously designed to provide you with the utmost comfort, safety, and convenience. Whether you are traveling for business, leisure, or a special occasion, our modern fleet and professional chauffeurs ensure a seamless experience from start to finish.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  We pride ourselves on our transparency, punctuality, and customer-centric approach. With 24/7 support and well-maintained vehicles, your satisfaction is our top priority. Let us take the wheel while you sit back, relax, and enjoy the ride.
                </p>
              </div>

              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '1.8rem' }} data-aos="fade-right">What's Included?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }} data-aos="fade-up" data-aos-delay={idx * 100}>
                    <CheckCircle2 size={22} className="text-primary-blue" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '1.05rem', color: '#475569' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', textAlign: 'center', border: '1px solid #e2e8f0', height: 'fit-content', position: 'sticky', top: '100px' }} data-aos="fade-left">
              <div style={{ width: '60px', height: '60px', background: '#e0e7ff', color: 'var(--primary-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <PhoneCall size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--dark-blue)', marginBottom: '1rem' }}>Book This Service</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Get in touch with us to book your travel or receive a customized quote based on your exact requirements.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/contact')}>
                  Enquire Now
                </button>
                <a href="https://wa.me/918247096395" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FAQSection />
      <RelatedContent links={data.related} />
    </div>
  );
};

export default ServiceDetailPage;
