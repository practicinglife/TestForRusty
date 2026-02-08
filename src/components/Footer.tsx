import Link from "next/link";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-[#374151] bg-[#111111]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">⚒️</span>
              <span className="text-xl font-bold text-white">
                Iron<span className="text-amber-500">Forge</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Traditional craftsmanship meets modern precision. Wholesale
              blacksmithing materials and custom metalwork since 1987.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-amber-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-amber-400">
                  Wholesale Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Custom Forging</li>
              <li>Repair & Restoration</li>
              <li>Decorative Ironwork</li>
              <li>Blade Forging</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 142 Anvil Road, Steel City, PA 15201</li>
              <li>📞 (412) 555-0198</li>
              <li>✉️ info@ironforge.example</li>
              <li>🕐 Mon–Sat: 7 AM – 6 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#374151] pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} IronForge Blacksmithing. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
