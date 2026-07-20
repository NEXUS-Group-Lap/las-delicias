export type DeliveryDayRoute = {
  day: { en: string; es: string };
  cities: string[];
};

// Day-by-day delivery route stops. Some Thursday/Friday routes extend
// outside Florida (GA/AL/MS) and are not plotted on the delivery map.
export const deliveryScheduleByDay: DeliveryDayRoute[] = [
  {
    day: { en: "Monday", es: "Lunes" },
    cities: [
      "Fort Myers",
      "Bonita Springs",
      "Arcadia",
      "Sarasota",
      "Bradenton",
      "Miami",
      "Lehigh Acres",
      "West Palm Beach",
    ],
  },
  {
    day: { en: "Tuesday", es: "Martes" },
    cities: ["Fort Myers", "Bonita Springs", "Naples", "Arcadia", "Tampa", "Homestead"],
  },
  {
    day: { en: "Wednesday", es: "Miércoles" },
    cities: [
      "Fort Myers",
      "Bonita Springs",
      "Naples",
      "Arcadia",
      "Homestead",
      "Orlando",
      "Sanford",
      "Jacksonville",
    ],
  },
  {
    day: { en: "Thursday", es: "Jueves" },
    cities: [
      "Fort Myers",
      "Bonita Springs",
      "Naples",
      "Homestead",
      "Cape Coral",
      "North Fort Myers",
      "West Palm Beach",
      "Ocala",
      "Gainesville",
      "Lake City",
      "Valdosta, GA",
      "Moultrie, GA",
      "Albany, GA",
    ],
  },
  {
    day: { en: "Friday", es: "Viernes" },
    cities: [
      "Naples",
      "Immokalee",
      "Fort Lauderdale",
      "LaBelle",
      "Montgomery, AL",
      "Mobile, AL",
      "Foley, AL",
      "Pascagoula, MS",
    ],
  },
  {
    day: { en: "Saturday", es: "Sábado" },
    cities: ["Fort Myers", "Bonita Springs", "Naples", "Homestead", "West Palm Beach", "Clewiston"],
  },
  {
    day: { en: "Sunday", es: "Domingo" },
    cities: ["Bonita Springs"],
  },
];
