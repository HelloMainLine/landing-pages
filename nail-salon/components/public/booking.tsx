"use client";

const SERVICES = [
  "Classic Manicure",
  "Gel Manicure",
  "Classic Pedicure",
  "Spa Pedicure",
  "Acrylic Full Set",
  "Gel Extensions",
  "Nail Art",
  "Paraffin Treatment",
];

const TIME_SLOTS = ["Morning (9 AM – 12 PM)", "Afternoon (12 PM – 5 PM)", "Evening (5 PM – 7 PM)"];

export default function Booking() {
  return (
    <section id="booking" className="bg-[#FAFAF7] py-section-mobile md:py-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ── Section Heading ── */}
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
            Ready to Elevate Your Look?
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-[#D4A5A5]" />
          <p className="mt-5 font-body text-base leading-relaxed text-[#3D3D3D] md:text-lg">
            Your perfect manicure or pedicure is just a click away. Fill out the
            form and we&apos;ll reach out to confirm your appointment.
          </p>
        </div>

        {/* ── Two-Column Layout ── */}
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* ── Left: Info Copy ── */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-[#1A1A1A]">
                How to Book
              </h3>
              <div className="mt-2 h-px w-10 bg-[#D4A5A5]" />
              <p className="mt-4 font-body text-base leading-relaxed text-[#3D3D3D]">
                Prefer to call or walk in? We&apos;re here to help. Use the
                details below, or fill out the form and we&apos;ll get back to
                you within 2–4 hours during business hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              <DetailItem
                icon={
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M3.5 2A1.5 1.5 0 002 3.5V5c0 1.149.113 2.228.326 3.222a25.66 25.66 0 002.686 6.566 25.682 25.682 0 005.2 5.2 25.66 25.66 0 006.566 2.686A25.66 25.66 0 0020 18V16.5a1.5 1.5 0 00-1.5-1.5h-1.483a2 2 0 01-1.932-1.446l-.378-1.512a2 2 0 01.544-2.044l.276-.276a.5.5 0 00.113-.542A13.96 13.96 0 0011.32 8.16a.5.5 0 00-.542.113l-.276.276a2 2 0 01-2.044.544L6.946 8.415A2 2 0 015.5 6.483V5A1.5 1.5 0 004 3.5H3.5z" />
                  </svg>
                }
                label="Phone"
                value="(555) 123-4567"
              />
              <DetailItem
                icon={
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                  </svg>
                }
                label="Hours"
                value="Mon–Fri 10 AM–7 PM · Sat 9 AM–6 PM · Sun 11 AM–5 PM"
              />
              <DetailItem
                icon={
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887.454 3.665 1.257 5.234a.75.75 0 001.296.75 7.5 7.5 0 010 0A6.001 6.001 0 0016 8a6 6 0 00-6-6zm0 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
                  </svg>
                }
                label="Address"
                value="123 Main Street, [City, State 12345]"
              />
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="relative rounded-lg border border-[#D4A5A5]/30 bg-[#F5F4F0] p-6 shadow-sm md:p-8">
            {/* Demo Badge */}
            <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full border border-[#D4A5A5]/30 bg-[#FAFAF7] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A5A5]" />
              <span className="font-body text-xs font-medium text-[#6B6B6B]">
                Demo Mode
              </span>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-2 space-y-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="booking-name" className="block font-body text-sm font-medium text-[#1A1A1A]">
                  Full Name <span className="text-[#B88686]">*</span>
                </label>
                <input
                  id="booking-name"
                  type="text"
                  placeholder="Jane Doe"
                  className="mt-1.5 block w-full rounded-md border border-[#D4A5A5]/30 bg-[#FAFAF7] px-4 py-2.5 font-body text-sm text-[#1A1A1A] placeholder-[#A0A0A0] outline-none transition-all focus:border-[#D4A5A5] focus:ring-2 focus:ring-[#D4A5A5]/20"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="booking-email" className="block font-body text-sm font-medium text-[#1A1A1A]">
                    Email <span className="text-[#B88686]">*</span>
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    placeholder="jane@example.com"
                    className="mt-1.5 block w-full rounded-md border border-[#D4A5A5]/30 bg-[#FAFAF7] px-4 py-2.5 font-body text-sm text-[#1A1A1A] placeholder-[#A0A0A0] outline-none transition-all focus:border-[#D4A5A5] focus:ring-2 focus:ring-[#D4A5A5]/20"
                  />
                </div>
                <div>
                  <label htmlFor="booking-phone" className="block font-body text-sm font-medium text-[#1A1A1A]">
                    Phone <span className="text-[#B88686]">*</span>
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="mt-1.5 block w-full rounded-md border border-[#D4A5A5]/30 bg-[#FAFAF7] px-4 py-2.5 font-body text-sm text-[#1A1A1A] placeholder-[#A0A0A0] outline-none transition-all focus:border-[#D4A5A5] focus:ring-2 focus:ring-[#D4A5A5]/20"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="booking-service" className="block font-body text-sm font-medium text-[#1A1A1A]">
                  Service <span className="text-[#B88686]">*</span>
                </label>
                <select
                  id="booking-service"
                  defaultValue=""
                  className="mt-1.5 block w-full rounded-md border border-[#D4A5A5]/30 bg-[#FAFAF7] px-4 py-2.5 font-body text-sm text-[#1A1A1A] outline-none transition-all focus:border-[#D4A5A5] focus:ring-2 focus:ring-[#D4A5A5]/20"
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date + Time */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="booking-date" className="block font-body text-sm font-medium text-[#1A1A1A]">
                    Preferred Date <span className="text-[#B88686]">*</span>
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    className="mt-1.5 block w-full rounded-md border border-[#D4A5A5]/30 bg-[#FAFAF7] px-4 py-2.5 font-body text-sm text-[#1A1A1A] outline-none transition-all focus:border-[#D4A5A5] focus:ring-2 focus:ring-[#D4A5A5]/20"
                  />
                </div>
                <div>
                  <label htmlFor="booking-time" className="block font-body text-sm font-medium text-[#1A1A1A]">
                    Preferred Time <span className="text-[#B88686]">*</span>
                  </label>
                  <select
                    id="booking-time"
                    defaultValue=""
                    className="mt-1.5 block w-full rounded-md border border-[#D4A5A5]/30 bg-[#FAFAF7] px-4 py-2.5 font-body text-sm text-[#1A1A1A] outline-none transition-all focus:border-[#D4A5A5] focus:ring-2 focus:ring-[#D4A5A5]/20"
                  >
                    <option value="" disabled>
                      Select time…
                    </option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="booking-notes" className="block font-body text-sm font-medium text-[#1A1A1A]">
                  Special Requests
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  placeholder="Any allergies, design ideas, or preferences…"
                  className="mt-1.5 block w-full resize-y rounded-md border border-[#D4A5A5]/30 bg-[#FAFAF7] px-4 py-2.5 font-body text-sm text-[#1A1A1A] placeholder-[#A0A0A0] outline-none transition-all focus:border-[#D4A5A5] focus:ring-2 focus:ring-[#D4A5A5]/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md bg-[#D4A5A5] px-6 py-3 font-body text-sm font-semibold text-white transition-all hover:bg-[#C48F8F] focus:outline-none focus:ring-2 focus:ring-[#D4A5A5]/40"
              >
                Book My Appointment
              </button>

              <p className="text-center font-body text-xs text-[#6B6B6B]">
                This is a demo form. No data will be sent.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D4A5A5]/10 text-[#B88686]">
        {icon}
      </span>
      <div>
        <p className="font-body text-sm font-semibold text-[#1A1A1A]">{label}</p>
        <p className="font-body text-sm text-[#6B6B6B]">{value}</p>
      </div>
    </div>
  );
}
