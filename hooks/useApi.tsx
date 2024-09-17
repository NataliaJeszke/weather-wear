import { useState } from "react";
import axios from "axios";

interface WeatherData {
  hourly: {
    temperature_2m: number[];
  };
  [key: string]: any;
}

export const useApi = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async (latitude: number, longitude: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast`,
        {
          params: {
            latitude,
            longitude,
            hourly: "temperature_2m",
          },
        },
      );

      setWeatherData(response.data);
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, error, fetchWeatherData };
};
