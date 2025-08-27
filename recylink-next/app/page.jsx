import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import Hero from "../components/Hero";
import Marketplace from "../components/Marketplace";
import Offers from "../components/Offers";
import Orders from "../components/Orders";
import Contracts from "../components/Contracts";
import Partners from "../components/Partners";
import Artists from "../components/Artists";
import Rewards from "../components/Rewards";
import Leaderboard from "../components/Leaderboard";
import DniRegister from "../components/DniRegister";
import Impact from "../components/Impact";
import AdminPanel from "../components/AdminPanel";
import { useState } from "react";

export default function HomePage() {
  const [tab, setTab] = useState("home");

  return (
    <div className="min-h-screen">
      <Header onSelectTab={setTab} />
      <main className="max-w-7xl mx-auto p-6">
        <Hero navigate={setTab} />
        <NavTabs current={tab} onChange={setTab} />
        <div className="mt-6 space-y-6">
          {tab === "home" && <section><h2 className="text-2xl font-bold mb-3">Campaña — Todos ganan</h2>
            <p className="text-muted">RecyLink es una plataforma que permite a personas y empresas transformar residuos en ingresos. Trazabilidad, transporte, recompensas y acuerdos B2B.</p>
          </section>}
          {tab === "marketplace" && <Marketplace />}
          {tab === "offers" && <Offers />}
          {tab === "orders" && <Orders />}
          {tab === "contracts" && <Contracts />}
          {tab === "partners" && <Partners />}
          {tab === "artists" && <Artists />}
          {tab === "rewards" && <Rewards />}
          {tab === "leaderboard" && <Leaderboard />}
          {tab === "dni" && <DniRegister />}
          {tab === "impact" && <Impact />}
          {tab === "admin" && <AdminPanel />}
        </div>
      </main>
    </div>
  );
}
