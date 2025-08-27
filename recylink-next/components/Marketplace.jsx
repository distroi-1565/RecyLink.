"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Marketplace() {
  const [listings, setListings] = useState(() => JSON.parse(localStorage.getItem("recy_listings") || "[]"));
  const [form, setForm] = useState({ name: "", qty: "", photo: "" });

  useEffect(()=> localStorage.setItem("recy_listings", JSON.stringify(listings)), [listings]);

  const publish = () => {
    if(!form.name || !form.qty) return alert("Completa material y cantidad");
    const item = { id: Date.now().toString(), ...form, createdAt: new Date().toISOString() };
    setListings([item, ...listings]);
    setForm({ name: "", qty: "", photo: "" });
  };

  return (
    <section>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="font-semibold">Publicar material</h3>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Material (ej. PET)" className="mt-3 input" />
          <input value={form.qty} onChange={e=>setForm({...form, qty:e.target.value})} placeholder="Cantidad (kg)" className="mt-2 input" />
          <input value={form.photo} onChange={e=>setForm({...form, photo:e.target.value})} placeholder="Foto (URL)" className="mt-2 input" />
          <div className="mt-3 flex gap-2">
            <button onClick={publish} className="px-3 py-2 bg-brand-500 text-white rounded">Publicar</button>
            <button onClick={()=>{ setListings([]); localStorage.removeItem("recy_listings"); }} className="px-3 py-2 border rounded">Limpiar</button>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-semibold mb-3">Publicaciones recientes</h3>
          <div className="space-y-3">
            {listings.length===0 && <div className="text-gray-500">No hay publicaciones</div>}
            {listings.map(l => (
              <motion.div key={l.id} whileHover={{ scale: 1.01 }} className="card flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                  {l.photo ? <img src={l.photo} className="object-cover w-full h-full" /> : <div className="w-full h-full grid place-items-center text-gray-400">sin foto</div>}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{l.name}</div>
                  <div className="text-sm text-gray-500">{l.qty} kg • {new Date(l.createdAt).toLocaleString()}</div>
                </div>
                <div>
                  <button onClick={()=>{ navigator.clipboard?.writeText(JSON.stringify(l)); alert("Compartido al portapapeles (demo)"); }} className="px-3 py-1 border rounded">Compartir</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
