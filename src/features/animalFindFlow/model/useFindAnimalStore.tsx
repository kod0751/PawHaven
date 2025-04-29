import { create } from 'zustand';

type FindAnimalData = {
  species: string;
  gender: string;
  weight: string;
  color: string[];
};

type FindAnimalStore = {
  step: number;
  findAnimalData: FindAnimalData;
  nextStep: () => void;
  prevStep: () => void;
  updateAnimalData: <K extends keyof FindAnimalData>(
    key: K,
    value: FindAnimalData[K]
  ) => void;
  reset: () => void;
};

export const useFindAnimalStore = create<FindAnimalStore>((set) => ({
  step: 0,
  findAnimalData: { species: '', gender: '', weight: '', color: [] },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 0) })),
  updateAnimalData: (key, value) =>
    set((state) => ({
      findAnimalData: { ...state.findAnimalData, [key]: value },
    })),
  reset: () =>
    set(() => ({
      step: 0,
      findAnimalData: { species: '', gender: '', weight: '', color: [] },
    })),
}));
