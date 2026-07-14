export const site = {
  name: "Panadería Las Delicias",
  facebookName: "Panadería y Restaurante Las Delicias",
  tagline: {
    en: "Guatemalan Bakery & Restaurant in Fort Myers, FL",
    es: "Panadería y Restaurante Guatemalteco en Fort Myers, FL",
  },
  phone: {
    display: "(239) 990-6760",
    href: "tel:+12399906760",
  },
  email: {
    display: "panaderialasdelicias2026@gmail.com",
    href: "mailto:panaderialasdelicias2026@gmail.com",
  },
  address: {
    street: "4901 Palm Beach Blvd, Suite 90",
    city: "Fort Myers",
    region: "FL",
    postalCode: "33905",
    country: "US",
    full: "4901 Palm Beach Blvd, Suite 90, Fort Myers, FL 33905",
  },
  mapsUrl:
    "https://www.google.com/maps/place/Panaderia+Las+Delicias+LL.C/@26.6811386,-81.8083548,17.5z/data=!4m6!3m5!1s0x88db691464b171a7:0xf97bfc931808ba36!8m2!3d26.6816244!4d-81.8053557!16s%2Fg%2F11h3vbt28m",
  social: {
    facebook: "https://www.facebook.com/panaderia.restaurante.lasdelicias/",
    instagram: "https://www.instagram.com/lasdeliciaspanaderiarest/",
    instagramHandle: "@lasdeliciaspanaderiarest",
    tiktok: "https://www.tiktok.com/@panaderia.las.delicias",
    tiktokHandle: "@panaderia.las.delicias",
  },
  hours: [
    { days: { en: "Monday – Friday", es: "Lunes a viernes" }, hours: "7:00 AM – 9:00 PM" },
    { days: { en: "Saturday", es: "Sábado" }, hours: "7:00 AM – 10:00 PM" },
    { days: { en: "Sunday", es: "Domingo" }, hours: "7:00 AM – 9:00 PM" },
  ],
  // Used for schema.org openingHours (24h format)
  openingHoursSpec: ["Mo-Fr 07:00-21:00", "Sa 07:00-22:00", "Su 07:00-21:00"],
  deliveryCities: [
    "Fort Myers",
    "North Fort Myers",
    "LaBelle",
    "Clewiston",
    "Immokalee",
    "Bonita Springs",
    "Lehigh Acres",
    "Naples",
    "Homestead",
    "Bradenton",
    "Tampa",
    "Miami",
    "West Palm Beach",
    "Lake Worth",
    "Fort Lauderdale",
  ],
};

export type Site = typeof site;
