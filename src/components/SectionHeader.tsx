"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeInUp}
      className={`max-w-2xl mb-8 sm:mb-10 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`text-[10px] sm:text-[10.5px] font-sans font-semibold uppercase tracking-luxury block mb-1.5 ${
            isDark ? "text-champagne-light" : "text-champagne-dark"
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight leading-snug ${
          isDark ? "text-ivory" : "text-forest"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-xs sm:text-sm md:text-base font-sans leading-relaxed text-balance ${
            isDark ? "text-ivory/80" : "text-charcoal/75"
          }`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`mt-3 flex items-center gap-1.5 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="w-8 h-[1.5px] bg-champagne rounded-full" />
        <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
      </div>
    </motion.div>
  );
};
