export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center overflow-hidden">
      {/* ── Background Image Placeholder ── */}
      <div className="absolute inset-0 bg-gray-800" />

      {/* ── Gradient Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-[#B88686]">
            Premium Nail Salon
          </p>

          {/* Headline */}
          <h1 className="mt-4 font-heading text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Your Nails,
            <br />
            <span className="text-[#B88686]">Elevated.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-gray-300 md:text-xl">
            Premium nail artistry in [City]. Book your experience today.
          </p>

          {/* ── CTA Buttons ── */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#book"
              className="inline-block rounded-md bg-[#D4A5A5] px-8 py-3.5 font-body text-base font-semibold text-white transition-all duration-200 hover:bg-[#B88686] hover:shadow-lg"
            >
              Book My Appointment
            </a>
            <a
              href="#services"
              className="inline-block rounded-md border-2 border-[#D4A5A5] px-8 py-3.5 font-body text-base font-semibold text-[#B88686] transition-all duration-200 hover:bg-[#D4A5A5] hover:text-white"
            >
              Show Me Services
            </a>
          </div>
        </div>
      </div>

      {/* ── Floating Stats Bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden bg-black/50 backdrop-blur-sm md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-around px-10 py-5">
          <StatItem value="50+" label="Polish Colors" />
          <div className="hidden h-8 w-px bg-white/20 md:block" />
          <StatItem value="5.0" label="Star Rated" />
          <div className="hidden h-8 w-px bg-white/20 md:block" />
          <StatItem value="500+" label="Happy Clients" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-heading text-2xl font-bold text-white">{value}</p>
      <p className="font-body text-sm text-gray-400">{label}</p>
    </div>
  );
}
