"use client";
import { useEffect, useState } from "react";

export default function Header({ onSelectTab }) {
  const [points, setPoints] = useState(() => {
    try { const u = JSON.parse(localStorage.getItem("recy_user")); return u?.points || 0; } catch { return 0; }
  });

  useEffect(()=> {
    const h = () => { try { const u = JSON.parse(localStorage.getItem("recy_user")); setPoints(u?.points || 0); } catch{} };
    window.addEventListener("storage", h); return ()=> window.removeEventListener("storage", h);
  }, []);

  const login = async () => {
    const name = prompt("Nombre (demo)");
    const email = prompt("Email (demo)");
    if(!email) return;
    const role = email.endsWith("@recilink-admin") ? "admin" : "user";
    const user = { name: name || email.split("@")[0], email, points: points || 0, role, logged: true };
    localStorage.setItem("recy_user", JSON.stringify(user));
    setPoints(user.points);
    alert("Bienvenido " + user.name + (role === "admin" ? " (admin)" : ""));
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="RecyLink" className="w-12 h-12 rounded-lg object-cover shadow" />
          <div>
            <div className="text-xl font-bold">RecyLink</div>
            <div className="text-sm text-gray-500">Dinero por basura — Economía circular</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 rounded-full bg-green-50 text-green-700 font-semibold">{points} pts</div>
          <button onClick={login} className="px-4 py-2 bg-green-600 text-white rounded-lg">Entrar</button>
        </div>
      </div>
    </header>
