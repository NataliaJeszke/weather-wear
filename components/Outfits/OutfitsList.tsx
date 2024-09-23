import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function OutfitsList({ outfits }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {outfits.map((outfit, index) => (
        <View key={index} style={styles.shelfContainer}>
          <Text style={styles.outfitTitle}>Outfit {index + 1}</Text>
          <View style={styles.outfitShelf}>
            {outfit.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.itemContainer}>
                <Image source={{ uri: item.uri }} style={styles.itemImage} />
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 5,
    flexGrow: 1,
  },
  shelfContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  outfitTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  outfitShelf: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
