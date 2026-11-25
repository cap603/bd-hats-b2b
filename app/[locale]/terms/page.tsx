"use client";

import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";

export default function TermsPage() {
  const lang = useLang();
  const isEs = lang === "es";

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumb
          items={[
            { label: isEs ? "Inicio" : "Home", href: `/${lang}` },
            { label: isEs ? "Términos del Servicio" : "Terms of Service" },
          ]}
        />

        <article className="mt-8 prose prose-slate max-w-none">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">
            {isEs ? "Términos del Servicio" : "Terms of Service"}
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            {isEs ? "Última actualización: Noviembre 2026" : "Last updated: November 2026"}
          </p>

          <section className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {isEs ? "1. Alcance de los Servicios B2B" : "1. Scope of B2B Sourcing Services"}
              </h2>
              <p>
                {isEs
                  ? "Baoding Junyang Import & Export Trading Co., Ltd. actúa como socio integral de abastecimiento, coordinación de producción y control de calidad para programas de gorras y accesorios personalizados. Gestionamos contratos individualizados por proyecto con fábricas asociadas verificadas bajo un estándar unificado de inspección y entrega."
                  : "Baoding Junyang Import & Export Trading Co., Ltd. serves as an end-to-end headwear sourcing, production coordination, and quality control partner for custom headwear programs. We operate on a per-order contract model with audited partner factories under unified inspection and delivery standards."}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {isEs ? "2. Muestreo y Aprobación de Producción" : "2. Sampling & Pre-Production Sign-Off"}
              </h2>
              <p>
                {isEs
                  ? "Para garantizar la conformidad con las especificaciones del cliente, toda producción en masa se inicia únicamente tras la aprobación por escrito de una muestra física de preproducción. Los costos de desarrollo de muestras se descuentan en un 100% en pedidos en firme iguales o superiores a 500 unidades."
                  : "To guarantee alignment with client specifications, bulk production begins only after written sign-off on a physical pre-production sample. Sample development fees are 100% credited against the bulk order invoice upon reaching 500 units or more."}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {isEs ? "3. Condiciones Comerciales y Formas de Pago" : "3. Commercial Terms & Payment Security"}
              </h2>
              <p>
                {isEs
                  ? "Las cotizaciones se emiten bajo términos comerciales internacionales estándar (EXW, FOB o CIF). Para la seguridad de ambas partes, admitimos pagos mediante Alibaba Trade Assurance y cuentas de custodia comercial, además de transferencias bancarias internacionales T/T a nuestra cuenta de empresa oficial."
                  : "Quotations are executed under standard international commercial Incoterms (EXW, FOB, or CIF). For bilateral transaction security, we support Alibaba Trade Assurance, escrow facilities, and commercial T/T wire transfers directly to our corporate bank account."}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {isEs ? "4. Control de Calidad y Reclamaciones" : "4. Quality Inspection & Claims Protocol"}
              </h2>
              <p>
                {isEs
                  ? "Cada pedido pasa por una inspección pieza por pieza antes del embalaje de exportación. Si a la llegada de la mercancía se detecta alguna discrepancia con la muestra aprobada, el cliente dispone de un período de inspección de 14 días para reportarlo con evidencia gráfica o técnica. Nuestro equipo resolverá la reclamación mediante reposición prioritaria o compensación proporcional."
                  : "Every order undergoes piece-by-piece inspection before final export packaging. If any defect or specification deviation is observed upon delivery relative to the signed sample, clients have a 14-day inspection window to file a formal claim with photo/video evidence. We resolve valid discrepancies via priority re-manufacturing or direct invoice credits."}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {isEs ? "5. Contacto Legal y Comercial" : "5. Commercial Desk"}
              </h2>
              <p>
                {isEs
                  ? "Para consultas legales, acuerdos marco de suministro o contratos de distribución, diríjase a admin@bdjunyang.com."
                  : "For contract terms, long-term supply framework agreements, or commercial inquiries, contact admin@bdjunyang.com."}
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
