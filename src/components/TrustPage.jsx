import React from 'react';
import { ShieldCheck, Map, Clock, HeartHandshake, UserCheck, Sofa, CheckCircle2 } from 'lucide-react';
import TrustStrip from './TrustStrip';

const TrustPage = ({ isHomePage }) => {
  const trustCards = [
    {
      icon: <UserCheck size={32} className="text-primary-blue" />,
      title: "Experienced Drivers",
      desc: "Our drivers are selected for their professionalism, route awareness and responsible driving habits. They understand local routes, major destinations and practical travel requirements."
    },
    {
      icon: <ShieldCheck size={32} className="text-primary-blue" />,
      title: "Safe & Responsible Driving",
      desc: "Passenger safety is a priority throughout every journey. Our drivers are expected to follow responsible driving practices and maintain a calm, professional approach on the road."
    },
    {
      icon: <Sofa size={32} className="text-primary-blue" />,
      title: "Comfortable Journeys",
      desc: "We focus on making long-distance and local travel comfortable with clean vehicles, comfortable seating and a passenger-friendly travel experience."
    },
    {
      icon: <Map size={32} className="text-primary-blue" />,
      title: "Local Route Knowledge",
      desc: "Our drivers understand routes across Visakhapatnam and surrounding destinations, helping travelers navigate popular tourist locations, temples, cities and outstation routes."
    },
    {
      icon: <Clock size={32} className="text-primary-blue" />,
      title: "Punctual Pickup",
      desc: "We understand that timing matters. Our team works to coordinate pickups and travel schedules carefully so your journey starts smoothly."
    },
    {
      icon: <HeartHandshake size={32} className="text-primary-blue" />,
      title: "Customer-Friendly Service",
      desc: "From enquiry to drop-off, our team is available to help with vehicle selection, route planning and travel requirements."
    }
  ];

  return (
    <div className="trust-page-wrapper" style={{ paddingBottom: '4rem' }}>
      {/* Hero */}
      {!isHomePage && (
        <section className="about-hero-strip">
          <div className="container text-center">
            <h1 className="about-main-title">Why Travelers Trust MDR Travels</h1>
            <p className="about-main-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Your journey is more than getting from one destination to another. Our focus is to make every trip safe, comfortable, punctual and stress-free from pickup to drop-off.
            </p>
          </div>
        </section>
      )}

      {/* Trust Cards Grid */}
      <section className="section" style={{ paddingTop: isHomePage ? '1rem' : '3.5rem' }}>
        <div className="container">
          <div className="services-grid" style={{ marginTop: isHomePage ? '0' : '3rem' }}>
            {trustCards.map((card, idx) => (
              <div key={idx} className="service-card" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="service-icon-wrapper" style={{ marginBottom: '1.25rem' }}>
                  {card.icon}
                </div>
                <h3 className="service-title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  {card.title}
                </h3>
                <p className="service-desc" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort Starts With the Journey */}
      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="about-grid-story" style={{ alignItems: 'center' }}>
            <div className="about-story-text">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Comfort Starts With the Journey</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', marginBottom: '1.5rem' }}>
                At MDR Travels, we believe that the journey is just as important as the destination. Whether you're traveling for a short city errand or a multi-day outstation tour, we ensure a premium experience.
              </p>
              <div className="about-check-list">
                <div className="about-check-item">
                  <CheckCircle2 size={20} className="text-primary-blue" />
                  <span>Comfortable seating and well-maintained vehicles.</span>
                </div>
                <div className="about-check-item">
                  <CheckCircle2 size={20} className="text-primary-blue" />
                  <span>Clean interiors prepared before every trip.</span>
                </div>
                <div className="about-check-item">
                  <CheckCircle2 size={20} className="text-primary-blue" />
                  <span>Suitable vehicles for families and large groups.</span>
                </div>
                <div className="about-check-item">
                  <CheckCircle2 size={20} className="text-primary-blue" />
                  <span>Planned travel routes for long-distance comfort, including regular breaks.</span>
                </div>
                <div className="about-check-item">
                  <CheckCircle2 size={20} className="text-primary-blue" />
                  <span>Professional driver behavior and courteous service.</span>
                </div>
              </div>
            </div>
            
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <img src="/images/trust_suv.png" alt="Comfortable SUV Travel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', marginTop: '2rem' }}>
                <img src="/images/trust_group.png" alt="Group Travel Comfort" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div style={{ paddingTop: '2rem' }}>
        <TrustStrip />
      </div>
    </div>
  );
};

export default TrustPage;
