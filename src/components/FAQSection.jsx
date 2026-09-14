import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    { q: "Can I book a vehicle for an outstation trip?", a: "Yes, we provide comfortable and well-maintained vehicles for outstation trips across Andhra Pradesh and neighboring states." },
    { q: "Can I hire a vehicle for a full-day city tour?", a: "Absolutely! We offer flexible packages for local sightseeing and full-day city travel in Visakhapatnam." },
    { q: "Do you provide vehicles for family trips?", a: "Yes, we specialize in family trips and offer a range of comfortable Sedans and SUVs to accommodate families of all sizes." },
    { q: "Can I request a 7-seater SUV?", a: "Yes, we have a premium fleet of 6 and 7-seater SUVs, including Innova Crysta and Ertiga models." },
    { q: "Are Tempo Travellers available for group tours?", a: "Yes, we offer spacious Tempo Travellers for larger groups, ensuring everyone travels together comfortably." },
    { q: "Can I customize a tour package?", a: "Definitely. Contact us with your requirements and we will build a custom itinerary that fits your schedule and preferences." },
    { q: "How can I request a quote?", a: "You can request a quote by filling out the form on our Contact page or by sending us a WhatsApp message directly." }
  ];

  return (
    <section className="section" style={{ background: 'var(--light-bg)' }}>
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions about travelling with MDR Travels.</p>
        </div>
        
        <div className="faq-container reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, idx) => (
            <details key={idx} className="faq-item" style={{ background: '#fff', marginBottom: '1rem', borderRadius: '8px', padding: '1rem 1.5rem', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
              <summary style={{ fontWeight: 600, color: 'var(--dark-blue)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {faq.q} <ChevronDown size={20} className="faq-icon" />
              </summary>
              <p style={{ marginTop: '1rem', color: '#64748b', lineHeight: '1.6' }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
