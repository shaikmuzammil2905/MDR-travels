import React, { useState } from 'react';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EnquiryModal from './EnquiryModal';

const TourPackages = ({ isHomePage }) => {
  const navigate = useNavigate();
  const [selectedTour, setSelectedTour] = useState(null);

  const packages = [
    {
      id: "vizag-one-day",
      title: "Vizag One Day Tour Package",
      image: "/images/vizag_pkg_111.png",
      desc: "Explore Visakhapatnam's popular attractions in a comfortable single day tour.",
      duration: "1 Day",
      bestFor: "Families, Couples, and First-time Visitors",
      highlights: ["Simhachalam Temple", "Kailasagiri", "Rushikonda Beach", "Submarine Museum", "Rama Krishna Beach"],
      vehicle: "Sedan / SUV / Tempo Traveller"
    },
    {
      id: "vizag-two-days",
      title: "Vizag 2 Days Tour Package",
      image: "/images/vizag_pkg_111.png",
      desc: "A comprehensive two-day exploration of Visakhapatnam's beaches, museums, and temples.",
      duration: "2 Days",
      bestFor: "Leisure Travelers and Families",
      highlights: ["Bheemili Beach", "Thotlakonda", "Kailasagiri", "Yarada Beach", "Simhachalam Temple"],
      vehicle: "Sedan / SUV / Tempo Traveller"
    },
    {
      id: "araku-one-day",
      title: "Araku Valley One Day Tour Package",
      image: "/images/pkg_araku_new.png",
      desc: "A scenic journey through the Eastern Ghats featuring mountain landscapes and viewpoints in a single day.",
      duration: "1 Day",
      bestFor: "Nature Lovers",
      highlights: ["Borra Caves", "Coffee Plantations", "Tribal Museum", "Katiki Waterfalls", "Damuku View Point"],
      vehicle: "SUV / Sedan recommended"
    },
    {
      id: "araku-two-days",
      title: "Araku Valley 2 Days Tour Package",
      image: "/images/pkg_araku_new.png",
      desc: "An extended stay in Araku Valley to fully experience its natural beauty, waterfalls, and culture.",
      duration: "2 Days",
      bestFor: "Weekend Getaways",
      highlights: ["Borra Caves", "Chaparai Waterfalls", "Araku Pinary", "Madagada View Point", "Coffee Museum"],
      vehicle: "SUV / Sedan recommended"
    },
    {
      id: "araku-lambasingi",
      title: "Araku & Lambasingi Tour Package",
      image: "/images/pkg_lambasingi.png",
      desc: "Experience the cool mist of Lambasingi combined with the lush beauty of Araku Valley.",
      duration: "Custom duration",
      bestFor: "Nature Enthusiasts and Couples",
      highlights: ["Lambasingi View Point", "Tajangi Reservoir", "Kothapalli Waterfalls", "Borra Caves", "Vanajangi View Point"],
      vehicle: "SUV recommended"
    },
    {
      id: "vizag-local-temples",
      title: "Vizag Local Temple Tour",
      image: "/images/image-117.png",
      desc: "A spiritual tour covering the most prominent temples in Visakhapatnam.",
      duration: "1 Day",
      bestFor: "Devotees and Pilgrims",
      highlights: ["Simhachalam Temple", "Kanaka Maha Lakshmi Temple", "TTD Venkateswara Swamy Temple", "Sampath Vinayaka Temple"],
      vehicle: "Sedan / SUV"
    },
    {
      id: "arasavilli-sri-kurmam-srimukhalingam",
      title: "Arasavilli – Sri Kurmam – Srimukhalingam Temple Tour",
      image: "/images/image-118.png",
      desc: "Visit the historic Sun God temple and other ancient temples in the Srikakulam region.",
      duration: "Custom duration",
      bestFor: "Heritage and Spiritual Travelers",
      highlights: ["Arasavilli Temple", "Sri Kurmam Temple", "Srimukhalingam Temple", "Ramanarayanam"],
      vehicle: "Sedan / SUV"
    },
    {
      id: "anakapalli-annavaram-pitapuram-samarlakota",
      title: "Anakapalli – Annavaram – Pitapuram – Samarlakota Temple Tour",
      image: "/images/pkg_anakapalle.png",
      desc: "A comprehensive pilgrimage covering key temples across the coastal region.",
      duration: "Custom duration",
      bestFor: "Pilgrimage",
      highlights: ["Anakapalli Temple", "Annavaram Temple", "Kukkuteswara Swamy Temple", "Bhimeswara Swamy Temple"],
      vehicle: "Sedan / SUV / Tempo Traveller"
    },
    {
      id: "vadapalli-temple",
      title: "Vadapalli Venkateswara Swamy Temple Tour",
      image: "/images/img_113.png",
      desc: "Dedicated spiritual visit to the renowned Vadapalli Venkateswara Swamy Temple.",
      duration: "1 Day",
      bestFor: "Devotees",
      highlights: ["Vadapalli Venkateswara Swamy Temple"],
      vehicle: "Sedan / SUV"
    },
    {
      id: "pancharama-temples",
      title: "Pancharama Temples Tour Package",
      image: "/images/pkg_pancharamalu.png",
      desc: "A sacred journey visiting the five ancient Hindu temples dedicated to Lord Shiva in Andhra Pradesh.",
      duration: "Custom duration",
      bestFor: "Spiritual Travelers",
      highlights: ["Amareswara Swamy", "Someswara Swamy", "Ksheera Rama Lingeswara Swamy", "Bhimeswara Swamy", "Kumara Rama Bhimeswara Swamy"],
      vehicle: "Sedan / SUV / Tempo Traveller"
    }
  ];

  return (
    <div className="packages-page-wrapper" style={{ paddingBottom: '4rem' }}>
      {/* Hero */}
      {!isHomePage && (
        <section className="about-hero-strip">
          <div className="container text-center">
            <h1 className="about-main-title">Popular Tour Packages</h1>
            <p className="about-main-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Discover the beauty of Andhra Pradesh with our carefully crafted travel packages. Enjoy a comfortable, private and stress-free journey with MDR Travels.
            </p>
          </div>
        </section>
      )}

      {/* Packages Grid */}
      <section className="section">
        <div className="container">
          <div className="packages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {packages.map((pkg, idx) => (
              <div key={idx} className="package-card grand-card" style={{ transitionDelay: `${idx * 100}ms`, background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                <div className="package-img" style={{ height: '260px', position: 'relative' }}>
                  <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="grand-img" />
                  <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', padding: '2rem 1.5rem 1rem' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>{pkg.title}</h3>
                  </div>
                </div>
                
                <div className="package-content" style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{pkg.desc}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--dark-blue)' }}>
                    <Clock size={18} className="text-primary-blue" />
                    <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{pkg.duration}</span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--dark-blue)' }}>
                    <MapPin size={18} className="text-primary-blue" />
                    <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{pkg.bestFor}</span>
                  </div>

                  <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--primary-blue)' }}>Highlights:</strong>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                      {pkg.highlights.map((h, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#475569', marginBottom: '0.25rem' }}>
                          <CheckCircle2 size={16} className="text-primary-blue" style={{ marginTop: '2px', flexShrink: 0 }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#64748b' }}>
                    <strong>Vehicle Options:</strong> {pkg.vehicle}
                  </div>

                  <div className="tour-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                    <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setSelectedTour(pkg)}>
                      Request a Quote
                    </button>
                    <button className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }} onClick={() => navigate(`/packages/${pkg.id}`)}>
                      View Tour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryModal 
        isOpen={!!selectedTour} 
        onClose={() => setSelectedTour(null)} 
        defaultService={selectedTour?.title} 
      />
    </div>
  );
};

export default TourPackages;
