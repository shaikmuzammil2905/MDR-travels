import React, { useState } from 'react';
import Modal from './Modal';
import { Send, MapPin, Phone, MessageCircle } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService || '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service Required:* ${formData.service}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918247096395?text=${text}`, '_blank');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request a Quote">
      <div style={{ padding: '0.5rem' }}>
        <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          Fill out this quick form or message us directly on WhatsApp for an instant response.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark-blue)', marginBottom: '0.4rem' }}>Your Name</label>
            <input 
              type="text" 
              required 
              className="form-control" 
              placeholder="John Doe"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark-blue)', marginBottom: '0.4rem' }}>Phone Number</label>
            <input 
              type="tel" 
              required 
              className="form-control" 
              placeholder="+91 00000 00000"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark-blue)', marginBottom: '0.4rem' }}>Service/Vehicle of Interest</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="e.g. Innova outstation trip"
              value={formData.service}
              onChange={e => setFormData({...formData, service: e.target.value})}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark-blue)', marginBottom: '0.4rem' }}>Additional Details</label>
            <textarea 
              className="form-control" 
              rows="3" 
              placeholder="Travel dates, number of people..."
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '1rem', fontSize: '1.1rem' }}>
            <Send size={18} /> Send Enquiry
          </button>
        </form>

        <div style={{ margin: '1.5rem 0', display: 'flex', alignItems: 'center', textAlign: 'center', color: '#94a3b8' }}>
          <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
          <span style={{ padding: '0 1rem', fontSize: '0.85rem', fontWeight: 600 }}>OR</span>
          <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
        </div>

        <a 
          href="https://wa.me/918247096395" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-whatsapp"
          style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.1rem' }}
        >
          <MessageCircle size={20} /> Chat on WhatsApp
        </a>
      </div>
    </Modal>
  );
};

export default EnquiryModal;
