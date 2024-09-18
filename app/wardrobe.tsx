import React, { useState } from "react";
import { AddClothesItem } from "@/components/Wardrobe/AddClothesItem/AddClothesItem";
import { WardrobeButton } from "@/components/commons/WardrobeButton/WardrobeButton";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import useWardrobeStore from "@/store/useWardrobeStore";
import { ClothesList } from "@/components/Wardrobe/ClothesList/ClothesList";

export default function AddClothes() {
  const { clothes, removeClothing } = useWardrobeStore();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {clothes.length > 0 ? (
        <ClothesList
          clothes={clothes}
          removeClothing={removeClothing}
          openModal={openModal}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            No clothes available in your wardrobe
          </Text>
          <WardrobeButton title="Add Clothes" onPress={openModal} />
        </View>
      )}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <AddClothesItem />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "80%",
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
