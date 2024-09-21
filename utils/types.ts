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
  isFavourite?: boolean;
};

export type Outfit = {
  id: number;
  name: string;
  type: ClothingType;
  color: string;
  material: string;
  size: string;
  weatherSuitability: WeatherSuitability;
  uri?: string;
};
