import React from 'react';
import { CalendarDays, Car, CheckSquare, Users, Smile } from 'lucide-react';

const TravelProcessSection = () => {
  const steps = [
    {
      icon: <CalendarDays size={32} className="text-primary-blue" />,
      title: "Tell Us Your Travel Plan",
      desc: "Share your pickup location, destination, date, and passenger count with our team."
    },
    {
      icon: <Car size={32} className="text-primary-blue" />,
      title: "Choose Your Vehicle",
      desc: "Select from our fleet of clean, comfortable sedans, SUVs, and Tempo Travellers."
    },
    {
      icon: <CheckSquare size={32} className="text-primary-blue" />,
      title: "Confirm Your Journey",
      desc: "Receive a transparent quote and confirm your booking instantly via WhatsApp or phone."
    },
    {
      icon: <Users size={32} className="text-primary-blue" />,
      title: "Meet Your Driver",
      desc: "Our professional, punctual driver will arrive at your location ready for the trip."
    },
    {
      icon: <Smile size={32} className="text-primary-blue" />,
      title: "Enjoy Your Trip",
      desc: "Relax and enjoy a safe, comfortable ride to your destination with MDR Travels."
    }
  ];

  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">More Than Just a Ride</h2>
          <p className="section-subtitle">
            We've simplified the travel booking process. Experience a seamless journey from your first enquiry to your final drop-off.
          </p>
        </div>

        <div className="process-grid" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical connecting line */}
          <div className="animated-flow-line"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="process-card" style={{ display: 'flex', alignItems: 'center', gap: '2rem', transitionDelay: `${idx * 100}ms`, position: 'relative', zIndex: 2 }}>
              
              {/* Icon / Number Container */}
              <div style={{ flexShrink: 0, width: '100px', height: '100px', background: 'var(--white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #f1f5f9', position: 'relative', boxShadow: 'var(--shadow-sm)' }}>
                {step.icon}
                <div style={{ position: 'absolute', top: '0', right: '0', width: '32px', height: '32px', background: 'var(--primary-red)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: 'var(--shadow-sm)' }}>
                  {idx + 1}
                </div>
              </div>
              
              {/* Content Box */}
              <div style={{ flexGrow: 1, background: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-blue)', marginBottom: '0.75rem', fontWeight: 700 }}>{step.title}</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelProcessSection;
