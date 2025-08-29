import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Instagram, Linkedin, Github } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    const errors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};

    // Name validation
    const name = form.current?.user_name.value.trim();
    if (!name) {
      errors.name = 'Name is required';
    }

    // Email validation
    const email = form.current?.user_email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }

    // Message validation
    const message = form.current?.message.value.trim();
    if (!message) {
      errors.message = 'Message is required';
    } else {
      // Fix: Only count non-empty words
      const wordCount = message.trim().split(/\s+/).filter((word: string | any[]) => word.length > 0).length;
      if (wordCount < 20) {
        errors.message = `Message must be at least 20 words (current: ${wordCount} words)`;
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before sending
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICEID,
          import.meta.env.VITE_TEMPLATEID,
          form.current,
          { publicKey: import.meta.env.VITE_PUBLICKEY }
        )
        .then(
          () => {
            setStatus('success');
            setValidationErrors({});
            form.current?.reset();
          },
          () => setStatus('error')
        );
    }
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/rishikesh1312',
      color: 'text-pink-500',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rishikesh-pawar-819596226/',
      color: 'text-blue-600',
    },
    {
      icon: Github,
      href: 'https://github.com/rishikeshpawar1312',
      color: 'text-gray-800',
    },
  ];

  return (
    <section id="contact" className="bg-white py-16 px-4">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact</h2>
        <p className="text-gray-600 mb-8">Fill out the form</p>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className={`w-full bg-black text-gray-300 placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 ${
                validationErrors.name ? 'border-2 border-red-500' : 'focus:ring-blue-500'
              }`}
            />
            {validationErrors.name && (
              <p className="text-red-500 text-sm mt-1 text-left">{validationErrors.name}</p>
            )}
          </div>
          
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className={`w-full bg-black text-gray-300 placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 ${
                validationErrors.email ? 'border-2 border-red-500' : 'focus:ring-blue-500'
              }`}
            />
            {validationErrors.email && (
              <p className="text-red-500 text-sm mt-1 text-left">{validationErrors.email}</p>
            )}
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Your Message (minimum 20 words)"
              required
              rows={4}
              className={`w-full bg-black text-gray-300 placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 ${
                validationErrors.message ? 'border-2 border-red-500' : 'focus:ring-blue-500'
              }`}
            ></textarea>
            {validationErrors.message && (
              <p className="text-red-500 text-sm mt-1 text-left">{validationErrors.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-white text-black py-3 rounded-md shadow-md hover:bg-gray-100 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>
        </form>
        
        {status === 'success' && (
          <p className="text-green-600 mt-4">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-4">Failed to send message. Please try again.</p>
        )}
        
        <div className="flex justify-center space-x-4 mt-8">
          {socialLinks.map(({ icon: Icon, href, color }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${color} hover:opacity-75 transition-opacity`}
            >
              <Icon size={32} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;