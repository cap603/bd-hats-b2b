import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">
        <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3">Error 404 · BD Hats</p>
        <h1 className="text-3xl font-black text-slate-900 mb-3">Page Not Found</h1>
        <p className="text-sm text-slate-500 mb-6">
          The page or product you are looking for may have been moved or discontinued.
          Browse our current catalog or grab a free tech pack template.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/en" className="bg-slate-900 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-black transition">
            Back to Catalog
          </Link>
          <Link href="/en/custom-hat-tech-pack-template" className="text-sm font-bold text-slate-700 underline hover:text-slate-900 transition">
            Free Tech Pack Templates
          </Link>
        </div>
      </div>
    </main>
  );
}