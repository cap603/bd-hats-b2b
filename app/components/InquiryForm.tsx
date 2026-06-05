"use client";
import { useState } from "react";

export function InquiryForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank you!</h3>
        <p className="text-green-700">Your inquiry has been received. Our team will contact you shortly.</p>
        <button onClick={() => setStatus(null)} className="mt-4 text-green-800 underline">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input required type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input required type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements</label>
        <textarea required rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="Tell us about the styles, quantities, or customization you need..."></textarea>
      </div>
      <button type="submit" className="w-full bg-black text-white py-3 font-semibold rounded-lg hover:bg-gray-800 transition">
        Send Inquiry
      </button>
    </form>
  );
}
