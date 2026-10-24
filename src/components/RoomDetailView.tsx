"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Bed,
  Users,
  Wind,
  Wifi,
  Sparkles,
  Phone,
  Maximize2,
} from "lucide-react";
import { RoomType, GalleryItem } from "@/types";
import { useBooking } from "@/context/BookingContext";
import { Lightbox } from "@/components/Lightbox";
import { siteConfig } from "@/config/siteConfig";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/motion";

interface RoomDetailViewProps {
  room: RoomType;
}

export const RoomDetailView: React.FC<RoomDetailViewProps> = ({ room }) => {
  const { openBooking } = useBooking();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxItems: GalleryItem[] = room.galleryImages.map((img, idx) => ({
    id: `${room.id}-${idx}`,
    src: img,
    alt: `${room.name} photograph ${idx + 1}`,
    title: `${room.name} View ${idx + 1}`,
    category: "rooms",
  }));

  return (
    <div className="pt-20 sm:pt-24 pb-14 bg-ivory min-h-screen">
      {/* Breadcrumb Back Link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5">
        <Link
          href="/rooms"
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-forest/70 hover:text-forest transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Rooms</span>
        </Link>
      </div>

      {/* Main Room Stage */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Visual Gallery Stage */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="lg:col-span-7 space-y-3"
          >
            {/* Primary Image */}
            <div
              onClick={() => setLightboxIndex(0)}
              className="group relative aspect-[16/10] sm:aspect-[4/3] max-h-[420px] rounded-2xl overflow-hidden bg-forest-deep shadow-lg border border-champagne/30 cursor-pointer"
            >
              <Image
                src={room.primaryImage}
                alt={room.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-forest-deep/85 backdrop-blur-md text-champagne-light text-[10px] font-sans font-semibold uppercase tracking-wider border border-champagne/25">
                  <Sparkles className="w-2.5 h-2.5 text-champagne" />
                  {room.category}
                </span>
              </div>

              <div className="absolute bottom-3 right-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-charcoal-dark/80 backdrop-blur-sm text-ivory text-[10.5px] font-medium">
                  <Maximize2 className="w-3 h-3 text-champagne" />
                  <span>Click to Expand</span>
                </span>
              </div>
            </div>

            {/* Thumbnail Row */}
            {room.galleryImages.length > 1 && (
              <div className="grid grid-cols-3 gap-2.5">
                {room.galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className="relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer border border-warmgrey-border/50 hover:border-champagne transition-all shadow-sm group bg-forest-deep"
                  >
                    <Image
                      src={img}
                      alt={`${room.name} thumbnail ${idx + 1}`}
                      fill
                      sizes="33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-forest-deep/10 group-hover:bg-transparent transition-colors" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Column: Room Details & Action */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3.5">
              <div>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-luxury text-champagne-dark block">
                  {room.tagline}
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-forest leading-tight mt-0.5">
                  {room.name}
                </h1>
              </div>

              <p className="text-xs sm:text-[13px] text-charcoal/80 leading-relaxed font-sans font-light">
                {room.longDescription}
              </p>

              {/* Room Specifications Quick Bar */}
              <div className="grid grid-cols-2 gap-2 py-3 border-t border-b border-warmgrey-border/40 text-[11px] sm:text-xs text-charcoal">
                <div className="flex items-center gap-1.5">
                  <Bed className="w-3.5 h-3.5 text-forest" />
                  <span><strong>Bed:</strong> {room.bedType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-forest" />
                  <span><strong>Guests:</strong> {room.occupancy}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-forest" />
                  <span>Individual Split AC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5 text-forest" />
                  <span>Complimentary Wi-Fi</span>
                </div>
              </div>

              {/* Room Features */}
              <div>
                <h3 className="font-serif text-sm font-bold text-forest mb-2">
                  Room Fixtures & Comforts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-charcoal/80">
                      <CheckCircle2 className="w-3 h-3 text-forest flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Box */}
              <div className="p-3.5 rounded-xl bg-ivory-dark border border-warmgrey-border/40">
                <span className="text-[9.5px] uppercase tracking-luxury text-forest font-semibold block mb-1">
                  Property Highlights
                </span>
                <ul className="space-y-1 text-[11px] text-charcoal/75">
                  {room.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-champagne flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Booking Callout */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => openBooking(room.name)}
                className="w-full py-3 rounded-xl bg-forest text-ivory font-sans font-bold text-xs uppercase tracking-wider hover:bg-champagne hover:text-charcoal transition-all shadow-sm hover:shadow-gold flex items-center justify-center gap-2 active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book This Room</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-charcoal/70 px-1">
                <span>Desk Phone:</span>
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  className="font-semibold text-forest hover:text-champagne-dark inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>{siteConfig.contact.primaryPhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Accessible Photo Lightbox */}
      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};
