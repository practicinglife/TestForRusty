import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "si-001",
    name: "Mild Steel Round Bar",
    description:
      "A36 mild steel round bar, ideal for general forging. Available in various diameters from 1/2\" to 2\".",
    price: 3.25,
    unit: "per lb",
    category: "Steel & Iron",
    inStock: true,
  },
  {
    id: "si-002",
    name: "High Carbon Steel Flat Bar",
    description:
      "1075 high carbon steel flat bar, perfect for blade forging and tool making. Heat treatable.",
    price: 5.5,
    unit: "per lb",
    category: "Steel & Iron",
    inStock: true,
  },
  {
    id: "si-003",
    name: "Wrought Iron Bar Stock",
    description:
      "Genuine wrought iron for traditional forging and decorative work. Excellent for scrollwork.",
    price: 8.75,
    unit: "per lb",
    category: "Steel & Iron",
    inStock: true,
  },
  {
    id: "si-004",
    name: "Damascus Steel Billet",
    description:
      "Pre-welded Damascus billet with 300+ layer pattern. Ready for forging into blades and decorative pieces.",
    price: 45.0,
    unit: "per piece",
    category: "Steel & Iron",
    inStock: false,
  },
  {
    id: "te-001",
    name: "Cross Pein Hammer - 3lb",
    description:
      "Professional-grade cross pein forging hammer. Drop-forged head with hickory handle.",
    price: 42.0,
    unit: "per piece",
    category: "Tools & Equipment",
    inStock: true,
  },
  {
    id: "te-002",
    name: "Blacksmith Tongs Set",
    description:
      "Set of 4 essential tongs: flat jaw, wolf jaw, bolt, and scrolling. Hand-forged from tool steel.",
    price: 89.0,
    unit: "per set",
    category: "Tools & Equipment",
    inStock: true,
  },
  {
    id: "te-003",
    name: "Hardy & Fuller Set",
    description:
      "Matched hardy and fuller set for 1\" hardy holes. Heat-treated tool steel construction.",
    price: 65.0,
    unit: "per set",
    category: "Tools & Equipment",
    inStock: true,
  },
  {
    id: "ff-001",
    name: "Bituminous Blacksmith Coal",
    description:
      "Premium low-sulfur bituminous coal, hand-selected for forge work. Burns hot and clean.",
    price: 0.35,
    unit: "per lb",
    category: "Fuel & Flux",
    inStock: true,
  },
  {
    id: "ff-002",
    name: "Anhydrous Borax Flux",
    description:
      "Industrial-grade anhydrous borax for forge welding. Prevents scale and promotes strong welds.",
    price: 4.5,
    unit: "per lb",
    category: "Fuel & Flux",
    inStock: true,
  },
  {
    id: "ff-003",
    name: "Metallurgical Coke",
    description:
      "High-quality metallurgical coke for sustained, even heat. Ideal for extended forging sessions.",
    price: 0.45,
    unit: "per lb",
    category: "Fuel & Flux",
    inStock: true,
  },
  {
    id: "hf-001",
    name: "Decorative Rivets - Assorted",
    description:
      "Assorted decorative iron rivets in round and square head styles. Pack of 100 pieces.",
    price: 28.0,
    unit: "per pack",
    category: "Hardware & Fasteners",
    inStock: true,
  },
  {
    id: "hf-002",
    name: "Forged Iron Hinges",
    description:
      "Hand-forged strap hinges, 12\" length. Traditional design, ready to install. Sold in pairs.",
    price: 36.0,
    unit: "per pair",
    category: "Hardware & Fasteners",
    inStock: true,
  },
  {
    id: "hf-003",
    name: "Square Head Bolts - 3/8\"",
    description:
      "Traditional square head bolts in mild steel. Pack of 50 with matching nuts.",
    price: 22.0,
    unit: "per pack",
    category: "Hardware & Fasteners",
    inStock: false,
  },
];
