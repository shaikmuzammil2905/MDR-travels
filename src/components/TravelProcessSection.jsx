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
    <section className="section">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">More Than Just a Ride</h2>
          <p className="section-subtitle">
            We've simplified the travel booking process. Experience a seamless journey from your first enquiry to your final drop-off.
          </p>
        </div>

        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', position: 'relative' }}>
          {steps.map((step, idx) => (
            <div key={idx} className="process-card reveal" style={{ textAlign: 'center', transitionDelay: `${idx * 100}ms` }}>
              <div style={{ width: '80px', height: '80px', background: '#f8fafc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '2px solid #e2e8f0', position: 'relative', zIndex: 2 }}>
                {step.icon}
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '30px', height: '30px', background: 'var(--primary-red)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                  {idx + 1}
                </div>
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--dark-blue)', marginBottom: '0.75rem' }}>{step.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelProcessSection;
