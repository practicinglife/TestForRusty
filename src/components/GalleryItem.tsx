import type { GalleryItem as GalleryItemType } from "@/types";

export default function GalleryItem({
  item,
}: {
  item: GalleryItemType;
}): React.JSX.Element {
  return (
    <div className="group overflow-hidden rounded-xl border border-[#374151] bg-[#2a2a2a] transition-colors hover:border-amber-600/50">
      <div
        className="flex h-56 items-center justify-center transition-transform group-hover:scale-105"
        style={{ backgroundColor: item.color }}
      >
        <span className="text-5xl opacity-60">🔥</span>
      </div>
      <div className="p-4">
        <span className="inline-block rounded-full bg-amber-600/20 px-3 py-0.5 text-xs font-medium text-amber-400">
          {item.category}
        </span>
        <h3 className="mt-2 font-bold text-white">{item.title}</h3>
        <p className="mt-1 text-sm text-gray-400">{item.description}</p>
      </div>
    </div>
  );
}
