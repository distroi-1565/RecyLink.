"use client";
import { useEffect, useState } from "react";

export default function DniRegister(){
  const [dniList, setDniList] = useState(()=> JSON.parse(localStorage.getItem("recy_dni") || "[]"));
  const [dni, setDni] = useState("");

  useEffect(()=> localStorage.setItem("recy_dni", JSON.stringify(dniList)), [dniList]);

  const add = () => {
    if(!/^\d{8}$/.test(dni)) return alert("DNI inválido (8 dígitos)");
    setDniList([{ id: Date.now().toString(), dni, createdAt: new Date().toISOString() }, ...dniList]);
    setDni("");
  };

  return (
    <section>
      <h3 className="font-semibold mb-3">Registro DNI</h3>
      <div className="flex gap-2">
        <input className="input" placeholder="DNI" value={dni} onChange={e=>setDni(e.target.value)} />
        <button onClick={add} className="px-3 py-2 bg-brand-500 text-white rounded">Registrar</button>
      </div>

      <div className="mt-4 space-y-2">
        {dniList.map(d => (
          <div key={d.id} className="card">{d.dni} • <span className="text-sm text-gray-500">{new Date(d.createdAt).toLocaleString()}</span></div>
        ))}
      </div>
