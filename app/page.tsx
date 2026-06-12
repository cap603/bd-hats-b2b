            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-black">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Inquiry Section */}
      <section id="inquiry" className="py-24 bg-white px-4 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Request Factory Quote</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base">Send us your cap requirements (styles, logos, quantities). Our B2B hat specialists will deliver your quote and design mockup within 12 hours.</p>
          </div>
          <InquiryForm />
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black text-gray-500 py-16 px-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img 
              src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" 
              alt="JUNYANG Logo" 
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm mt-3 leading-relaxed">
              Baoding Junyang Hat Manufacturing Co., Ltd. is a premium custom hat factory specializing in OEM/ODM embroidery baseball caps, beanies, and trucker hats since 2014.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#advantages" className="hover:text-white">Advantages</a></li>
                <li><a href="#factory" className="hover:text-white">Our Factory</a></li>
                <li><a href="#catalog" className="hover:text-white">Baseball Caps</a></li>
                <li><a href="#inquiry" className="hover:text-white">Request Quote</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">WhatsApp: +86 15933930830</li>
                <li className="text-gray-400">Email: admin@bdjunyang.com</li>
                <li className="text-gray-400">Office: Baoding, Hebei, China</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Baoding Junyang Hat Manufacturing Co., Ltd. All rights reserved.</p>
          <p>Powered by Accio & Vercel. Global B2B Headwear Solutions.</p>
        </div>
      </footer>
    </main>
  );
}

