"use client";
export default function NavTabs({ current, onChange }) {
  const tabs = [
    { id: "home", label: "Inicio" },
    { id: "marketplace", label: "Marketplace" },
    { id: "offers", label: "Ofertas" },
    { id: "orders", label: "Órdenes" },
    { id: "contracts", label: "Contratos" },
    { id: "partners", label: "Empresas" },
    { id: "artists", label: "Artistas" },
    { id: "rewards", label: "Recompensas" },
    { id: "leaderboard", label: "Top" },
    { id: "dni", label: "Beneficios DNI" },
    { id: "impact", label: "Impacto" },
    { id: "admin", label: "Admin" },
  ];

  return (
    <nav className="overflow-x-auto">
      <div className="flex gap-2">
        {tabs.map(t => (
          <button key={t.id} onClick={() => onChange(t.id)}
            className={`px-4 py-2 rounded-lg font-semibold ${current===t.id ? "bg-brand-50 text-brand-700" : "bg-white border"}`}>
            {t.label}
          </button>
        ))}
      </div>
    </nav>
