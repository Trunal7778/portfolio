import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { personalInfo } = resumeData;
  const formRef = useRef(null);

  // Form Fields State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setStatus("sending");

    // EmailJS details (loaded from Vite environment variables for secure deployment)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ""; 
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Mock sending flow for immediate developer testing
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setStatus("success");
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        console.error("EmailJS submission failure:", error);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-[#0B0D16] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Contact Me
          </h3>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Info Details cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h4 className="text-2xl font-bold font-poppins text-slate-850 dark:text-white">
              Let's build something spectacular.
            </h4>
            <p className="text-sm sm:text-base text-slate-555 dark:text-slate-400 leading-relaxed mb-4">
              I am open to internship opportunities, entry-level developer positions, and backend/full-stack collaborations. Drop a message, and I'll get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              {/* Mail Card */}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-[#1E293B]/20 backdrop-blur-md flex items-center gap-4 hover:border-blue-500/20 dark:hover:border-sky-500/20 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="p-3 bg-blue-500/10 dark:bg-sky-500/10 text-blue-600 dark:text-sky-400 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xxs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Email</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-250 font-poppins">{personalInfo.email}</span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-[#1E293B]/20 backdrop-blur-md flex items-center gap-4 hover:border-blue-500/20 dark:hover:border-sky-500/20 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="p-3 bg-indigo-500/10 dark:bg-sky-500/10 text-indigo-600 dark:text-sky-300 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xxs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Phone</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-250 font-poppins">{personalInfo.phone}</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-[#1E293B]/20 backdrop-blur-md flex items-center gap-4 hover:scale-[1.01] transition-all duration-300 select-none">
                <div className="p-3 bg-emerald-500/10 dark:bg-sky-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xxs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Location</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-250 font-poppins">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Glass form card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-[#1E293B]/20 backdrop-blur-md shadow-lg flex flex-col justify-center">
            
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Row for Name / Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-450 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`px-4 py-3 rounded-xl border bg-white dark:bg-slate-900/60 text-slate-850 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition-all ${
                      formErrors.name 
                        ? 'border-rose-500 focus:ring-rose-500/20' 
                        : 'border-slate-250 dark:border-slate-800 focus:border-blue-500 dark:focus:border-sky-400 focus:ring-blue-500/15 dark:focus:ring-sky-400/15'
                    }`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && <span className="text-rose-500 text-xxs font-bold mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{formErrors.name}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-450 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`px-4 py-3 rounded-xl border bg-white dark:bg-slate-900/60 text-slate-850 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition-all ${
                      formErrors.email 
                        ? 'border-rose-500 focus:ring-rose-500/20' 
                        : 'border-slate-250 dark:border-slate-800 focus:border-blue-500 dark:focus:border-sky-400 focus:ring-blue-500/15 dark:focus:ring-sky-400/15'
                    }`}
                    placeholder="johndoe@example.com"
                  />
                  {formErrors.email && <span className="text-rose-500 text-xxs font-bold mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{formErrors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-slate-450 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`px-4 py-3 rounded-xl border bg-white dark:bg-slate-900/60 text-slate-850 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition-all ${
                    formErrors.subject 
                      ? 'border-rose-500 focus:ring-rose-500/20' 
                      : 'border-slate-250 dark:border-slate-800 focus:border-blue-500 dark:focus:border-sky-400 focus:ring-blue-500/15 dark:focus:ring-sky-400/15'
                  }`}
                  placeholder="Internship / Collaboration Inquiry"
                />
                {formErrors.subject && <span className="text-rose-500 text-xxs font-bold mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{formErrors.subject}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-450 uppercase tracking-wider">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`px-4 py-3 rounded-xl border bg-white dark:bg-slate-900/60 text-slate-850 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                    formErrors.message 
                      ? 'border-rose-500 focus:ring-rose-500/20' 
                      : 'border-slate-250 dark:border-slate-800 focus:border-blue-500 dark:focus:border-sky-400 focus:ring-blue-500/15 dark:focus:ring-sky-400/15'
                  }`}
                  placeholder="Describe your project proposal or job requirement..."
                />
                {formErrors.message && <span className="text-rose-500 text-xxs font-bold mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{formErrors.message}</span>}
              </div>

              {/* Submit button & Success notification banner inside form */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 justify-between">
                
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto px-6.5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950 text-white font-semibold transition-all duration-300 cursor-pointer shadow-md disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-95"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 stroke-[2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="px-4 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 flex items-center gap-2 text-xs font-bold text-center w-full sm:w-auto"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0 text-emerald-500" />
                      Message sent successfully! ✅
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="px-4 py-2.5 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-450 border border-rose-500/25 flex items-center gap-2 text-xs font-bold text-center w-full sm:w-auto"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                      Failed to send message.
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
