import { ShoppingBag } from "lucide-react";

const HATS = [
  { id: 1, name: "Classic Baseball Cap", price: "B2B Only", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Premium Wool Beanie", price: "B2B Only", img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf027?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Summer Straw Fedora", price: "B2B Only", img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Streetwear Bucket Hat", price: "B2B Only", img: "https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Trucker Mesh Cap", price: "B2B Only", img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Vintage Flat Cap", price: "B2B Only", img: "https://images.unsplash.com/photo-1556011504-f58c4033b93f?auto=format&fit=crop&q=80&w=800" },
];

export function HatCatalog() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {HATS.map((hat) => (
        <div key={hat.id} className="group border rounded-xl overflow-hidden hover:shadow-lg transition">
          <div className="aspect-square bg-gray-100 relative">
            <img src={hat.img} alt={hat.name} className="object-cover w-full h-full group-hover:scale-105 tranimport { ShoppingBag } from "lucide-react";
const HATS = [
  { id: 1, name: "Classic Baseball Cap", price: "B2B Only", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Premium Wool Beanie", price: "B2B Only", img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf027?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Summer Straw Fedora", price: "B2B Only", img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Streetwear Bucket Hat", price: "B2B Only", img: "https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Trucker Mesh Cap", price: "B2B Only", img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Vintage Flat Cap", price: "B2B Only", img: "https://images.unsplash.com/photo-1556011504-f58c4033b93f?auto=format&fit=crop&q=80&w=800" },
];
export function HatCatalog() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {HATS.map((hat) => (
        <div key={hat.id} className="group border rounded-xl overflow-hidden hover:shadow-lg transition">
          <div className="aspect-square bg-gray-100 relative"><img src={hat.img} alt={hat.name} className="object-cover w-full h-full group-hover:scale-105 transition duration-500" /></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{hat.name}</h3>
            <div className="flex items-center justify-between"><span className="text-gray-500 font-medium">{hat.price}</span><button className="text-black hover:underline inline-flex items-center gap-2">Details <ShoppingBag size={16} /></button></div>
          </div>
        </div>
      ))}
    </div>
  );
            }sition duration-500" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{hat.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 font-medium">{hat.price}</span>
              <button className="text-black hover:underline inline-flex items-center gap-2">
                Details <ShoppingBag size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
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
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
