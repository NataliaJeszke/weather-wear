/* eslint-disable import/no-unresolved */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ClothingType = "góra" | "dół" | "okrycie wierzchnie";
export type WeatherSuitability = "ciepło" | "zimno" | "neutralnie";

export type ClothingItem = {
  id: number;
  name: string;
  type: ClothingType;
  color: string;
  material: string;
  size: string;
  weatherSuitability: WeatherSuitability;
};

type Outfit = {
  id: number;
  top: ClothingItem;
  bottom: ClothingItem;
  outerwear: ClothingItem;
};

interface WardrobeState {
  clothes: ClothingItem[];
  favorites: Outfit[];
  addClothing: (clothingItem: ClothingItem) => void;
  removeClothing: (id: number) => void;
  addFavorite: (outfit: Outfit) => void;
  removeFavorite: (id: number) => void;
}

const useWardrobeStore = create(
  persist<WardrobeState>(
    (set) => ({
      clothes: [],
      favorites: [],

      addClothing: (clothingItem: ClothingItem) =>
        set((state) => ({
          clothes: [...state.clothes, clothingItem],
        })),

      removeClothing: (id: number) =>
        set((state) => ({
          clothes: state.clothes.filter((item) => item.id !== id),
        })),

      addFavorite: (outfit: Outfit) =>
        set((state) => ({
          favorites: [...state.favorites, outfit],
        })),

      removeFavorite: (id: number) =>
        set((state) => ({
          favorites: state.favorites.filter((outfit) => outfit.id !== id),
        })),
    }),
    {
      name: "wardrobe-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useWardrobeStore;
