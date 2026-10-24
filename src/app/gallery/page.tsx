"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, Calendar } from "lucide-react";
import { galleryData } from "@/config/galleryData";
import { SectionHeader } from "@/components/SectionHeader";
import { Lightbox } from "@/components/Lightbox";
import { useBooking } from "@/context/BookingContext";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function GalleryPage() {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "exterior", label: "Exterior" },
    { id: "rooms", label: "Rooms & Suites" },
    { id: "dining", label: "Dining" },
    { id: "facilities", label: "Ensuite & Details" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20 sm:pt-24 pb-14 bg-ivory min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <SectionHeader
          eyebrow="Visual Portfolio"
          title="The Jezberry Hotel Photo Gallery"
          subtitle="Explore genuine photography of our property in Kubwa, Abuja — including the architectural exterior, bespoke guest rooms, ensuite rain showers, and culinary creations."
        />

        {/* Compact Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? "bg-forest text-ivory shadow-sm"
                  : "bg-ivory-dark text-charcoal/80 hover:bg-forest/10 border border-warmgrey-border/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {filteredItems.map((item) => {
            const globalIndex = galleryData.findIndex((g) => g.id === item.id);
            const isLandscape = item.aspect === "landscape";
            const isPortrait = item.aspect === "portrait";

            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                onClick={() => setLightboxIndex(globalIndex)}
                className={`group relative rounded-xl overflow-hidden bg-forest-deep shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-champagne/20 ${
                  isLandscape
                    ? "col-span-2 aspect-[16/10]"
                    : isPortrait
                    ? "aspect-[4/5]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-400 ease-out"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-charcoal-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3.5">
                  <span className="text-[9px] uppercase tracking-luxury text-champagne-light font-semibold">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-ivory mt-0.5 leading-snug">
                    {item.title}
                  </h4>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] text-ivory/80">
                    <Maximize2 className="w-3 h-3 text-champagne" />
                    <span>View Full Size</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Booking Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs text-charcoal/70 mb-3">
            Ready to experience Jezberry Hotel in person?
          </p>
          <button
            onClick={() => openBooking()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest text-ivory text-xs font-bold uppercase tracking-wider hover:bg-champagne hover:text-charcoal transition-all shadow-sm active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Choose How to Book</span>
          </button>
        </div>
      </div>

      {/* Accessible Lightbox */}
      <Lightbox
        items={galleryData}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
