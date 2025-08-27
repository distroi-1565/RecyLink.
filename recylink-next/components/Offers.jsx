"use client";
import { useEffect, useState } from "react";

export default function Offers(){
  const [offers, setOffers] = useState(()=> JSON.parse(localStorage.getItem("recy_offers") || "[]"));
  const [form, setForm] = useState({ company: "", material: "", price: "" });

  useEffect(()=> localStorage.setItem("recy_offers", JSON.stringify(offers)), [offers]);

  const publish = () => {
    if(!form.company || !form.material || !form.price) return alert("Completa campos");
    const o = { id: Date.now().toString(), ...form, createdAt: new Date().toISOString() };
    setOffers([o, ...offers]); setForm({ company:"", material:"", price:"" });
  };

  const accept = (id) => {
    const offersNow = offers.filter(o=>o.id!==id);
    localStorage.setItem("recy_orders", JSON.stringify([ { id: Date.now().toString(), offerId: id, createdAt: new Date().toISOString(), status: "pendiente" }, ...(JSON.parse(localStorage.getItem("recy_orders")||"[]")) ]));
    setOffers(offersNow);
    alert("Orden creada (demo). Ve a Órdenes.");
  };

  return (
    <section>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="font-semibold">Crear oferta</h3>
          <input className="input mt-3" placeholder="Empresa" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} />
          <input className="input mt-2" placeholder="Material" value={form.material} onChange={e=>setForm({...form,material:e.target.value})} />
          <input className="input mt-2" placeholder="Precio S/ por kg" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} />
          <div className="mt-3">
            <button onClick={publish} className="px-3 py-2 bg-brand-500 text-white rounded">Publicar oferta</button>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-semibold mb-3">Ofertas activas</h3>
          <div className="space-y-3">
            {offers.length === 0 && <div className="text-gray-500">Sin ofertas</div>}
            {offers.map(o => (
              <div key={o.id} className="card flex items-center justify-between">
                <div>
                  <div className="font-semibold">{o.company}</div>
                  <div className="text-sm text-gray-500">{o.material} • S/{o.price}/kg</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=>accept(o.id)} className="px-3 py-1 bg-brand-500 text-white rounded">Aceptar</button>
                  <button onClick={()=>{ setOffers(offers.filter(x=>x.id!==o.id)); }} className="px-3 py-1 border rounded">Eliminar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
