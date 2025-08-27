"use client";
import { useEffect, useState } from "react";

export default function AdminPanel(){}
  const [user, setUser] = useState(()=> JSON.parse(localStorage.getItem("recy_user") || "null"));
  const [contracts, setContracts] = useState(()=> JSON.parse(localStorage.getItem("recy_contracts") || "[]"));
  const [orders, setOrders] = useState(()=> JSON.parse(localStorage.getItem("recy_orders") || "[]"));
  const [partners, setPartners] = useState(()=> JSON.parse(localStorage.getItem("recy_partners") || "[]"));

  useEffect(()=> {
    localStorage.setItem("recy_contracts", JSON.stringify(contracts));
    localStorage.setItem("recy_orders", JSON.stringify(orders));
    localStorage.setItem("recy_partners", JSON.stringify(partners));
  }, [contracts, orders, partners]);

  if(!user || !user.logged || user.role !== "admin"){
    return <div className="card text-center">Acceso restringido. Inicia sesión con correo que termine en <code>@recilink-admin</code> para ver el panel.</div>;
  }

  return (
    <section>
      <h3 className="font-semibold mb-3">Panel admin</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <div className="font-semibold">Contratos</div>
          <div className="mt-2 small text-gray-500">{contracts.length} solicitudes</div>
        </div>
        <div className="card">
          <div className="font-semibold">Órdenes</div>
          <div className="mt-2 small text-gray-500">{orders.length} órdenes</div>
        </div>
        <div className="card">
          <div className="font-semibold">Partners</div>
          <div className="mt-2 small text-gray-500">{partners.length} aliados</div>
        </div>
      </div>
    </section>)