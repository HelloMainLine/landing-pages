const STATS = [
  { value: "6+", label: "Years" },
  { value: "2,000+", label: "Clients" },
  { value: "15+", label: "Services" },
  { value: "8", label: "Artists" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FAFAF7] py-section-mobile md:py-section"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ── Section Heading ── */}
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
            Our Studio
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-[#D4A5A5]" />
        </div>

        {/* ── Two-Column Layout ── */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* ── Left: Placeholder Image ── */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            {/* Base gradient for the salon interior feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/30 via-[#FAFAF7] to-[#D4A5A5]/20" />

            {/* Decorative circles representing salon ambiance */}
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#D4A5A5]/10" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#D4A5A5]/15" />
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A5A5]/20" />

            {/* Salon mirror/vanity SVG illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 200 160"
                className="h-32 w-40 text-[#B88686]/40 md:h-40 md:w-48"
                aria-hidden="true"
              >
                {/* Mirror */}
                <ellipse cx="100" cy="70" rx="50" ry="55" fill="currentColor" />
                {/* Stand */}
                <rect x="95" y="125" width="10" height="20" fill="currentColor" className="opacity-60" />
                {/* Nail polish bottle */}
                <rect x="130" y="100" width="12" height="24" rx="2" fill="currentColor" className="opacity-50" />
                <rect x="133" y="94" width="6" height="8" rx="1" fill="currentColor" className="opacity-40" />
                {/* Second bottle */}
                <rect x="58" y="105" width="10" height="20" rx="2" fill="currentColor" className="opacity-50" />
                <rect x="60" y="99" width="6" height="7" rx="1" fill="currentColor" className="opacity-40" />
              </svg>
            </div>

            {/* Subtle overlay gradient at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          {/* ── Right: Studio Story ── */}
          <div>
            <h3 className="font-heading text-2xl font-semibold leading-tight text-[#1A1A1A] md:text-3xl">
              Where artistry meets
              <br />
              <span className="text-[#B88686]">self-care.</span>
            </h3>
            <p className="mt-5 font-body text-sm leading-relaxed text-[#3D3D3D] md:text-base">
              Luxe Nails was born from a simple belief: your nails deserve the
              same care and attention as any other part of your self-care
              routine. Our studio combines clean, modern design with a calming
              atmosphere so every visit feels like an escape.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-[#6B6B6B] md:text-base">
              Every artist on our team brings years of experience and a passion
              for precision. We use only premium, cruelty-free products and
              maintain the highest sanitation standards — because beautiful
              nails should never come at a cost to your health.
            </p>

            {/* ── Stats Grid ── */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-[#D4A5A5]/20 bg-[#F5F4F0] p-3 text-center"
                >
                  <p className="font-heading text-xl font-bold text-[#B88686] md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 font-body text-xs text-[#6B6B6B]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
