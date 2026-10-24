"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { BrandLogo } from "@/components/BrandLogo";
import { useBooking } from "@/context/BookingContext";
import { fadeInUp } from "@/lib/motion";

export const Footer: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <footer className="bg-forest-deep text-ivory border-t border-champagne/20 pt-12 pb-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-forest-surface">
          {/* Brand Column */}
          <div className="space-y-3">
            <BrandLogo variant="light" size="md" />
            <p className="text-[11.5px] text-ivory/70 leading-relaxed font-sans mt-2">
              Thoughtful hospitality, contemporary comfort, and a serene sanctuary in Kubwa, Abuja. Dream & Do It.
            </p>
            <div className="pt-1">
              <button
                onClick={() => openBooking()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-champagne text-forest-deep text-[11px] font-semibold uppercase tracking-wider hover:bg-champagne-light transition-colors active:scale-95"
              >
                <span>Reserve Room</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Accommodations */}
          <div>
            <h4 className="font-serif text-xs font-semibold tracking-luxury uppercase text-champagne-light mb-3">
              Accommodations
            </h4>
            <ul className="space-y-2 text-[11.5px] text-ivory/80">
              <li>
                <Link href="/rooms/standard" className="hover:text-champagne transition-colors">
                  Standard Room
                </Link>
              </li>
              <li>
                <Link href="/rooms/luxury" className="hover:text-champagne transition-colors">
                  Luxury Room
                </Link>
              </li>
              <li>
                <Link href="/rooms/executive" className="hover:text-champagne transition-colors">
                  Executive Room
                </Link>
              </li>
              <li>
                <Link href="/rooms/suites" className="hover:text-champagne transition-colors">
                  Jezberry Suites
                </Link>
              </li>
              <li className="pt-0.5">
                <Link href="/rooms" className="text-champagne inline-flex items-center gap-1 font-medium hover:underline text-[11px]">
                  <span>View All Categories</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif text-xs font-semibold tracking-luxury uppercase text-champagne-light mb-3">
              Explore Jezberry
            </h4>
            <ul className="space-y-2 text-[11.5px] text-ivory/80">
              <li>
                <Link href="/dining" className="hover:text-champagne transition-colors">
                  Dining & Local Delicacies
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-champagne transition-colors">
                  Hotel Facilities & Amenities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-champagne transition-colors">
                  Photo & Architectural Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-champagne transition-colors">
                  About the Property
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-champagne transition-colors">
                  Location & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-xs font-semibold tracking-luxury uppercase text-champagne-light mb-3">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-[11.5px] text-ivory/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-champagne flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {siteConfig.addresses.primary}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-champagne flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${siteConfig.contact.primaryPhoneRaw}`} className="hover:text-champagne">
                    {siteConfig.contact.primaryPhone}
                  </a>
                  <a href={`tel:${siteConfig.contact.secondaryPhoneRaw}`} className="hover:text-champagne">
                    {siteConfig.contact.secondaryPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-champagne flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-champagne break-all">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <MessageSquare className="w-3.5 h-3.5 text-champagne flex-shrink-0" />
                <a
                  href={siteConfig.contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne font-medium hover:underline inline-flex items-center gap-1"
                >
                  <span>WhatsApp Desk</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-ivory/60">
          <p>© {new Date().getFullYear()} Jezberry Hotel. “Dream & Do It.”</p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="hover:text-champagne transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-champagne transition-colors">
              Directions
            </Link>
            <button
              onClick={() => openBooking()}
              className="hover:text-champagne transition-colors font-medium text-champagne"
            >
              Booking Options
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
