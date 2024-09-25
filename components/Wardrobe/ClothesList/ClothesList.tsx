import {
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { WardrobeButton } from "@/components/common/WardrobeButton/WardrobeButton";
import { ImageSweater } from "@/components/common/Image/ImageSweater";
import CustomLinearGradient from "@/components/common/CustomLinearGradient/CustomLinearGradient";

import { ClothingItem } from "@/utils/types";

import { theme } from "@/theme";

const numColumns = 3;
const itemWidth = (Dimensions.get("window").width - 40) / numColumns;

type ClothesListProps = {
  clothes: ClothingItem[];
  favourites: ClothingItem[];
  removeClothing: (id: number) => void;
  addFavourite: (clothingItem: ClothingItem) => void;
  openModal: () => void;
  setIsFavourite: (id: number) => void;
  removeFavourite: (id: number) => void;
};

export const ClothesList = ({
  clothes,
  removeClothing,
  addFavourite,
  openModal,
  setIsFavourite,
  removeFavourite,
  favourites,
}: ClothesListProps) => {
  const handleFavourite = (item: ClothingItem) => {
    addFavourite(item);
    setIsFavourite(item.id);
  };

  const handleRemoveFavourite = (item: ClothingItem) => {
    removeFavourite(item.id);
    setIsFavourite(item.id);
  };

  return (
    <View style={styles.clothingListContainer}>
      <WardrobeButton title="Add Clothes" onPress={openModal} />
      <FlatList
        data={clothes}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <CustomLinearGradient style={styles.linearGradient}>
              <View style={styles.clothingItem}>
                <ImageSweater uri={item.uri} />
                <View style={styles.btn_container}>
                  {item.isFavourite ? (
                    <TouchableOpacity
                      onPress={() => handleRemoveFavourite(item)}
                    >
                      <MaterialIcons
                        name="favorite"
                        size={24}
                        color={theme.colors.primary}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => handleFavourite(item)}>
                      <MaterialIcons
                        name="favorite-outline"
                        size={24}
                        color="white"
                      />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={() => removeClothing(item.id)}>
                    <MaterialIcons
                      name="delete-outline"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </CustomLinearGradient>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    borderRadius: 5,
    padding: 1,
  },
  clothingItem: {
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 5,
    backgroundColor: "rgba(255, 255, 255, 0.58)",
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.79)",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 10,
    maxWidth: itemWidth,
  },
  clothingListContainer: {
    padding: 5,
    flex: 1,
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
});
