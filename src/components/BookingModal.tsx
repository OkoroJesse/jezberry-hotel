"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Phone, MessageSquare } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { bookingPlatforms } from "@/config/bookingPlatforms";
import { siteConfig } from "@/config/siteConfig";
import { modalBackdrop, modalContent } from "@/lib/motion";

export const BookingModal: React.FC = () => {
  const { isOpen, selectedRoom, closeBooking } = useBooking();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBooking();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeBooking]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          {/* Subtle Backdrop */}
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeBooking}
            className="fixed inset-0 bg-charcoal-dark/70 backdrop-blur-sm"
          />

          {/* Compact Centered Modal Container */}
          <motion.div
            ref={modalRef}
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-[460px] max-h-[85vh] flex flex-col bg-ivory rounded-2xl shadow-modal overflow-hidden border border-champagne/30 z-10"
          >
            {/* Compact Header */}
            <div className="bg-forest px-5 py-3.5 text-ivory flex items-start justify-between border-b border-champagne/20">
              <div>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-luxury text-champagne-light">
                  Reservations
                </span>
                <h3
                  id="booking-modal-title"
                  className="font-serif text-lg sm:text-xl font-bold text-ivory mt-0.5"
                >
                  Choose How to Book
                </h3>
                <p className="text-[11px] text-ivory/80 mt-0.5">
                  Compare verified booking partners or contact reception directly.
                </p>
                {selectedRoom && (
                  <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-forest-surface border border-champagne/30 text-champagne-light text-[10.5px] font-medium">
                    <span>Selected:</span>
                    <strong className="text-ivory font-semibold">{selectedRoom}</strong>
                  </div>
                )}
              </div>

              <button
                onClick={closeBooking}
                className="p-1 rounded-full text-ivory/70 hover:text-ivory hover:bg-forest-light transition-colors focus:outline-none"
                aria-label="Close booking modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Compact Providers List */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-2.5 divide-y divide-warmgrey-border/40">
              <div className="text-[10px] font-medium uppercase tracking-wide text-charcoal/60 pb-1">
                Verified Online Travel Partners
              </div>

              {bookingPlatforms.map((platform) => (
                <div
                  key={platform.id}
                  className="pt-2.5 first:pt-0 flex items-center justify-between gap-3 group"
                >
                  <div className="flex-1 pr-2">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-serif font-bold text-charcoal text-sm group-hover:text-forest transition-colors">
                        {platform.name}
                      </h4>
                      {platform.badge && (
                        <span className="inline-flex items-center gap-0.5 text-[9px] font-medium text-forest bg-sage/20 px-1.5 py-0.5 rounded-full">
                          <ShieldCheck className="w-2.5 h-2.5 text-forest" />
                          {platform.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-charcoal/70 leading-snug line-clamp-1 mt-0.5">
                      {platform.description}
                    </p>
                  </div>

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-forest text-ivory text-[11px] font-medium hover:bg-champagne hover:text-charcoal transition-all shadow-sm whitespace-nowrap active:scale-95"
                  >
                    <span>{platform.buttonText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>

            {/* Compact Direct Assistance Footer */}
            <div className="bg-ivory-dark px-4 sm:px-5 py-3 border-t border-warmgrey-border/40 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] text-charcoal/80">
              <span className="font-semibold text-charcoal">Direct Front Desk:</span>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-ivory text-charcoal font-medium hover:bg-white border border-warmgrey-border/60 transition-colors"
                >
                  <Phone className="w-3 h-3 text-forest" />
                  <span>Call Desk</span>
                </a>
                <a
                  href={siteConfig.contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-forest text-ivory font-medium hover:bg-forest-light transition-colors"
                >
                  <MessageSquare className="w-3 h-3 text-champagne-light" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
