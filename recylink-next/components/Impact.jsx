"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Impact(){
  const canvasRef = useRef(null);

  useEffect(()=>{
    const ctx = canvasRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Plástico","Papel","Vidrio","Metal","RAEE"],
        datasets: [{
          data: [40, 25, 15, 12, 8],
          backgroundColor: ["#10b981","#34d399","#60a5fa","#f59e0b","#a78bfa"]
        }]
      },
      options: { responsive: true, plugins: { legend: { position: "bottom" } } }
    });
    return ()=> chart.destroy();
  }, []);

  return (
    <section>
      <h3 className="font-semibold mb-3">Impacto Ambiental</h3>
      <div className="card">
        <canvas ref={canvasRef} />
        <div className="mt-3 text-sm text-gray-600">Estimación basada en publicaciones. En producción, conectar trazabilidad real para cálculos precisos.</div>
      </div>
