"use client";
import { useEffect, useState } from "react";

export default function Artists(){
  const [artists, setArtists] = useState(()=> JSON.parse(localStorage.getItem("recy_artists") || "[]"));
  const [form, setForm] = useState({ name:"", profile:"", desc:"" });

  useEffect(()=> localStorage.setItem("recy_artists", JSON.stringify(artists)), [artists]);

  const submit = () => {
    if(!form.name) return alert("Nombre requerido");
    setArtists([{ id: Date.now().toString(), ...form }, ...artists ]);
    setForm({ name:"", profile:"", desc:"" });
  };

  return (
    <section>
      <div className="card">
        <h3 className="font-semibold">Colaboraciones con artistas/famosos</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-2">
          <input className="input" placeholder="Nombre" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
          <input className="input" placeholder="Perfil (URL)" value={form.profile} onChange={e=>setForm({...form, profile:e.target.value})}/>
          <input className="input" placeholder="Descripción breve" value={form.desc} onChange={e=>setForm({...form, desc:e.target.value})}/>
        </div>
        <div className="mt-3"><button onClick={submit} className="px-3 py-2 bg-brand-500 text-white rounded">Publicar</button></div>
      </div>

      <div className="mt-4 space-y-3">
        {artists.length===0 && <div className="text-gray-500">No hay colaboradores</div>}
        {artists.map(a => (
          <div key={a.id} className="card flex items-center justify-between">
            <div>
              <div className="font-semibold">{a.name}</div>
              <div className="text-sm text-gray-500">{a.desc}</div>
            </div>
            <div>{a.profile ? <a href={a.profile} target="_blank" className="text-brand-700">Perfil</a> : null}</div>
          </div>
        ))}
      </div>
