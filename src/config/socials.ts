export interface SocialLink {
  id: "facebook" | "instagram" | "tiktok";
  name: string;
  handle: string;
  url: string;
  isVerified: boolean;
  isActive: boolean;
  brandColor: string;
  hoverBg: string;
  hoverText: string;
  ariaLabel: string;
  verificationNotes: string;
}

export interface SocialConfig {
  heading: string;
  supportingText: string;
  tagline: string;
  links: SocialLink[];
}

export const socialConfig: SocialConfig = {
  heading: "Follow Our Journey",
  supportingText:
    "Stay connected with Jezberry Hotel for updates, special moments and a glimpse of the experience.",
  tagline: "STAY CONNECTED",
  links: [
    {
      id: "instagram",
      name: "Instagram",
      handle: "@jezberryhotel",
      url: "https://www.instagram.com/jezberryhotel/",
      isVerified: true,
      isActive: true,
      brandColor: "#E4405F",
      hoverBg: "hover:bg-[#E4405F]/15",
      hoverText: "hover:text-[#E4405F]",
      ariaLabel: "Follow Jezberry Hotel on Instagram (@jezberryhotel)",
      verificationNotes:
        "Verified official Instagram page (@jezberryhotel) showcasing Jezberry Hotel accommodation, guest moments, and hospitality in Kubwa, Abuja.",
    },
    {
      id: "facebook",
      name: "Facebook",
      handle: "Jezberry Hotel | Abuja",
      url: "https://www.facebook.com/p/Jezberry-Hotel-Abuja-100092353820257/",
      isVerified: true,
      isActive: true,
      brandColor: "#1877F2",
      hoverBg: "hover:bg-[#1877F2]/15",
      hoverText: "hover:text-[#1877F2]",
      ariaLabel: "Visit Jezberry Hotel on Facebook",
      verificationNotes:
        "Verified official Facebook business page (Jezberry-Hotel-Abuja-100092353820257) with location, reviews, and hotel updates in Kubwa, Abuja.",
    },
    {
      id: "tiktok",
      name: "TikTok",
      handle: "@jezberry_hotel",
      url: "https://www.tiktok.com/@jezberry_hotel",
      isVerified: true,
      isActive: true,
      brandColor: "#00F2FE",
      hoverBg: "hover:bg-[#FE2C55]/15",
      hoverText: "hover:text-[#00F2FE]",
      ariaLabel: "Watch Jezberry Hotel on TikTok (@jezberry_hotel)",
      verificationNotes:
        "Official hotel TikTok handle (@jezberry_hotel) for short-form property tours and behind-the-scenes moments.",
    },
  ],
};
