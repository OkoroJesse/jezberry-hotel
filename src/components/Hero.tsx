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
    <section className="relative w-full h-[100dvh] min-h-[640px] flex items-center justify-center overflow-hidden bg-forest-deep">
      {/* Background Exterior Image - Full Screen, Non-Zoomed, Centered on Upper Facade */}
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
          className="object-cover object-[center_25%]"
        />

        {/* Cinematic Dual Overlays for Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-charcoal-dark/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-forest-deep/30 to-forest-deep/80" />
      </motion.div>

      {/* Decorative Border Frame */}
      <div className="absolute inset-x-6 sm:inset-x-10 top-20 sm:top-24 bottom-8 sm:bottom-10 pointer-events-none hidden md:block border border-champagne/15 rounded-3xl" />

      {/* Hero Content Stage */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16 sm:pt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-3xl"
        >
          {/* Location Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-surface/85 backdrop-blur-md border border-champagne/35 text-champagne-light shadow-sm mb-4 sm:mb-5"
          >
            <MapPin className="w-3.5 h-3.5 text-champagne animate-pulse" />
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-luxury uppercase">
              {siteConfig.locationLabel}
            </span>
          </motion.div>

          {/* Hotel Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ivory tracking-tight leading-[1.12] drop-shadow-md text-balance"
          >
            Stay Well. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory via-champagne-light to-champagne">
              Dream Bigger.
            </span>
          </motion.h1>

          {/* Brand Tagline */}
          <motion.div
            variants={fadeInUp}
            className="mt-2.5 sm:mt-3 flex items-center gap-3 text-champagne font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase"
          >
            <span className="w-7 h-[1px] bg-champagne/50" />
            <span>{siteConfig.tagline}</span>
            <span className="w-7 h-[1px] bg-champagne/50" />
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeInUp}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-ivory/90 font-sans max-w-xl leading-relaxed font-light"
          >
            {siteConfig.subheadline}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={fadeInUp}
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            <Link
              href="/rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-ivory text-forest-deep font-sans font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-champagne-light hover:text-forest-deep transition-all duration-300 shadow-lg hover:shadow-gold group active:scale-95"
            >
              <span>Explore Our Rooms</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => openBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-champagne text-forest-deep font-sans font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-champagne-light transition-all duration-300 shadow-gold group active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>
          </motion.div>

          {/* Highlights Bar */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-champagne/20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-center w-full"
          >
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-champagne">
                4 Tiers
              </span>
              <span className="text-[11px] sm:text-xs text-ivory/70 uppercase tracking-subtle mt-0.5 block">
                Tailored Rooms
              </span>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-champagne">
                Local & World
              </span>
              <span className="text-[11px] sm:text-xs text-ivory/70 uppercase tracking-subtle mt-0.5 block">
                Fresh Delicacies
              </span>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-champagne">
                24/7 Desk
              </span>
              <span className="text-[11px] sm:text-xs text-ivory/70 uppercase tracking-subtle mt-0.5 block">
                Secure & Gated
              </span>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-champagne">
                Kubwa, Abuja
              </span>
              <span className="text-[11px] sm:text-xs text-ivory/70 uppercase tracking-subtle mt-0.5 block">
                Railview Community
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
