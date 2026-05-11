"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FilterTab = "today" | "week" | "all";
type Status = "confirmed" | "completed" | "cancelled";

interface Appointment {
  client: string;
  service: string;
  staff: string;
  time: string;
  status: Status;
}

const allAppointments: Appointment[] = [
  { client: "Sophia Chen", service: "Gel Manicure", staff: "Maya", time: "9:00 AM", status: "confirmed" },
  { client: "Emma Rodriguez", service: "Acrylic Full Set", staff: "Lena", time: "10:30 AM", status: "confirmed" },
  { client: "Olivia Kim", service: "Pedicure Spa", staff: "Jade", time: "11:00 AM", status: "completed" },
  { client: "Isabella Torres", service: "Nail Art", staff: "Maya", time: "1:00 PM", status: "confirmed" },
  { client: "Mia Johnson", service: "Gel Refill", staff: "Lena", time: "2:30 PM", status: "cancelled" },
  { client: "Ava Martinez", service: "Dip Powder", staff: "Jade", time: "3:00 PM", status: "confirmed" },
  { client: "Lily Davis", service: "Manicure & Pedicure", staff: "Maya", time: "4:30 PM", status: "completed" },
  { client: "Zoe Wilson", service: "Nail Repair", staff: "Lena", time: "5:00 PM", status: "confirmed" },
  { client: "Ella Brown", service: "Gel Manicure", staff: "Jade", time: "6:00 PM", status: "cancelled" },
  { client: "Chloe Garcia", service: "French Tips", staff: "Maya", time: "7:00 PM", status: "completed" },
];

const statusStyle: Record<Status, string> = {
  confirmed: "bg-[#4A7C59]/10 text-[#4A7C59]",
  completed: "bg-[#6B6B6B]/10 text-[#6B6B6B]",
  cancelled: "bg-[#C44A4A]/10 text-[#C44A4A]",
};

export default function AppointmentsPage() {
  const [filter, setFilter] = useState<FilterTab>("today");

  const tabs: { key: FilterTab; label: string }[] = [
    { key: "today", label: "Today" },
    { key: "week", label: "This Week" },
    { key: "all", label: "All" },
  ];

  // In a real app, filtering would be date-based. For now, we show/hide rows per tab.
  const displayed =
    filter === "all"
      ? allAppointments
      : filter === "today"
        ? allAppointments.slice(0, 5)
        : allAppointments.slice(2, 8);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1A1A1A]">
          Appointments
        </h2>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4A5A5] text-white text-sm font-medium hover:bg-[#B88686] transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New Appointment
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 bg-[#F0EDE8] p-1 rounded-lg w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors",
              filter === tab.key
                ? "bg-white text-[#1A1A1A] shadow-sm"
                : "text-[#6B6B6B] hover:text-[#1A1A1A]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#D4A5A5]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F0EDE8] text-left text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">
                <th className="px-5 py-3.5">Client</th>
                <th className="px-5 py-3.5">Service</th>
                <th className="px-5 py-3.5">Staff</th>
                <th className="px-5 py-3.5">Time</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayed.map((a, i) => (
                <tr
                  key={i}
                  className="border-b border-[#F0EDE8] last:border-0 hover:bg-[#FAFAF7] transition-colors"
                >
                  <td className="px-5 py-3.5 font-medium text-[#1A1A1A]">
                    {a.client}
                  </td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{a.service}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{a.staff}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{a.time}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={
                        "inline-block px-2.5 py-0.5 rounded-full text-xs font-medium capitalize " +
                        statusStyle[a.status]
                      }
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-md hover:bg-[#F0EDE8] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-[#F0EDE8] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-[#C44A4A]/10 text-[#6B6B6B] hover:text-[#C44A4A] transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {displayed.length === 0 && (
          <p className="px-5 py-8 text-center text-sm text-[#6B6B6B]">
            No appointments found.
          </p>
        )}
      </div>
    </div>
  );
}
