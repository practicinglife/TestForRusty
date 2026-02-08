import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | IronForge Blacksmithing",
  description:
    "Custom forging, repair, decorative ironwork, tool making, architectural metalwork, and blade forging.",
};

export default function ServicesPage(): React.JSX.Element {
  return (
    <div className="bg-[#1a1a1a] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Our <span className="text-amber-500">Services</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            From functional tools to fine art — we shape metal to your vision.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-20 rounded-xl border border-amber-600/30 bg-gradient-to-r from-amber-900/20 to-amber-800/10 p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Have a Custom Project in Mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            We love a challenge. Bring us your sketches, ideas, or even just a
            description and we&apos;ll work with you to forge something
            extraordinary.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-500"
          >
            Start a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
