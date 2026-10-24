"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Wifi,
  Clock,
  Car,
  UtensilsCrossed,
  Wind,
  Calendar,
  Phone,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { RoomCard } from "@/components/RoomCard";
import { MapEmbed } from "@/components/MapEmbed";
import { roomsData } from "@/config/roomsData";
import { diningData } from "@/config/diningData";
import { galleryData } from "@/config/galleryData";
import { assetManifest } from "@/config/assets";
import { siteConfig } from "@/config/siteConfig";
import { useBooking } from "@/context/BookingContext";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "@/lib/motion";

export default function HomePage() {
  const { openBooking } = useBooking();
  const featuredRooms = roomsData.slice(0, 4);
  const featuredDining = diningData.slice(0, 4);
  const teaserGallery = galleryData.slice(0, 6);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. CINEMATIC HERO SECTION */}
      <Hero />

      {/* 2. WELCOME / PROPERTY ESSENCE SECTION */}
      <section className="py-12 lg:py-16 bg-ivory relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image Composition */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInLeft}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-champagne/30">
                <Image
                  src={assetManifest.exteriorPortrait.src}
                  alt={assetManifest.exteriorPortrait.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-forest-deep/85 backdrop-blur-md border border-champagne/25 text-ivory">
                  <span className="text-[9px] font-sans font-semibold uppercase tracking-luxury text-champagne-light">
                    The Property
                  </span>
                  <p className="font-serif text-sm sm:text-base font-bold">
                    Jezberry Hotel · Kubwa
                  </p>
                  <p className="text-[11px] text-ivory/80">
                    A serene retreat built for business and leisure.
                  </p>
                </div>
              </div>

              {/* Floating Mini Badge */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 p-3.5 rounded-xl bg-forest text-ivory shadow-lg border border-champagne/30 max-w-[210px]">
                <Sparkles className="w-4 h-4 text-champagne mb-1" />
                <p className="font-serif text-xs font-bold leading-tight">“Dream & Do It”</p>
                <p className="text-[10px] text-ivory/80 mt-0.5 leading-snug">
                  Thoughtful Nigerian hospitality crafted with purpose and warmth.
                </p>
              </div>
            </motion.div>

            {/* Right Story & Purpose */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInRight}
              className="lg:col-span-6 space-y-4"
            >
              <span className="text-[10.5px] font-sans font-semibold uppercase tracking-luxury text-champagne-dark">
                Welcome to Jezberry Hotel
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest leading-snug">
                A Refined Haven in the Heart of Kubwa.
              </h2>
              <p className="text-xs sm:text-[13px] text-charcoal/80 leading-relaxed font-sans">
                Set within Abuja’s vibrant satellite city, Jezberry Hotel provides a comfortable, stylish, and secure oasis for travelers visiting the Federal Capital Territory. From our striking modern facade to individually appointed rooms and authentic dining experiences, we ensure your stay is seamless.
              </p>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-ivory-dark border border-warmgrey-border/40">
                  <ShieldCheck className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-forest text-xs">
                      Peace of Mind
                    </h4>
                    <p className="text-[11px] text-charcoal/70 mt-0.5">
                      Gated grounds with 24/7 dedicated security personnel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-ivory-dark border border-warmgrey-border/40">
                  <UtensilsCrossed className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-forest text-xs">
                      Culinary Pride
                    </h4>
                    <p className="text-[11px] text-charcoal/70 mt-0.5">
                      Freshly prepared Nigerian delicacies and continental meals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-ivory-dark border border-warmgrey-border/40">
                  <Wind className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-forest text-xs">
                      Climate Comfort
                    </h4>
                    <p className="text-[11px] text-charcoal/70 mt-0.5">
                      Individual split AC in all rooms and public spaces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-ivory-dark border border-warmgrey-border/40">
                  <Clock className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-forest text-xs">
                      24-Hour Desk
                    </h4>
                    <p className="text-[11px] text-charcoal/70 mt-0.5">
                      Warm, attentive team on hand around the clock.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-champagne-dark transition-colors group"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ROOMS & SUITES */}
      <section className="py-12 lg:py-16 bg-ivory-dark border-t border-b border-warmgrey-border/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Accommodations"
            title="Curated Rooms for Rest & Renewal"
            subtitle="Explore our four distinct room tiers, each outfitted with custom headboards, ambient mood lighting, crisp linens, and modern ensuite rain showers."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featuredRooms.map((room) => (
              <motion.div key={room.id} variants={fadeInUp}>
                <RoomCard room={room} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest text-ivory text-xs font-bold uppercase tracking-wider hover:bg-champagne hover:text-charcoal transition-all shadow-sm active:scale-95"
            >
              <span>Compare All Room Features & Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DINING & LOCAL DELICACIES SHOWCASE */}
      <section className="py-12 lg:py-16 bg-forest text-ivory relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            theme="dark"
            eyebrow="In-House Dining"
            title="Authentic Nigerian & World Flavors"
            subtitle="From whole grilled fish and rich regional vegetable soups with pounded yam to continental classics and morning breakfast bars, dine with genuine hospitality."
          />

          {/* Compact Editorial Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {featuredDining.map((dish) => (
              <motion.div
                key={dish.id}
                variants={fadeInUp}
                className="group flex flex-col bg-forest-surface rounded-xl overflow-hidden border border-champagne/20 hover:border-champagne/40 transition-all shadow hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-deep">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-400"
                  />
                  {dish.badge && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded-full bg-forest-deep/90 text-champagne text-[9px] font-sans font-semibold uppercase tracking-wider border border-champagne/25">
                        {dish.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-3.5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-sm font-bold text-ivory group-hover:text-champagne transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <p className="text-[11px] text-ivory/70 mt-1 leading-snug line-clamp-2">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/dining"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-champagne text-forest-deep text-xs font-bold uppercase tracking-wider hover:bg-champagne-light transition-all shadow-gold active:scale-95"
            >
              <span>Explore Complete Dining Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOTEL FACILITIES HIGHLIGHTS */}
      <section className="py-12 lg:py-16 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Property Highlights"
            title="Thoughtful Amenities for Every Guest"
            subtitle="Verified on-site facilities designed to make your Kubwa stay comfortable, productive, and secure."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-forest text-champagne flex items-center justify-center">
                <Wifi className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm font-bold text-forest">High-Speed Wi-Fi</h3>
              <p className="text-[11px] text-charcoal/70 leading-relaxed">
                Reliable connectivity throughout guest rooms, lounge, and dining hall.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-forest text-champagne flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm font-bold text-forest">24/7 Front Desk</h3>
              <p className="text-[11px] text-charcoal/70 leading-relaxed">
                Around-the-clock reception team for check-ins, local transport, and assistance.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-forest text-champagne flex items-center justify-center">
                <Car className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm font-bold text-forest">Secure Parking</h3>
              <p className="text-[11px] text-charcoal/70 leading-relaxed">
                Complimentary gated on-site parking with active perimeter security personnel.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-5 rounded-xl bg-ivory-dark border border-warmgrey-border/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-forest text-champagne flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm font-bold text-forest">Bar & Dining</h3>
              <p className="text-[11px] text-charcoal/70 leading-relaxed">
                Breakfast juice bar, freshly prepared delicacies, grilled feasts, and wine.
              </p>
            </motion.div>
          </motion.div>

          <div className="mt-7 text-center">
            <Link
              href="/facilities"
              className="text-xs font-bold text-forest hover:text-champagne-dark uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
            >
              <span>View All Hotel Facilities</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PROPERTY PHOTO GALLERY TEASER */}
      <section className="py-12 lg:py-16 bg-ivory-dark border-t border-warmgrey-border/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Visual Tour"
            title="Captured Moments at Jezberry"
            subtitle="Browse real photographs of our exterior facade, room interiors, culinary creations, and architectural details."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {teaserGallery.map((item) => (
              <motion.div key={item.id} variants={fadeInUp}>
                <Link
                  href="/gallery"
                  className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow transition-all block"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-400"
                  />
                  <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/60 transition-colors flex items-center justify-center p-2 text-center opacity-0 group-hover:opacity-100">
                    <span className="text-[10px] font-medium text-ivory line-clamp-2">
                      {item.title}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-7 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest text-ivory text-xs font-bold uppercase tracking-wider hover:bg-champagne hover:text-charcoal transition-all shadow-sm active:scale-95"
            >
              <span>Open Complete Photo Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. LOCATION & MAP SECTION */}
      <section className="py-12 lg:py-16 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Location"
            title="Prime Kubwa, Abuja Setting"
            subtitle="Nestled in Railview Community with straightforward access to Abuja city center, major transportation links, and regional corridors."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
          >
            <MapEmbed />
          </motion.div>
        </div>
      </section>

      {/* 8. RESERVATION CALLOUT BANNER */}
      <section className="py-12 bg-forest-deep text-ivory border-t border-champagne/20 relative overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10"
        >
          <span className="text-[10px] uppercase tracking-luxury text-champagne font-semibold block mb-1">
            Experience Jezberry
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">
            Ready for a Memorable Stay in Kubwa?
          </h2>
          <p className="mt-2 text-xs sm:text-[13px] text-ivory/80 max-w-lg mx-auto leading-relaxed">
            Reserve through our verified travel partners or connect directly with our front desk team for seamless arrangements.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-champagne text-forest-deep font-sans font-bold text-xs uppercase tracking-wider hover:bg-champagne-light transition-all shadow-gold active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Choose How to Book</span>
            </button>

            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-forest text-ivory font-sans font-bold text-xs uppercase tracking-wider hover:bg-forest-light border border-champagne/30 transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-champagne" />
              <span>Call Reception</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
