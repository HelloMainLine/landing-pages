const GALLERY_ITEMS = [
  {
    label: "Nails",
    gradient: "from-pink-200 via-rose-200 to-purple-200",
    pattern: "✦",
  },
  {
    label: "Art",
    gradient: "from-amber-100 via-orange-100 to-rose-200",
    pattern: "✧",
  },
  {
    label: "Pedicure",
    gradient: "from-teal-100 via-emerald-100 to-green-200",
    pattern: "◈",
  },
  {
    label: "Gel",
    gradient: "from-violet-200 via-purple-200 to-fuchsia-200",
    pattern: "◇",
  },
  {
    label: "Acrylic",
    gradient: "from-blue-100 via-indigo-100 to-violet-200",
    pattern: "✦",
  },
  {
    label: "Bridal",
    gradient: "from-rose-100 via-pink-100 to-amber-100",
    pattern: "✧",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#FAFAF7] py-section-mobile md:py-section"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ── Section Heading ── */}
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
            Our Work
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-[#D4A5A5]" />
          <p className="mt-5 font-body text-base leading-relaxed text-[#3D3D3D] md:text-lg">
            Every nail tells a story. Browse the looks our artists have created
            for clients just like you.
          </p>
        </div>

        {/* ── Masonry-like Grid ── */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className="group relative mb-5 aspect-[4/5] overflow-hidden rounded-lg break-inside-avoid"
            >
              {/* ── Gradient Placeholder ── */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-110`}
              />

              {/* ── Decorative Pattern ── */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="font-heading text-7xl text-[#B88686]/40">
                  {item.pattern}
                  {item.pattern}
                </span>
              </div>

              {/* ── Subtle Inner Glow ── */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* ── Label Overlay ── */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-sm">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-white">
                    {item.label}
                  </span>
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3 w-3 fill-white/70"
                    aria-hidden="true"
                  >
                    <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.47l-3.52 1.88.67-3.93L2.3 5.64l3.94-.57L8 1.5z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
