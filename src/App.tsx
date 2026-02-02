import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import vinayportrait from './assets/vinay_2.jpeg';
import { Mail, Linkedin, Menu, X, MapPin, Send, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

const LandingPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setStatus('Sending...');

    // These must be updated from your EmailJS Dashboard (emailjs.com)
   const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('Success! Message Sent.');
        form.current?.reset();
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        setStatus('Error sending. Please use LinkedIn.');
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
              <span className="text-[10px] text-slate-500 font-bold tracking-widest mt-1 uppercase">vinayconsulting.in</span>
            </div>
            
            <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase">
              <a href="#services" className="hover:text-amber-700 transition">Services</a>
              <a href="#about" className="hover:text-amber-700 transition">Experience</a>
              <a href="#contact" className="hover:text-amber-700 transition px-4 py-2 bg-slate-900 text-white rounded-lg">Get in Touch</a>
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
            <a href="#contact" className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-amber-900/20 text-lg">
              Book a Consultation
            </a>
            <a href="mailto:vin.sogani@gmail.com" className="border border-slate-500 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-bold flex items-center gap-2 transition-all text-lg font-medium">
              <Mail size={22} /> Email Inquiry
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

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden border-t">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3 aspect-[3/4] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
             <img src={vinayportrait} alt="Vinay Jain" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-6 text-slate-900 uppercase tracking-tight">Professional Leadership</h2>
            <p className="text-xl text-amber-800 font-semibold mb-6 underline decoration-amber-200 underline-offset-8">Ex-Senior Manager, Diageo India</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With 30 years of experience, Vinay Jain has been a pivotal figure in marketing global spirits like <strong>Johnnie Walker, McDowell's, and Black Dog</strong>. After a distinguished career at Diageo, he now provides end-to-end consultancy for the Rajasthan market, bridging the gap between corporate excellence and local excise compliance.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-amber-500">
                <p className="font-bold text-slate-900 text-xl">30+ Years</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Market Experience</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-amber-500">
                <p className="font-bold text-slate-900 text-xl">Senior Mgmt</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Diageo Background</p>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/vinay-jain-433ab4193/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition">
              <Linkedin size={20} /> View LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-500">Request Expertise</h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                Navigating the Rajasthan liquor market requires local insight and professional precision. Reach out directly via email or the form for professional inquiries.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-amber-500"><Mail size={24} /></div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email Address</p>
                    <p className="text-xl font-bold">vin.sogani@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-blue-400"><Linkedin size={24} /></div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Professional Network</p>
                    <a href="https://www.linkedin.com/in/vinay-jain-consultant" target="_blank" rel="noreferrer" className="text-xl font-bold hover:text-blue-400 transition underline underline-offset-4">LinkedIn Profile</a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-amber-500"><MapPin size={24} /></div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Base Region</p>
                    <p className="text-xl font-bold">Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-2xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-5 text-slate-900">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input name="user_name" type="text" placeholder="e.g. Rahul Sharma" required className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-amber-500 transition-all bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input name="user_email" type="email" placeholder="name@company.com" required className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-amber-500 transition-all bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Service Required</label>
                  <div className="relative">
                    <select 
                      name="service_type" 
                      required 
                      className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-amber-500 bg-slate-50 appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>Select a service</option>
                      {services.map((s, i) => (
                        <option key={i} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Other">Other / General Inquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Your Query</label>
                  <textarea name="message" rows={4} placeholder="Briefly describe your requirements..." required className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-amber-500 transition-all bg-slate-50"></textarea>
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
        <p className="text-xs uppercase font-medium">Jaipur • Rajasthan • India</p>
        <p className="mt-8 text-[10px] opacity-50 uppercase tracking-tighter">© {new Date().getFullYear()} Vinay Consulting. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;