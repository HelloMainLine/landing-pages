export default function Pricing() {
  return (
    <section className="bg-[#D4A5A5] py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:flex-row md:gap-10 md:text-left">
          {/* ── Badge ── */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
            <span className="font-heading text-2xl font-bold text-white">
              ✦
            </span>
          </div>

          {/* ── Offer Text ── */}
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
              First Visit Special
            </h3>
            <p className="mt-1.5 font-body text-sm leading-relaxed text-white/85 md:text-base">
              New clients receive <strong className="text-white">20% off</strong> any full-price
              service. Mention this offer when booking your first appointment.
            </p>
          </div>

          {/* ── CTA ── */}
          <a
            href="#book"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-3 font-body text-sm font-semibold text-[#B88686] transition-colors hover:bg-white/90"
          >
            Claim Offer
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M8 0 6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
