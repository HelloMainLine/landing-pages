export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D4A5A5]/20 bg-[#F5F4F0]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          {/* ── Column 1: Brand ── */}
          <div>
            <h3 className="font-heading text-xl font-bold text-[#B88686]">
              LUXE NAILS
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-[#6B6B6B]">
              Premium nail artistry in [City]. Book your experience today.
            </p>
            <div className="mt-5 flex gap-4">
              {/* Social icons — placeholder links */}
              <SocialIcon href="#" label="Instagram" />
              <SocialIcon href="#" label="Facebook" />
              <SocialIcon href="#" label="Pinterest" />
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {["Services", "Gallery", "About", "Contact", "Book Now"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="font-body text-sm text-[#6B6B6B] transition-colors hover:text-[#B88686]"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* ── Column 3: Hours ── */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
              Hours
            </h4>
            <ul className="mt-4 space-y-2 font-body text-sm text-[#6B6B6B]">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span>10 AM – 7 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9 AM – 6 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>11 AM – 5 PM</span>
              </li>
            </ul>
          </div>

          {/* ── Column 4: Contact ── */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 font-body text-sm text-[#6B6B6B]">
              <li>123 Main Street, [City]</li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="hover:text-[#B88686] transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@luxenails.com"
                  className="hover:text-[#B88686] transition-colors"
                >
                  hello@luxenails.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-[#D4A5A5]/20 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 md:flex-row lg:px-10">
          <p className="font-body text-xs text-[#6B6B6B]">
            &copy; {currentYear} Luxe Nails. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="font-body text-xs text-[#6B6B6B] hover:text-[#B88686] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-xs text-[#6B6B6B] hover:text-[#B88686] transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label }: { href: string; label: string }) {
  const initials = label.slice(0, 1);
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4A5A5]/30 text-xs font-semibold text-[#B88686] transition-colors hover:bg-[#D4A5A5] hover:text-white"
    >
      {initials}
    </a>
  );
}
