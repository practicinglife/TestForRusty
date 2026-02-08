import type { Testimonial } from "@/types";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}): React.JSX.Element {
  return (
    <div className="rounded-xl border border-[#374151] bg-[#2a2a2a] p-6">
      <div className="mb-3 text-2xl text-amber-500">★★★★★</div>
      <p className="italic text-gray-300">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-4">
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  );
}
