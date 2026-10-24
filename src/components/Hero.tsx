"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { assetManifest } from "@/config/assets";
import { useBooking } from "@/context/BookingContext";
import { fadeInUp, staggerContainer, heroImageReveal } from "@/lib/motion";

export const Hero: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section className="relative w-full h-[84vh] min-h-[540px] max-h-[720px] flex items-center justify-center overflow-hidden bg-forest-deep">
      {/* Background Exterior Image with Cinematic Reveal */}
      <motion.div
        variants={heroImageReveal}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
      >
        <Image
          src={assetManifest.heroExterior.src}
          alt={assetManifest.heroExterior.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />

        {/* Subtle Dual Overlays for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-charcoal-dark/65" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-forest-deep/30 to-forest-deep/75" />
      </motion.div>

      {/* Decorative Border Frame */}
      <div className="absolute inset-x-6 top-16 bottom-8 pointer-events-none hidden md:block border border-champagne/15 rounded-2xl" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center pt-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-2xl"
        >
          {/* Location Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-surface/85 backdrop-blur-md border border-champagne/30 text-champagne-light shadow-sm mb-3.5"
          >
            <MapPin className="w-3 h-3 text-champagne" />
            <span className="font-sans text-[10px] font-semibold tracking-luxury uppercase">
              {siteConfig.locationLabel}
            </span>
          </motion.div>

          {/* Hotel Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight leading-[1.15] drop-shadow-sm text-balance"
          >
            Stay Well. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory via-champagne-light to-champagne">
              Dream Bigger.
            </span>
          </motion.h1>

          {/* Brand Tagline */}
          <motion.div
            variants={fadeInUp}
            className="mt-2 flex items-center gap-2.5 text-champagne font-sans text-xs font-semibold tracking-widest uppercase"
          >
            <span className="w-5 h-[1px] bg-champagne/40" />
            <span>{siteConfig.tagline}</span>
            <span className="w-5 h-[1px] bg-champagne/40" />
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeInUp}
            className="mt-3.5 text-xs sm:text-sm text-ivory/85 font-sans max-w-lg leading-relaxed font-light"
          >
            {siteConfig.subheadline}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          >
            <Link
              href="/rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-ivory text-forest-deep font-sans font-bold text-[11px] uppercase tracking-wider hover:bg-champagne-light hover:text-forest-deep transition-all duration-200 shadow hover:shadow-gold group active:scale-95"
            >
              <span>Explore Our Rooms</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => openBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-champagne text-forest-deep font-sans font-bold text-[11px] uppercase tracking-wider hover:bg-champagne-light transition-all duration-200 shadow-gold active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Stay</span>
            </button>
          </motion.div>

          {/* Compact Highlights Bar */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 pt-5 border-t border-champagne/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center w-full"
          >
            <div>
              <span className="block font-serif text-base sm:text-lg font-bold text-champagne">
                4 Tiers
              </span>
              <span className="text-[10px] text-ivory/65 uppercase tracking-subtle">
                Tailored Rooms
              </span>
            </div>
            <div>
              <span className="block font-serif text-base sm:text-lg font-bold text-champagne">
                Local & World
              </span>
              <span className="text-[10px] text-ivory/65 uppercase tracking-subtle">
                Fresh Delicacies
              </span>
            </div>
            <div>
              <span className="block font-serif text-base sm:text-lg font-bold text-champagne">
                24/7 Desk
              </span>
              <span className="text-[10px] text-ivory/65 uppercase tracking-subtle">
                Secure & Gated
              </span>
            </div>
            <div>
              <span className="block font-serif text-base sm:text-lg font-bold text-champagne">
                Kubwa, Abuja
              </span>
              <span className="text-[10px] text-ivory/65 uppercase tracking-subtle">
                Railview Community
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
