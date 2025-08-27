"use client";
import { motion } from "framer-motion";

export default function Hero({ navigate }) {
  return (
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="rounded-2xl p-8 bg-gradient-to-r from-brand-100 to-white shadow-lg flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold">Recicla fácil. <span className="text-brand-700">Impacta grande.</span></h1>
          <p className="mt-3 text-gray-600">Conecta recicladores, empresas y compradores. Recompensas por cada kilo, transporte incluido y trazabilidad para empresas.</p>
          <div className="mt-4 flex gap-3">
            <button onClick={() => navigate("marketplace")} className="px-4 py-2 bg-brand-500 text-white rounded-md">Publicar material</button>
            <button onClick={() => navigate("partners")} className="px-4 py-2 border rounded-md">Colabora como empresa</button>
          </div>
        </div>
        <div className="w-72">
          <div className="bg-white rounded-xl p-4 shadow">
            <div className="text-sm text-gray-500">Certificados ESG</div>
            <div className="font-semibold text-lg mt-2">Generamos reportes y constancias</div>
            <div className="mt-3 text-sm text-gray-500">Perfecto para empresas que buscan impacto y cumplimiento.</div>
          </div>
        </div>
      </div>
    </motion.section>
