"use client";

import type { Product } from "@/types";
import { useCart } from "@/components/CartProvider";

export default function ProductCard({
  product,
}: {
  product: Product;
}): React.JSX.Element {
  const { addItem } = useCart();

  return (
    <div className="flex flex-col rounded-xl border border-[#374151] bg-[#2a2a2a] p-5 transition-colors hover:border-amber-600/50">
      <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-[#374151]/40">
        <span className="text-4xl opacity-60">
          {product.category === "Steel & Iron" && "🪨"}
          {product.category === "Tools & Equipment" && "🔨"}
          {product.category === "Fuel & Flux" && "🔥"}
          {product.category === "Hardware & Fasteners" && "🔩"}
        </span>
      </div>

      <span className="inline-block self-start rounded-full bg-amber-600/20 px-3 py-0.5 text-xs font-medium text-amber-400">
        {product.category}
      </span>

      <h3 className="mt-2 text-lg font-bold text-white">{product.name}</h3>
      <p className="mt-1 flex-1 text-sm text-gray-400">{product.description}</p>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <span className="text-2xl font-bold text-amber-400">
            ${product.price.toFixed(2)}
          </span>
          <span className="ml-1 text-sm text-gray-500">{product.unit}</span>
        </div>
        {product.inStock ? (
          <button
            onClick={() => addItem(product)}
            className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-500"
          >
            Add to Cart
          </button>
        ) : (
          <span className="rounded-lg border border-red-800/50 px-4 py-2 text-sm text-red-400">
            Out of Stock
          </span>
        )}
      </div>
    </div>
  );
}
