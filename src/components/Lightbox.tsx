"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/types";
import { modalBackdrop, modalContent } from "@/lib/motion";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && items.length > 0;
  const currentItem = isOpen && currentIndex !== null ? items[currentIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        if (currentIndex !== null && currentIndex > 0) {
          onNavigate(currentIndex - 1);
        } else if (currentIndex === 0) {
          onNavigate(items.length - 1);
        }
      } else if (e.key === "ArrowRight") {
        if (currentIndex !== null && currentIndex < items.length - 1) {
          onNavigate(currentIndex + 1);
        } else if (currentIndex === items.length - 1) {
          onNavigate(0);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
        >
          {/* Backdrop */}
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-charcoal-dark/85 backdrop-blur-sm"
          />

          {/* Lightbox Container */}
          <motion.div
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 max-w-4xl max-h-[88vh] w-full flex flex-col items-center"
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between py-1.5 text-ivory mb-1 px-1">
              <span className="text-[10px] uppercase tracking-luxury text-champagne-light">
                {currentIndex !== null ? currentIndex + 1 : 1} / {items.length}
              </span>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-ivory/80 hover:text-ivory hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Stage */}
            <div className="relative w-full h-[58vh] sm:h-[68vh] flex items-center justify-center bg-charcoal-dark/50 rounded-xl overflow-hidden border border-champagne/20">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                priority
              />

              {/* Prev Button */}
              <button
                onClick={() =>
                  currentIndex !== null &&
                  onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1)
                }
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-charcoal-dark/75 hover:bg-charcoal text-ivory backdrop-blur-sm transition-all active:scale-95"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  currentIndex !== null &&
                  onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0)
                }
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-charcoal-dark/75 hover:bg-charcoal text-ivory backdrop-blur-sm transition-all active:scale-95"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption */}
            <div className="w-full text-center mt-2.5 px-3">
              <h4 className="font-serif text-sm sm:text-base font-semibold text-ivory">
                {currentItem.title}
              </h4>
              <p className="text-[11px] text-ivory/70 mt-0.5 line-clamp-1">
                {currentItem.alt}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
