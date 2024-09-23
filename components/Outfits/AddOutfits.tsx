import React, { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";

import useWardrobeStore from "@/store/useWardrobeStore";

import { FavouritesList } from "./FavouritesList";
import { WardrobeButton } from "../common/WardrobeButton/WardrobeButton";
import { ImageSweater } from "../common/Image/ImageSweater";
import { ClothingItem } from "@/utils/types";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

type AddOutfitsProps = {
  favourites: ClothingItem[];
};

export default function AddOutfits({ favourites }: AddOutfitsProps) {
  const { createOutfit } = useWardrobeStore();
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentOutfit, setCurrentOutfit] = useState<ClothingItem[]>([]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleAddToOutfit = (item: ClothingItem) => {
    if (currentOutfit.length < 4) {
      setCurrentOutfit([...currentOutfit, item]);
    }
  };

  const handleSaveOutfit = () => {
    createOutfit(currentOutfit);
    console.log("Outfit created", currentOutfit);
    setCurrentOutfit([]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <WardrobeButton title="Add Outfit" onPress={handleOpenModal} />
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Swipe and Create Your Outfit</Text>

            <FavouritesList
              favourites={favourites}
              onSelect={handleAddToOutfit}
            />

            <View style={styles.outfitContainer}>
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <View key={index} style={styles.hangerSlot}>
                    {currentOutfit[index] ? (
                      <ImageSweater uri={currentOutfit[index].uri} />
                    ) : (
                      <LinearGradient
                        colors={["#40e0d0", "#F98866", "#ff0080"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.linearGradient}
                      >
                        <MaterialCommunityIcons
                          name="hanger"
                          size={40}
                          color="black"
                        />
                      </LinearGradient>
                    )}
                  </View>
                ))}
            </View>

            <Text style={styles.statusText}>
              {currentOutfit.length}/4 items selected
            </Text>

            <WardrobeButton
              title="Add Outfit"
              onPress={handleSaveOutfit}
              disabled={currentOutfit.length < 1}
            />

            <Button title="Cancel" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  outfitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  hangerSlot: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  linearGradient: {
    borderRadius: 5,
    padding: 5,
  },
  statusText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
});
