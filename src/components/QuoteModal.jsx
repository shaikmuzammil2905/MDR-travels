import React, { useState } from 'react';
import Modal from './Modal';
import { User, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Name and Phone number are required.');
      return;
    }
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      setError('Please enter a valid 10-digit Indian phone number.');
      return;
    }

    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
      onClose();
      
      const whatsappMsg = `Hello MDR Travels, I would like to get a quote for a trip:
Name: ${formData.name}
Phone: ${formData.phone}
Pickup Location: ${initialData.pickup}
Destination: ${initialData.destination}
Travel Date: ${initialData.date}
Vehicle Type: ${initialData.vehicle}
${formData.message ? `Message: ${formData.message}` : ''}`;

      const whatsappUrl = `https://wa.me/918247096395?text=${encodeURIComponent(whatsappMsg)}`;
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Request a Quote">
        <form onSubmit={handleSubmit} className="quote-modal-form">
          {error && <div className="form-error">{error}</div>}
          
          <div className="form-group">
            <label className="form-label-with-icon">
              <User size={16} className="field-icon" />
              <span>Full Name *</span>
            </label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="form-control" 
              placeholder="Enter your name" 
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label-with-icon">
              <Phone size={16} className="field-icon" />
              <span>Phone Number *</span>
            </label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              className="form-control" 
              placeholder="10-digit mobile number" 
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label-with-icon">
              <MessageSquare size={16} className="field-icon" />
              <span>Additional Requirements (Optional)</span>
            </label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="form-control" 
              placeholder="Any specific requests?"
              rows="3"
            ></textarea>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary quote-submit-btn">Send Request</button>
          </div>
        </form>
      </Modal>

      {showToast && (
        <div className="toast-notification">
          <CheckCircle size={24} className="toast-icon" />
          <div className="toast-content">
            <h4>Thank you!</h4>
            <p>Your travel enquiry has been received. Redirecting to WhatsApp...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteModal;
