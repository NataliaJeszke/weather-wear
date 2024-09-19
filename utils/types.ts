import { ClothingType, WeatherSuitability } from "./enums";

export type ClothingItem = {
  id: number;
  name: string;
  type: ClothingType;
  color: string;
  material: string;
  size: string;
  weatherSuitability: WeatherSuitability;
  uri?: string;
};

export type Outfit = {
  id: number;
  top: ClothingItem;
  bottom: ClothingItem;
  outerwear: ClothingItem;
};
