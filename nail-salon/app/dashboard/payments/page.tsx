"use client";

interface Payment {
  client: string;
  service: string;
  staff: string;
  amount: number;
  tip: number;
  method: "CARD" | "CASH" | "VENMO";
  date: string;
}

const payments: Payment[] = [
  { client: "Sophia Chen", service: "Gel Manicure", staff: "Maya", amount: 45, tip: 10, method: "CARD", date: "2025-05-11" },
  { client: "Emma Rodriguez", service: "Acrylic Full Set", staff: "Lena", amount: 85, tip: 15, method: "CASH", date: "2025-05-11" },
  { client: "Olivia Kim", service: "Pedicure Spa", staff: "Jade", amount: 65, tip: 12, method: "VENMO", date: "2025-05-10" },
  { client: "Isabella Torres", service: "Nail Art Design", staff: "Maya", amount: 75, tip: 20, method: "CARD", date: "2025-05-10" },
  { client: "Mia Johnson", service: "Gel Refill", staff: "Lena", amount: 40, tip: 8, method: "CASH", date: "2025-05-09" },
  { client: "Ava Martinez", service: "Dip Powder Set", staff: "Jade", amount: 55, tip: 10, method: "CARD", date: "2025-05-09" },
  { client: "Lily Davis", service: "Manicure & Pedicure", staff: "Maya", amount: 90, tip: 18, method: "VENMO", date: "2025-05-08" },
  { client: "Chloe Garcia", service: "French Tips", staff: "Jade", amount: 50, tip: 0, method: "CASH", date: "2025-05-08" },
];

const methodStyle: Record<string, string> = {
  CARD: "bg-[#4A7C59]/10 text-[#4A7C59]",
  CASH: "bg-[#6B6B6B]/10 text-[#6B6B6B]",
  VENMO: "bg-[#D4A5A5]/10 text-[#B88686]",
};

const Svg = ({ d }: { d: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

export default function PaymentsPage() {
  const totals = payments.reduce(
    (acc, p) => ({ amount: acc.amount + p.amount, tip: acc.tip + p.tip }),
    { amount: 0, tip: 0 }
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1A1A1A]">
          Payments &amp; Revenue
        </h2>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4A5A5] text-white text-sm font-medium hover:bg-[#B88686] transition-colors">
          <Svg d="M12 5v14M5 12h14" />Export
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Today's Revenue", value: "$1,240", sub: "+12% vs yesterday" },
          { label: "This Week", value: "$5,830", sub: "Mon–Sun" },
          { label: "This Month", value: "$22,450", sub: "May 2025" },
          { label: "Average Ticket", value: "$62.50", sub: "Per appointment" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-[#D4A5A5]/20 p-5">
            <p className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">{s.label}</p>
            <p className="text-2xl font-bold text-[#1A1A1A] mt-1">{s.value}</p>
            <p className="text-xs text-[#6B6B6B] mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Payments table */}
      <div className="bg-white rounded-xl border border-[#D4A5A5]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F0EDE8] text-left text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">
                <th className="px-5 py-3.5">Client</th>
                <th className="px-5 py-3.5">Service</th>
                <th className="px-5 py-3.5">Staff</th>
                <th className="px-5 py-3.5 text-right">Amount ($)</th>
                <th className="px-5 py-3.5 text-right">Tip ($)</th>
                <th className="px-5 py-3.5 text-right">Total ($)</th>
                <th className="px-5 py-3.5">Method</th>
                <th className="px-5 py-3.5">Date</th>
                <th className="px-5 py-3.5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, i) => (
                <tr key={i} className="border-b border-[#F0EDE8] last:border-0 hover:bg-[#FAFAF7] transition-colors">
                  <td className="px-5 py-3.5 font-medium text-[#1A1A1A]">{p.client}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{p.service}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{p.staff}</td>
                  <td className="px-5 py-3.5 text-right text-[#3D3D3D]">${p.amount.toFixed(2)}</td>
                  <td className="px-5 py-3.5 text-right text-[#3D3D3D]">${p.tip.toFixed(2)}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-[#1A1A1A]">${(p.amount + p.tip).toFixed(2)}</td>
                  <td className="px-5 py-3.5">
                    <span className={"inline-block px-2.5 py-0.5 rounded-full text-xs font-medium " + methodStyle[p.method]}>{p.method}</span>
                  </td>
                  <td className="px-5 py-3.5 text-[#6B6B6B] text-xs">{p.date}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <button title="View" className="p-1.5 rounded-md hover:bg-[#F0EDE8] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
                        <Svg d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                      </button>
                      <button title="Delete" className="p-1.5 rounded-md hover:bg-[#C44A4A]/10 text-[#6B6B6B] hover:text-[#C44A4A] transition-colors">
                        <Svg d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {/* Totals row */}
              <tr className="bg-[#F5F4F0] border-t-2 border-[#D4A5A5]/30">
                <td className="px-5 py-3.5 font-semibold text-[#1A1A1A]" colSpan={3}>Total</td>
                <td className="px-5 py-3.5 text-right font-semibold text-[#1A1A1A]">${totals.amount.toFixed(2)}</td>
                <td className="px-5 py-3.5 text-right font-semibold text-[#1A1A1A]">${totals.tip.toFixed(2)}</td>
                <td className="px-5 py-3.5 text-right font-bold text-[#1A1A1A]">${(totals.amount + totals.tip).toFixed(2)}</td>
                <td colSpan={3}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
