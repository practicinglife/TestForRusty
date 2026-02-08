import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { services } from "@/data/services";
import { products } from "@/data/products";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jake Morrison",
    role: "Custom Knife Collector",
    quote:
      "IronForge crafted a Damascus bowie that's become the crown jewel of my collection. The attention to detail is unmatched.",
  },
  {
    id: "t2",
    name: "Sarah Chen",
    role: "Interior Designer",
    quote:
      "The custom railings and fireplace set they forged for my client's home transformed the entire space. True artisans.",
  },
  {
    id: "t3",
    name: "Tom Becker",
    role: "Farrier & Blacksmith",
    quote:
      "Best wholesale prices on coal and steel in the region. Fast shipping and consistent quality — they're my go-to supplier.",
  },
];

const featuredProducts = products.filter((p) => p.inStock).slice(0, 4);
const featuredServices = services.slice(0, 3);

export default function Home(): React.JSX.Element {
  return (
    <>
      <HeroSection />

      {/* Featured Services */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What We <span className="text-amber-500">Do</span>
            </h2>
            <p className="mt-3 text-gray-400">
              Traditional techniques, modern precision
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-lg border border-amber-600 px-6 py-3 font-semibold text-amber-400 transition-colors hover:bg-amber-600/10"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#222222] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Wholesale <span className="text-amber-500">Materials</span>
            </h2>
            <p className="mt-3 text-gray-400">
              Premium supplies for smiths and fabricators
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-xl border border-[#374151] bg-[#2a2a2a] p-5"
              >
                <div className="mb-3 flex h-24 items-center justify-center rounded-lg bg-[#374151]/40">
                  <span className="text-3xl opacity-60">
                    {product.category === "Steel & Iron" && "🪨"}
                    {product.category === "Tools & Equipment" && "🔨"}
                    {product.category === "Fuel & Flux" && "🔥"}
                    {product.category === "Hardware & Fasteners" && "🔩"}
                  </span>
                </div>
                <h3 className="font-bold text-white">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-400 line-clamp-2">
                  {product.description}
                </p>
                <p className="mt-3">
                  <span className="text-xl font-bold text-amber-400">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="ml-1 text-xs text-gray-500">
                    {product.unit}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/shop"
              className="inline-block rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-500"
            >
              Browse All Materials →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What Our <span className="text-amber-500">Clients</span> Say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-amber-100">
            Whether you need custom metalwork or wholesale materials, we&apos;re
            here to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-amber-800 transition-colors hover:bg-gray-100"
            >
              Get in Touch
            </Link>
            <Link
              href="/shop"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Shop Materials
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
