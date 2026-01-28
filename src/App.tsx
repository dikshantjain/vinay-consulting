import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, Linkedin, MessageCircle, CheckCircle2, Menu, X, MapPin, Send } from 'lucide-react';
import './index.css';

const LandingPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setStatus('Sending...');

    // These will be in your EmailJS Dashboard
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('Success! Vinay will contact you soon.');
        form.current?.reset();
      }, (error) => {
        setStatus('Error sending. Please use WhatsApp.');
        console.error(error.text);
      });
  };

  const services: string[] = [
    "Liquor License Consultancy",
    "Brand Marketing & Market Entry",
    "Wedding & Bulk Liquor Supply",
    "Shop Setup & Layout",
    "Excise Compliance & Renewals"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-amber-800 leading-none uppercase">Sogani Investments</span>
              <span className="text-xs text-slate-500 font-medium tracking-widest mt-1">vinayconsulting.in</span>
            </div>
            
            <div className="hidden md:flex space-x-8 font-medium">
              <a href="#services" className="hover:text-amber-700 transition">Services</a>
              <a href="#about" className="hover:text-amber-700 transition">About</a>
              <a href="#contact" className="hover:text-amber-700 transition">Contact</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">Vinay Jain</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            30 Years of Liquor Industry Leadership in Rajasthan. Leading Consultant for <span className="text-amber-400 font-semibold">McDowell’s & Johnnie Walker</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/91XXXXXXXXXX" className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
              <MessageCircle size={22} /> WhatsApp Now
            </a>
            <a href="#contact" className="border-2 border-amber-500/50 hover:bg-amber-500/10 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
              Get an Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 underline decoration-amber-500 underline-offset-8">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:shadow-xl transition-all hover:-translate-y-1">
                <CheckCircle2 className="mb-4 text-amber-600" size={32} />
                <h3 className="text-xl font-bold mb-3">{service}</h3>
                <p className="text-slate-600 leading-relaxed">Navigating excise laws and market placement for Rajasthan's premier retail and bulk sectors.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-500">Reach Out</h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                Connect with us for expert consultation on liquor shop licenses, bulk supply for events, or brand entry in Rajasthan.
              </p>
              
              <div className="space-y-6">
                <a href="https://www.linkedin.com/in/vinay-jain-consultant" target="_blank" className="flex items-center gap-4 hover:text-blue-400 transition cursor-pointer">
                  <Linkedin className="text-amber-500" />
                  <span>LinkedIn Profile</span>
                </a>
                <div className="flex items-center gap-4">
                  <Mail className="text-amber-500" />
                  <span>vinay@vinayconsulting.in</span>
                </div>
                <div className="flex items-center gap-4 font-bold text-xl text-amber-400">
                  <Phone size={24} />
                  <span>+91 XXXXX XXXXX</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-4 text-slate-900">
                <input name="user_name" type="text" placeholder="Full Name" required className="w-full p-4 border rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-amber-500" />
                <input name="user_email" type="email" placeholder="Email Address" required className="w-full p-4 border rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-amber-500" />
                <textarea name="message" rows={4} placeholder="Your Query (e.g., Wedding Supply, Shop Setup)" required className="w-full p-4 border rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition flex items-center justify-center gap-2">
                  <Send size={18} /> {status || 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-500 border-t border-slate-800 bg-slate-900">
        <p>© {new Date().getFullYear()} Sogani Investments & Consultants. Headquartered in Jaipur.</p>
      </footer>
    </div>
  );
};

export default LandingPage;