import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import useWardrobeStore from "@/store/useWardrobeStore";

import { ClothingItem } from "@/utils/types";
import { ImageSweater } from "@/components/common/Image/ImageSweater";

const windowSize = Dimensions.get("window").width * 0.45;

type OutfitsListProps = {
  outfits: ClothingItem[][];
};

export default function OutfitsList({ outfits }: OutfitsListProps) {
  const { removeOutfit, addOutfitTitle, outfitTitles } = useWardrobeStore();

  const handleNameChange = (text: string, index: number) => {
    addOutfitTitle(index, text);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.outfitRow}>
        {outfits.map((outfit, index) => (
          <View key={index} style={styles.squareWindowContainer}>
            <View style={styles.shelfHeader}>
              <TextInput
                style={styles.outfitTitle}
                placeholder={`Outfit ${index + 1}`}
                value={outfitTitles[index] || ""}
                onChangeText={(text) => handleNameChange(text, index)}
                onFocus={() => {}}
                onBlur={() => {}}
              />
              <TouchableOpacity onPress={() => removeOutfit(index)}>
                <MaterialIcons name="delete-outline" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.outfitGrid}>
              {outfit.map((item, itemIndex) => (
                <View
                  key={`${itemIndex}-${Date.now()}`}
                  style={styles.itemContainer}
                >
                  <ImageSweater uri={item.uri} style={styles.image} />
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  outfitRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 20,
  },
  squareWindowContainer: {
    width: windowSize,
    height: windowSize,
    backgroundColor: "rgba(255, 255, 255, 0.58)",
    borderRadius: 16,
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.79)",
  },
  shelfHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
  },
  outfitTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  outfitGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  itemContainer: {
    width: "45%",
    height: 60,
    backgroundColor: "rgba(248, 248, 248, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
});
