import { HatCatalog } from "./components/HatCatalog";
import { InquiryForm } from "./components/InquiryForm";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">BD HATS</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">Your Trusted Global B2B Partner for Premium Headwear.</p>
          <a href="#inquiry" className="mt-8 inline-block bg-white text-black px-8 py-3 font-semibold rounded-full hover:bg-gray-200 transition">Get a Quote</a>
        </div>
      </section>
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Featured Collection</h2>
        <HatCatalog />
      </section>
      <section id="inquiry" className="py-20 bg-gray-50 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Business Inquiry</h2>
          <p className="text-gray-600 text-center mb-12">Looking for custom designs or bulk pricing? Fill out the form below and our team will get back to you within 24 hours.</p>
          <InquiryForm />
        </div>
      </section>
      <footer className="bg-white border-t py-12 px-4 text-center text-gray-500"><p>© 2026 BD HATS. All rights reserved.</p></footer>
    </main>
  );
}
