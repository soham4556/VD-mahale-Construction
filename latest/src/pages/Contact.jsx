import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';
import { companyData } from '../data/companyData';
import '../components/contact/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Simulate API call
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };
  const breadcrumbItems = [{ label: 'Contact Us', path: '/contact' }];

  return (
    <div className="contact-page">
      <PageHero 
        title="Get In Touch"
        subtitle="Let's discuss how our expertise can power your next infrastructure landmark."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1600"
        breadcrumbItems={breadcrumbItems}
      />

      <section className="contact-body-grid container">
        <div className="contact-info-panel">
          <div className="info-block" data-aos="fade-up">
            <h3>Contact Details</h3>
            <div className="info-item">
              <FiPhone className="info-icon" />
              <div>
                <span>Call Us Anytime</span>
                <strong>{companyData.contact.phone}</strong>
              </div>
            </div>
            <div className="info-item">
              <FiMail className="info-icon" />
              <div>
                <span>Email Our Team</span>
                <strong>{companyData.contact.email}</strong>
              </div>
            </div>
          </div>

          <div className="info-block" data-aos="fade-up" data-aos-delay="100">
            <h3>Office Address</h3>
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <div>
                <span>Headquarters</span>
                <strong>{companyData.contact.address}</strong>
                <p>Pin: 411038</p>
              </div>
            </div>
            <div className="info-item">
              <FiClock className="info-icon" />
              <div>
                <span>Business Hours</span>
                <strong>Mon - Sat: 9:00 AM - 6:00 PM</strong>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-panel" data-aos="fade-left">
          <div className="form-card">
            {isSubmitted ? (
              <div className="form-success-message" style={{ textAlign: 'center', padding: '40px 0' }}>
                <FiCheckCircle size={60} color="var(--success-green)" style={{ marginBottom: '20px' }} />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. Our team will contact you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-outline" style={{ marginTop: '20px' }}>Send Another Message</button>
              </div>
            ) : (
              <form className="main-contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
                <textarea 
                  name="message"
                  placeholder="Your Message..." 
                  rows="6" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="btn btn-primary w-full shadow-lg">Submit Request</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.780565!3d18.520430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67414521%3A0x6fb0d2688b90e90!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711380000000!5m2!1sen!2sin" 
          width="100%" 
          height="500" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>
      
      <style>{`
        .w-full { width: 100%; }
      `}</style>
    </div>
  );
};

export default Contact;
