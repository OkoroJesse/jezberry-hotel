"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Copy, Check, ExternalLink, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const MapEmbed: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.addresses.primary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="w-full bg-ivory rounded-2xl overflow-hidden border border-champagne/25 shadow-card">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Info Sidebar */}
        <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between bg-forest text-ivory">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-forest-surface text-champagne-light text-[10px] font-semibold uppercase tracking-wider mb-3 border border-champagne/20">
              <MapPin className="w-3 h-3 text-champagne" />
              <span>Location & Access</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory mb-2">
              Finding Jezberry Hotel
            </h3>

            <p className="text-xs text-ivory/80 leading-relaxed font-sans mb-4">
              Situated in Railview Community, FO1, Kubwa, Abuja. Accessible from the Kubwa Expressway with 24-hour gated security and on-site parking.
            </p>

            <div className="space-y-3 pt-3 border-t border-forest-light text-xs">
              <div>
                <span className="text-[9.5px] uppercase tracking-luxury text-champagne-light font-semibold block mb-0.5">
                  Primary Address
                </span>
                <p className="text-ivory font-medium leading-snug">
                  {siteConfig.addresses.primary}
                </p>
              </div>

              <div>
                <span className="text-[9.5px] uppercase tracking-luxury text-champagne-light font-semibold block mb-0.5">
                  Landmark Reference
                </span>
                <p className="text-ivory/80 leading-snug">
                  {siteConfig.addresses.alternative}
                </p>
              </div>

              <div className="pt-1">
                <span className="text-[9.5px] uppercase tracking-luxury text-champagne-light font-semibold block mb-0.5">
                  Front Desk Line
                </span>
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  className="font-semibold text-champagne hover:underline inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{siteConfig.contact.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-4 border-t border-forest-light flex flex-wrap gap-2.5">
            <a
              href={siteConfig.maps.searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-champagne text-forest-deep text-[11px] font-bold uppercase tracking-wider hover:bg-champagne-light transition-all shadow-sm active:scale-95"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>

            <button
              onClick={handleCopyAddress}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-forest-surface hover:bg-forest-light border border-champagne/25 text-ivory text-[11px] font-medium transition-colors active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-champagne-light" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-champagne" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Map Embed Container */}
        <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[340px] bg-forest-surface">
          <iframe
            title="Jezberry Hotel Location Map"
            src="https://maps.google.com/maps?q=Jezberry+Hotel+Kubwa+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[300px] border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};
