import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, MapPin, CheckCircle2, Car, HeartHandshake } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedContent from '../components/RelatedContent';
import FAQSection from '../components/FAQSection';

const tourData = {
  'vizag-one-day': {
    title: 'Vizag One Day Tour Package',
    image: '/images/pkg_vizag.png',
    intro: "Explore Visakhapatnam's popular attractions in a comfortable single day tour.",
    duration: '1 Day',
    bestFor: 'Families, Couples, and First-time Visitors',
    vehicleOptions: 'Sedan / SUV / Tempo Traveller',
    highlights: ['Simhachalam Temple', 'Kailasagiri', 'Rushikonda Beach', 'Submarine Museum', 'Rama Krishna Beach'],
    plan: [
      'Simhachalam Temple', 'Kailasagiri', 'Indira Gandhi Zoological Park', 'TTD Venkateswara Swamy Temple',
      'Rushikonda Beach', 'Tenneti Park', 'Submarine Museum', 'Aircraft Museum', 'Helicopter Museum',
      'Rama Krishna Beach', 'Kali Mata Temple'
    ],
    related: [
      { title: 'Vizag 2 Days Tour', path: '/packages/vizag-two-days' },
      { title: 'Vizag Local Temple Tour', path: '/packages/vizag-local-temples' }
    ]
  },
  'vizag-two-days': {
    title: 'Vizag 2 Days Tour Package',
    image: '/images/pkg_vizag.png',
    intro: "A comprehensive two-day exploration of Visakhapatnam's beaches, museums, and temples.",
    duration: '2 Days',
    bestFor: 'Leisure Travelers and Families',
    vehicleOptions: 'Sedan / SUV / Tempo Traveller',
    highlights: ['Bheemili Beach', 'Thotlakonda', 'Kailasagiri', 'Yarada Beach', 'Simhachalam Temple'],
    plan: [
      'Day 1: Bheemili Beach, Thotlakonda, Ramanaidu Studios, Kailasagiri, Indira Gandhi Zoological Park, TTD Temple, Rushikonda Beach, Tenneti Park, Museums (Submarine, Aircraft, Helicopter), RK Beach, Kali Mata Temple.',
      'Day 2: Simhachalam Temple, Lighthouse, Yarada Beach, Fishing Harbour, Rose Hill Church.'
    ],
    related: [
      { title: 'Vizag One Day Tour', path: '/packages/vizag-one-day' },
      { title: 'Araku Valley Tour', path: '/packages/araku-two-days' }
    ]
  },
  'araku-one-day': {
    title: 'Araku Valley One Day Tour Package',
    image: '/images/pkg_araku.png',
    intro: "A scenic journey through the Eastern Ghats featuring mountain landscapes and viewpoints in a single day.",
    duration: '1 Day',
    bestFor: 'Nature Lovers',
    vehicleOptions: 'SUV / Sedan recommended',
    highlights: ['Borra Caves', 'Coffee Plantations', 'Tribal Museum', 'Katiki Waterfalls', 'Damuku View Point'],
    plan: [
      'Damuku View Point', 'Borra Caves', 'Katiki Waterfalls', 'Galikonda View Point', 'Coffee Plantation',
      'Coffee Museum', 'Tribal Museum', 'Chocolate Factory', 'Botanical Garden'
    ],
    related: [
      { title: 'Araku 2 Days Tour', path: '/packages/araku-two-days' },
      { title: 'Araku & Lambasingi', path: '/packages/araku-lambasingi' }
    ]
  },
  'araku-two-days': {
    title: 'Araku Valley 2 Days Tour Package',
    image: '/images/pkg_araku.png',
    intro: "An extended stay in Araku Valley to fully experience its natural beauty, waterfalls, and culture.",
    duration: '2 Days',
    bestFor: 'Weekend Getaways',
    vehicleOptions: 'SUV / Sedan recommended',
    highlights: ['Borra Caves', 'Chaparai Waterfalls', 'Araku Pinary', 'Madagada View Point', 'Coffee Museum'],
    plan: [
      'Damuku View Point', 'Borra Caves', 'Katiki Waterfalls', 'Galikonda View Point', 'Coffee Plantation',
      'Coffee Museum', 'Tribal Museum', 'Chocolate Factory', 'Botanical Garden', 'Chaparai Waterfalls',
      'Araku Pinary', 'Madagada View Point'
    ],
    related: [
      { title: 'Araku One Day Tour', path: '/packages/araku-one-day' },
      { title: 'Araku & Lambasingi', path: '/packages/araku-lambasingi' }
    ]
  },
  'araku-lambasingi': {
    title: 'Araku & Lambasingi Tour Package',
    image: '/images/pkg_araku.png',
    intro: "Experience the cool mist of Lambasingi combined with the lush beauty of Araku Valley.",
    duration: 'Custom duration',
    bestFor: 'Nature Enthusiasts and Couples',
    vehicleOptions: 'SUV recommended',
    highlights: ['Lambasingi View Point', 'Tajangi Reservoir', 'Kothapalli Waterfalls', 'Borra Caves', 'Vanajangi View Point'],
    plan: [
      'Damuku View Point, Borra Caves, Katiki Waterfalls', 'Galikonda View Point, Coffee Plantation, Coffee Museum',
      'Tribal Museum, Chocolate Factory, Botanical Garden', 'Chaparai Waterfalls, Araku Pinary, Madagada View Point',
      'Lambasingi View Point, Tajangi Reservoir, Lambasingi Pinary', 'Kothapalli Waterfalls, Vanajangi View Point'
    ],
    related: [
      { title: 'Araku 2 Days Tour', path: '/packages/araku-two-days' },
      { title: 'Vizag 2 Days Tour', path: '/packages/vizag-two-days' }
    ]
  },
  'vizag-local-temples': {
    title: 'Vizag Local Temple Tour',
    image: '/images/temple_bg.png',
    intro: "A spiritual tour covering the most prominent temples in Visakhapatnam.",
    duration: '1 Day',
    bestFor: 'Devotees and Pilgrims',
    vehicleOptions: 'Sedan / SUV',
    highlights: ['Simhachalam Temple', 'Kanaka Maha Lakshmi Temple', 'TTD Venkateswara Swamy Temple', 'Sampath Vinayaka Temple'],
    plan: [
      'Simhachalam Temple',
      'Kanaka Maha Lakshmi Temple',
      'TTD Venkateswara Swamy Temple',
      'Sampath Vinayaka Temple'
    ],
    related: [
      { title: 'Arasavilli – Sri Kurmam', path: '/packages/arasavilli-sri-kurmam-srimukhalingam' },
      { title: 'Vizag One Day Tour', path: '/packages/vizag-one-day' }
    ]
  },
  'arasavilli-sri-kurmam-srimukhalingam': {
    title: 'Arasavilli – Sri Kurmam – Srimukhalingam Temple Tour',
    image: '/images/temple_bg.png',
    intro: "Visit the historic Sun God temple and other ancient temples in the Srikakulam region.",
    duration: 'Custom duration',
    bestFor: 'Heritage and Spiritual Travelers',
    vehicleOptions: 'Sedan / SUV',
    highlights: ['Arasavilli Temple', 'Sri Kurmam Temple', 'Srimukhalingam Temple', 'Ramanarayanam'],
    plan: [
      'Arasavilli Temple',
      'Sri Kurmam Temple',
      'Srimukhalingam Temple',
      'Ramanarayanam (Ramabanam)'
    ],
    related: [
      { title: 'Vizag Local Temple Tour', path: '/packages/vizag-local-temples' },
      { title: 'Pancharama Temples Tour', path: '/packages/pancharama-temples' }
    ]
  },
  'anakapalli-annavaram-pitapuram-samarlakota': {
    title: 'Anakapalli – Annavaram – Pitapuram – Samarlakota Temple Tour',
    image: '/images/temple_bg.png',
    intro: "A comprehensive pilgrimage covering key temples across the coastal region.",
    duration: 'Custom duration',
    bestFor: 'Pilgrimage',
    vehicleOptions: 'Sedan / SUV / Tempo Traveller',
    highlights: ['Anakapalli Temple', 'Annavaram Temple', 'Kukkuteswara Swamy Temple', 'Bhimeswara Swamy Temple'],
    plan: [
      'Anakapalli Temple',
      'Annavaram Temple',
      'Pitapuram – Kukkuteswara Swamy Temple',
      'Samarlakota – Bhimeswara Swamy Temple'
    ],
    related: [
      { title: 'Pancharama Temples Tour', path: '/packages/pancharama-temples' },
      { title: 'Arasavilli – Sri Kurmam', path: '/packages/arasavilli-sri-kurmam-srimukhalingam' }
    ]
  },
  'vadapalli-temple': {
    title: 'Vadapalli Venkateswara Swamy Temple Tour',
    image: '/images/temple_bg.png',
    intro: "Dedicated spiritual visit to the renowned Vadapalli Venkateswara Swamy Temple.",
    duration: '1 Day',
    bestFor: 'Devotees',
    vehicleOptions: 'Sedan / SUV',
    highlights: ['Vadapalli Venkateswara Swamy Temple'],
    plan: [
      'Pickup and comfortable drive to Vadapalli.',
      'Darshan at Vadapalli Venkateswara Swamy Temple.',
      'Return journey.'
    ],
    related: [
      { title: 'Anakapalli – Annavaram', path: '/packages/anakapalli-annavaram-pitapuram-samarlakota' },
      { title: 'Pancharama Temples Tour', path: '/packages/pancharama-temples' }
    ]
  },
  'pancharama-temples': {
    title: 'Pancharama Temples Tour Package',
    image: '/images/temple_bg.png',
    intro: "A sacred journey visiting the five ancient Hindu temples dedicated to Lord Shiva in Andhra Pradesh.",
    duration: 'Custom duration',
    bestFor: 'Spiritual Travelers',
    vehicleOptions: 'Sedan / SUV / Tempo Traveller',
    highlights: ['Amareswara Swamy', 'Someswara Swamy', 'Ksheera Rama Lingeswara Swamy', 'Bhimeswara Swamy', 'Kumara Rama Bhimeswara Swamy'],
    plan: [
      'Amareswara Lingeswara Swamy',
      'Someswara Swamy',
      'Ksheera Rama Lingeswara Swamy',
      'Bhimeswara Swamy',
      'Kumara Rama Bhimeswara Swamy'
    ],
    related: [
      { title: 'Vadapalli Temple', path: '/packages/vadapalli-temple' },
      { title: 'Arasavilli – Sri Kurmam', path: '/packages/arasavilli-sri-kurmam-srimukhalingam' }
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
