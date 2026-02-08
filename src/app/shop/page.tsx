"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import type { ProductCategory } from "@/types";

const categories: (ProductCategory | "All")[] = [
  "All",
  "Steel & Iron",
  "Tools & Equipment",
  "Fuel & Flux",
  "Hardware & Fasteners",
];

export default function ShopPage(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<
    ProductCategory | "All"
  >("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#1a1a1a] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Wholesale <span className="text-amber-500">Materials</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Premium supplies for blacksmiths, fabricators, and artisans
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-amber-600 text-white"
                  : "border border-[#374151] text-gray-400 hover:border-amber-600/50 hover:text-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            No products in this category.
          </p>
        )}

        <div className="mt-16 rounded-xl border border-[#374151] bg-[#2a2a2a] p-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Need Bulk Pricing?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Orders over 500 lbs of steel or 1,000 lbs of coal qualify for
            additional wholesale discounts. Contact us for a custom quote.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-500"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
