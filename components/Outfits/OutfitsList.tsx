import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import useWardrobeStore from "@/store/useWardrobeStore";

import { ClothingItem } from "@/utils/types";

import { ImageSweater } from "../common/Image/ImageSweater";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";

type OutfitsListProps = {
  outfits: ClothingItem[][];
};

export default function OutfitsList({ outfits }: OutfitsListProps) {
  const { removeOutfit } = useWardrobeStore();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {outfits.map((outfit, index) => (
        <LinearGradient
          colors={["#40e0d0", "#F98866", "#ff0080"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <View key={index} style={styles.shelfContainer}>
            <View style={styles.shelf_header}>
              <Text style={styles.outfitTitle}>Outfit {index + 1}</Text>
              <TouchableOpacity onPress={() => removeOutfit(index)}>
                <MaterialIcons
                  name="delete-outline"
                  size={24}
                  color={theme.colors.secondary}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.outfitShelf}>
              {outfit.map((item, itemIndex) => (
                <View key={itemIndex} style={styles.itemContainer}>
                  <ImageSweater uri={item.uri} />
                </View>
              ))}
            </View>
          </View>
        </LinearGradient>
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
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    gap: 10,
  },
  shelf_header: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  linearGradient: {
    width: "100%",
    borderRadius: 5,
    padding: 1,
    marginBottom: 10,
    marginTop: 5,
  },
});
