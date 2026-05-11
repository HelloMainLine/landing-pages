const TESTIMONIALS = [
  {
    name: "Sophia Chen",
    service: "Gel Manicure + Nail Art",
    quote:
      "Absolutely obsessed with my nails! The artist took my vision board and turned it into wearable art. I've never had gels last this long without chipping.",
    rating: 5,
  },
  {
    name: "Amara Johnson",
    service: "Spa Pedicure",
    quote:
      "The spa pedicure is pure bliss. The massage alone is worth it — my feet have never felt softer. This is my go-to for pre-vacation pampering.",
    rating: 5,
  },
  {
    name: "Isabella Rossi",
    service: "Acrylic Full Set",
    quote:
      "I've been to a dozen salons and Luxe Nails is on another level. My acrylics are lightweight, perfectly shaped, and the rose-gold accent is chef's kiss.",
    rating: 5,
  },
  {
    name: "Maya Patel",
    service: "Bridal Package",
    quote:
      "They made my wedding day perfect. The trial session helped me pick the exact shade, and on the day, everything was seamless. Thank you, Luxe team!",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 16 16"
          className={`h-3.5 w-3.5 ${i < rating ? "fill-[#D4A5A5]" : "fill-[#D4A5A5]/20"}`}
          aria-hidden="true"
        >
          <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.47l-3.52 1.88.67-3.93L2.3 5.64l3.94-.57L8 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#F5F4F0] py-section-mobile md:py-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ── Section Heading ── */}
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-[#D4A5A5]" />
          <p className="mt-5 font-body text-base leading-relaxed text-[#3D3D3D] md:text-lg">
            Real reviews from real clients who trust us with their nails.
          </p>
        </div>

        {/* ── Horizontal Scroll / Grid ── */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex w-[85vw] shrink-0 snap-center flex-col rounded-lg border border-[#D4A5A5]/20 bg-[#FAFAF7] p-6 transition-shadow duration-300 hover:shadow-md md:w-auto"
            >
              {/* ── Stars ── */}
              <StarRating rating={t.rating} />

              {/* ── Quote ── */}
              <blockquote className="mt-4 flex-1 font-body text-sm leading-relaxed text-[#3D3D3D] italic md:text-base">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* ── Client Info ── */}
              <div className="mt-5 border-t border-[#D4A5A5]/10 pt-4">
                <p className="font-heading text-base font-semibold text-[#1A1A1A]">
                  {t.name}
                </p>
                <p className="mt-0.5 font-body text-xs text-[#6B6B6B]">
                  {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
