"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Heart, ArrowRight, Calendar, Phone } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { assetManifest } from "@/config/assets";
import { siteConfig } from "@/config/siteConfig";
import { useBooking } from "@/context/BookingContext";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/motion";

export default function AboutPage() {
  const { openBooking } = useBooking();

  return (
    <div className="pt-20 sm:pt-24 pb-14 bg-ivory min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <SectionHeader
          eyebrow="Our Story & Vision"
          title="Hospitality Defined by Purpose: “Dream & Do It”"
          subtitle="Discover how Jezberry Hotel brings contemporary comfort, genuine Nigerian warmth, and an unwavering commitment to guest care in Kubwa, Abuja."
        />
      </div>

      {/* Main Story Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-14">
        {/* Story Section 1: The Essence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInLeft}
            className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-champagne/30 bg-forest-deep"
          >
            <Image
              src={assetManifest.exteriorPortrait.src}
              alt={assetManifest.exteriorPortrait.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-forest-deep/85 backdrop-blur-md border border-champagne/25 text-ivory">
              <span className="text-[9px] uppercase tracking-luxury text-champagne-light font-semibold">
                Kubwa Landmark
              </span>
              <p className="font-serif text-sm sm:text-base font-bold">Jezberry Hotel</p>
              <p className="text-[11px] text-ivory/80">
                3 Chuka Manuel Street, Railview Community, Kubwa, Abuja
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInRight}
            className="lg:col-span-6 space-y-3.5"
          >
            <span className="text-[10px] font-sans font-semibold uppercase tracking-luxury text-champagne-dark">
              Our Heritage & Location
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest leading-snug">
              A Purpose-Built Haven in the Federal Capital Territory
            </h2>
            <p className="text-xs sm:text-[13px] text-charcoal/80 font-sans leading-relaxed">
              Jezberry Hotel was established with a singular ethos captured in our brand motto: <strong>“Dream & Do It.”</strong> We believe that every traveler — whether visiting Abuja for official government business, family celebrations, or personal renewal — deserves a peaceful, meticulously maintained base where aspirations can flourish.
            </p>
            <p className="text-xs sm:text-[13px] text-charcoal/80 font-sans leading-relaxed">
              Situated in the quiet residential enclave of Railview Community, FO1, Kubwa, our hotel offers a peaceful retreat from central Abuja while maintaining swift transit connectivity to city centers, the airport expressway, and regional corridors.
            </p>

            <div className="pt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-ivory-dark border border-warmgrey-border/40">
                <Heart className="w-4 h-4 text-forest mb-1.5" />
                <h4 className="font-serif font-bold text-forest text-xs">Authentic Care</h4>
                <p className="text-[11px] text-charcoal/70 mt-0.5">
                  Rooted in respectful Nigerian hospitality where every guest is valued as family.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-ivory-dark border border-warmgrey-border/40">
                <ShieldCheck className="w-4 h-4 text-forest mb-1.5" />
                <h4 className="font-serif font-bold text-forest text-xs">Secure Comfort</h4>
                <p className="text-[11px] text-charcoal/70 mt-0.5">
                  Gated perimeter, 24-hour guard personnel, and uninterrupted standby power.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Story Section 2: Crafting Spaces */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInRight}
            className="lg:col-span-6 lg:order-2 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-champagne/30 bg-forest-deep"
          >
            <Image
              src="/images/rooms/suite-illuminated-wardrobe.png"
              alt="Jezberry Suites interior design"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInLeft}
            className="lg:col-span-6 lg:order-1 space-y-3.5"
          >
            <span className="text-[10px] font-sans font-semibold uppercase tracking-luxury text-champagne-dark">
              Attention to Detail
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest leading-snug">
              Modern Aesthetics Meets Restful Utility
            </h2>
            <p className="text-xs sm:text-[13px] text-charcoal/80 font-sans leading-relaxed">
              We reject impersonal hotel rooms. Each tier at Jezberry has been designed with tactile materials: fluted timber wall paneling, acoustic geometric headboards, halo vanity mirrors, and designer lighting fixtures that create soothing ambiance.
            </p>
            <p className="text-xs sm:text-[13px] text-charcoal/80 font-sans leading-relaxed">
              From our flagship suites with illuminated glass wardrobes to our quiet Standard rooms, our accommodations are cleaned with hotel-grade sanitization protocols and refreshed daily.
            </p>

            <div className="pt-1">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-champagne-dark transition-colors group"
              >
                <span>Explore Accommodation Tiers</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Compact Brand Promise Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="p-6 sm:p-8 rounded-2xl bg-forest text-ivory border border-champagne/30 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-surface text-champagne-light text-[10px] font-semibold uppercase tracking-wider border border-champagne/20">
            <Sparkles className="w-3 h-3 text-champagne" />
            <span>The Jezberry Commitment</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-ivory max-w-2xl mx-auto leading-snug">
            “To provide every visitor with a dignified, comfortable, and memorable stay in Abuja.”
          </h3>

          <p className="text-xs text-ivory/80 max-w-xl mx-auto font-sans leading-relaxed">
            Whether reserving directly with our front desk or via our verified travel partners, our dedicated team is at your service.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openBooking()}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-champagne text-forest-deep text-xs font-bold uppercase tracking-wider hover:bg-champagne-light transition-all shadow-gold active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Choose How to Book</span>
            </button>
            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-forest-surface text-ivory text-xs font-bold uppercase tracking-wider hover:bg-forest-light border border-champagne/30 transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-champagne" />
              <span>Call Reception</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
