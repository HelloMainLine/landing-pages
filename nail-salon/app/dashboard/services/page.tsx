"use client";

import { useState } from "react";

interface Service {
  name: string;
  description: string;
  duration: string;
  price: number;
  category: string;
  active: boolean;
}

const sampleServices: Service[] = [
  { name: "Classic Manicure", description: "Nail shaping, cuticle care, polish application & massage", duration: "30 min", price: 35, category: "Manicure", active: true },
  { name: "Gel Manicure", description: "Long-lasting gel polish with classic manicure essentials", duration: "45 min", price: 50, category: "Manicure", active: true },
  { name: "Acrylic Full Set", description: "Full acrylic nail extension with your choice of shape & length", duration: "75 min", price: 75, category: "Acrylics", active: true },
  { name: "Gel Extension Full Set", description: "Soft gel nail extension for a natural lightweight feel", duration: "90 min", price: 85, category: "Gel", active: true },
  { name: "Spa Pedicure", description: "Foot soak, exfoliation, callus treatment & polish", duration: "45 min", price: 55, category: "Pedicure", active: true },
  { name: "Nail Art (per nail)", description: "Hand-painted designs, gems, foils & embellishments", duration: "15 min", price: 8, category: "Nail Art", active: false },
  { name: "Dip Powder", description: "Durable dip powder application in any color", duration: "60 min", price: 65, category: "Enhancements", active: true },
  { name: "French Tips", description: "Classic white-tip overlay on natural or enhanced nails", duration: "30 min", price: 25, category: "Nail Art", active: true },
];

const Svg = ({ d, extra = "", w = 15 }: { d: string; extra?: string; w?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />{extra && <g dangerouslySetInnerHTML={{ __html: extra }} />}
  </svg>
);

export default function ServicesPage() {
  const [services, setServices] = useState(sampleServices);

  const toggleStatus = (index: number) => {
    setServices((prev) => prev.map((s, i) => (i === index ? { ...s, active: !s.active } : s)));
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1A1A1A]">Services</h2>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4A5A5] text-white text-sm font-medium hover:bg-[#B88686] transition-colors">
          <Svg d="M12 5v14M5 12h14" w={16} />Add Service
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#D4A5A5]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F0EDE8] text-left text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">
                <th className="px-5 py-3.5">Service Name</th>
                <th className="px-5 py-3.5">Description</th>
                <th className="px-5 py-3.5">Duration</th>
                <th className="px-5 py-3.5">Price</th>
                <th className="px-5 py-3.5">Category</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <tr key={i} className="border-b border-[#F0EDE8] last:border-0 hover:bg-[#FAFAF7] transition-colors">
                  <td className="px-5 py-3.5 font-medium text-[#1A1A1A]">{s.name}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D] max-w-[240px] truncate" title={s.description}>{s.description}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D] whitespace-nowrap">{s.duration}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">${s.price}</td>
                  <td className="px-5 py-3.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4A5A5]/10 text-[#B88686]">{s.category}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <button onClick={() => toggleStatus(i)}
                      className={"inline-block px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors cursor-pointer " + (s.active ? "bg-[#4A7C59]/10 text-[#4A7C59]" : "bg-[#6B6B6B]/10 text-[#6B6B6B]")}>
                      {s.active ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <button title="Edit" className="p-1.5 rounded-md hover:bg-[#F0EDE8] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
                        <Svg d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </button>
                      <button title="Delete" className="p-1.5 rounded-md hover:bg-[#C44A4A]/10 text-[#6B6B6B] hover:text-[#C44A4A] transition-colors">
                        <Svg d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
