export type MenuCategory = {
  id: string;
  name: { en: string; es: string };
  note?: { en: string; es: string };
  items: string[];
};

// Dish names are kept in Spanish, as they appear on the in-store menu.
// No prices are included below — current pricing is not yet confirmed.
export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    name: { en: "Traditional Breakfast", es: "Desayunos Tradicionales" },
    note: {
      en: "All breakfasts are served with beans, cheese or crema, and four fresh corn tortillas.",
      es: "Todos los desayunos incluyen frijoles, queso o crema y cuatro tortillas frescas de maíz.",
    },
    items: [
      "Huevos con Chorizo Mexicano",
      "Huevos Rancheros",
      "Huevos a la Mexicana",
      "Huevos con Jamón",
      "Super Burrito Desayuno",
    ],
  },
  {
    id: "antojitos",
    name: { en: "Antojitos de la Casa", es: "Antojitos de la Casa" },
    items: [
      "Quesadilla Pequeña",
      "Quesadillas Grande",
      "Tacos",
      "Tacos de Camarón",
      "Torta Mexicana",
      "Torta Milanesa",
      "Burritos",
      "Guacamole & Chips",
      "Chuchitos de Pollo",
      "Pupusas",
      "Tamales Guatemaltecos",
      "Enchiladas Guatemaltecas",
    ],
  },
  {
    id: "popular",
    name: { en: "Popular Plates", es: "Platos Populares" },
    items: [
      "Orden de Flautas de Pollo",
      "Plato de Flautas de Pollo",
      "Plato de Milanesa",
      "Pechuga de Pollo",
      "Pepián de Pollo Criollo",
      "Camarones a la Diabla",
      "Ceviche de Camarón y Pescado",
      "Mojarra Frita",
      "Cóctel de Camarón",
    ],
  },
  {
    id: "soups",
    name: { en: "Guatemalan Soups", es: "Caldos Guatemaltecos" },
    note: {
      en: "All soups are served with fresh corn tortillas, rice, cilantro, and onion.",
      es: "Todos los caldos son acompañados con tortillas frescas de maíz, arroz, cilantro y cebolla.",
    },
    items: [
      "Caldo de Pollo Criollo",
      "Caldo de Res",
      "Caldo de Pata de Res",
      "Menudo con Pata",
      "Caldos de Mariscos",
      "Plato de Chile Relleno",
    ],
  },
  {
    id: "steaks",
    name: { en: "Steaks & Fajitas", es: "Filetes / Steaks" },
    items: [
      "Carne Asada",
      "Bistec a la Mexicana",
      "Bistec Encebollado",
      "Churrasco de Res",
      "Fajita de Pollo",
      "Fajita de Carne",
      "Fajita de Camarón",
      "Fajita Mix",
    ],
  },
  {
    id: "drinks",
    name: { en: "Drinks", es: "Bebidas" },
    items: [
      "Sodas 12 oz",
      "Sodas 16 oz",
      "Aguas Frescas 32 oz",
      "Agua Mineral Preparada 12 oz",
      "Michelada Camarón",
      "Cervezas Importadas y Domésticas 12 oz",
      "Cubetazo",
      "Café Americano",
      "Café Espresso",
      "Café Capuchino",
      "Chocolate Caliente",
    ],
  },
  {
    id: "sides",
    name: { en: "Side Orders", es: "Órdenes Extras" },
    items: [
      "Tortillas de Maíz (4)",
      "Arroz Extra",
      "Frijoles Extra",
      "Papas Fritas",
      "Nuggets de Pollo con Papas",
    ],
  },
];
