"use client";
import { useEffect, useState } from "react";

export default function Contracts(){
  const [contracts, setContracts] = useState(()=> JSON.parse(localStorage.getItem("recy_contracts") || "[]"));
  const [company, setCompany] = useState("");

  useEffect(()=> localStorage.setItem("recy_contracts", JSON.stringify(contracts)), [contracts]);

  const submit = () => {
    if(!company) return alert("Nombre empresa requerido");
    setContracts([{ id: Date.now().toString(), company, status: "propuesto", createdAt: new Date().toISOString() }, ...contracts]);
    setCompany("");
  };

  return (
    <section>
      <div className="card">
        <h3 className="font-semibold">Solicitar contrato B2B</h3>
        <div className="mt-3 flex gap-2">
          <input className="input" value={company} onChange={e=>setCompany(e.target.value)} placeholder="Empresa" />
          <button onClick={submit} className="px-3 py-2 bg-brand-500 text-white rounded">Enviar</button>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {contracts.map(c => (
          <div key={c.id} className="card flex items-center justify-between">
            <div>
              <div className="font-semibold">{c.company}</div>
              <div className="text-sm text-gray-500">{c.status}</div>
            </div>
            <div>
              <button onClick={() => { const next = contracts.map(x => x.id===c.id?{...x,status:"contactado"}:x); setContracts(next); }} className="px-3 py-1 border rounded">Marcar contactado</button>
            </div>
          </div>
        ))}
      </div>
