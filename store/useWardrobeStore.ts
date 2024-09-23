/* eslint-disable import/no-unresolved */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

import { ClothingItem, Outfit } from "@/utils/types";

interface WardrobeState {
  outfits: ClothingItem[][];
  clothes: ClothingItem[];
  favourites: Outfit[];
  addClothing: (clothingItem: ClothingItem) => Promise<void>;
  removeClothing: (id: number) => void;
  addFavourite: (outfit: Outfit) => void;
  removeFavourite: (id: number) => void;
  createOutfit: (clothingItem: ClothingItem[]) => void;
  setIsFavourite: (id: number) => void;
  removeOutfit: (index: number) => void;
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
      favourites: [],
      outfits: [],

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

      setIsFavourite: (id: number) =>
        set((state) => ({
          clothes: state.clothes.map((item) => {
            if (item.id === id) {
              return { ...item, isFavourite: !item.isFavourite };
            }
            return item;
          }),
        })),

      addFavourite: (clothingItem: ClothingItem) =>
        set((state) => ({
          favourites: [...state.favourites, clothingItem],
        })),

      removeFavourite: (id: number) =>
        set((state) => ({
          favourites: state.favourites.filter((item) => item.id !== id),
        })),

      createOutfit: (clothingItems: ClothingItem[]) => {
        return set((state) => ({
          outfits: [...state.outfits, clothingItems],
        }));
      },

      editOutfit: (oldItemId: string, newClothingItem?: ClothingItem) => {
        set((state) => {
          const updatedOutfits = state.outfits.map((outfitArray) =>
            outfitArray.filter((item) => item.id !== Number(oldItemId)),
          );
          if (newClothingItem) {
            updatedOutfits.push([newClothingItem]);
          }
          return { outfits: updatedOutfits };
        });
      },

      removeOutfit: (index: number) =>
        set((state) => ({
          outfits: state.outfits.filter(
            (_, outfitIndex) => outfitIndex !== index,
          ),
        })),
    }),
    {
      name: "wardrobe-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useWardrobeStore;
