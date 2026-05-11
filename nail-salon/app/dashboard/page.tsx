export default function DashboardPage() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const Svg = ({ d, extra = "" }: { d: string; extra?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />{extra && <g dangerouslySetInnerHTML={{ __html: extra }} />}
    </svg>
  );

  const stats = [
    { label: "Today's Appointments", value: "12", sub: "3 pending confirmation", icon: { d: "M3 4h18v18H3zM16 2v4M8 2v4M3 10h18", extra: '<line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="18" x2="16" y2="18"/>' } },
    { label: "Revenue Today", value: "$1,240", sub: "+18% vs last week", icon: { d: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" } },
    { label: "Active Clients", value: "48", sub: "12 new this month", icon: { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", extra: '<circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' } },
    { label: "Staff on Shift", value: "5", sub: "2 nail techs, 3 assistants", icon: { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", extra: '<circle cx="12" cy="7" r="4"/>' } },
  ];

  const appointments = [
    { client: "Sophia Chen", service: "Gel Manicure", staff: "Maya", time: "9:00 AM", status: "confirmed" },
    { client: "Emma Rodriguez", service: "Acrylic Full Set", staff: "Lena", time: "10:30 AM", status: "confirmed" },
    { client: "Olivia Kim", service: "Pedicure Spa", staff: "Jade", time: "11:00 AM", status: "completed" },
    { client: "Isabella Torres", service: "Nail Art", staff: "Maya", time: "1:00 PM", status: "confirmed" },
    { client: "Mia Johnson", service: "Gel Refill", staff: "Lena", time: "2:30 PM", status: "cancelled" },
  ];

  const badge = (s: string) => {
    const map: Record<string, string> = { confirmed: "bg-[#4A7C59]/10 text-[#4A7C59]", completed: "bg-[#6B6B6B]/10 text-[#6B6B6B]", cancelled: "bg-[#C44A4A]/10 text-[#C44A4A]" };
    return <span className={"inline-block px-2.5 py-0.5 rounded-full text-xs font-medium capitalize " + (map[s] ?? "")}>{s}</span>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1A1A1A]">Welcome back, Admin</h2>
        <p className="text-sm text-[#6B6B6B] mt-1">{today}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-[#D4A5A5]/20 p-5 flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-[#D4A5A5]/10 text-[#B88686] shrink-0"><Svg d={s.icon.d} extra={s.icon.extra} /></div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">{s.label}</p>
              <p className="text-2xl font-bold text-[#1A1A1A] mt-1">{s.value}</p>
              <p className="text-xs text-[#6B6B6B] mt-1">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Appointments */}
      <div className="bg-white rounded-xl border border-[#D4A5A5]/20 overflow-hidden">
        <div className="px-5 py-4 border-b border-[#D4A5A5]/10 flex items-center justify-between">
          <h3 className="text-base font-semibold text-[#1A1A1A]">Recent Appointments</h3>
          <a href="/dashboard/appointments" className="text-xs font-medium text-[#B88686] hover:text-[#8A6E6E] transition-colors">View All</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F0EDE8] text-left text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">
                <th className="px-5 py-3">Client</th><th className="px-5 py-3">Service</th><th className="px-5 py-3">Staff</th><th className="px-5 py-3">Time</th><th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a, i) => (
                <tr key={i} className="border-b border-[#F0EDE8] last:border-0 hover:bg-[#FAFAF7] transition-colors">
                  <td className="px-5 py-3.5 font-medium text-[#1A1A1A]">{a.client}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{a.service}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{a.staff}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{a.time}</td>
                  <td className="px-5 py-3.5">{badge(a.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center gap-3 bg-white rounded-xl border border-[#D4A5A5]/20 p-5 hover:border-[#D4A5A5]/50 transition-colors text-left">
          <div className="p-2.5 rounded-lg bg-[#D4A5A5]/10 text-[#B88686]"><Svg d="M3 4h18v18H3zM16 2v4M8 2v4M3 10h18" extra='<line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="18" x2="16" y2="18"/>' /></div>
          <div><p className="text-sm font-semibold text-[#1A1A1A]">Book Appointment</p><p className="text-xs text-[#6B6B6B] mt-0.5">Schedule a new client visit</p></div>
        </button>
        <button className="flex items-center gap-3 bg-white rounded-xl border border-[#D4A5A5]/20 p-5 hover:border-[#D4A5A5]/50 transition-colors text-left">
          <div className="p-2.5 rounded-lg bg-[#D4A5A5]/10 text-[#B88686]"><Svg d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" extra='<circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>' /></div>
          <div><p className="text-sm font-semibold text-[#1A1A1A]">Add Client</p><p className="text-xs text-[#6B6B6B] mt-0.5">Register a new customer</p></div>
        </button>
        <button className="flex items-center gap-3 bg-white rounded-xl border border-[#D4A5A5]/20 p-5 hover:border-[#D4A5A5]/50 transition-colors text-left">
          <div className="p-2.5 rounded-lg bg-[#D4A5A5]/10 text-[#B88686]"><Svg d="M6.5 6.5L17.5 17.5" extra='<circle cx="4.5" cy="4.5" r="2.5"/><circle cx="19.5" cy="19.5" r="2.5"/><line x1="14" y1="17" x2="17" y2="14"/>' /></div>
          <div><p className="text-sm font-semibold text-[#1A1A1A]">New Service</p><p className="text-xs text-[#6B6B6B] mt-0.5">Add a service offering</p></div>
        </button>
      </div>
    </div>
  );
}
