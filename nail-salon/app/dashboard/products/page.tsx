"use client";

interface Product {
  name: string;
  category: string;
  onHand: number;
  reorderPoint: number;
  unitPrice: number;
}

const sampleProducts: Product[] = [
  { name: "Gel Polish - Ruby Red", category: "Gel Polish", onHand: 12, reorderPoint: 10, unitPrice: 14.5 },
  { name: "Gel Polish - Midnight Blue", category: "Gel Polish", onHand: 8, reorderPoint: 10, unitPrice: 14.5 },
  { name: "Acrylic Powder - Natural", category: "Acrylic Powder", onHand: 3, reorderPoint: 5, unitPrice: 22.0 },
  { name: "Acrylic Powder - Pink", category: "Acrylic Powder", onHand: 7, reorderPoint: 5, unitPrice: 22.0 },
  { name: "Full Cover Tips - Medium", category: "Nail Tips", onHand: 150, reorderPoint: 50, unitPrice: 8.75 },
  { name: "Cuticle Oil - Lavender", category: "Nail Care", onHand: 4, reorderPoint: 10, unitPrice: 12.0 },
  { name: "Nail Files - 180 Grit", category: "Tools", onHand: 45, reorderPoint: 20, unitPrice: 1.5 },
  { name: "UV/LED Lamp - 48W", category: "Equipment", onHand: 2, reorderPoint: 3, unitPrice: 89.0 },
];

const Svg = ({ d, w = 15 }: { d: string; w?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

export default function ProductsPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1A1A1A]">Products</h2>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4A5A5] text-white text-sm font-medium hover:bg-[#B88686] transition-colors">
          <Svg d="M12 5v14M5 12h14" w={16} />Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#D4A5A5]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F0EDE8] text-left text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">
                <th className="px-5 py-3.5">Product Name</th>
                <th className="px-5 py-3.5">Category</th>
                <th className="px-5 py-3.5">On Hand</th>
                <th className="px-5 py-3.5">Reorder Point</th>
                <th className="px-5 py-3.5">Unit Price</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleProducts.map((p, i) => {
                const lowStock = p.onHand <= p.reorderPoint;
                return (
                  <tr key={i} className="border-b border-[#F0EDE8] last:border-0 hover:bg-[#FAFAF7] transition-colors">
                    <td className="px-5 py-3.5 font-medium text-[#1A1A1A]">{p.name}</td>
                    <td className="px-5 py-3.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4A5A5]/10 text-[#B88686]">{p.category}</span>
                    </td>
                    <td className="px-5 py-3.5 text-[#3D3D3D]">{p.onHand}</td>
                    <td className="px-5 py-3.5 text-[#3D3D3D]">{p.reorderPoint}</td>
                    <td className="px-5 py-3.5 text-[#3D3D3D]">${p.unitPrice.toFixed(2)}</td>
                    <td className="px-5 py-3.5">
                      <span className={"inline-block px-2.5 py-0.5 rounded-full text-xs font-medium " + (lowStock ? "bg-[#C44A4A]/10 text-[#C44A4A]" : "bg-[#4A7C59]/10 text-[#4A7C59]")}>
                        {lowStock ? "Low Stock" : "In Stock"}
                      </span>
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
