"use client";
import React, { useState } from "react";

type CableData = Record<
  string,
  Record<
    string,
    {
      cuivre: Array<{
        distance_max_m: number;
        section_mm2: number;
        note?: string;
      }>;
    }
  >
>;

/**
 * Données de câbles pour différentes configurations électriques.
 *
 * Cette structure contient les informations nécessaires pour sélectionner
 * une section de câble en fonction de la phase (monophasé ou triphasé),
 * de l'intensité nominale (en ampères), et du matériau du câble (cuivre).
 *
 * ### Structure des données :
 * - **monophasé** : Données pour les installations monophasées.
 * - **triphasé** : Données pour les installations triphasées.
 *
 * Chaque configuration contient :
 * - **Intensité nominale (ex. "90A", "60A", "30A")** :
 *   - **cuivre** : Liste des options de câbles en cuivre.
 *     - `distance_max_m` : Distance maximale en mètres pour cette section.
 *     - `section_mm2` : Section du câble en mm².
 *     - `note` *(optionnel)* : Remarque spécifique pour certaines configurations.
 *
 * ### Exemple d'utilisation :
 * Pour une installation monophasée avec une intensité de 30A, vous pouvez
 * sélectionner une section de câble en fonction de la distance maximale
 * requise et des recommandations fournies.
 */
const cableData: CableData = {
  monophasé: {
    "90A": {
      cuivre: [
        { distance_max_m: 28, section_mm2: 10 },
        { distance_max_m: 39, section_mm2: 16 },
        { distance_max_m: 55, section_mm2: 25 },
        { distance_max_m: 78, section_mm2: 35 },
        { distance_max_m: 111, section_mm2: 50 },
        { distance_max_m: 156, section_mm2: 70 },
        { distance_max_m: 54, section_mm2: 16 },
        { distance_max_m: 84, section_mm2: 25 },
        { distance_max_m: 116, section_mm2: 35 },
        { distance_max_m: 166, section_mm2: 50 },
        { distance_max_m: 222, section_mm2: 70 },
        { distance_max_m: 300, section_mm2: 95 },
      ],
    },
    "60A": {
      cuivre: [
        { distance_max_m: 28, section_mm2: 10 },
        { distance_max_m: 39, section_mm2: 16 },
        { distance_max_m: 55, section_mm2: 25 },
        { distance_max_m: 78, section_mm2: 35 },
        { distance_max_m: 111, section_mm2: 50 },
        { distance_max_m: 156, section_mm2: 70 },
        { distance_max_m: 54, section_mm2: 16 },
        { distance_max_m: 84, section_mm2: 25 },
        { distance_max_m: 116, section_mm2: 35 },
        { distance_max_m: 166, section_mm2: 50 },
        { distance_max_m: 222, section_mm2: 70 },
        { distance_max_m: 300, section_mm2: 95 },
      ],
    },
    "30A": {
      cuivre: [
        {
          distance_max_m: 66,
          section_mm2: 10,
          note: "16 mm² conseillé pour Linky",
        },
        { distance_max_m: 106, section_mm2: 16 },
        { distance_max_m: 166, section_mm2: 25 },
        { distance_max_m: 222, section_mm2: 35 },
        { distance_max_m: 300, section_mm2: 50 },
        { distance_max_m: 400, section_mm2: 70 },
        { distance_max_m: 500, section_mm2: 95 },
        { distance_max_m: 600, section_mm2: 120 },
        { distance_max_m: 700, section_mm2: 150 },
        { distance_max_m: 800, section_mm2: 185 },
        { distance_max_m: 900, section_mm2: 240 },
        { distance_max_m: 1000, section_mm2: 300 },
      ],
    },
  },
  triphasé: {
    "60A": {
      cuivre: [
        { distance_max_m: 28, section_mm2: 10 },
        { distance_max_m: 39, section_mm2: 16 },
        { distance_max_m: 55, section_mm2: 25 },
        { distance_max_m: 78, section_mm2: 35 },
        { distance_max_m: 111, section_mm2: 50 },
        { distance_max_m: 156, section_mm2: 70 },
        { distance_max_m: 54, section_mm2: 16 },
        { distance_max_m: 84, section_mm2: 25 },
        { distance_max_m: 116, section_mm2: 35 },
        { distance_max_m: 166, section_mm2: 50 },
        { distance_max_m: 222, section_mm2: 70 },
        { distance_max_m: 300, section_mm2: 95 },
      ],
    },
    "30A": {
      cuivre: [
        {
          distance_max_m: 66,
          section_mm2: 10,
          note: "16 mm² conseillé pour Linky",
        },
        { distance_max_m: 106, section_mm2: 16 },
        { distance_max_m: 166, section_mm2: 25 },

        { distance_max_m: 222, section_mm2: 35 },
        { distance_max_m: 300, section_mm2: 50 },
        { distance_max_m: 400, section_mm2: 70 },
        { distance_max_m: 500, section_mm2: 95 },
        { distance_max_m: 600, section_mm2: 120 },
        { distance_max_m: 700, section_mm2: 150 },
        { distance_max_m: 800, section_mm2: 185 },
        { distance_max_m: 900, section_mm2: 240 },
        { distance_max_m: 1000, section_mm2: 300 },
      ],
    },
  },
};

/**
 * A React component for selecting the appropriate cable section based on the type of current,
 * circuit breaker rating, and distance. It provides a user-friendly interface to input these
 * parameters and displays the recommended cable section. The component also allows saving the
 * selection to a backend API.
 *
 * @component
 * @returns {JSX.Element} The rendered CableSectionSelector component.
 *
 * @remarks
 * - The component uses `useState` to manage the state of the selected type of current, circuit
 *   breaker rating, distance, saving status, and save message.
 * - The cable data is dynamically accessed based on the selected type and rating.
 * - The recommended cable section is determined by finding the first entry in the data where
 *   the distance is less than or equal to the maximum allowed distance.
 * - The component includes a save button to send the selected data to a backend API.

 * @example
 * ```tsx
 * import CableSectionSelector from './components/cablesectionselector';
 *
 * function App() {
 *   return <CableSectionSelector />;
 * }
 * ```
 *
 * @function
 * @name CableSectionSelector
 *
 * @state {string} type - The type of current, either "monophasé" or "triphasé".
 * @state {string} calibre - The circuit breaker rating, e.g., "90A,60A,30A".
 * @state {number} distance - The distance in meters for the cable run.
 * @state {boolean} isSaving - Indicates whether the save operation is in progress.
 * @state {string} saveMessage - Message to display after saving the selection.
 * 
 */
export default function CableSectionSelector() {
  const [type, setType] = useState("monophasé");
  const [calibre, setCalibre] = useState("90A,60A,30A");
  const [distance, setDistance] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const sections = cableData[type]?.[calibre]?.cuivre || [];
  const result = sections.find((entry) => distance <= entry.distance_max_m);

  const saveToBackend = async () => {
    if (!result) return;
    setIsSaving(true);
    try {
      await fetch("/api/save-cable-selection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          calibre,
          distance,
          section: result.section_mm2,
          note: result.note || null,
        }),
      });
      setSaveMessage("Données enregistrées ✅");
    } catch (error) {
      console.error(error);
      setSaveMessage("Erreur lors de l'enregistrement ❌");
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveMessage(""), 3000);
    }
  };

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
        Sélecteur de section de câble
      </h2>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: 4 }}>
          Type de courant
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: 8,
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        >
          <option value="monophasé">Monophasé</option>
          <option value="triphasé">Triphasé</option>
        </select>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: 4 }}>
          Calibre du disjoncteur
        </label>
        <select
          value={calibre}
          onChange={(e) => setCalibre(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: 8,
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        >
          {Object.keys(cableData[type]).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: 4 }}>
          Distance (en mètres)
        </label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: 8,
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        />
      </div>
      <div
        style={{
          padding: "1rem",
          borderRadius: 12,
          background: "rgba(255,255,255,0.07)",
          marginTop: "1rem",
        }}
      >
        {result ? (
          <div>
            <p
              style={{
                color: "#4fc3f7",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              Section recommandée : {result.section_mm2} mm²
            </p>
            {result.note && (
              <p style={{ color: "#ffe082", marginTop: 8 }}>{result.note}</p>
            )}
            <button
              onClick={saveToBackend}
              disabled={isSaving}
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: 8,
                border: "none",
                background: "#4fc3f7",
                color: "#0d47a1",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.2s",
                marginTop: "1rem",
              }}
            >
              {isSaving ? "Enregistrement..." : "Enregistrer"}
            </button>
            {saveMessage && (
              <div
                style={{
                  marginTop: "1rem",
                  color: "#4fc3f7",
                  textAlign: "center",
                }}
              >
                {saveMessage}
              </div>
            )}
          </div>
        ) : (
          <p style={{ color: "#ffb300", fontWeight: "bold" }}>
            Aucune section trouvée pour cette distance.
          </p>
        )}
      </div>
    </div>
  );
}
