export const suggestClothesByWeather = (temperature, clothes) => {
  if (temperature >= 0 && temperature <= 10) {
    return clothes.filter((item) => item.weatherSuitability === "cold");
  } else if (temperature > 10 && temperature <= 20) {
    return clothes.filter((item) => item.weatherSuitability === "neutral");
  } else if (temperature > 20) {
    return clothes.filter((item) => item.weatherSuitability === "warm");
  }
  return [];
};
