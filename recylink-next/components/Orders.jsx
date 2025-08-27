"use client";
import { useEffect, useState } from "react";

export default function Orders(){
  const [orders, setOrders] = useState(()=> JSON.parse(localStorage.getItem("recy_orders")||"[]"));

  useEffect(()=> localStorage.setItem("recy_orders", JSON.stringify(orders)), [orders]);

  const update = (id, status) => {
    const next = orders.map(o => o.id===id ? {...o, status} : o);
    setOrders(next);
    if(status === "liquidado"){
      // award points demo
      const user = JSON.parse(localStorage.getItem("recy_user") || "null");
      if(user){ user.points = (user.points||0) + 50; localStorage.setItem("recy_user", JSON.stringify(user)); }
      alert("Orden liquidada — puntos acreditados (demo)");
    }
  };

  return (
    <section>
      <h3 className="font-semibold">Órdenes</h3>
      <div className="space-y-3 mt-3">
        {orders.length === 0 && <div className="text-gray-500">No hay órdenes</div>}
        {orders.map(o => (
          <div key={o.id} className="card flex items-center justify-between">
            <div>
              <div className="font-semibold">Orden {o.id}</div>
              <div className="text-sm text-gray-500">Estado: {o.status}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={()=>update(o.id,"en ruta")} className="px-3 py-1 border rounded">En ruta</button>
              <button onClick={()=>update(o.id,"recolectado")} className="px-3 py-1 border rounded">Recolectado</button>
              <button onClick={()=>update(o.id,"liquidado")} className="px-3 py-1 bg-brand-500 text-white rounded">Liquidado</button>
            </div>
          </div>
        ))}
      </div>
    </section>
