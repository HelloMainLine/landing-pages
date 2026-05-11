import { cn } from "@/lib/utils";

const SERVICES = [
  {
    name: "Classic Manicure",
    initials: "CM",
    description:
      "Nail shaping, cuticle care, buffing, and a polish application for clean, polished hands.",
    price: "$35",
    duration: "45 min",
  },
  {
    name: "Gel Manicure",
    initials: "GM",
    description:
      "Long-lasting gel polish applied over a manicured base. Chip-resistant shine for up to two weeks.",
    price: "$50",
    duration: "60 min",
  },
  {
    name: "Classic Pedicure",
    initials: "CP",
    description:
      "Foot soak, nail shaping, cuticle care, exfoliating scrub, massage, and polish application.",
    price: "$45",
    duration: "50 min",
  },
  {
    name: "Spa Pedicure",
    initials: "SP",
    description:
      "An elevated pedicure with a luxurious soak, sea salt scrub, hydrating mask, and extended massage.",
    price: "$65",
    duration: "75 min",
  },
  {
    name: "Acrylic Full Set",
    initials: "AF",
    description:
      "Custom-shaped acrylic overlay for length and strength. Filed and polished to your desired shape.",
    price: "$70",
    duration: "90 min",
  },
  {
    name: "Gel Extensions",
    initials: "GE",
    description:
      "Lightweight gel extensions built on tips or forms for a natural-looking, durable finish.",
    price: "$85",
    duration: "90 min",
  },
  {
    name: "Nail Art",
    initials: "NA",
    description:
      "Hand-painted designs, 3D accents, foil, chrome, and more. Price varies by complexity.",
    price: "$15+",
    duration: "Varies",
  },
  {
    name: "Paraffin Treatment",
    initials: "PT",
    description:
      "Soothing warm paraffin wax dip for hands or feet. Deeply hydrates and relieves joint stiffness.",
    price: "$25",
    duration: "20 min",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#FAFAF7] py-section-mobile md:py-section"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ── Section Heading ── */}
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
            Our Services
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-[#D4A5A5]" />
          <p className="mt-5 font-body text-base leading-relaxed text-[#3D3D3D] md:text-lg">
            From classic care to bespoke artistry, every treatment is designed
            to leave your nails — and you — feeling renewed. We use only
            premium products in a serene, sanitized environment.
          </p>
        </div>

        {/* ── Service Grid ── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className={cn(
                "group relative rounded-lg border border-[#D4A5A5]/30",
                "bg-[#F5F4F0] p-6 transition-all duration-300",
                "hover:border-[#D4A5A5] hover:shadow-md",
              )}
            >
              {/* ── Icon Circle ── */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A5A5]/10">
                <svg
                  viewBox="0 0 48 48"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="22"
                    fill="none"
                    stroke="#D4A5A5"
                    strokeWidth="1.5"
                  />
                  <text
                    x="24"
                    y="24"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#B88686"
                    fontSize="13"
                    fontWeight="600"
                    fontFamily="Inter, sans-serif"
                  >
                    {service.initials}
                  </text>
                </svg>
              </div>

              {/* ── Service Name ── */}
              <h3 className="font-heading text-xl font-semibold text-[#1A1A1A]">
                {service.name}
              </h3>

              {/* ── Description ── */}
              <p className="mt-2 font-body text-sm leading-relaxed text-[#6B6B6B]">
                {service.description}
              </p>

              {/* ── Price & Duration Row ── */}
              <div className="mt-5 flex items-center justify-between border-t border-[#D4A5A5]/20 pt-4">
                <span className="font-heading text-lg font-bold text-[#B88686]">
                  {service.price}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F0EDE8] px-3 py-1 font-body text-xs font-medium text-[#3D3D3D]">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 fill-current text-[#B88686]"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="7" />
                  </svg>
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
