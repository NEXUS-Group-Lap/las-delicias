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
  { city: "Bradenton", latitude: 27.4989, longitude: -82.5748 },
  { city: "Tampa", latitude: 27.9506, longitude: -82.4572 },
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
