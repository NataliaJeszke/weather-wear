import React, { useState } from "react";
import { AddClothesItem } from "@/components/Wardrobe/AddClothesItem/AddClothesItem";
import { WardrobeButton } from "@/components/WardrobeButton/WardrobeButton";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import useWardrobeStore from "@/store/useWardrobeStore";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

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
        <View>
          <WardrobeButton title="Add Clothes" onPress={openModal} />
          <FlatList
            data={clothes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.clothingItem}>
                <Text>{item.name}</Text>
                <Text>{item.type}</Text>
                <Text>{item.color}</Text>
                <Text>{item.size}</Text>
                <Text>{item.material}</Text>
                <Text>{item.weatherSuitability}</Text>
                <TouchableOpacity onPress={() => removeClothing(item.id)}>
                  <MaterialIcons
                    name="delete-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
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
  clothingItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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
