import React, { useState } from "react";
import { AddClothesItem } from "@/components/Wardrobe/AddClothesItem/AddClothesItem";
import { WardrobeButton } from "@/components/common/WardrobeButton/WardrobeButton";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import useWardrobeStore from "@/store/useWardrobeStore";
import { ClothesList } from "@/components/Wardrobe/ClothesList/ClothesList";

export default function Wardrobe() {
  const { clothes, removeClothing, addClothing } = useWardrobeStore();
  const [showAddClothes, setShowAddClothes] = useState(false);

  const openAddClothes = () => {
    setShowAddClothes(true);
  };

  const closeAddClothes = () => {
    setShowAddClothes(false);
  };

  return (
    <View style={styles.container}>
      {clothes.length > 0 ? (
        <ClothesList
          clothes={clothes}
          removeClothing={removeClothing}
          openModal={openAddClothes}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            No clothes available in your wardrobe
          </Text>
          <WardrobeButton title="Add Clothes" onPress={openAddClothes} />
        </View>
      )}

      {showAddClothes && (
        <View style={styles.overlay}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <TouchableOpacity
              onPress={closeAddClothes}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <AddClothesItem addClothing={addClothing} clothes={clothes} />
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    flexGrow: 1,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#000",
  },
});
