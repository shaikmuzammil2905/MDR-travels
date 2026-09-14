import React from 'react';
import { ShieldCheck, Award, Clock, Users, Phone, MessageCircle, MapPin, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import busImg from '../assets/hero-bright.png';
import sedanImg from '../assets/img14.png';
import suvImg from '../assets/img15.png';
import tempoImg from '../assets/img16.png';
import vizagImg from '../assets/vizag-tour.jpg';

const AboutSection = ({ isHomePage }) => {
  const values = [
    {
      icon: <ShieldCheck size={32} className="text-primary-blue" />,
      title: "Passenger Safety First",
      desc: "Comprehensive vehicle health inspections, GPS tracking, and verified experienced drivers trained for defensive driving."
    },
    {
      icon: <Award size={32} className="text-primary-blue" />,
      title: "Modern Premium Fleet",
      desc: "Spotless Sedans, spacious SUVs, luxury Tempo Travellers, and deluxe air-conditioned buses suited for any journey."
    },
    {
      icon: <Clock size={32} className="text-primary-blue" />,
      title: "Punctual & Reliable",
      desc: "Guaranteed on-time arrivals for flight pickups, train connections, corporate events, and family vacations."
    },
    {
      icon: <Users size={32} className="text-primary-blue" />,
      title: "Customer-Centric Care",
      desc: "24/7 dedicated telephone and WhatsApp support with transparent per-kilometer billing and zero hidden surprises."
    }
  ];

  return (
    <div className="about-page-wrapper">
      {/* Top Banner */}
      {!isHomePage && (
        <section className="about-hero-strip">
          <div className="container text-center">
            <div className="badge-pill">
              <Sparkles size={16} /> Trusted Travel Experience
            </div>
            <h1 className="about-main-title">About MDR Travels</h1>
            <p className="about-main-subtitle">
              Visakhapatnam’s trusted travel and transport partner, delivering safe, luxurious, and affordable journeys across Andhra Pradesh.
            </p>
          </div>
        </section>
      )}

      {/* Mission & Story with Pictorial Representation */}
      <section className="container section">
        <div className="about-grid-story">
          <div className="about-story-text reveal">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Setting New Benchmarks in Comfort & Reliability
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', marginBottom: '1.25rem' }}>
              <strong>MDR Travels</strong> is a newly established premier travel agency based in Kancharapalem, Visakhapatnam. Born out of a passion for hospitality and seamless transportation, our mission is to provide every traveler with a smooth, stress-free, and memorable ride.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#475569', marginBottom: '1.5rem' }}>
              Whether you are planning a local city errand, an urgent airport transfer at midnight, a breathtaking weekend getaway to Araku Valley and Lambasingi, or transporting wedding guests in our deluxe buses, MDR Travels delivers unmatched comfort and professionalism.
            </p>

            <div className="about-check-list">
              <div className="about-check-item">
                <CheckCircle2 size={20} className="text-primary-blue" />
                <span>100% Sanitized and well-maintained fleet</span>
              </div>
              <div className="about-check-item">
                <CheckCircle2 size={20} className="text-primary-blue" />
                <span>Licensed, polite, and route-experienced chauffeurs</span>
              </div>
              <div className="about-check-item">
                <CheckCircle2 size={20} className="text-primary-blue" />
                <span>Transparent per-kilometer rates with zero hidden fees</span>
              </div>
              <div className="about-check-item">
                <CheckCircle2 size={20} className="text-primary-blue" />
                <span>Instant confirmation & 24/7 WhatsApp assistance</span>
              </div>
            </div>
          </div>

          <div className="about-gallery-mosaic reveal">
            <div className="mosaic-card mosaic-large">
              <img src={busImg} alt="MDR Luxury Coach" />
              <div className="mosaic-caption">Flagship Luxury Coach</div>
            </div>
            <div className="mosaic-subgrid">
              <div className="mosaic-card">
                <img src={sedanImg} alt="Sedan Fleet" />
                <div className="mosaic-caption">Swift Dzire Sedan</div>
              </div>
              <div className="mosaic-card">
                <img src={suvImg} alt="SUV Fleet" />
                <div className="mosaic-caption">Innova & Ertiga SUV</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Why Travel With MDR?</h2>
            <p className="section-subtitle">
              Every detail of your trip is crafted with care, safety, and comfort in mind.
            </p>
          </div>

          <div className="services-grid" style={{ marginTop: '2.5rem' }}>
            {values.map((val, idx) => (
              <div key={idx} className="service-card reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="service-icon-wrapper" style={{ marginBottom: '1.25rem' }}>
                  {val.icon}
                </div>
                <h3 className="service-title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  {val.title}
                </h3>
                <p className="service-desc" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!isHomePage && (
        <>
          <section className="section">
            <div className="container">
              <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                <h2 className="section-title">Our Service Philosophy</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                  We believe that comfortable travel shouldn't be complicated. By focusing on passenger comfort, driver experience, and diverse vehicle choices, we aim to be your first call for all travel needs.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                  <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px' }}>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--dark-blue)', marginBottom: '1rem' }}>Driver Experience</h3>
                    <p style={{ color: '#64748b', lineHeight: '1.6' }}>Our drivers bring years of local and outstation driving experience. They know the best routes, the smoothest highways, and the safest resting stops.</p>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px' }}>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--dark-blue)', marginBottom: '1rem' }}>Passenger Comfort</h3>
                    <p style={{ color: '#64748b', lineHeight: '1.6' }}>Every vehicle is thoroughly cleaned before pickup. We ensure working ACs, comfortable seats, and sufficient luggage space for your journey.</p>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px' }}>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--dark-blue)', marginBottom: '1rem' }}>Vehicle Choices</h3>
                    <p style={{ color: '#64748b', lineHeight: '1.6' }}>From agile 4-seater sedans for city runs to 17-seater Tempo Travellers for big groups, we offer a vehicle tailored to your specific requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="section" style={{ background: 'var(--dark-blue)', color: '#fff', textAlign: 'center' }}>
            <div className="container">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>Ready to Start Your Journey?</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Contact us today for a transparent quote on local, outstation, family, group, or pilgrimage travel.
              </p>
              <a href="https://wa.me/918247096395" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Chat on WhatsApp
              </a>
            </div>
          </section>
        </>
      )}

    </div>
  );
};

export default AboutSection;
