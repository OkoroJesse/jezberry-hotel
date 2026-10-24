export interface RoomType {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'Standard' | 'Luxury' | 'Executive' | 'Suites';
  description: string;
  longDescription: string;
  primaryImage: string;
  galleryImages: string[];
  features: string[];
  highlights: string[];
  bedType: string;
  occupancy: string;
  amenities: string[];
}

export interface DiningItem {
  id: string;
  name: string;
  category: 'delicacy' | 'continental' | 'specialty' | 'breakfast';
  description: string;
  image: string;
  badge?: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  category: 'convenience' | 'wellness' | 'dining' | 'security';
  icon: string;
  isVerified: boolean;
  statusNote?: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'exterior' | 'rooms' | 'dining' | 'facilities' | 'details';
  aspect?: 'landscape' | 'portrait' | 'square';
}

export interface BookingProvider {
  id: string;
  name: string;
  type: 'direct_property' | 'partner_search';
  url: string;
  description: string;
  verified: boolean;
  badge?: string;
  buttonText: string;
}
