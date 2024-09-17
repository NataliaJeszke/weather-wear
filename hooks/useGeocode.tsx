import { useState } from "react";
import axios from "axios";

export const useGeocode = () => {
  const [coordinates, setCoordinates] = useState<{
    latitude: number | null;
    longitude: number | null;
  }>({ latitude: null, longitude: null });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCoordinates = async (place: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search`,
        {
          params: {
            name: place,
            count: 1,
            language: "pl",
            format: "json",
          },
        },
      );
      const results = response.data.results;
      if (results && results.length > 0) {
        const { latitude, longitude } = results[0];
        setCoordinates({ latitude, longitude });
      } else {
        setError("No results found");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error: ", err.response?.data);
      } else {
        console.error("Other error: ", err);
      }
      setError("Error fetching coordinates");
    } finally {
      setLoading(false);
    }
  };

  return {
    coordinates,
    fetchCoordinates,
    error,
    loading,
  };
};
