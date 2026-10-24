"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Calendar,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { MapEmbed } from "@/components/MapEmbed";
import { siteConfig } from "@/config/siteConfig";
import { useBooking } from "@/context/BookingContext";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "@/lib/motion";

export default function ContactPage() {
  const { openBooking } = useBooking();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Room Reservation Inquiry",
    message: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(siteConfig.addresses.primary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-20 sm:pt-24 pb-14 bg-ivory min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <SectionHeader
          eyebrow="Contact & Location"
          title="We Are Always Ready to Welcome You"
          subtitle="Whether you need driving directions, want to enquire about room availability, or are planning an extended stay in Kubwa, Abuja, our front desk team is at your disposal."
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Compact Contact Info Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Primary Phone */}
          <motion.div variants={fadeInUp} className="p-5 rounded-2xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-forest text-champagne flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-[9.5px] uppercase tracking-luxury text-forest/70 font-semibold block">
                Direct Phone
              </span>
              <h3 className="font-serif text-base font-bold text-forest">Call Us</h3>
              <div className="space-y-1 pt-0.5 text-xs">
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  className="block font-semibold text-charcoal hover:text-champagne-dark transition-colors"
                >
                  {siteConfig.contact.primaryPhone}
                </a>
                <a
                  href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                  className="block font-semibold text-charcoal hover:text-champagne-dark transition-colors"
                >
                  {siteConfig.contact.secondaryPhone}
                </a>
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-warmgrey-border/30">
              <span className="text-[10px] text-charcoal/60">Available 24/7 Daily</span>
            </div>
          </motion.div>

          {/* WhatsApp Direct */}
          <motion.div variants={fadeInUp} className="p-5 rounded-2xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-forest text-champagne flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="text-[9.5px] uppercase tracking-luxury text-forest/70 font-semibold block">
                Instant Chat
              </span>
              <h3 className="font-serif text-base font-bold text-forest">WhatsApp Desk</h3>
              <p className="text-[11px] text-charcoal/70 leading-snug">
                Direct chat with front desk management for swift answers.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-warmgrey-border/30 space-y-1.5">
              <a
                href={siteConfig.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-forest text-ivory text-[10.5px] font-semibold hover:bg-forest-light transition-colors active:scale-95"
              >
                <span>Chat WhatsApp</span>
              </a>
              <a
                href={siteConfig.contact.secondaryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-ivory text-charcoal text-[10.5px] font-semibold hover:bg-white border border-warmgrey-border/40 transition-colors active:scale-95"
              >
                <span>Chat Line 2</span>
              </a>
            </div>
          </motion.div>

          {/* Email Address */}
          <motion.div variants={fadeInUp} className="p-5 rounded-2xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-forest text-champagne flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-[9.5px] uppercase tracking-luxury text-forest/70 font-semibold block">
                Email
              </span>
              <h3 className="font-serif text-base font-bold text-forest">Send Email</h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block text-xs font-semibold text-charcoal hover:text-champagne-dark break-all transition-colors"
              >
                {siteConfig.contact.email}
              </a>
              <p className="text-[11px] text-charcoal/70 leading-snug">
                For corporate stays, quotes, and extended agreements.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-warmgrey-border/30">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[11px] font-semibold text-forest hover:underline"
              >
                Compose Email &rarr;
              </a>
            </div>
          </motion.div>

          {/* Physical Address */}
          <motion.div variants={fadeInUp} className="p-5 rounded-2xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-forest text-champagne flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[9.5px] uppercase tracking-luxury text-forest/70 font-semibold block">
                Location
              </span>
              <h3 className="font-serif text-base font-bold text-forest">Kubwa, Abuja</h3>
              <p className="text-[11px] text-charcoal/80 leading-relaxed">
                {siteConfig.addresses.primary}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-warmgrey-border/30 flex items-center justify-between text-[11px]">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 font-semibold text-forest hover:text-champagne-dark transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-champagne-dark" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-champagne" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href={siteConfig.maps.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-champagne-dark hover:underline"
              >
                Google Maps &rarr;
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Location Map */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
        >
          <MapEmbed />
        </motion.div>

        {/* Compact Form & Notes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInLeft}
            className="lg:col-span-7 p-5 sm:p-7 rounded-2xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm"
          >
            <span className="text-[10px] uppercase tracking-luxury text-champagne-dark font-semibold block mb-0.5">
              Direct Message
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest mb-2">
              Send an Inquiry to Our Team
            </h3>
            <p className="text-xs text-charcoal/75 mb-4 font-sans leading-relaxed">
              Fill out this quick form and our guest relations team will respond promptly.
            </p>

            {formSubmitted ? (
              <div className="p-5 rounded-xl bg-forest text-ivory text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-champagne mx-auto" />
                <h4 className="font-serif text-base font-bold">Message Sent!</h4>
                <p className="text-xs text-ivory/80 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. One of our team members at Jezberry Hotel will get back to you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-1 px-3.5 py-1.5 rounded-lg bg-champagne text-forest-deep text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-charcoal mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samuel Adebayo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-ivory border border-warmgrey-border/60 text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-forest transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-charcoal mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. samuel@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-ivory border border-warmgrey-border/60 text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-forest transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-charcoal mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-ivory border border-warmgrey-border/60 text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-forest transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-charcoal mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-ivory border border-warmgrey-border/60 text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-forest transition-all"
                    >
                      <option value="Room Reservation Inquiry">Room Reservation Inquiry</option>
                      <option value="Executive Suite Booking">Executive Suite Booking</option>
                      <option value="Corporate / Group Stay">Corporate / Group Stay</option>
                      <option value="Dining & Catering">Dining & Catering</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-charcoal mb-1">
                    Your Message / Dates of Stay *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Preferred check-in dates, number of guests, or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-ivory border border-warmgrey-border/60 text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-forest transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-lg bg-forest text-ivory text-xs font-bold uppercase tracking-wider hover:bg-forest-light transition-all shadow-sm active:scale-95"
                >
                  <Send className="w-3 h-3" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Travel & Directions Guide */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInRight}
            className="lg:col-span-5 p-5 sm:p-7 rounded-2xl bg-forest text-ivory border border-champagne/30 space-y-3"
          >
            <span className="text-[9.5px] uppercase tracking-luxury text-champagne-light font-semibold block">
              Directions Guide
            </span>
            <h4 className="font-serif text-xl font-bold text-ivory">
              Arriving in Kubwa
            </h4>
            <p className="text-xs text-ivory/80 leading-relaxed font-sans">
              Kubwa is one of Abuja’s prime satellite communities, connected via the Kubwa Expressway.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-ivory/80 border-t border-forest-light">
              <div>
                <strong className="text-champagne block text-[11px]">Landmark:</strong>
                <span className="text-[11px] leading-snug">FO1 behind ECWA Church in Railview Community, near Byazhin axis.</span>
              </div>
              <div>
                <strong className="text-champagne block text-[11px]">Transit:</strong>
                <span className="text-[11px] leading-snug">Approx. 20–25 minutes drive along Kubwa Expressway outside peak traffic.</span>
              </div>
              <div>
                <strong className="text-champagne block text-[11px]">Building Identification:</strong>
                <span className="text-[11px] leading-snug">Modern white/grey panelled facade with gold Jezberry Hotel signage and entrance portico.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openBooking()}
                className="w-full py-2.5 rounded-lg bg-champagne text-forest-deep text-xs font-bold uppercase tracking-wider hover:bg-champagne-light transition-all shadow-gold flex items-center justify-center gap-1.5 active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Choose How to Book</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
