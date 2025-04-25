import { create } from 'zustand';

type AnimalData = {
  kind: string;
  gender: string;
  weight: string;
  color: string;
};

type FindAnimalStore = {
  step: number;
  animalData: AnimalData;
  nextStep: () => void;
  prevStep: () => void;
  updateAnimalData: (key: keyof AnimalData, value: string) => void;
  reset: () => void;
};

export const useFindAnimalStore = create<FindAnimalStore>((set) => ({
  step: 0,
  animalData: { kind: '', gender: '', weight: '', color: '' },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 0) })),
  updateAnimalData: (key, value) =>
    set((state) => ({
      animalData: { ...state.animalData, [key]: value },
    })),
  reset: () =>
    set(() => ({
      step: 0,
      animalData: { kind: '', gender: '', weight: '', color: '' },
    })),
}));
