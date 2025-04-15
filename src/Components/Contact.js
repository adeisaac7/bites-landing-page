import React, { useState } from "react";
import { FiSend,FiPhone, FiMessageSquare   } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.question) {
      // Here you would typically send to your backend
      console.log('Submitting:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', question: '', phone: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Need Help?</h1>
      <h1 className="primary-heading">Choose How to Reach Us</h1>
      
      <div className="contact-options">
        <div className="contact-method">
          <FiMessageSquare className="method-icon" />
          <h3>Send Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="question"
              placeholder="Your question/message"
              value={formData.question}
              onChange={handleChange}
              required
              rows="4"
            />
            <button type="submit" className="secondary-button">
              Send Message <FiSend />
            </button>
          </form>
        </div>

        <div className="contact-method immediate-contact">
          <FiPhone className="method-icon" />
          <h3>Instant Help</h3>
          <p>Need immediate assistance?</p>
          <a href="tel:+2348153430276" className="call-button">
            Call Now: +234 815 343 0276
          </a>
          <div className="whatsapp-option">
            <p>Or chat with us on WhatsApp:</p>
            <a 
              href="https://wa.me/2348153430276" 
              className="whatsapp-button"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Open WhatsApp
            </a>
          </div>
        </div>
      </div>

      {submitted && (
        <div className="success-message">
          <p>✅ Message received! We'll respond within 24 hours.</p>
          <p>For urgent matters, please call our hotline.</p>
        </div>
      )}
    </div>
  );
};
export default Contact;