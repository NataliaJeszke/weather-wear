/* eslint-disable import/no-unresolved */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

import { ClothingItem, Outfit } from "@/utils/types";

interface WardrobeState {
  clothes: ClothingItem[];
  favorites: Outfit[];
  addClothing: (clothingItem: ClothingItem) => Promise<void>;
  removeClothing: (id: number) => void;
  addFavorite: (outfit: Outfit) => void;
  removeFavorite: (id: number) => void;
}

const saveImageToFileSystem = async (uri: string) => {
  const fileName = uri.split("/").pop();
  const fileUri = `${FileSystem.documentDirectory}${fileName}`;

  try {
    await FileSystem.downloadAsync(uri, fileUri);
    return fileUri;
  } catch (error) {
    console.error("Error saving image to filesystem:", error);
    return null;
  }
};

const useWardrobeStore = create(
  persist<WardrobeState>(
    (set) => ({
      clothes: [],
      favorites: [],

      addClothing: async (clothingItem: ClothingItem) => {
        if (clothingItem.uri) {
          const localUri = await saveImageToFileSystem(clothingItem.uri);
          if (localUri) {
            clothingItem.uri = localUri;
          }
        }
        set((state) => ({
          clothes: [...state.clothes, clothingItem],
        }));
      },

      removeClothing: (id: number) =>
        set((state) => ({
          clothes: state.clothes.filter((item) => item.id !== id),
        })),

      addFavorite: (clothingItem: ClothingItem) =>
        set((state) => ({
          favorites: [...state.favorites, clothingItem],
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
