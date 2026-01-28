import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, Linkedin, MessageCircle, CheckCircle2, Menu, X, MapPin, Send, Award, ShieldCheck } from 'lucide-react';
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

  const services = [
    { title: "Liquor License Consultancy", desc: "Expert guidance on obtaining and managing retail and wholesale licenses." },
    { title: "Brand Marketing & Market Entry", desc: "Strategic planning for global brands entering the Rajasthan market." },
    { title: "Wedding & Bulk Liquor Supply", desc: "Hassle-free procurement for luxury events and large-scale gatherings." },
    { title: "Shop Setup & Layout", desc: "Optimizing retail space for maximum compliance and consumer flow." },
    { title: "Excise Compliance & Renewals", desc: "Ensuring 100% adherence to Rajasthan's evolving excise regulations." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-amber-800 leading-none uppercase">Vinay Consulting</span>
              <span className="text-[10px] text-slate-500 font-bold tracking-widest mt-1">vinayconsulting.in</span>
            </div>
            
            <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase">
              <a href="#services" className="hover:text-amber-700 transition">Services</a>
              <a href="#about" className="hover:text-amber-700 transition">Experience</a>
              <a href="#contact" className="hover:text-amber-700 transition">Contact</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 space-y-4 shadow-lg border-t">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block font-bold">Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block font-bold">Experience</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block font-bold">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-amber-500/40 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 bg-amber-950/50">
            <Award size={14} /> Retired Senior Manager, Diageo
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">Vinay Jain</h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
            Leveraging <span className="text-amber-400 font-semibold italic underline decoration-amber-500/50 underline-offset-8">30+ years of global excellence at Diageo</span> to provide world-class consultancy for Rajasthan’s liquor landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a href="https://wa.me/91XXXXXXXXXX" className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-green-900/20">
              <MessageCircle size={22} /> WhatsApp Vinay
            </a>
            <a href="#contact" className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-amber-900/20">
              Request Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <div className="bg-white border-y border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="text-amber-600 mb-2" size={32} />
            <span className="font-bold text-slate-800 uppercase tracking-tighter">Diageo Corporate Pedigree</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 className="text-amber-600 mb-2" size={32} />
            <span className="font-bold text-slate-800 uppercase tracking-tighter">Rajasthan Excise Authority Relations</span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="text-amber-600 mb-2" size={32} />
            <span className="font-bold text-slate-800 uppercase tracking-tighter">Based in Jaipur, Serving Rajasthan</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Consultancy Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-10 border border-slate-200 rounded-2xl bg-white hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                   <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Founder Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3 aspect-[3/4] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-slate-400 italic border-8 border-white">
             {/* Replace with <img src="/vinay-jain.jpg" alt="Vinay Jain" className="w-full h-full object-cover" /> */}
             Vinay Jain Portrait
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Senior Industry Leadership</h2>
            <p className="text-xl text-amber-800 font-semibold mb-6 underline decoration-amber-200 underline-offset-8">Ex-Senior Manager, Diageo India</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With 30 years of experience, Vinay Jain has been a pivotal figure in marketing global spirits like <strong>Johnnie Walker, McDowell's, and Black Dog</strong>. After a distinguished career at Diageo, he now provides end-to-end consultancy for the Rajasthan market, bridging the gap between corporate excellence and local excise compliance.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-amber-500">
                <p className="font-bold text-slate-900">30+ Years</p>
                <p className="text-xs text-slate-500">Market Experience</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-amber-500">
                <p className="font-bold text-slate-900">Senior Mgmt</p>
                <p className="text-xs text-slate-500">Diageo Background</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-500">Get Expert Advice</h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                Navigating the Rajasthan liquor market requires local insight and professional precision. Reach out for licensing or brand entry queries.
              </p>
              
              <div className="space-y-8">
                <a href="https://www.linkedin.com/in/vinay-jain-consultant" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-blue-400 transition">
                  <Linkedin className="text-amber-500" />
                  <span className="font-semibold">Connect on LinkedIn</span>
                </a>
                <div className="flex items-center gap-4">
                  <Mail className="text-amber-500" />
                  <span className="font-semibold">vinay@vinayconsulting.in</span>
                </div>
                <div className="flex items-center gap-4 text-2xl font-bold text-amber-400">
                  <Phone size={28} />
                  <span>+91 XXXXX XXXXX</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-2xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-5 text-slate-900">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input name="user_name" type="text" placeholder="e.g. Rahul Sharma" required className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-amber-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input name="user_email" type="email" placeholder="name@company.com" required className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-amber-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Your Query</label>
                  <textarea name="message" rows={4} placeholder="How can we help you?" required className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-amber-500 transition-all"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold hover:bg-amber-600 transition flex items-center justify-center gap-3 shadow-lg">
                  <Send size={18} /> {status || 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-500 bg-slate-950 border-t border-slate-800">
        <p className="font-bold tracking-widest text-slate-300 uppercase mb-2">Vinay Consulting</p>
        <p className="text-xs">Jaipur • Rajasthan • India</p>
        <p className="mt-8 text-[10px] opacity-50">© {new Date().getFullYear()} Vinay Consulting. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;