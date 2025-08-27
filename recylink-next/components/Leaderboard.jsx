"use client";
import { useEffect, useState } from "react";

export default function Leaderboard(){
  const [leader, setLeader] = useState(()=> JSON.parse(localStorage.getItem("recy_leader") || "[]") || [
    { id:1, name:"Carlos Pérez", kg:120 },
    { id:2, name:"María López", kg:110 },
    { id:3, name:"Juan Torres", kg:100 },
  ]);

  useEffect(()=> localStorage.setItem("recy_leader", JSON.stringify(leader)), [leader]);

  return (
    <section>
      <h3 className="font-semibold mb-3">Top recicladores</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {leader.slice(0,3).map((l, i) => (
          <div key={l.id} className="card text-center">
            <div className="text-4xl">{i===0?'🥇': i===1 ? '🥈' : '🥉'}</div>
            <div className="font-semibold mt-2">{l.name}</div>
            <div className="text-sm text-gray-500">{l.kg} kg reciclados</div>
          </div>
        ))}
      </div>
    </section>
