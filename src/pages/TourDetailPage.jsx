import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, MapPin, CheckCircle2, Car, HeartHandshake } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedContent from '../components/RelatedContent';
import FAQSection from '../components/FAQSection';

const tourData = {
  'visakhapatnam-city-tour': {
    title: 'Visakhapatnam City Tour',
    image: '/images/pkg_vizag.png',
    intro: "Explore Visakhapatnam's popular attractions and scenic locations in a comfortable private vehicle with a dedicated local driver.",
    duration: 'Custom duration available (Usually 1-2 Days)',
    bestFor: 'Families, Couples, and First-time Visitors',
    vehicleOptions: 'Sedan / SUV / Tempo Traveller',
    highlights: ['RK Beach', 'Kailasagiri', 'Rushikonda Beach', 'Submarine Museum', 'Simhachalam Temple'],
    plan: [
      'Pickup from your hotel or station.',
      'Visit local beaches and museums along the coast.',
      'Explore Kailasagiri for panoramic views.',
      'Comfortable A/C travel between all locations.',
      'Drop-off at your preferred location.'
    ],
    related: [
      { title: 'Araku Valley Tour', path: '/packages/araku-valley-tour' },
      { title: '4-Seater Cars', path: '/vehicles/4-seater-cars' },
      { title: 'Local City Travel', path: '/services/local-city-travel' }
    ]
  },
  'araku-valley-tour': {
    title: 'Araku Valley Tour',
    image: '/images/pkg_araku.png',
    intro: "A scenic journey through the Eastern Ghats featuring mountain landscapes, valleys, viewpoints, and local attractions.",
    duration: '1 - 2 Days (Customizable)',
    bestFor: 'Nature Lovers and Weekend Getaways',
    vehicleOptions: 'SUV / Sedan recommended',
    highlights: ['Borra Caves', 'Coffee Plantations', 'Tribal Museum', 'Galikonda Viewpoint', 'Padmapuram Gardens'],
    plan: [
      'Early morning pickup from Visakhapatnam.',
      'Scenic drive through the ghat roads with viewpoints.',
      'Visit Borra Caves and local coffee plantations.',
      'Explore Araku Tribal Museum and gardens.',
      'Safe return journey with experienced hill-driving chauffeur.'
    ],
    related: [
      { title: 'Visakhapatnam City Tour', path: '/packages/visakhapatnam-city-tour' },
      { title: '6-7 Seater SUVs', path: '/vehicles/suvs' },
      { title: 'Multi-Destination Tour', path: '/packages/andhra-pradesh-multi-destination-tour' }
    ]
  },
  'tirupati-temple-tour': {
    title: 'Tirupati Temple Tour',
    image: '/images/pkg_tirupati.png',
    intro: "A pilgrimage-focused travel option for families and devotees travelling to Tirupati and surrounding temple destinations.",
    duration: 'Custom duration available',
    bestFor: 'Devotees and Family Pilgrimages',
    vehicleOptions: 'Innova Crysta / Tempo Traveller',
    highlights: ['Sri Venkateswara Temple', 'Padmavathi Temple', 'Kapila Theertham', 'Srikalahasti', 'Safe outstation travel'],
    plan: [
      'Comfortable pickup and drive to Tirupati.',
      'Local travel to Padmavathi Temple and Kapila Theertham.',
      'Coordination for main temple visits.',
      'Optional extended trip to Srikalahasti.',
      'Dedicated driver for the entire pilgrimage.'
    ],
    related: [
      { title: 'Srisailam Tour', path: '/packages/srisailam-tour' },
      { title: 'Tempo Travellers', path: '/vehicles/tempo-travellers' },
      { title: 'Pilgrimage Travel', path: '/services/pilgrimage-travel' }
    ]
  },
  'srisailam-tour': {
    title: 'Srisailam Spiritual Journey',
    image: '/images/pkg_srisailam.png',
    intro: "A spiritual and scenic journey combining temple travel with beautiful landscapes and comfortable road travel.",
    duration: 'Custom duration available',
    bestFor: 'Pilgrimage and Nature trips',
    vehicleOptions: 'Premium SUV / Sedan',
    highlights: ['Mallikarjuna Swamy Temple', 'Pathala Ganga', 'Srisailam Dam', 'Sikharam', 'Forest scenic routes'],
    plan: [
      'Scenic and safe drive through the Nallamala forest.',
      'Visit Mallikarjuna Swamy Temple.',
      'Explore Srisailam Dam and Pathala Ganga.',
      'Comfortable, air-conditioned return journey.'
    ],
    related: [
      { title: 'Tirupati Temple Tour', path: '/packages/tirupati-temple-tour' },
      { title: 'Outstation Travel', path: '/services/outstation-travel' },
      { title: '6-7 Seater SUVs', path: '/vehicles/suvs' }
    ]
  },
  'vijayawada-amaravati-tour': {
    title: 'Vijayawada & Amaravati Tour',
    image: '/images/pkg_vijayawada.png',
    intro: "Explore important cultural, spiritual and heritage destinations around Vijayawada and Amaravati.",
    duration: 'Custom duration available',
    bestFor: 'Heritage and Cultural Exploration',
    vehicleOptions: 'Sedan / SUV',
    highlights: ['Kanakadurga Temple', 'Bhavani Island', 'Undavalli Caves', 'Amaravati Stupa', 'Prakasam Barrage'],
    plan: [
      'City tour including Kanakadurga Temple.',
      'Visit Undavalli Caves and Prakasam Barrage.',
      'Heritage trip to Amaravati Stupa.',
      'Flexible itinerary based on your preferences.'
    ],
    related: [
      { title: 'Visakhapatnam City Tour', path: '/packages/visakhapatnam-city-tour' },
      { title: 'Multi-Destination Tour', path: '/packages/andhra-pradesh-multi-destination-tour' },
      { title: '4-Seater Cars', path: '/vehicles/4-seater-cars' }
    ]
  },
  'andhra-pradesh-multi-destination-tour': {
    title: 'Andhra Pradesh Multi-Destination Tour',
    image: '/images/pkg_multi.png',
    intro: "A flexible multi-day journey connecting important cities, temples and tourist destinations across Andhra Pradesh.",
    duration: 'Custom multi-day itinerary',
    bestFor: 'Extended Holidays and Complete Explorations',
    vehicleOptions: 'Premium SUV / Tempo Traveller',
    highlights: ['Customizable route', 'Flexible schedule', 'Multiple cities', 'Dedicated driver', 'Comfortable long-distance vehicle'],
    plan: [
      'Work with our team to design your perfect AP itinerary.',
      'Dedicated professional driver for the entire duration.',
      'Travel safely between major hubs (Vizag, Rajahmundry, Vijayawada, etc.).',
      'Contact us for a personalized travel plan.'
    ],
    related: [
      { title: 'Group Tours', path: '/services/group-tours' },
      { title: 'Tempo Travellers', path: '/vehicles/tempo-travellers' },
      { title: 'Araku Valley Tour', path: '/packages/araku-valley-tour' }
    ]
  }
};

const TourDetailPage = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (tourId && tourData[tourId]) {
      setData(tourData[tourId]);
    } else {
      navigate('/packages');
    }
  }, [tourId, navigate]);

  if (!data) return null;

  return (
    <div className="page-wrapper">
      <Breadcrumbs />
      
      {/* Hero Banner with Background Image */}
      <section className="tour-hero" style={{ position: 'relative', minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 }}>
          <img src={data.image} alt={data.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,25,65,0.8), rgba(0,25,65,0.4))', zIndex: -1 }}></div>
        <div className="container text-center" style={{ color: '#fff', zIndex: 1, padding: '4rem 1rem' }}>
          <h1 className="about-main-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{data.title}</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto', textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>{data.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="detail-page-layout">
            
            {/* Left Content */}
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Tour Highlights</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                {data.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                    <CheckCircle2 size={20} className="text-primary-blue" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '1rem', color: '#475569', fontWeight: 500 }}>{h}</span>
                  </div>
                ))}
              </div>

              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Suggested Travel Plan</h2>
              <div style={{ background: '#fff', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', padding: '2rem', border: '1px solid #e2e8f0', marginBottom: '3rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {data.plan.map((step, i) => (
                    <li key={i} style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e0e7ff', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                        {i + 1}
                      </div>
                      <p style={{ margin: 0, paddingTop: '5px', color: '#334155', fontSize: '1.05rem', lineHeight: '1.5' }}>{step}</p>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#64748b', fontSize: '0.9rem' }}>
                  * Note: Exact pricing, hotel inclusions, and final durations are completely customizable based on your requirements. Contact us for a personalized travel plan.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', padding: '2rem', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-blue)', marginBottom: '1.5rem', fontWeight: 700 }}>Tour Information</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ padding: '0.75rem', background: '#f1f5f9', borderRadius: '50%', color: 'var(--primary-blue)' }}><Clock size={20} /></div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Duration</span>
                    <strong style={{ color: '#0f172a', fontSize: '1rem' }}>{data.duration}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ padding: '0.75rem', background: '#f1f5f9', borderRadius: '50%', color: 'var(--primary-blue)' }}><MapPin size={20} /></div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Best For</span>
                    <strong style={{ color: '#0f172a', fontSize: '1rem' }}>{data.bestFor}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ padding: '0.75rem', background: '#f1f5f9', borderRadius: '50%', color: 'var(--primary-blue)' }}><Car size={20} /></div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Vehicle Options</span>
                    <strong style={{ color: '#0f172a', fontSize: '1rem' }}>{data.vehicleOptions}</strong>
                  </div>
                </div>

                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', marginBottom: '1rem' }} onClick={() => navigate('/contact')}>
                  Request a Quote
                </button>
                <a href="https://wa.me/918247096395" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                  WhatsApp Us
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

export default TourDetailPage;
