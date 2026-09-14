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

        <div className="process-grid-container">
          <div className="animated-flow-line"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="process-card-step">
              
              <div className="process-step-icon">
                {step.icon}
                <div className="process-step-number">
                  {idx + 1}
                </div>
              </div>
              
              <div className="process-step-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelProcessSection;
