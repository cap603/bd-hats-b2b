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
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
          <input required type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="Your Company Ltd." />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="John Doe" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input required type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="you@company.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp *</label>
          <input required type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="+1 234 567 8900" />
        </div>
      </div>
      <div>
         <label className="block text-sm font-medium text-gray-700 mb-3">Service Interest (Select all that apply)</label>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer p-3 border rounded-lg hover:bg-gray-50 transition">
               <input type="checkbox" className="accent-black" /> 3D Digital Mockup
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer p-3 border rounded-lg hover:bg-gray-50 transition">
               <input type="checkbox" className="accent-black" /> Physical Sample
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer p-3 border rounded-lg hover:bg-gray-50 transition">
               <input type="checkbox" className="accent-black" /> Bulk Production
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer p-3 border rounded-lg hover:bg-gray-50 transition">
               <input type="checkbox" className="accent-black" /> Small Test Order
            </label>
         </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Logo / Artwork (Optional)</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-black transition">
          <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-black hover:underline focus-within:outline-none">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-400 italic">For 3D Mockup requests, please upload your vector logo (AI/EPS) or high-res PNG.</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements</label>
        <textarea required rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="Tell us about the styles, quantities, or specific customization (e.g. 3D Puff Embroidery, Woven Labels)..."></textarea>
      </div>
      <button type="submit" className="w-full bg-black text-white py-3 font-semibold rounded-lg hover:bg-gray-800 transition">
        Send Inquiry
      </button>
    </form>
  );
}
