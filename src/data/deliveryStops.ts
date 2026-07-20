export type DeliveryStop = {
  city: string;
  latitude: number;
  longitude: number;
};

// Approximate town-center coordinates for each city in site.deliveryCities.
export const deliveryStops: DeliveryStop[] = [
  { city: "Fort Myers", latitude: 26.6406, longitude: -81.8723 },
  { city: "North Fort Myers", latitude: 26.6923, longitude: -81.8792 },
  { city: "LaBelle", latitude: 26.7623, longitude: -81.4384 },
  { city: "Clewiston", latitude: 26.7542, longitude: -80.9337 },
  { city: "Immokalee", latitude: 26.4184, longitude: -81.4165 },
  { city: "Bonita Springs", latitude: 26.3398, longitude: -81.7787 },
  { city: "Lehigh Acres", latitude: 26.6256, longitude: -81.6248 },
  { city: "Naples", latitude: 26.142, longitude: -81.7948 },
  { city: "Homestead", latitude: 25.4687, longitude: -80.4776 },
  { city: "Cape Coral", latitude: 26.5629, longitude: -81.9495 },
  { city: "Arcadia", latitude: 27.2153, longitude: -81.8598 },
  { city: "Sarasota", latitude: 27.3364, longitude: -82.5307 },
  { city: "Bradenton", latitude: 27.4989, longitude: -82.5748 },
  { city: "Tampa", latitude: 27.9506, longitude: -82.4572 },
  { city: "Orlando", latitude: 28.5384, longitude: -81.3789 },
  { city: "Sanford", latitude: 28.8028, longitude: -81.2731 },
  { city: "Ocala", latitude: 29.1872, longitude: -82.1401 },
  { city: "Gainesville", latitude: 29.6516, longitude: -82.3248 },
  { city: "Lake City", latitude: 30.1897, longitude: -82.6393 },
  { city: "Jacksonville", latitude: 30.3322, longitude: -81.6557 },
  { city: "Miami", latitude: 25.7617, longitude: -80.1918 },
  { city: "West Palm Beach", latitude: 26.7153, longitude: -80.0534 },
  { city: "Lake Worth", latitude: 26.6168, longitude: -80.0662 },
  { city: "Fort Lauderdale", latitude: 26.1224, longitude: -80.1373 },
];

// Bakery location, matches site.mapsUrl in src/data/site.ts.
export const bakeryLocation: DeliveryStop = {
  city: "Panadería Las Delicias",
  latitude: 26.6816244,
  longitude: -81.8053557,
};
