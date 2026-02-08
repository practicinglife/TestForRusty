import type { Service } from "@/types";

export default function ServiceCard({
  service,
}: {
  service: Service;
}): React.JSX.Element {
  return (
    <div className="rounded-xl border border-[#374151] bg-[#2a2a2a] p-6 transition-colors hover:border-amber-600/50">
      <span className="text-4xl">{service.icon}</span>
      <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">
        {service.description}
      </p>
      <ul className="mt-4 space-y-1">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-amber-500">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
