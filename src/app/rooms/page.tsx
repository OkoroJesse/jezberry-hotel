"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Calendar } from "lucide-react";
import { roomsData } from "@/config/roomsData";
import { RoomCard } from "@/components/RoomCard";
import { SectionHeader } from "@/components/SectionHeader";
import { useBooking } from "@/context/BookingContext";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function RoomsPage() {
  const { openBooking } = useBooking();

  return (
    <div className="pt-20 sm:pt-24 pb-14 bg-ivory min-h-screen">
      {/* Header Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <SectionHeader
          eyebrow="Accommodations & Suites"
          title="Designed for Deep Rest & Refined Comfort"
          subtitle="Explore the four room tiers at Jezberry Hotel. Each room is appointed with individual air conditioning, private ensuite rain shower, high-speed Wi-Fi, and custom modern interior finishes."
        />

        {/* Compact Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          <Link
            href="/rooms/standard"
            className="px-3 py-1 rounded-full bg-ivory-dark hover:bg-forest hover:text-ivory text-[11px] font-semibold uppercase tracking-wider text-charcoal border border-warmgrey-border/50 transition-all"
          >
            Standard Room
          </Link>
          <Link
            href="/rooms/luxury"
            className="px-3 py-1 rounded-full bg-ivory-dark hover:bg-forest hover:text-ivory text-[11px] font-semibold uppercase tracking-wider text-charcoal border border-warmgrey-border/50 transition-all"
          >
            Luxury Room
          </Link>
          <Link
            href="/rooms/executive"
            className="px-3 py-1 rounded-full bg-ivory-dark hover:bg-forest hover:text-ivory text-[11px] font-semibold uppercase tracking-wider text-charcoal border border-warmgrey-border/50 transition-all"
          >
            Executive Room
          </Link>
          <Link
            href="/rooms/suites"
            className="px-3 py-1 rounded-full bg-ivory-dark hover:bg-forest hover:text-ivory text-[11px] font-semibold uppercase tracking-wider text-charcoal border border-warmgrey-border/50 transition-all"
          >
            Jezberry Suites
          </Link>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {roomsData.map((room) => (
            <motion.div key={room.id} variants={fadeInUp}>
              <RoomCard room={room} />
            </motion.div>
          ))}
        </motion.div>

        {/* Compact Accommodation Comparison Matrix */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="p-5 sm:p-8 rounded-2xl bg-ivory-dark border border-warmgrey-border/40 shadow-sm"
        >
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[10px] uppercase tracking-luxury text-champagne-dark font-semibold">
              Comparison
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest mt-0.5">
              Accommodation Feature Matrix
            </h3>
            <p className="text-xs text-charcoal/70 mt-1">
              All room features reflect actual verified hotel fixtures and appointments.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-warmgrey-border/70 text-forest">
                  <th className="py-2.5 px-3 font-serif font-bold">Feature / Fixture</th>
                  <th className="py-2.5 px-3 font-serif font-bold">Standard</th>
                  <th className="py-2.5 px-3 font-serif font-bold">Luxury</th>
                  <th className="py-2.5 px-3 font-serif font-bold">Executive</th>
                  <th className="py-2.5 px-3 font-serif font-bold text-champagne-dark">Jezberry Suites</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warmgrey-border/30 text-charcoal/80">
                <tr>
                  <td className="py-2.5 px-3 font-medium text-charcoal">Bed Configuration</td>
                  <td className="py-2.5 px-3">Double / King Bed</td>
                  <td className="py-2.5 px-3">Deluxe King Bed</td>
                  <td className="py-2.5 px-3">Executive King Bed</td>
                  <td className="py-2.5 px-3 font-semibold text-forest">Presidential King Bed</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-charcoal">Headboard Styling</td>
                  <td className="py-2.5 px-3">Geometric Velvet</td>
                  <td className="py-2.5 px-3">Fluted Wood / Acoustic</td>
                  <td className="py-2.5 px-3">3D Geometric Relief</td>
                  <td className="py-2.5 px-3">Backlit Fluted Panel</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-charcoal">Lighting Ambience</td>
                  <td className="py-2.5 px-3">Bedside LED Sconces</td>
                  <td className="py-2.5 px-3">Concealed Cove LEDs</td>
                  <td className="py-2.5 px-3">Drop Pendant Bulbs</td>
                  <td className="py-2.5 px-3 font-semibold text-forest">Feather Chandelier</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-charcoal">Wardrobe & Storage</td>
                  <td className="py-2.5 px-3">Luggage Racks & Closets</td>
                  <td className="py-2.5 px-3">Multi-door Built-in</td>
                  <td className="py-2.5 px-3">Floating Credenza</td>
                  <td className="py-2.5 px-3 font-semibold text-forest">Illuminated Glass System</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-charcoal">Ensuite Rain Shower</td>
                  <td className="py-2.5 px-3"><Check className="w-3.5 h-3.5 text-forest" /></td>
                  <td className="py-2.5 px-3"><Check className="w-3.5 h-3.5 text-forest" /></td>
                  <td className="py-2.5 px-3"><Check className="w-3.5 h-3.5 text-forest" /></td>
                  <td className="py-2.5 px-3"><Check className="w-3.5 h-3.5 text-forest" /></td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-charcoal">Individual Climate AC</td>
                  <td className="py-2.5 px-3"><Check className="w-3.5 h-3.5 text-forest" /></td>
                  <td className="py-2.5 px-3"><Check className="w-3.5 h-3.5 text-forest" /></td>
                  <td className="py-2.5 px-3"><Check className="w-3.5 h-3.5 text-forest" /></td>
                  <td className="py-2.5 px-3"><Check className="w-3.5 h-3.5 text-forest" /></td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-charcoal">Action</td>
                  <td className="py-2.5 px-3">
                    <button
                      onClick={() => openBooking("Standard Room")}
                      className="px-2.5 py-1 rounded bg-forest text-ivory text-[10.5px] font-medium hover:bg-forest-light"
                    >
                      Book
                    </button>
                  </td>
                  <td className="py-2.5 px-3">
                    <button
                      onClick={() => openBooking("Luxury Room")}
                      className="px-2.5 py-1 rounded bg-forest text-ivory text-[10.5px] font-medium hover:bg-forest-light"
                    >
                      Book
                    </button>
                  </td>
                  <td className="py-2.5 px-3">
                    <button
                      onClick={() => openBooking("Executive Room")}
                      className="px-2.5 py-1 rounded bg-forest text-ivory text-[10.5px] font-medium hover:bg-forest-light"
                    >
                      Book
                    </button>
                  </td>
                  <td className="py-2.5 px-3">
                    <button
                      onClick={() => openBooking("Jezberry Suites")}
                      className="px-2.5 py-1 rounded bg-champagne text-forest-deep text-[10.5px] font-semibold hover:bg-champagne-light shadow-sm"
                    >
                      Book Suite
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Compact Direct Booking Callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="p-5 sm:p-7 rounded-2xl bg-forest text-ivory flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <span className="text-[10px] uppercase tracking-luxury text-champagne-light font-semibold">
              Personalized Arrangements
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory mt-0.5">
              Planning an Extended Stay or Group Booking?
            </h3>
            <p className="text-xs text-ivory/80 mt-1 max-w-lg leading-relaxed">
              Connect directly with our Kubwa reservations desk for group rates, corporate contracts, or specific room requests.
            </p>
          </div>
          <button
            onClick={() => openBooking()}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-champagne text-forest-deep text-xs font-bold uppercase tracking-wider hover:bg-champagne-light transition-all shadow-gold active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Choose How to Book</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
