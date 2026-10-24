/**
 * JEZBERRY HOTEL - CENTRAL ASSET MANIFEST
 * Maps each verified local file to its verified visual content, category, and page usage.
 */

export const assetManifest = {
  // Exterior & Front View Assets
  heroExterior: {
    src: "/images/exterior/front-view-wide.jpg",
    originalFile: "front view edit.jpg",
    alt: "Jezberry Hotel exterior facade with gold signage and entrance canopy in Kubwa, Abuja",
    dimensions: { width: 1376, height: 768 },
    orientation: "landscape",
    description: "Full symmetrical front elevation of Jezberry Hotel showing gold emblem, modern panelling, tinted windows, and portico",
  },
  exteriorPortrait: {
    src: "/images/exterior/front-view-portrait.jpg",
    originalFile: "front view.jpg",
    alt: "Jezberry Hotel entrance canopy and prominent gold lettering 'Dream & Do It'",
    dimensions: { width: 1536, height: 2048 },
    orientation: "portrait",
    description: "Vertical angle shot highlighting the grand hotel portico and gold facade signage",
  },

  // Rooms & Suites
  rooms: {
    standard: [
      {
        src: "/images/rooms/standard-blue-king.jpg",
        originalFile: "983b20ee-6b16-4c38-9830-6d3f954d4a62.jpg",
        alt: "Jezberry Hotel Standard Room with black tufted headboard, royal blue runner, and warm lighting",
        dimensions: { width: 1376, height: 768 },
        title: "Standard King Bed with Tufted Headboard",
      },
      {
        src: "/images/rooms/standard-triangular-headboard.jpg",
        originalFile: "1ab353e2-c714-433a-bd14-c79162a9c6ad.jpg",
        alt: "Jezberry Hotel Standard Room with geometric triangular velvet headboard and mood lighting",
        dimensions: { width: 1200, height: 1500 },
        title: "Standard Room with Geometric Upholstery",
      },
    ],
    luxury: [
      {
        src: "/images/rooms/luxury-green-accent.png",
        originalFile: "download.png",
        alt: "Jezberry Hotel Luxury Room with warm fluted wood slat wall, cove backlighting, and chartreuse pillows",
        dimensions: { width: 748, height: 560 },
        title: "Luxury King Room with Illuminated Fluted Wall",
      },
      {
        src: "/images/rooms/luxury-chevron-grey.jpg",
        originalFile: "4343221a-0e6b-46aa-935d-0c9b4c27490c.jpg",
        alt: "Jezberry Hotel Luxury Room with tall grey velvet chevron acoustic headboard wall and full wardrobe",
        dimensions: { width: 1200, height: 1500 },
        title: "Luxury Room with Acoustic Chevron Wall",
      },
      {
        src: "/images/rooms/luxury-blue-mood.jpg",
        originalFile: "251d0858-8d78-4791-8d34-d58440efb2eb.jpg",
        alt: "Jezberry Hotel Luxury Room with ambient blue ceiling lighting, walnut wall panels, and king bed",
        dimensions: { width: 1376, height: 768 },
        title: "Luxury Room with Ambient Blue Sconces",
      },
    ],
    executive: [
      {
        src: "/images/rooms/executive-fluted-bed.png",
        originalFile: "download (1).png",
        alt: "Jezberry Hotel Executive Room with backlit organic wavy mirror, Edison pendants, and 3D geometric wall",
        dimensions: { width: 748, height: 560 },
        title: "Executive Room with Fluted Wall & Wavy Halo Mirror",
      },
      {
        src: "/images/rooms/executive-tv-lounge.png",
        originalFile: "download (2).png",
        alt: "Jezberry Hotel Executive Room wide angle view showing wall-mounted TV, artwork, and floating console",
        dimensions: { width: 748, height: 560 },
        title: "Executive Room Media Lounge & Floating Console",
      },
      {
        src: "/images/rooms/executive-detail.png",
        originalFile: "download (8).png",
        alt: "Jezberry Hotel Executive Room entertainment feature wall, framed artwork, and designer pendant bulbs",
        dimensions: { width: 744, height: 560 },
        title: "Executive Room Entertainment & Lighting Details",
      },
    ],
    suites: [
      {
        src: "/images/rooms/suite-illuminated-wardrobe.png",
        originalFile: "download (9).png",
        alt: "Jezberry Hotel Suite with illuminated glass wardrobe, fluffy feather pendant, and backlit black fluted wall",
        dimensions: { width: 1200, height: 1500 },
        title: "Master Suite with Ambient Glass Wardrobe & Chandelier",
      },
      {
        src: "/images/rooms/suite-full-view.png",
        originalFile: "download (11).png",
        alt: "Jezberry Hotel Suite full perspective showing heavy drapery, king bed, faux-fur rug, and wardrobe",
        dimensions: { width: 1200, height: 1500 },
        title: "Master Suite Panorama with Velvet Drapery",
      },
    ],
    bathrooms: [
      {
        src: "/images/rooms/bathroom-rain-shower.png",
        originalFile: "download (3).png",
        alt: "Modern ensuite bathroom with glass walk-in rain shower, matte black trim, and backlit mirror",
        dimensions: { width: 744, height: 560 },
        title: "Modern Glass Enclosed Rain Shower",
      },
    ],
  },

  // Food, Dining & Delicacies
  dining: [
    {
      src: "/images/dining/grilled-fish-bbq-platter.png",
      originalFile: "download (7).png",
      alt: "Whole grilled spiced fish platter with fresh lime, pepper sauce, golden puff-puff, french fries, and coleslaw",
      dimensions: { width: 449, height: 560 },
      title: "Chef's Grilled Fish & Nigerian BBQ Feast",
      category: "specialty",
      badge: "Signature Platter",
    },
    {
      src: "/images/dining/efo-riro-pounded-yam.jpg",
      originalFile: "5094d400-f2c6-4f36-a984-77ddf0f1c861.jpg",
      alt: "Authentic rich Nigerian vegetable soup with assorted cuts served with warm pounded yam swallow",
      dimensions: { width: 1200, height: 1500 },
      title: "Authentic Efo Riro with Pounded Yam",
      category: "delicacy",
      badge: "Local Delicacy",
    },
    {
      src: "/images/dining/breakfast-buffet-dispensers.jpg",
      originalFile: "ab673dfe-44bd-49f6-b07e-423a2ccbf136.jpg",
      alt: "Continental breakfast beverage bar with crystal juice dispensers, infused lemon-mint water, and coffee station",
      dimensions: { width: 1200, height: 801 },
      title: "Continental Breakfast & Refreshment Bar",
      category: "breakfast",
      badge: "Breakfast Selection",
    },
    {
      src: "/images/dining/peppered-meat-fries.jpg",
      originalFile: "92ddec9b-f854-45bc-bc2f-d0f2a5b98f4a.jpg",
      alt: "Spicy peppered meat with red onions, spring onions, and golden french fries on marble",
      dimensions: { width: 1200, height: 1500 },
      title: "Spiced Peppered Cuts & Crispy Fries",
      category: "delicacy",
      badge: "Chef's Cut",
    },
    {
      src: "/images/dining/special-stirfry-rice-prawns.png",
      originalFile: "download (10).png",
      alt: "Special oriental stir-fried rice with jumbo prawns, shredded beef, scrambled egg, sweet corn, and parsley",
      dimensions: { width: 1200, height: 1501 },
      title: "Special Stir-Fried Rice with Prawns & Beef",
      category: "continental",
      badge: "House Favorite",
    },
    {
      src: "/images/dining/chicken-fried-rice-bowl.png",
      originalFile: "download (4).png",
      alt: "Freshly prepared chicken fried rice garnished with fresh spring onions in a deep white bowl",
      dimensions: { width: 781, height: 560 },
      title: "Classic Chicken Fried Rice Bowl",
      category: "continental",
      badge: "Lunch & Dinner",
    },
    {
      src: "/images/dining/peppered-chicken-basket-fries.png",
      originalFile: "download (5).png",
      alt: "Crispy fries in a wire fryer basket with succulent peppered chicken, cucumber slices, and dipping sauce",
      dimensions: { width: 558, height: 560 },
      title: "Peppered Chicken with Basket Fries",
      category: "specialty",
      badge: "Bar Bites",
    },
    {
      src: "/images/dining/spaghetti-bolognese.jpg",
      originalFile: "a89d8468-0ec1-4a1c-90dc-56ffa92e2e9a.jpg",
      alt: "Al dente spaghetti bolognese topped with melted cheese and fresh torn basil leaves on a black plate",
      dimensions: { width: 1200, height: 1500 },
      title: "Spaghetti Bolognese with Melted Herbs",
      category: "continental",
      badge: "Continental Classic",
    },
    {
      src: "/images/dining/creamy-soup-brioche.jpg",
      originalFile: "a9bdfb44-1944-4545-b49d-62217298f8df.jpg",
      alt: "Velvety herb-infused cream soup served with toasted golden brioche bread points",
      dimensions: { width: 1200, height: 1499 },
      title: "Velvet Cream Soup with Brioche Points",
      category: "continental",
      badge: "Soup of the Day",
    },
    {
      src: "/images/dining/wine-and-peppered-chicken.png",
      originalFile: "download (6).png",
      alt: "Peppered chicken and basket fries paired with a bottle of Carlo Rossi red wine in the hotel kitchen",
      dimensions: { width: 558, height: 560 },
      title: "Dining & Wine Selection",
      category: "specialty",
      badge: "Beverage Pairing",
    },
  ],
};
