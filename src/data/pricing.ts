/**
 * Pricing catalogue.
 * Shape is intentionally flat and id-based so it can later be served from an
 * admin-managed backend table (id, group, name, price, unit) without changing
 * any UI code.
 */

export type PriceItem = {
  id: string;
  name: string;
  price: number;
  unit: string;
  group: string;
};

export const priceGroups = [
  "Everyday Laundry",
  "Dry Cleaning — Women",
  "Dry Cleaning — Men",
  "Home Care",
  "Specialist Care",
] as const;

export const priceList: PriceItem[] = [
  // Everyday
  { id: "wash-fold", name: "Wash & Fold", price: 79, unit: "per kg", group: "Everyday Laundry" },
  { id: "wash-iron", name: "Wash & Iron", price: 99, unit: "per kg", group: "Everyday Laundry" },
  { id: "iron-shirt", name: "Steam Iron — Shirt / T-shirt", price: 15, unit: "per piece", group: "Everyday Laundry" },
  { id: "iron-trouser", name: "Steam Iron — Trouser / Jeans", price: 20, unit: "per piece", group: "Everyday Laundry" },
  { id: "iron-saree", name: "Steam Iron — Saree", price: 60, unit: "per piece", group: "Everyday Laundry" },

  // Women
  { id: "w-blouse", name: "Blouse", price: 75, unit: "per piece", group: "Dry Cleaning — Women" },
  { id: "w-blouse-heavy", name: "Blouse — embroidered / heavy work", price: 100, unit: "per piece", group: "Dry Cleaning — Women" },
  { id: "w-churidar", name: "Churidar set (3 pcs)", price: 350, unit: "per set", group: "Dry Cleaning — Women" },
  { id: "w-top", name: "Top", price: 150, unit: "per piece", group: "Dry Cleaning — Women" },
  { id: "w-kurta-light", name: "Kurta — light", price: 150, unit: "per piece", group: "Dry Cleaning — Women" },
  { id: "w-kurta-heavy", name: "Kurta — heavy", price: 200, unit: "per piece", group: "Dry Cleaning — Women" },
  { id: "w-anarkali-light", name: "Anarkali kurta — light", price: 250, unit: "per piece", group: "Dry Cleaning — Women" },
  { id: "w-anarkali-heavy", name: "Anarkali kurta — heavy work", price: 350, unit: "per piece", group: "Dry Cleaning — Women" },
  { id: "w-salwar", name: "Salwar", price: 75, unit: "per piece", group: "Dry Cleaning — Women" },
  { id: "w-gown-light", name: "Gown — light", price: 250, unit: "per piece", group: "Dry Cleaning — Women" },
  { id: "w-gown-heavy", name: "Gown — heavy", price: 400, unit: "per piece", group: "Dry Cleaning — Women" },
  { id: "w-lehenga-3", name: "Lehenga choli dupatta (3 pc) — light", price: 600, unit: "per set", group: "Dry Cleaning — Women" },
  { id: "w-lehenga-3h", name: "Lehenga choli dupatta (3 pc) — heavy work", price: 750, unit: "per set", group: "Dry Cleaning — Women" },
  { id: "w-lehenga-2", name: "Lehenga choli (2 pc) — light", price: 400, unit: "per set", group: "Dry Cleaning — Women" },
  { id: "w-saree-cotton", name: "Saree — cotton with starch", price: 300, unit: "per saree", group: "Dry Cleaning — Women" },
  { id: "w-saree-silk", name: "Saree — silk (plain) with roll polish", price: 350, unit: "per saree", group: "Dry Cleaning — Women" },
  { id: "w-saree-heavy", name: "Saree — silk heavy work / embroidered", price: 400, unit: "per saree", group: "Dry Cleaning — Women" },
  { id: "w-dupatta", name: "Dupatta", price: 100, unit: "per piece", group: "Dry Cleaning — Women" },
  { id: "w-skirt", name: "Skirt", price: 200, unit: "per piece", group: "Dry Cleaning — Women" },

  // Men
  { id: "m-shirt", name: "Shirt", price: 150, unit: "per piece", group: "Dry Cleaning — Men" },
  { id: "m-trouser", name: "Trouser", price: 150, unit: "per piece", group: "Dry Cleaning — Men" },
  { id: "m-jeans", name: "Jeans", price: 150, unit: "per piece", group: "Dry Cleaning — Men" },
  { id: "m-kurta", name: "Kurta pyjama", price: 250, unit: "per set", group: "Dry Cleaning — Men" },
  { id: "m-dhoti", name: "Dhoti / Veshti", price: 150, unit: "per piece", group: "Dry Cleaning — Men" },
  { id: "m-sherwani", name: "Sherwani", price: 500, unit: "per piece", group: "Dry Cleaning — Men" },
  { id: "m-suit2", name: "Suit (2 pc)", price: 450, unit: "per set", group: "Dry Cleaning — Men" },
  { id: "m-blazer", name: "Blazer / Coat", price: 200, unit: "per piece", group: "Dry Cleaning — Men" },
  { id: "m-sweater", name: "Sweater", price: 200, unit: "per piece", group: "Dry Cleaning — Men" },
  { id: "m-jacket", name: "Jacket", price: 200, unit: "per piece", group: "Dry Cleaning — Men" },

  // Home
  { id: "h-blanket-single", name: "Blanket — single", price: 350, unit: "per piece", group: "Home Care" },
  { id: "h-blanket-double", name: "Blanket — double", price: 500, unit: "per piece", group: "Home Care" },
  { id: "h-quilt", name: "Quilt / Comforter — double", price: 550, unit: "per piece", group: "Home Care" },
  { id: "h-bedsheet-single", name: "Bedsheet — single", price: 60, unit: "per piece", group: "Home Care" },
  { id: "h-bedsheet-double", name: "Bedsheet — double", price: 90, unit: "per piece", group: "Home Care" },
  { id: "h-pillow-cover", name: "Pillow cover", price: 30, unit: "per piece", group: "Home Care" },
  { id: "h-towel", name: "Bath towel", price: 50, unit: "per piece", group: "Home Care" },
  { id: "h-curtain-light", name: "Curtain — light / sheer panel", price: 200, unit: "per panel", group: "Home Care" },
  { id: "h-curtain-heavy", name: "Curtain — heavy / blackout panel", price: 300, unit: "per panel", group: "Home Care" },
  { id: "h-sofa-cover", name: "Sofa cover", price: 150, unit: "per piece", group: "Home Care" },
  { id: "h-carpet", name: "Carpet / Rug deep clean", price: 25, unit: "per sq. ft", group: "Home Care" },

  // Specialist
  { id: "s-sneaker", name: "Sneaker cleaning", price: 299, unit: "per pair", group: "Specialist Care" },
  { id: "s-leather-shoe", name: "Leather shoe clean & polish", price: 399, unit: "per pair", group: "Specialist Care" },
  { id: "s-bag", name: "Handbag / Backpack cleaning", price: 399, unit: "per bag", group: "Specialist Care" },
  { id: "s-stain", name: "Specialised stain removal", price: 100, unit: "add-on", group: "Specialist Care" },
];

export const pricingNotes = [
  "Prices are starting prices and exclusive of GST.",
  "Every saree given for dry cleaning includes roll polish at no extra cost.",
  "Free pickup and delivery on orders above ₹300.",
  "Final price is confirmed after fabric inspection at pickup.",
];
