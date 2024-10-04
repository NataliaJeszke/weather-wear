import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ImageSweater } from "../common/Image/ImageSweater";

interface ClothesDisplayProps {
  temperature: number;
  clothes: any[];
}

export const ClothesDisplay: React.FC<ClothesDisplayProps> = ({
  temperature,
  clothes,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <FlatList
        data={clothes}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card} key={item.id}>
            <ImageSweater uri={item.uri} style={styles.image} />
            <Text style={styles.clothesName}>{item.name}</Text>
            <Text style={styles.clothesSuitability}>
              {item.weatherSuitability}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  temperature: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  clothesName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  clothesSuitability: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
});
