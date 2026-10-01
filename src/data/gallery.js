// Mock data for the Gallery
// Strictly prioritized for LANDSCAPE interior and architectural photography
// Organized by category for instant filtering and lightbox inspection

export const galleryCategories = [
  { id: "ALL", label: "All Works" },
  { id: "LIVING", label: "Living Salons" },
  { id: "PENTHOUSES", label: "Penthouses" },
  { id: "KITCHEN & DINING", label: "Kitchen & Dining" },
  { id: "COMMERCIAL", label: "Commercial" },
  { id: "ARCHITECTURAL DETAILS", label: "Architectural Details" }
];

export const galleryItems = [
  {
    id: 1,
    title: "The Alipore Glass Villa Living Pavilion",
    category: "LIVING",
    categoryLabel: "Living Salons",
    location: "Kolkata, Alipore",
    year: "2025",
    scope: "Architectural Remodeling & Interior Architecture",
    aspectRatio: "landscape", // 16:10 or 16:9
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    description: "Sun-drenched living pavilion featuring a continuous fluted travertine plinth, bespoke mohair velvet armchairs, and floor-to-ceiling pivot glazing."
  },
  {
    id: 2,
    title: "Worli Seafront Horizon Penthouse Lounge",
    category: "PENTHOUSES",
    categoryLabel: "Penthouses",
    location: "Mumbai, Worli",
    year: "2025",
    scope: "Turnkey Interior Architecture",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    description: "Expansive curved lounge framing 270-degree Arabian Sea views, dressed in pale parchment wall panels and sculptural Italian seating."
  },
  {
    id: 3,
    title: "Calacatta Monolith Culinary Island & Kitchen",
    category: "KITCHEN & DINING",
    categoryLabel: "Kitchen & Dining",
    location: "Bengaluru, Sadashivanagar",
    year: "2024",
    scope: "Custom Millwork & Kitchen Architecture",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=85",
    thumbnail: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
    description: "Single-quarry bookmatched Calacatta marble island paired with fumed dark European oak cabinetry and brushed bronze fixtures."
  },
  {
    id: 4,
    title: "Apex Aerocity Executive Boardroom & Library",
    category: "COMMERCIAL",
    categoryLabel: "Commercial",
    location: "New Delhi, Aerocity",
    year: "2025",
    scope: "Commercial Interior Design",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    description: "Bespoke executive sanctuary integrating acoustic micro-perforated timber walls, ergonomic leather seating, and discrete conference technology."
  },
  {
    id: 5,
    title: "Brushed Brass & Travertine Fireplace Hearth",
    category: "ARCHITECTURAL DETAILS",
    categoryLabel: "Architectural Details",
    location: "Kolkata, Ballygunge",
    year: "2024",
    scope: "Bespoke Joinery & Metalwork",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    description: "Hand-patinated brass shadow gaps framing a monolithic Roman travertine fireplace mantelpiece with concealed ambient uplighting."
  },
  {
    id: 6,
    title: "Ballygunge Heritage Salon & Reading Room",
    category: "LIVING",
    categoryLabel: "Living Salons",
    location: "Kolkata, Ballygunge Park",
    year: "2024",
    scope: "Historic Restoration & Furnishing",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    description: "Restored 14-foot colonial ceilings with preserved historic moldings, paired with contemporary ivory linen couches and curated original canvases."
  },
  {
    id: 7,
    title: "The Sky Deck Terrace & Glass Conservatory",
    category: "PENTHOUSES",
    categoryLabel: "Penthouses",
    location: "Mumbai, Bandra West",
    year: "2025",
    scope: "Outdoor Architecture & Living Space",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    description: "Double-tier outdoor terrace garden featuring sheltered cedar pergolas, custom terrazzo fire pit, and seamless horizon glass balustrades."
  },
  {
    id: 8,
    title: "Cenote Floating Dining Table & Wine Salon",
    category: "KITCHEN & DINING",
    categoryLabel: "Kitchen & Dining",
    location: "Goa, Assagao",
    year: "2025",
    scope: "Interior Architecture & Custom Furnishings",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1800&q=85",
    thumbnail: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",
    description: "A solid 12-seater single-slab suar wood dining table set beneath artisanal alabaster pendants, overlooking a climate-controlled private wine vault."
  },
  {
    id: 9,
    title: "Sculptural Spiral Staircase & Skylight Well",
    category: "ARCHITECTURAL DETAILS",
    categoryLabel: "Architectural Details",
    location: "Bengaluru, Indiranagar",
    year: "2024",
    scope: "Structural Interior Engineering",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85",
    thumbnail: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80",
    description: "Curved helical staircase wrapped in seamless micro-cement with recessed continuous bronze handrail, illuminated by an oculus skylight."
  },
  {
    id: 10,
    title: "Atelier Vélène Flagship Client Presentation Salon",
    category: "COMMERCIAL",
    categoryLabel: "Commercial",
    location: "Kolkata, Camac Street",
    year: "2025",
    scope: "Studio Design & Material Library",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1800&q=85",
    thumbnail: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=900&q=80",
    description: "Our own design atelier featuring floor-to-ceiling stone sample vitrines, tactile fabric drawers, and custom ambient color-true lighting."
  }
];

export default galleryItems;
