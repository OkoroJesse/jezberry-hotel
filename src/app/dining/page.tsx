"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, Info, Calendar } from "lucide-react";
import { diningData } from "@/config/diningData";
import { SectionHeader } from "@/components/SectionHeader";
import { Lightbox } from "@/components/Lightbox";
import { useBooking } from "@/context/BookingContext";
import { GalleryItem } from "@/types";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "@/lib/motion";

export default function DiningPage() {
  const { openBooking } = useBooking();
  const [filter, setFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredDishes =
    filter === "all"
      ? diningData
      : diningData.filter((d) => d.category === filter);

  const galleryItems: GalleryItem[] = diningData.map((d) => ({
    id: d.id,
    src: d.image,
    alt: d.name,
    title: d.name,
    category: "dining",
  }));

  return (
    <div className="pt-20 sm:pt-24 pb-14 bg-ivory min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <SectionHeader
          eyebrow="Culinary Experience"
          title="Authentic Flavors, Local Delicacies & World Classics"
          subtitle="From whole spiced grilled fish and traditional Nigerian vegetable soups to hearty breakfasts and continental pasta, dining at Jezberry Hotel is rooted in fresh ingredients and generous hospitality."
        />

        {/* Compact Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all ${
              filter === "all"
                ? "bg-forest text-ivory shadow-sm"
                : "bg-ivory-dark text-charcoal/80 hover:bg-forest/10 border border-warmgrey-border/50"
            }`}
          >
            All Dishes
          </button>
          <button
            onClick={() => setFilter("delicacy")}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all ${
              filter === "delicacy"
                ? "bg-forest text-ivory shadow-sm"
                : "bg-ivory-dark text-charcoal/80 hover:bg-forest/10 border border-warmgrey-border/50"
            }`}
          >
            Nigerian Delicacies
          </button>
          <button
            onClick={() => setFilter("continental")}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all ${
              filter === "continental"
                ? "bg-forest text-ivory shadow-sm"
                : "bg-ivory-dark text-charcoal/80 hover:bg-forest/10 border border-warmgrey-border/50"
            }`}
          >
            Continental & Rice
          </button>
          <button
            onClick={() => setFilter("specialty")}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all ${
              filter === "specialty"
                ? "bg-forest text-ivory shadow-sm"
                : "bg-ivory-dark text-charcoal/80 hover:bg-forest/10 border border-warmgrey-border/50"
            }`}
          >
            Grills, Platters & Wine
          </button>
          <button
            onClick={() => setFilter("breakfast")}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all ${
              filter === "breakfast"
                ? "bg-forest text-ivory shadow-sm"
                : "bg-ivory-dark text-charcoal/80 hover:bg-forest/10 border border-warmgrey-border/50"
            }`}
          >
            Breakfast Station
          </button>
        </div>
      </div>

      {/* Compact Featured Anchor Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-forest text-ivory rounded-2xl p-5 sm:p-7 border border-champagne/30 shadow-lg overflow-hidden"
        >
          <div
            className="lg:col-span-6 relative aspect-[16/10] max-h-[300px] rounded-xl overflow-hidden shadow bg-forest-deep cursor-pointer group"
            onClick={() => {
              const idx = diningData.findIndex((d) => d.id === "grilled-fish-feast");
              if (idx !== -1) setLightboxIndex(idx);
            }}
          >
            <Image
              src="/images/dining/grilled-fish-bbq-platter.png"
              alt="Chef's Grilled Fish & Nigerian BBQ Feast at Jezberry Hotel"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded-full bg-forest-deep/90 text-champagne text-[10px] font-semibold uppercase tracking-wider border border-champagne/25">
                Chef's Signature
              </span>
            </div>
            <div className="absolute bottom-2.5 right-2.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-charcoal-dark/80 backdrop-blur-sm text-ivory text-[10px] font-medium">
                <Maximize2 className="w-3 h-3 text-champagne" />
                <span>View Full Size</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <span className="text-[10px] uppercase tracking-luxury text-champagne-light font-semibold block">
              The Dining Highlight
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory leading-snug">
              Grilled Delicacies & Rich Local Stews
            </h3>
            <p className="text-xs text-ivory/85 leading-relaxed font-sans">
              Experience the genuine warmth of Nigerian hospitality through our signature platters. Our whole grilled fish is spiced with aromatic herbs and accompanied by crispy golden fries, fresh garden coleslaw, house-blended chili sauce, and golden puff-puff.
            </p>

            <div className="pt-1.5 grid grid-cols-2 gap-3 text-xs text-ivory/80 border-t border-forest-light">
              <div>
                <strong className="block text-champagne font-semibold text-[11px] mb-0.5">Local Stews & Swallow:</strong>
                <span className="text-[11px] leading-snug">Pounded yam paired with authentic, nutrient-rich Efo Riro vegetable soup.</span>
              </div>
              <div>
                <strong className="block text-champagne font-semibold text-[11px] mb-0.5">Evening Lounge:</strong>
                <span className="text-[11px] leading-snug">Barbecue cuts, peppered meats, and fine wine selections.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Compact Editorial Food Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredDishes.map((dish) => {
            const originalIndex = diningData.findIndex((d) => d.id === dish.id);
            return (
              <motion.div
                key={dish.id}
                variants={fadeInUp}
                className="group flex flex-col bg-ivory-dark rounded-xl overflow-hidden border border-warmgrey-border/40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  onClick={() => setLightboxIndex(originalIndex)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-forest-deep cursor-pointer"
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-400 ease-out"
                  />
                  {dish.badge && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded-full bg-forest-deep/85 backdrop-blur-md text-champagne text-[9.5px] font-sans font-semibold uppercase tracking-wider border border-champagne/25">
                        {dish.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-charcoal-dark/80 text-ivory text-[9.5px]">
                      <Maximize2 className="w-2.5 h-2.5 text-champagne" />
                      <span>Expand</span>
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-base font-bold text-forest group-hover:text-champagne-dark transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-charcoal/75 font-sans mt-1 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Verification Note Regarding Complimentary Breakfast */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="mt-10 p-4 rounded-xl bg-ivory border border-champagne/30 flex items-start gap-3 text-xs text-charcoal/80 max-w-2xl mx-auto shadow-sm"
        >
          <Info className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <h4 className="font-serif font-bold text-forest text-xs">
              Breakfast Service Verification
            </h4>
            <p className="text-[11px] leading-relaxed">
              Online partner listings reference complimentary continental breakfast for select rate packages. Please verify specific meal inclusions directly with the front desk team upon booking.
            </p>
          </div>
        </motion.div>

        {/* Booking & Enquiry Callout */}
        <div className="mt-8 text-center">
          <button
            onClick={() => openBooking()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest text-ivory text-xs font-bold uppercase tracking-wider hover:bg-champagne hover:text-charcoal transition-all shadow-sm active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Your Stay with In-House Dining</span>
          </button>
        </div>
      </div>

      {/* Accessible Food Lightbox */}
      <Lightbox
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
