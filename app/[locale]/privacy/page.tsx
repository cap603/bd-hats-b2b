"use client";

import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";

export default function PrivacyPage() {
  const lang = useLang();
  const isEs = lang === "es";

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumb
          items={[
            { label: isEs ? "Inicio" : "Home", href: `/${lang}` },
            { label: isEs ? "Política de Privacidad" : "Privacy Policy" },
          ]}
        />

        <article className="mt-8 prose prose-slate max-w-none">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">
            {isEs ? "Política de Privacidad" : "Privacy Policy"}
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            {isEs ? "Última actualización: Noviembre 2026" : "Last updated: November 2026"}
          </p>

          <section className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {isEs ? "1. Información General" : "1. General Information"}
              </h2>
              <p>
                {isEs
                  ? "Baoding Junyang Import & Export Trading Co., Ltd. («nosotros», «nuestro» o «la Compañía») opera el sitio web bdjunyang.com. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos la información personal y comercial que usted proporciona al utilizar nuestro sitio web y nuestros servicios de abastecimiento B2B."
                  : "Baoding Junyang Import & Export Trading Co., Ltd. ('we', 'our', or 'the Company') operates the website bdjunyang.com. This Privacy Policy outlines how we collect, use, store, and protect the personal and commercial information you provide when using our website and B2B sourcing services."}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {isEs ? "2. Datos que Recopilamos" : "2. Information We Collect"}
              </h2>
              <p>
                {isEs
                  ? "Recopilamos únicamente la información necesaria para procesar sus consultas comerciales, solicitudes de muestras y cotizaciones de producción:"
                  : "We collect only the information necessary to process your business inquiries, sample requests, and production quotations:"}
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>{isEs ? "Nombre y datos de contacto (correo electrónico, número de teléfono o WhatsApp)" : "Name and contact information (email address, phone number, or WhatsApp handle)"}</li>
                <li>{isEs ? "Información de la empresa o marca comercial" : "Company or brand name and business profile"}</li>
                <li>{isEs ? "Especificaciones técnicas del producto, archivos gráficos vectoriales y bocetos de diseño" : "Technical product specifications, vector design files, and artwork mockups"}</li>
                <li>{isEs ? "País de destino para el cálculo del flete y aranceles estimados" : "Destination country for shipping estimates and trade logistics planning"}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {isEs ? "3. Uso de la Información" : "3. How We Use Your Information"}
              </h2>
              <p>
                {isEs
                  ? "La información recopilada se utiliza exclusivamente para:"
                  : "The information collected is used strictly for:"}
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>{isEs ? "Elaborar cotizaciones formales FOB/CIF detalladas dentro de 2 horas" : "Preparing itemized written FOB/CIF quotations within 2 hours"}</li>
                <li>{isEs ? "Fabricar y validar muestras físicas de preproducción" : "Manufacturing and approving physical pre-production samples"}</li>
                <li>{isEs ? "Coordinar la producción en fábricas asociadas y el despacho logístico" : "Coordinating partner factory production schedules and international export logistics"}</li>
                <li>{isEs ? "Enviar actualizaciones del estado de su pedido (fotografías y videos de control de calidad)" : "Transmitting order progress media (photos and videos of quality control stages)"}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {isEs ? "4. Confidencialidad y Protección de Diseños (NDA)" : "4. Intellectual Property & Mutual NDA"}
              </h2>
              <p>
                {isEs
                  ? "Reconocemos y respetamos el valor de su propiedad intelectual. Sus archivos de diseño, logotipos y especificaciones técnicas nunca se compartirán con terceros no autorizados ni se revenderán a otros clientes. Ponemos a disposición un Acuerdo de Confidencialidad Bilateral (Mutual NDA) antes del envío de artes propietarias."
                  : "We strictly respect your proprietary artwork and intellectual property. Your logo artwork, embroidery digitizing files, and tech packs will never be shared with unauthorized third parties or reused for other clients. A bilateral Mutual Non-Disclosure Agreement (NDA) is available upon request before submitting original designs."}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {isEs ? "5. Contacto" : "5. Contact Information"}
              </h2>
              <p>
                {isEs
                  ? "Para cualquier consulta sobre esta Política de Privacidad o la gestión de sus datos, puede contactarnos directamente a admin@bdjunyang.com o vía WhatsApp al +86 159 3393 0830."
                  : "For inquiries regarding this Privacy Policy or your personal data, please contact our team at admin@bdjunyang.com or via WhatsApp at +86 159 3393 0830."}
              </p>
            </div>
          </section>

          <div className="mt-12 pt-6 border-t border-slate-200">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition"
            >
              ← {isEs ? "Volver a la página principal" : "Back to Home"}
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
