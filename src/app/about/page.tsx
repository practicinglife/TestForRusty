import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | IronForge Blacksmithing",
  description:
    "Learn about IronForge — our history, team, and commitment to the craft of blacksmithing.",
};

const values = [
  {
    icon: "🔥",
    title: "Craftsmanship",
    description:
      "Every piece is forged by hand with decades of experience and an unwavering commitment to quality.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    description:
      "We stand behind our work and our word. Honest pricing, honest timelines, honest quality.",
  },
  {
    icon: "📚",
    title: "Tradition",
    description:
      "We preserve ancient techniques while embracing modern metallurgy to deliver the best of both worlds.",
  },
  {
    icon: "♻️",
    title: "Sustainability",
    description:
      "We reclaim and recycle metal whenever possible, minimizing waste and respecting our resources.",
  },
];

const team = [
  {
    name: "James \"Hammer\" Caldwell",
    role: "Master Smith & Founder",
    bio: "40+ years at the anvil. Trained in traditional European smithing techniques. Founded IronForge in 1987.",
  },
  {
    name: "Maria Santos",
    role: "Lead Bladesmith",
    bio: "Specialist in Damascus and high-carbon blade forging. Award-winning knife maker since 2005.",
  },
  {
    name: "Derek Kowalski",
    role: "Architectural Metalworker",
    bio: "Expert in large-scale decorative and structural ironwork. Background in welding engineering.",
  },
  {
    name: "Aisha Thompson",
    role: "Operations & Wholesale Manager",
    bio: "Manages material sourcing, inventory, and wholesale accounts. Keeps the forge running smoothly.",
  },
];

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="bg-[#1a1a1a]">
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Our <span className="text-amber-500">Story</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              IronForge was born in 1987 in a small garage in Steel City,
              Pennsylvania. What started as one man&apos;s passion for
              traditional metalwork has grown into a full-service forge and
              wholesale supply house trusted by smiths, artists, and builders
              across the country.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              For over 35 years, we&apos;ve kept the fire burning — literally.
              Our coal forge runs six days a week, turning raw steel and iron
              into functional art, custom tools, and architectural masterpieces.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-64 items-center justify-center rounded-xl bg-gradient-to-r from-amber-900/40 via-[#2a2a2a] to-amber-900/40 sm:h-80">
            <div className="text-center">
              <span className="text-6xl">⚒️</span>
              <p className="mt-2 text-gray-500">
                The IronForge workshop — where fire meets steel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Our <span className="text-amber-500">Values</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-[#374151] bg-[#2a2a2a] p-6 text-center"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="mt-3 text-lg font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#222222] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Meet the <span className="text-amber-500">Team</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-[#374151] bg-[#2a2a2a] p-6"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-600/20">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="text-center font-bold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-center text-sm font-medium text-amber-400">
                  {member.role}
                </p>
                <p className="mt-3 text-center text-sm text-gray-400">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "35+", label: "Years in Business" },
              { value: "5,000+", label: "Projects Completed" },
              { value: "200+", label: "Wholesale Clients" },
              { value: "4", label: "Master Smiths" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-amber-500">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
