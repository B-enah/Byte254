"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Product Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", topic: "Product Inquiry", message: "" });
    }, 4000);
  };

  return (
    <section id="ContactUs" className="bg-slate-50 dark:bg-black py-20 text-slate-900 dark:text-white border-t border-slate-200 dark:border-zinc-900 font-sans transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-white bg-black dark:text-black dark:bg-white px-3.5 py-1 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Contact Byte254
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 text-sm max-w-lg mx-auto">
            Have questions about product availability, M-Pesa payments, or order status? Send us a message below.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-slate-900 text-white text-center space-y-3 shadow-xl animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-white text-black mx-auto flex items-center justify-center font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold">Message Sent Successfully!</h3>
            <p className="text-zinc-400 text-xs">
              Thank you for contacting Byte254. Our team in Nairobi will respond to your inquiry via email/phone shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Kamau"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-black border border-slate-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-slate-900 dark:focus:border-white transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.co.ke"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-black border border-slate-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-slate-900 dark:focus:border-white transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+254 700 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-black border border-slate-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-slate-900 dark:focus:border-white transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
                  Inquiry Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-black border border-slate-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition"
                >
                  <option value="Product Inquiry">Product Inquiry / Specs</option>
                  <option value="Order & Shipping">Order & Delivery Status</option>
                  <option value="M-Pesa Payment">M-Pesa Payment Issue</option>
                  <option value="Warranty Claim">Warranty Claim</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
                Your Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-50 dark:bg-black border border-slate-300 dark:border-zinc-800 rounded-xl p-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-slate-900 dark:focus:border-white transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-black text-sm uppercase tracking-wider shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition"
            >
              Send Message
            </button>

          </form>
        )}

      </div>
    </section>
  );
}