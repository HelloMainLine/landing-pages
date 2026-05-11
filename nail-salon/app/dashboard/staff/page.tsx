"use client";

interface StaffMember {
  name: string;
  initials: string;
  role: string;
  specialties: string[];
  active: boolean;
}

const staff: StaffMember[] = [
  { name: "Lily Nguyen", initials: "LN", role: "Gel Specialist", specialties: ["Gel Extensions", "Gel Polish", "Overlay"], active: true },
  { name: "Priya Sharma", initials: "PS", role: "Nail Artist", specialties: ["Hand-painted Art", "3D Designs", "French Tips"], active: true },
  { name: "Carlos Garcia", initials: "CG", role: "Precision Tech", specialties: ["Acrylics", "Dip Powder", "Nail Repair"], active: false },
];

const Svg = ({ d, w = 15 }: { d: string; w?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

export default function StaffPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1A1A1A]">Staff</h2>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4A5A5] text-white text-sm font-medium hover:bg-[#B88686] transition-colors">
          <Svg d="M12 5v14M5 12h14" w={16} />Add Staff Member
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {staff.map((s, i) => (
          <div key={i} className="bg-white rounded-xl border border-[#D4A5A5]/20 p-5 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#D4A5A5]/20 flex items-center justify-center text-xl font-bold text-[#B88686] mb-3">
              {s.initials}
            </div>
            <h3 className="text-base font-semibold text-[#1A1A1A]">{s.name}</h3>
            <p className="text-sm text-[#6B6B6B] mt-0.5">{s.role}</p>

            <div className="flex flex-wrap justify-center gap-1.5 mt-3">
              {s.specialties.map((sp) => (
                <span key={sp} className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4A5A5]/10 text-[#B88686]">
                  {sp}
                </span>
              ))}
            </div>

            <span className={"mt-4 inline-block px-3 py-0.5 rounded-full text-xs font-medium " + (s.active ? "bg-[#4A7C59]/10 text-[#4A7C59]" : "bg-[#6B6B6B]/10 text-[#6B6B6B]")}>
              {s.active ? "Active" : "Off"}
            </span>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#F0EDE8] w-full justify-center">
              <button title="View Schedule" className="p-1.5 rounded-md hover:bg-[#F0EDE8] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
                <Svg d="M3 4h18v18H3zM16 2v4M8 2v4M3 10h18" />
              </button>
              <button title="Edit" className="p-1.5 rounded-md hover:bg-[#F0EDE8] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
                <Svg d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </button>
              <button title="Delete" className="p-1.5 rounded-md hover:bg-[#C44A4A]/10 text-[#6B6B6B] hover:text-[#C44A4A] transition-colors">
                <Svg d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
