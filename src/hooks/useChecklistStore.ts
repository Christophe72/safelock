import { create } from "zustand";

type ChecklistState = {
  currentStep: number;
  equipmentId: string | null;
  validations: Record<string, boolean>;
  completeStep: (step: number) => void;
  setEquipment: (id: string) => void;
};

/**
 * Un hook Zustand pour gérer l'état de la checklist.
 *
 * Ce store fournit une gestion d'état pour une checklist, y compris l'étape actuelle,
 * l'ID de l'équipement associé et les données de validation. Il inclut également des
 * méthodes pour mettre à jour l'étape actuelle et définir l'ID de l'équipement.
 *
 * @typedef {Object} ChecklistState
 * @property {number} currentStep - L'étape actuelle dans le processus de checklist.
 * @property {string | null} equipmentId - L'ID de l'équipement associé, ou `null` si non défini.
 * @property {Record<string, any>} validations - Un objet contenant les données de validation pour la checklist.
 * @property {(step: number) => void} completeStep - Une fonction pour marquer une étape comme terminée et mettre à jour l'étape actuelle.
 * @property {(id: string) => void} setEquipment - Une fonction pour définir l'ID de l'équipement.
 *
 * @function useChecklistStore
 * @returns {ChecklistState} Le store Zustand pour gérer l'état de la checklist.
 */
export const useChecklistStore = create<ChecklistState>((set) => ({
  currentStep: 1,
  equipmentId: null,
  validations: {},
  completeStep: (step) =>
    set((state) => ({
      currentStep: Math.max(state.currentStep, step + 1),
    })),
  setEquipment: (id) => set({ equipmentId: id }),
}));
