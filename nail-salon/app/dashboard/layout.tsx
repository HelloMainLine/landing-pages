"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

// ── Inline SVG Icons (lucide-style, 20×20) ──────────────────────

type IconDef = { d: string; extra: string };

function Svg({ d, extra }: { d: string; extra?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
      {extra && <g dangerouslySetInnerHTML={{ __html: extra }} />}
    </svg>
  );
}

const icons: Record<string, IconDef> = {
   overview: { d: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z", extra: "" },
  appointments: { d: "M3 4h18v18H3zM16 2v4M8 2v4M3 10h18", extra: '<line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="18" x2="16" y2="18"/>' },
  clients: { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", extra: '<circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
  services: { d: "M6.5 6.5L17.5 17.5", extra: '<circle cx="4.5" cy="4.5" r="2.5"/><circle cx="19.5" cy="19.5" r="2.5"/><line x1="14" y1="17" x2="17" y2="14"/>' },
  staff: { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", extra: '<circle cx="12" cy="7" r="4"/>' },
  products: { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z", extra: '<line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
  payments: { d: "M1 4h22v16H1z", extra: '<line x1="1" y1="10" x2="23" y2="10"/>' },
  reviews: { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", extra: '<line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/>' },
  logout: { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9", extra: "" },
  menu: { d: "M3 6h18M3 12h18M3 18h18", extra: "" },
  logo: { d: "M12 2C7.5 2 4 5.5 4 10c0 4.5 8 12 8 12s8-7.5 8-12c0-4.5-3.5-8-8-8zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", extra: "" },
};

const navItems = [
  { label: "Overview", href: "/dashboard", key: "overview" },
  { label: "Appointments", href: "/dashboard/appointments", key: "appointments" },
  { label: "Clients", href: "/dashboard/clients", key: "clients" },
  { label: "Services", href: "/dashboard/services", key: "services" },
  { label: "Staff", href: "/dashboard/staff", key: "staff" },
  { label: "Products", href: "/dashboard/products", key: "products" },
  { label: "Payments", href: "/dashboard/payments", key: "payments" },
  { label: "Reviews", href: "/dashboard/reviews", key: "reviews" },
];

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  return (
    <>
      {open && <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={onClose} />}
      <aside className={cn("fixed top-0 left-0 z-50 h-full w-[260px] bg-[#1A1A1A] text-white flex flex-col transition-transform duration-200 md:relative md:translate-x-0 md:z-auto", open ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex items-center gap-3 px-6 h-[64px] border-b border-white/10 shrink-0">
          <Svg d={icons.logo.d} /><span className="font-[family-name:var(--font-heading)] text-lg tracking-wider text-[#D4A5A5]">LUXE NAILS</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const active = item.href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(item.href);
            const ic = icons[item.key as keyof typeof icons];
            return (
              <Link key={item.label} href={item.href} onClick={onClose}
                className={cn("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors", active ? "bg-[#D4A5A5]/20 text-[#D4A5A5]" : "text-white/60 hover:text-white hover:bg-white/5")}>
                <Svg d={ic.d} extra={ic.extra} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-3 py-4 border-t border-white/10">
          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors">
            <Svg d={icons.logout.d} />Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const currentLabel = navItems.find((item) => item.href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(item.href))?.label ?? "Dashboard";
  return (
    <div className="min-h-screen flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-[64px] border-b border-[#D4A5A5]/20 bg-[#FAFAF7] flex items-center justify-between px-4 md:px-6 shrink-0">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-md hover:bg-[#F0EDE8] transition-colors" onClick={() => setSidebarOpen(true)}>
              <Svg d={icons.menu.d} />
            </button>
            <h1 className="text-lg font-semibold text-[#1A1A1A]">{currentLabel}</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#6B6B6B] hidden sm:inline">LUXE NAILS</span>
            <div className="w-8 h-8 rounded-full bg-[#D4A5A5] flex items-center justify-center text-white text-sm font-medium">A</div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-[#FAFAF7] p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
