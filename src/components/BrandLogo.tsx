"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "light",
  showTagline = true,
  size = "md",
}) => {
  const iconSize = size === "sm" ? 26 : size === "lg" ? 36 : 30;
  const textColor =
    variant === "dark"
      ? "text-charcoal"
      : variant === "gold"
      ? "text-champagne"
      : "text-ivory";

  const subColor =
    variant === "dark"
      ? "text-charcoal/70"
      : variant === "gold"
      ? "text-champagne/80"
      : "text-champagne-light";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Gold Medallion Emblem */}
      <div
        className="relative flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105 shrink-0"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="#C3A36B"
            strokeWidth="2.5"
            strokeDasharray="3 3"
          />
          <circle
            cx="50"
            cy="50"
            r="41"
            fill="#163A32"
            stroke="#C3A36B"
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="50"
            r="36"
            stroke="#D5BA88"
            strokeWidth="1"
            opacity="0.6"
          />
          <path
            d="M56 31V54C56 61.2 50.8 66 43.5 66C38 66 33.5 62.5 32 58L38 54.5C39 57 41 58.8 43.5 58.8C47 58.8 49 56.5 49 53.5V31H56Z"
            fill="url(#goldGradient)"
          />
          <path
            d="M50 31H62V35H50V31Z"
            fill="url(#goldGradient)"
          />
          <defs>
            <linearGradient
              id="goldGradient"
              x1="32"
              y1="31"
              x2="62"
              y2="66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F7E2A8" />
              <stop offset="0.5" stopColor="#C3A36B" />
              <stop offset="1" stopColor="#967840" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography: JEZBERRY HOTEL & DREAM & DO IT */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.18em] font-bold uppercase transition-colors leading-none ${textColor} ${
            size === "sm"
              ? "text-xs"
              : size === "lg"
              ? "text-base sm:text-lg"
              : "text-[13px] sm:text-[15px]"
          }`}
        >
          Jezberry Hotel
        </span>
        {showTagline && (
          <span
            className={`font-sans tracking-[0.22em] uppercase font-semibold text-[7.5px] sm:text-[8.5px] mt-0.5 leading-none ${subColor}`}
          >
            Dream & Do It
          </span>
        )}
      </div>
    </Link>
  );
};
