"use client";

import { useState } from "react";
import GalleryItemComponent from "@/components/GalleryItem";
import { galleryItems } from "@/data/gallery";
import type { GalleryCategory } from "@/types";

const categories: (GalleryCategory | "All")[] = [
  "All",
  "Custom Forging",
  "Decorative",
  "Blades",
  "Architectural",
];

export default function GalleryPage(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<
    GalleryCategory | "All"
  >("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#1a1a1a] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Our <span className="text-amber-500">Gallery</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            A showcase of fire, hammer, and skill
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <GalleryItemComponent key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            No items in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
