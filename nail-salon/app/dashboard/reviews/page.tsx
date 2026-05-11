"use client";

import { useState } from "react";

interface Review {
  client: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  featured: boolean;
}

const reviews: Review[] = [
  { client: "Sophia Chen", service: "Gel Manicure", rating: 5, comment: "Absolutely love my nails! Maya did an incredible job with the ombré design. Will definitely be coming back.", date: "2025-05-11", featured: true },
  { client: "Emma Rodriguez", service: "Acrylic Full Set", rating: 4, comment: "Great service and very friendly staff. The shape came out perfect.", date: "2025-05-10", featured: false },
  { client: "Olivia Kim", service: "Pedicure Spa", rating: 5, comment: "Best pedicure I've ever had! The hot stone massage was amazing.", date: "2025-05-09", featured: true },
  { client: "Isabella Torres", service: "Nail Art Design", rating: 3, comment: "Design was nice but took longer than expected. Communication could be better.", date: "2025-05-08", featured: false },
  { client: "Mia Johnson", service: "Dip Powder Set", rating: 5, comment: "Perfect dip powder application, no lifting after two weeks! Highly recommend.", date: "2025-05-07", featured: true },
  { client: "Ava Martinez", service: "Manicure & Pedicure", rating: 4, comment: "Clean salon, professional staff, and great results. My go-to place now.", date: "2025-05-06", featured: false },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={star <= rating ? "#D4A5A5" : "#D1D1D1"} stroke={star <= rating ? "#D4A5A5" : "#D1D1D1"} strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

const Svg = ({ d }: { d: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

export default function ReviewsPage() {
  const [list, setList] = useState<Review[]>(reviews);

  const toggleFeatured = (idx: number) => {
    setList((prev) => prev.map((r, i) => (i === idx ? { ...r, featured: !r.featured } : r)));
  };

  const handleDelete = (idx: number) => {
    setList((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1A1A1A]">
          Reviews Management
        </h2>
        <span className="text-sm text-[#6B6B6B]">{list.length} review{list.length !== 1 ? "s" : ""}</span>
      </div>

      <div className="bg-white rounded-xl border border-[#D4A5A5]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F0EDE8] text-left text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">
                <th className="px-5 py-3.5">Client</th>
                <th className="px-5 py-3.5">Service</th>
                <th className="px-5 py-3.5">Rating</th>
                <th className="px-5 py-3.5">Comment</th>
                <th className="px-5 py-3.5">Date</th>
                <th className="px-5 py-3.5">Featured</th>
                <th className="px-5 py-3.5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.map((r, i) => (
                <tr key={i} className="border-b border-[#F0EDE8] last:border-0 hover:bg-[#FAFAF7] transition-colors">
                  <td className="px-5 py-3.5 font-medium text-[#1A1A1A]">{r.client}</td>
                  <td className="px-5 py-3.5 text-[#3D3D3D]">{r.service}</td>
                  <td className="px-5 py-3.5"><StarRating rating={r.rating} /></td>
                  <td className="px-5 py-3.5 text-[#3D3D3D] max-w-[220px] truncate" title={r.comment}>
                    {r.comment.length > 50 ? r.comment.slice(0, 50) + "…" : r.comment}
                  </td>
                  <td className="px-5 py-3.5 text-[#6B6B6B] text-xs">{r.date}</td>
                  <td className="px-5 py-3.5">
                    <button
                      onClick={() => toggleFeatured(i)}
                      className={"inline-block px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors " + (r.featured ? "bg-[#4A7C59]/10 text-[#4A7C59]" : "bg-[#6B6B6B]/10 text-[#6B6B6B]")}
                    >
                      {r.featured ? "Featured" : "Hidden"}
                    </button>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <button
                        title="Approve"
                        className="p-1.5 rounded-md hover:bg-[#4A7C59]/10 text-[#6B6B6B] hover:text-[#4A7C59] transition-colors"
                      >
                        <Svg d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                      </button>
                      <button
                        onClick={() => handleDelete(i)}
                        title="Delete"
                        className="p-1.5 rounded-md hover:bg-[#C44A4A]/10 text-[#6B6B6B] hover:text-[#C44A4A] transition-colors"
                      >
                        <Svg d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {list.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-sm text-[#6B6B6B]">No reviews to display.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
