import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ImageSweater } from "../common/Image/ImageSweater";
import useWardrobeStore from "@/store/useWardrobeStore";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { theme } from "@/theme";

export default function OutfitsList({ outfits }) {
  const { removeOutfit } = useWardrobeStore();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {outfits.map((outfit, index) => (
        <View key={index} style={styles.shelfContainer}>
          <Text style={styles.outfitTitle}>Outfit {index + 1}</Text>
          <View style={styles.outfitShelf}>
            {outfit.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.itemContainer}>
                <ImageSweater uri={item.uri} />
              </View>
            ))}
          </View>
          <TouchableOpacity onPress={() => removeOutfit(index)}>
            <MaterialIcons
              name="delete-outline"
              size={24}
              color={theme.colors.secondary}
            />
          </TouchableOpacity>
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
});
