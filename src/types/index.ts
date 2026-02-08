export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: ProductCategory;
  inStock: boolean;
}

export type ProductCategory =
  | "Steel & Iron"
  | "Tools & Equipment"
  | "Fuel & Flux"
  | "Hardware & Fasteners";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: GalleryCategory;
  color: string;
}

export type GalleryCategory =
  | "Custom Forging"
  | "Decorative"
  | "Blades"
  | "Architectural";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}
