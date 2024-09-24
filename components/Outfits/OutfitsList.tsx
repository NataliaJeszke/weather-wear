import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

import useWardrobeStore from "@/store/useWardrobeStore";

import { ClothingItem } from "@/utils/types";

import { ImageSweater } from "@/components/common/Image/ImageSweater";
import CustomLinearGradient from "@/components/common/CustomLinearGradient/CustomLinearGradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { theme } from "@/theme";

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
      {outfits.map((outfit, index) => (
        <CustomLinearGradient style={styles.linearGradient}>
          <View key={`${index}-${Date.now()}`} style={styles.shelfContainer}>
            <View style={styles.shelf_header}>
              <TextInput
                style={styles.outfitTitle}
                placeholder={`Outfit ${index + 1}`}
                value={outfitTitles[index] || ""}
                onChangeText={(text) => handleNameChange(text, index)}
              />
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
                <View
                  key={`${itemIndex}-${Date.now()}`}
                  style={styles.itemContainer}
                >
                  <ImageSweater uri={item.uri} />
                </View>
              ))}
            </View>
          </View>
        </CustomLinearGradient>
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
    flex: 0,
    width: "100%",
    borderRadius: 5,
    padding: 1,
    marginTop: 5,
  },
});
