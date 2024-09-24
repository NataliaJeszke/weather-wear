import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import useWardrobeStore from "@/store/useWardrobeStore";
import { AddClothesItem } from "@/components/Wardrobe/AddClothesItem/AddClothesItem";
import { WardrobeButton } from "@/components/common/WardrobeButton/WardrobeButton";
import { ClothesList } from "@/components/Wardrobe/ClothesList/ClothesList";
import CustomLinearGradient from "@/components/common/CustomLinearGradient/CustomLinearGradient";

export default function Wardrobe() {
  const {
    clothes,
    favourites,
    removeClothing,
    addClothing,
    addFavourite,
    setIsFavourite,
    removeFavourite,
  } = useWardrobeStore();
  const [showAddClothes, setShowAddClothes] = useState(false);

  const openAddClothes = () => {
    setShowAddClothes(true);
  };

  const closeAddClothes = () => {
    setShowAddClothes(false);
  };

  return (
    <CustomLinearGradient style={styles.container}>
      <View style={styles.container}>
        {clothes.length > 0 ? (
          <ClothesList
            clothes={clothes}
            removeClothing={removeClothing}
            addFavourite={addFavourite}
            openModal={openAddClothes}
            setIsFavourite={setIsFavourite}
            removeFavourite={removeFavourite}
            favourites={favourites}
          />
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              No clothes available in your wardrobe
            </Text>
            <WardrobeButton title="Add Clothes" onPress={openAddClothes} />
          </View>
        )}
        <AddClothesItem
          addClothing={addClothing}
          clothes={clothes}
          visible={showAddClothes}
          onClose={closeAddClothes}
        />
      </View>
    </CustomLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
