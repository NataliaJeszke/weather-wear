import { create } from "zustand";

type ClothingItem = {
  id: number;
  name: string;
  type: string;
};

interface WardrobeState {
  clothes: ClothingItem[];
  addClothing: (clothingItem: ClothingItem) => void;
  removeClothing: (id: number) => void;
}

const useWardrobeStore = create<WardrobeState>((set) => ({
  clothes: [],
  addClothing: (clothingItem: ClothingItem) =>
    set((state) => ({
      clothes: [...state.clothes, clothingItem],
    })),
  removeClothing: (id: number) =>
    set((state) => ({
      clothes: state.clothes.filter((item) => item.id !== id),
    })),
}));

export default useWardrobeStore;
