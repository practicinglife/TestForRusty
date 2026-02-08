"use client";

import { useCart } from "@/components/CartProvider";

export default function CartDrawer(): React.JSX.Element | null {
  const { items, isOpen, totalPrice, removeItem, updateQuantity, clearCart, closeCart } =
    useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/60"
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#1e1e1e] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#374151] p-4">
          <h2 className="text-xl font-bold text-amber-500">
            🛒 Cart ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="text-2xl text-gray-400 transition-colors hover:text-white"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="py-12 text-center text-gray-400">
              Your cart is empty
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="rounded-lg border border-[#374151] bg-[#2a2a2a] p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        ${item.product.price.toFixed(2)} {item.product.unit}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="ml-2 text-gray-500 transition-colors hover:text-red-400"
                      aria-label={`Remove ${item.product.name}`}
                    >
                      ✕
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded bg-[#374151] text-white transition-colors hover:bg-amber-600"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded bg-[#374151] text-white transition-colors hover:bg-amber-600"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold text-amber-400">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#374151] p-4">
            <div className="mb-4 flex items-center justify-between text-lg font-bold">
              <span className="text-white">Total:</span>
              <span className="text-amber-400">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="mb-2 w-full rounded-lg bg-amber-600 py-3 font-semibold text-white transition-colors hover:bg-amber-500">
              Request Wholesale Quote
            </button>
            <button
              onClick={clearCart}
              className="w-full rounded-lg border border-[#374151] py-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
