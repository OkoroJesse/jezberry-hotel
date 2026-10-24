"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { BrandLogo } from "@/components/BrandLogo";
import { useBooking } from "@/context/BookingContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-forest-deep/95 backdrop-blur-md py-2.5 shadow-sm border-b border-champagne/15"
            : "bg-gradient-to-b from-charcoal-dark/75 via-forest-deep/30 to-transparent py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Wordmark & Emblem */}
          <BrandLogo variant="light" size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[11px] uppercase tracking-luxury font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-champagne font-semibold"
                      : "text-ivory/80 hover:text-champagne-light"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-champagne"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3.5">
            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              className="text-[11px] text-ivory/75 hover:text-champagne-light flex items-center gap-1.5 transition-colors"
              title="Call Jezberry Hotel"
            >
              <Phone className="w-3 h-3 text-champagne" />
              <span>{siteConfig.contact.primaryPhone}</span>
            </a>

            <button
              onClick={() => openBooking()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-champagne text-forest-deep font-sans font-semibold text-[11px] tracking-wide uppercase hover:bg-champagne-light hover:shadow-gold transition-all duration-200 active:scale-95"
            >
              <Calendar className="w-3 h-3" />
              <span>Book Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button & Quick Book */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={() => openBooking()}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-champagne text-forest-deep text-[10px] font-semibold uppercase tracking-wider"
            >
              <Calendar className="w-2.5 h-2.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-ivory hover:text-champagne transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Compact Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[50px] z-30 bg-forest-deep/98 backdrop-blur-xl border-b border-champagne/20 shadow-xl lg:hidden p-5 max-h-[calc(100vh-50px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              <span className="text-[9.5px] uppercase tracking-luxury text-champagne-light font-semibold">
                Menu
              </span>
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-serif transition-colors py-1 border-b border-forest-surface ${
                      isActive
                        ? "text-champagne font-bold"
                        : "text-ivory/90 hover:text-champagne-light"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-champagne text-forest-deep font-sans font-bold text-xs uppercase tracking-wider shadow-gold"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Your Stay</span>
                </button>

                <div className="pt-1 text-[11px] text-ivory/70 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-champagne" />
                    <a href={`tel:${siteConfig.contact.primaryPhoneRaw}`}>
                      {siteConfig.contact.primaryPhone}
                    </a>
                  </div>
                  <p className="text-[10px] text-ivory/50">
                    {siteConfig.addresses.primary}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
