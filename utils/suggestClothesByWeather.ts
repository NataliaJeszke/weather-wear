import { ClothingType, WeatherSuitability } from "./enums";
import { ClothingItem } from "./types";

const getRandomItem = (items: ClothingItem[]): ClothingItem | undefined => {
  if (items.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

export const suggestClothesByWeather = (
  temperature: number,
  clothes: ClothingItem[],
): ClothingItem[] => {
  let filteredClothes: ClothingItem[];

  if (temperature >= 0 && temperature <= 10) {
    filteredClothes = clothes.filter(
      (item) => item.weatherSuitability === WeatherSuitability.Cold,
    );
  } else if (temperature > 10 && temperature <= 20) {
    filteredClothes = clothes.filter(
      (item) => item.weatherSuitability === WeatherSuitability.Neutral,
    );
  } else if (temperature > 20) {
    filteredClothes = clothes.filter(
      (item) => item.weatherSuitability === WeatherSuitability.Warm,
    );
  } else {
    return [];
  }

  const outwearItems = filteredClothes.filter(
    (item) => item.type === ClothingType.Outwear,
  );
  const topItems = filteredClothes.filter(
    (item) => item.type === ClothingType.Top,
  );
  const bottomItems = filteredClothes.filter(
    (item) => item.type === ClothingType.Bottom,
  );

  const suggestions: ClothingItem[] = [];

  const randomOutwear = getRandomItem(outwearItems);
  const randomTop = getRandomItem(topItems);
  const randomBottom = getRandomItem(bottomItems);

  if (randomOutwear) suggestions.push(randomOutwear);
  if (randomTop) suggestions.push(randomTop);
  if (randomBottom) suggestions.push(randomBottom);

  return suggestions;
};
