import React from 'react';
import { ShieldCheck, Sofa, Users, ThumbsUp, Headset } from 'lucide-react';

const TrustStrip = () => {
  const trustItems = [
    { icon: <ShieldCheck size={32} />, title: "Safe Travel" },
    { icon: <Sofa size={32} />, title: "Comfortable Vehicles" },
    { icon: <Users size={32} />, title: "Professional Drivers" },
    { icon: <ThumbsUp size={32} />, title: "Reliable Service" },
    { icon: <Headset size={32} />, title: "Customer Support" }
  ];

  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className={`trust-item reveal`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="trust-icon">
                {item.icon}
              </div>
              <h4 className="trust-title">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
