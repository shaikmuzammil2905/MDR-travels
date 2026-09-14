import React from 'react';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TourPackages = ({ isHomePage }) => {
  const navigate = useNavigate();

  const packages = [
    {
      id: "visakhapatnam-city-tour",
      title: "Visakhapatnam City Tour",
      image: "/images/pkg_vizag.png",
      desc: "Explore Visakhapatnam's popular attractions and scenic locations in a comfortable private vehicle.",
      duration: "Custom duration available",
      bestFor: "Families, Couples, and First-time Visitors",
      highlights: ["RK Beach", "Kailasagiri", "Rushikonda Beach", "Submarine Museum", "Simhachalam Temple"],
      vehicle: "Sedan / SUV / Tempo Traveller"
    },
    {
      id: "araku-valley-tour",
      title: "Araku Valley Tour",
      image: "/images/pkg_araku.png",
      desc: "A scenic journey through the Eastern Ghats featuring mountain landscapes, valleys, viewpoints and local attractions.",
      duration: "1 - 2 Days (Customizable)",
      bestFor: "Nature Lovers and Weekend Getaways",
      highlights: ["Borra Caves", "Coffee Plantations", "Tribal Museum", "Galikonda Viewpoint", "Padmapuram Gardens"],
      vehicle: "SUV / Sedan recommended"
    },
    {
      id: "tirupati-temple-tour",
      title: "Tirupati Temple Tour",
      image: "/images/pkg_tirupati.png",
      desc: "A pilgrimage-focused travel option for families and devotees travelling to Tirupati and surrounding temple destinations.",
      duration: "Custom duration available",
      bestFor: "Devotees and Family Pilgrimages",
      highlights: ["Sri Venkateswara Temple", "Padmavathi Temple", "Kapila Theertham", "Srikalahasti", "Safe outstation travel"],
      vehicle: "Innova Crysta / Tempo Traveller"
    },
    {
      id: "srisailam-tour",
      title: "Srisailam Spiritual Journey",
      image: "/images/pkg_srisailam.png",
      desc: "A spiritual and scenic journey combining temple travel with beautiful landscapes and comfortable road travel.",
      duration: "Custom duration available",
      bestFor: "Pilgrimage and Nature trips",
      highlights: ["Mallikarjuna Swamy Temple", "Pathala Ganga", "Srisailam Dam", "Sikharam", "Forest scenic routes"],
      vehicle: "Premium SUV / Sedan"
    },
    {
      id: "vijayawada-amaravati-tour",
      title: "Vijayawada & Amaravati Tour",
      image: "/images/pkg_vijayawada.png",
      desc: "Explore important cultural, spiritual and heritage destinations around Vijayawada and Amaravati.",
      duration: "Custom duration available",
      bestFor: "Heritage and Cultural Exploration",
      highlights: ["Kanakadurga Temple", "Bhavani Island", "Undavalli Caves", "Amaravati Stupa", "Prakasam Barrage"],
      vehicle: "Sedan / SUV"
    },
    {
      id: "andhra-pradesh-multi-destination-tour",
      title: "Andhra Pradesh Multi-Destination",
      image: "/images/pkg_multi.png",
      desc: "A flexible multi-day journey connecting important cities, temples and tourist destinations across Andhra Pradesh.",
      duration: "Custom multi-day itinerary",
      bestFor: "Extended Holidays and Complete Explorations",
      highlights: ["Customizable route", "Flexible schedule", "Multiple cities", "Dedicated driver", "Comfortable long-distance vehicle"],
      vehicle: "Premium SUV / Tempo Traveller"
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
              <div key={idx} className="package-card reveal" style={{ transitionDelay: `${idx * 100}ms`, background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
                <div className="package-img" style={{ height: '240px', position: 'relative' }}>
                  <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

                  <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                    <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => navigate('/contact')}>
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
    </div>
  );
};

export default TourPackages;
