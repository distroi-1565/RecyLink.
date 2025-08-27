"use client";
import { useEffect, useState } from "react";

export default function Rewards(){
  const [rewards, setRewards] = useState(()=> JSON.parse(localStorage.getItem("recy_rewards") || "[]") || [
    { id:1, title:"Cupón S/20", cost:100, desc:"Canjeable en comercios" },
    { id:2, title:"Giftcard S/50", cost:250, desc:"Digital" },
    { id:3, title:"Merch oficial", cost:350, desc:"Camiseta + stickers" },
  ]);

  useEffect(()=> localStorage.setItem("recy_rewards", JSON.stringify(rewards)), [rewards]);

  const redeem = (id) => {
    const user = JSON.parse(localStorage.getItem("recy_user") || "null");
    if(!user || !user.logged) return alert("Inicia sesión para canjear");
    const r = rewards.find(x => x.id === id);
    if(!r) return;
    if(user.points < r.cost) return alert("No tienes suficientes puntos");
    if(!confirm(`Canjear ${r.title} por ${r.cost} pts?`)) return;
    user.points -= r.cost; localStorage.setItem("recy_user", JSON.stringify(user));
    alert("¡Canje realizado! (demo)");
  };

  return (
    <section>
      <h3 className="font-semibold mb-3">Recompensas</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {rewards.map(r => (
          <div key={r.id} className="card text-center hover:scale-105 transition">
            <div className="font-semibold">{r.title}</div>
            <div className="text-sm text-gray-500">{r.desc}</div>
            <div className="mt-3 font-bold">{r.cost} pts</div>
            <button onClick={()=>redeem(r.id)} className="mt-3 px-3 py-2 bg-brand-500 text-white rounded">Canjear</button>
          </div>
        ))}
      </div>
