"use client";
import { useEffect, useState } from "react";

export default function Partners(){
  const [partners, setPartners] = useState(()=> JSON.parse(localStorage.getItem("recy_partners") || "[]"));
  const [form, setForm] = useState({ name:"", url:"", benefits: "" });

  useEffect(()=> localStorage.setItem("recy_partners", JSON.stringify(partners)), [partners]);

  const submit = () => {
    if(!form.name) return alert("Nombre empresa");
    setPartners([{ id: Date.now().toString(), ...form, active: false }, ...partners]);
    setForm({ name:"", url:"", benefits:"" });
  };

  const toggle = (id) => setPartners(partners.map(p => p.id===id ? {...p, active: !p.active} : p));

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-semibold">Registrar empresa colaboradora</h3>
          <input className="input mt-3" placeholder="Empresa" value={form.name} onChange={e=>setForm({...form, name: e.target.value})}/>
          <input className="input mt-2" placeholder="Website / contacto" value={form.url} onChange={e=>setForm({...form, url: e.target.value})}/>
          <textarea className="input mt-2" placeholder="Beneficios o propuesta" value={form.benefits} onChange={e=>setForm({...form, benefits: e.target.value})}></textarea>
          <div className="mt-3"><button onClick={submit} className="px-3 py-2 bg-brand-500 text-white rounded">Postular</button></div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Aliados</h3>
          <div className="space-y-3">
            {partners.length === 0 && <div className="text-gray-500">No hay aliados</div>}
            {partners.map(p => (
              <div key={p.id} className="card flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-gray-500">{p.benefits}</div>
                </div>
                <div>
                  <button onClick={()=>toggle(p.id)} className="px-3 py-1 border rounded">{p.active ? "Desactivar" : "Activar"}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
