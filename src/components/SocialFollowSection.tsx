"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { socialConfig } from "@/config/socials";
import { SocialIcon } from "@/components/icons/SocialIcons";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export const SocialFollowSection: React.FC = () => {
  const activeLinks = socialConfig.links.filter((link) => link.isActive);

  return (
    <section className="py-14 lg:py-18 bg-ivory-dark border-t border-warmgrey-border/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="text-[11px] font-sans font-semibold tracking-luxury uppercase text-champagne-dark block mb-2">
            {socialConfig.tagline}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-deep">
            {socialConfig.heading}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
            {socialConfig.supportingText}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {activeLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              variants={fadeInUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-ivory border border-warmgrey-border hover:border-champagne/60 hover:shadow-gold transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-forest-surface text-ivory mb-4 transition-all duration-300 group-hover:scale-110 ${link.hoverBg} ${link.hoverText}`}
              >
                <SocialIcon platform={link.id} className="w-5 h-5 transition-colors" />
              </div>

              <h3 className="font-serif text-base font-bold text-forest-deep group-hover:text-champagne-dark transition-colors">
                {link.name}
              </h3>
              <p className="text-[11.5px] text-charcoal/60 font-sans mt-0.5 mb-3 font-medium">
                {link.handle}
              </p>

              <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-semibold text-forest uppercase tracking-wider group-hover:text-champagne-dark transition-colors">
                <span>Connect</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
