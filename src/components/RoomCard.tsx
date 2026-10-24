"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bed, Users, Wifi, Wind, Sparkles } from "lucide-react";
import { RoomType } from "@/types";
import { useBooking } from "@/context/BookingContext";

interface RoomCardProps {
  room: RoomType;
  featured?: boolean;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, featured = false }) => {
  const { openBooking } = useBooking();

  return (
    <div
      className={`group flex flex-col bg-ivory rounded-2xl overflow-hidden border border-champagne/20 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
        featured ? "lg:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      {/* Room Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-deep">
        <Image
          src={room.primaryImage}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-forest-deep/85 backdrop-blur-md text-champagne-light text-[10px] font-sans font-semibold uppercase tracking-wider border border-champagne/25">
            <Sparkles className="w-2.5 h-2.5 text-champagne" />
            {room.category}
          </span>
        </div>

        {/* Photo Count Badge */}
        {room.galleryImages.length > 1 && (
          <div className="absolute bottom-2.5 right-2.5 z-10">
            <span className="px-2 py-0.5 rounded-md bg-charcoal-dark/75 backdrop-blur-sm text-ivory text-[9.5px] font-medium tracking-wide">
              {room.galleryImages.length} Real Photos
            </span>
          </div>
        )}
      </div>

      {/* Room Details Container */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          {/* Tagline */}
          <span className="text-[10px] font-sans font-medium uppercase tracking-luxury text-forest/70 block">
            {room.tagline}
          </span>

          {/* Room Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-forest mt-0.5 group-hover:text-champagne-dark transition-colors">
            {room.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-charcoal/75 font-sans mt-1.5 line-clamp-2 leading-relaxed">
            {room.description}
          </p>

          {/* Key Specs Pills */}
          <div className="mt-3 pt-3 border-t border-warmgrey-border/30 flex flex-wrap items-center gap-2.5 text-[11px] text-charcoal/70">
            <div className="inline-flex items-center gap-1">
              <Bed className="w-3 h-3 text-forest" />
              <span>{room.bedType}</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <Users className="w-3 h-3 text-forest" />
              <span>{room.occupancy}</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <Wind className="w-3 h-3 text-forest" />
              <span>AC</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <Wifi className="w-3 h-3 text-forest" />
              <span>Wi-Fi</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 pt-3 border-t border-warmgrey-border/30 flex items-center justify-between gap-2">
          <Link
            href={`/rooms/${room.slug}`}
            className="text-[11px] font-semibold text-forest hover:text-champagne-dark inline-flex items-center gap-1 transition-colors group/link"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
          </Link>

          <button
            onClick={() => openBooking(room.name)}
            className="px-3.5 py-1.5 rounded-lg bg-forest text-ivory text-[11px] font-semibold uppercase tracking-wider hover:bg-champagne hover:text-charcoal transition-all shadow-sm active:scale-95"
          >
            Book Room
          </button>
        </div>
      </div>
    </div>
  );
};
