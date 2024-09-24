import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, View, Alert } from "react-native";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { ClothesDisplay } from "../components/ClothesDisplay/ClothesDisplay";

import { useApi } from "../hooks/useApi";
import { useGeocode } from "../hooks/useGeocode";

import CustomLinearGradient from "@/components/common/CustomLinearGradient/CustomLinearGradient";
import Tshirt from "@/components/common/Tshirt/Tshirt";

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [temperature, setTemperature] = useState<number | null>(null);

  const { fetchWeatherData, weatherData } = useApi();
  const { coordinates, fetchCoordinates } = useGeocode();

  const showAlert = () => {
    Alert.alert(
      "Location is empty",
      "Write down your location.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  const handleSearch = async () => {
    if (!searchQuery) {
      showAlert();
      return;
    }
    try {
      await fetchCoordinates(searchQuery);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setTemperature(null);
  };

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) {
      fetchWeatherData(coordinates.latitude, coordinates.longitude);
    }
  }, [coordinates]);

  useEffect(() => {
    if (weatherData) {
      const currentTemperature = getCurrentTemperature(weatherData);
      setTemperature(currentTemperature);
      console.log(`Current Temperature: ${currentTemperature}°C`);
    }
  }, [weatherData]);

  const getCurrentTemperature = (data: any) => {
    if (data && data.hourly && data.hourly.temperature_2m && data.hourly.time) {
      const times = data.hourly.time;
      const temperatures = data.hourly.temperature_2m;
      const now = new Date();
      const currentTime = now.toISOString().slice(0, 13) + ":00";
      const index = times.indexOf(currentTime);

      if (index !== -1) {
        return temperatures[index];
      } else {
        console.log("Current time not found in weather data.");
        return null;
      }
    }
    return null;
  };

  return (
    <CustomLinearGradient style={undefined}>
      <View style={styles.container}>
        <View style={{ height: 200, width: 350 }}>
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSearchSubmit={handleSearch}
            onClearSearch={handleClearSearch}
          />
        </View>
        <View style={styles.weatherContainer}>
          {temperature !== null ? (
            <ClothesDisplay temperature={temperature} />
          ) : (
            <Tshirt />
          )}
        </View>
        <StatusBar />
      </View>
    </CustomLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  weatherContainer: {
    flex: 1,
    alignItems: "center",
  },
});
