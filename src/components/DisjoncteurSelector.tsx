"use client";
import React, { useState } from "react";

type Disjoncteur = {
  type: string;
  calibre: string;
  courbe: string;
  pouvoirCoupure: string;
  tension: string;
  nombrePoles: string;
  sensibilite?: string;
  note?: string;
};

const disjoncteurs: Disjoncteur[] = [
  {
    type: "Différentiel",
    calibre: "30A",
    courbe: "AC",
    pouvoirCoupure: "6kA",
    tension: "230V",
    nombrePoles: "2P",
    sensibilite: "30mA",
    note: "Pour protection des personnes",
  },
  {
    type: "Magneto-thermique",
    calibre: "16A",
    courbe: "C",
    pouvoirCoupure: "3kA",
    tension: "230V",
    nombrePoles: "1P+N",
    note: "Pour circuits prises",
  },
  {
    type: "Magneto-thermique",
    calibre: "20A",
    courbe: "C",
    pouvoirCoupure: "3kA",
    tension: "230V",
    nombrePoles: "1P+N",
    note: "Pour circuits chauffage",
  },
  {
    type: "Magneto-thermique",
    calibre: "32A",
    courbe: "D",
    pouvoirCoupure: "6kA",
    tension: "400V",
    nombrePoles: "3P+N",
    note: "Pour circuits moteurs",
  },
  {
    type: "Différentiel",
    calibre: "63A",
    courbe: "A",
    pouvoirCoupure: "10kA",
    tension: "230V",
    nombrePoles: "2P",
    sensibilite: "30mA",
    note: "Pour protection générale",
  },
];

export default function DisjoncteurSelector() {
  const [selected, setSelected] = useState(0);

  const disj = disjoncteurs[selected];

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        background: "linear-gradient(135deg, #0d47a1, #4dabf5, #0288d1)",
        borderRadius: 16,
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        padding: "2rem",
        color: "white",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Sélecteur de disjoncteur
      </h2>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: 4 }}>
          Type de disjoncteur
        </label>
        <select
          value={selected}
          onChange={(e) => setSelected(Number(e.target.value))}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: 8,
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        >
          {disjoncteurs.map((d, idx) => (
            <option key={idx} value={idx}>
              {d.type} - {d.calibre}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          padding: "1rem",
          borderRadius: 12,
          background: "rgba(255,255,255,0.07)",
          marginTop: "1rem",
        }}
      >
        <p>
          <strong>Type :</strong> {disj.type}
        </p>
        <p>
          <strong>Calibre :</strong> {disj.calibre}
        </p>
        <p>
          <strong>Courbe :</strong> {disj.courbe}
        </p>
        <p>
          <strong>Pouvoir de coupure :</strong> {disj.pouvoirCoupure}
        </p>
        <p>
          <strong>Tension :</strong> {disj.tension}
        </p>
        <p>
          <strong>Nombre de pôles :</strong> {disj.nombrePoles}
        </p>
        {disj.sensibilite && (
          <p>
            <strong>Sensibilité :</strong> {disj.sensibilite}
          </p>
        )}
        {disj.note && (
          <p style={{ color: "#ffe082", marginTop: 8 }}>{disj.note}</p>
        )}
      </div>
    </div>
  );
}
