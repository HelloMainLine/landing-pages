"use client";

import { useState } from "react";

interface Client {
  name: string;
  email: string;
  phone: string;
  lastVisit: string;
  totalVisits: number;
}

const sampleClients: Client[] = [
  { name: "Sophia Chen", email: "sophia.chen@email.com", phone: "(555) 123-4567", lastVisit: "May 10, 2026", totalVisits: 24 },
  { name: "Emma Rodriguez", email: "emma.r@email.com", phone: "(555) 234-5678", lastVisit: "May 9, 2026", totalVisits: 18 },
  { name: "Olivia Kim", email: "olivia.kim@email.com", phone: "(555) 345-6789", lastVisit: "May 8, 2026", totalVisits: 31 },
  { name: "Isabella Torres", email: "itorres@email.com", phone: "(555) 456-7890", lastVisit: "May 7, 2026", totalVisits: 7 },
  { name: "Mia Johnson", email: "mia.j@email.com", phone: "(555) 567-8901", lastVisit: "May 6, 2026", totalVisits: 12 },
  { name: "Ava Martinez", email: "ava.m@email.com", phone: "(555) 678-9012", lastVisit: "May 5, 2026", totalVisits: 45 },
  { name: "Lily Davis", email: "lily.d@email.com", phone: "(555) 789-0123", lastVisit: "May 3, 2026", totalVisits: 9 },
];

const Svg = ({ d, w = 15 }: { d: string; w?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

const actionBtn = (d: string, hover: string, title: string) => (
  <button key={title} title={title} className={"p-1.5 rounded-md transition-colors text-[#6B6B6B] " + hover}><Svg d={d} /></button>
);

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const filtered = sampleClients.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search));

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1A1A1A]">Clients</h2>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4A5A5] text-white text-sm font-medium hover:bg-[#B88686] transition-colors">
          <Svg d="M12 5v14M5 12h14" w={16} />Add Client
        </button>
      </div>

      <div className="relative max-w-md">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6B6B]"><Svg d="M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM16.65 16.65L21 21" w={16} /></div>
        <input type="text" placeholder="Search by name, email or phone..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#D4A5A5]/20 bg-white text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#D4A5A5] transition-colors" />
      </div>

      <div className="bg-white rounded-xl border border-[#D4A5A5]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F0EDE8] text-left text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">
                <th className="px-5 py-3.5">Name</th><th className="px-5 py-3.5">Email</th><th className="px-5 py-3.5">Phone</th><th className="px-5 py-3.5">Last Visit</th><th className="px-5 py-3.5">Total Visits</th><th className="px-5 py-3.5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr key={i} className="border-b border-[#F0EDE8] last:border-0 hover:bg-[#FAFAF7] transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#D4A5A5]/20 flex items-center justify-center text-sm font-medium text-[#B88686]">{c.name.split(" ").map((n) => n[0]).join("")}</div>
                      <span className="font-medium text-[#1A1A1A]">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{c.email}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{c.phone}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{c.lastVisit}</td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 text-sm text-[#3D3D3D]">
                      <Svg d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" w={14} />{c.totalVisits}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      {actionBtn("M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "hover:bg-[#F0EDE8] hover:text-[#1A1A1A]", "View")}
                      {actionBtn("M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z", "hover:bg-[#F0EDE8] hover:text-[#1A1A1A]", "Edit")}
                      {actionBtn("M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", "hover:bg-[#C44A4A]/10 hover:text-[#C44A4A]", "Delete")}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && <p className="px-5 py-8 text-center text-sm text-[#6B6B6B]">No clients match your search.</p>}
      </div>
      <p className="text-xs text-[#6B6B6B]">Showing {filtered.length} of {sampleClients.length} clients</p>
    </div>
  );
}
