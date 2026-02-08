import Link from "next/link";

export default function HeroSection(): React.JSX.Element {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#292524] to-[#1a1a1a]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_#d97706_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_#f59e0b_0%,_transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-500">
            Est. 1987 · Steel City, PA
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Forged in Fire.{" "}
            <span className="text-amber-500">Built to Last.</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg text-gray-300">
            Custom blacksmithing, traditional metalwork, and wholesale forging
            materials. From anvil to art — we shape metal into masterpieces.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-500"
            >
              Shop Materials
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-amber-600 px-6 py-3 font-semibold text-amber-400 transition-colors hover:bg-amber-600/10"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
    </section>
  );
}
