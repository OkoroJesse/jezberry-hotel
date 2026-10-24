"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wifi,
  Clock,
  Car,
  UtensilsCrossed,
  Wind,
  Sparkles,
  ShieldCheck,
  Coffee,
  Waves,
  HelpCircle,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/config/siteConfig";
import { useBooking } from "@/context/BookingContext";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function FacilitiesPage() {
  const { openBooking } = useBooking();

  return (
    <div className="pt-20 sm:pt-24 pb-14 bg-ivory min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <SectionHeader
          eyebrow="Hotel Amenities"
          title="Carefully Maintained Facilities for Your Comfort"
          subtitle="Every facility at Jezberry Hotel is maintained to ensure a restful, hassle-free stay in Kubwa, Abuja. We prioritize genuine convenience, reliable power, security, and attentive service."
        />
      </div>

      {/* Main Facilities Feature Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Verified Amenities Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-lg bg-forest text-champagne flex items-center justify-center">
              <Wifi className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-forest">High-Speed Wi-Fi</h3>
            <p className="text-xs text-charcoal/75 leading-relaxed font-sans">
              Complimentary internet connectivity across guest rooms, dining halls, and lounges for business and streaming.
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] text-forest font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
              <span>Full Coverage</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-lg bg-forest text-champagne flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-forest">24/7 Front Desk</h3>
            <p className="text-xs text-charcoal/75 leading-relaxed font-sans">
              Round-the-clock receptionists for late arrivals, local transport coordination, and immediate guest assistance.
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] text-forest font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
              <span>Always Attentive</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-lg bg-forest text-champagne flex items-center justify-center">
              <Car className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-forest">Secure On-Site Parking</h3>
            <p className="text-xs text-charcoal/75 leading-relaxed font-sans">
              Gated on-premises parking directly in front of the hotel entrance, guarded day and night with ample space.
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] text-forest font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
              <span>Gated & Guarded</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-lg bg-forest text-champagne flex items-center justify-center">
              <Wind className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-forest">Individual Split AC</h3>
            <p className="text-xs text-charcoal/75 leading-relaxed font-sans">
              Modern remote-controlled air conditioning in every room, backed by auxiliary hotel power for steady cooling.
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] text-forest font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
              <span>Individual Control</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-lg bg-forest text-champagne flex items-center justify-center">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-forest">In-House Dining</h3>
            <p className="text-xs text-charcoal/75 leading-relaxed font-sans">
              Authentic local delicacies including Efo Riro with pounded yam, whole grilled fish, peppered meats, and continental items.
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] text-forest font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
              <span>Freshly Prepared</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-lg bg-forest text-champagne flex items-center justify-center">
              <Coffee className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-forest">Breakfast & Beverage Bar</h3>
            <p className="text-xs text-charcoal/75 leading-relaxed font-sans">
              Natural fruit juice dispensers, infused lemon-mint water, hot beverage selections, and continental breakfast options.
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] text-forest font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
              <span>Morning Service</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-lg bg-forest text-champagne flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-forest">Housekeeping & Laundry</h3>
            <p className="text-xs text-charcoal/75 leading-relaxed font-sans">
              Daily linen refreshment, sanitization, room maintenance, and same-day dry cleaning / laundry service upon request.
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] text-forest font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
              <span>Daily Housekeeping</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-lg bg-forest text-champagne flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-forest">24/7 Security & Lighting</h3>
            <p className="text-xs text-charcoal/75 leading-relaxed font-sans">
              Gated entrance, comprehensive perimeter illumination, and dedicated security guards ensuring a safe and serene environment.
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] text-forest font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
              <span>Safe & Monitored</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Compact Verification Transparency Notice */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="p-5 sm:p-7 rounded-2xl bg-forest text-ivory border border-champagne/30"
        >
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-forest-surface text-champagne-light text-[10px] font-semibold uppercase tracking-wider border border-champagne/20">
              <HelpCircle className="w-3 h-3 text-champagne" />
              <span>Verification Transparency</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory">
              Facilities Verification Notice
            </h3>

            <p className="text-xs text-ivory/85 leading-relaxed font-sans">
              To uphold high hospitality standards, Jezberry Hotel only advertises facilities that are physically confirmed on property.
            </p>

            <div className="p-3.5 rounded-xl bg-forest-deep/80 border border-champagne/20 space-y-1.5 text-xs text-ivory/80">
              <div className="flex items-center gap-1.5 text-champagne font-semibold text-[11px]">
                <Waves className="w-3.5 h-3.5" />
                <span>Pool Access Note:</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Certain third-party online booking aggregators list swimming pool access for Jezberry Hotel. We recommend confirming pool availability with our front desk directly at{" "}
                <a href={`tel:${siteConfig.contact.primaryPhoneRaw}`} className="text-champagne font-bold underline">
                  {siteConfig.contact.primaryPhone}
                </a>{" "}
                prior to arrival.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Booking CTA */}
        <div className="text-center pt-2">
          <button
            onClick={() => openBooking()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest text-ivory text-xs font-bold uppercase tracking-wider hover:bg-champagne hover:text-charcoal transition-all shadow-sm active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Your Stay at Jezberry Hotel</span>
          </button>
        </div>
      </div>
    </div>
  );
}
