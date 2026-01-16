import React, { useState } from 'react';
import { motion } from 'framer-motion';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const [status, setStatus] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('Form submitted:', formData);
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xdaakdbe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
 
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id='contact'>
      <div className="max-w-4xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header Content */}
          <div className="space-y-8">
            {/* Main Title */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-light text-white leading-tight">
                Let's
                <br />
                <span className="font-semibold">talk</span>
              </h2>
            </div>

            {/* Subheading */}
            <div>
              <p className="text-lg text-white leading-relaxed">
                Have a project in mind?
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-200 leading-relaxed">
                Website, app, or rebrand? Let's make it real.
              </p>
            </div>

           <div className="border-t border-gray-200 pt-6 mt-8">
              <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration:0.5, delay:0.1 }}
        viewport={{ once: false }} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-white">Quick response.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-white">Clear next steps.</span>
                </div>
              </motion.div>
              <p className="text-sm text-green-600 mt-3">
                We'll reach out within 24 hours to discuss with a detailed plan and timeline.
              </p>
            </div>
            
          </div>

          {/* Right Column - Form */}
          <div className="space-y-6 bg-white p-8 rounded-4xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How should we call you? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                />
              </div>

              {/* Email Field */}
              <div>
                <label  className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-black text-white font-medium py-4 px-6 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
              {status === 'success' && <p>Thank you! Your message was sent.</p>}
      {status === 'error' && <p>Oops! Something went wrong. Please try again.</p>}

              {/* Privacy Policy */}
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our Privacy Policy and Cookie Policy.
              </p>
            </form>

            {/* Response Info */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;