import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";

import { ClothingItem } from "@/utils/types";
import { ClothingType, WeatherSuitability } from "@/utils/enums";

import { WardrobeButton } from "@/components/common/WardrobeButton/WardrobeButton";
import { RadioButton } from "@/components/common/RadioButton/RadioButton";
import { ImageSweater } from "@/components/common/Image/ImageSweater";

type FormData = {
  name: string;
  type: string;
  color: string;
  material: string;
  size: string;
  weatherSuitability: string;
  uri?: string;
};

type Props = {
  addClothing: (clothingItem: ClothingItem) => void;
  clothes: ClothingItem[];
  visible: boolean;
  onClose: () => void;
};

export const AddClothesItem = ({
  addClothing,
  clothes,
  visible,
  onClose,
}: Props) => {
  const { control, handleSubmit, reset } = useForm<FormData>();
  const [imageUri, setImageUri] = useState<string>();

  const onSubmit = (data: FormData) => {
    const newClothingItem: ClothingItem = {
      id: clothes.length + 1,
      name: data.name,
      type: data.type as ClothingType,
      color: data.color,
      material: data.material,
      size: data.size,
      weatherSuitability: data.weatherSuitability as WeatherSuitability,
      uri: imageUri,
      isFavourite: false,
    };

    addClothing(newClothingItem);
    reset();
    onClose();
  };

  const handleChooseImage = async () => {
    if (Platform.OS === "web") {
      return;
    }
    const results = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!results.canceled) {
      setImageUri(results.assets[0].uri);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.title}>Add Clothes Item</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleChooseImage}
              style={styles.imageButton}
            >
              <ImageSweater uri={imageUri} style={styles.imagePlaceholder} />
            </TouchableOpacity>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <Text style={styles.label}>Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="type"
              render={({ field: { onChange, value } }) => (
                <View style={styles.radioGroup}>
                  <Text style={styles.label}>Type</Text>
                  {Object.values(ClothingType).map((option, index) =>
                    RadioButton(option, value, onChange, index),
                  )}
                </View>
              )}
            />
            <Controller
              control={control}
              name="color"
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <Text style={styles.label}>Color</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Color"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="material"
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <Text style={styles.label}>Material</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Material"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="size"
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <Text style={styles.label}>Size</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Size"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="weatherSuitability"
              render={({ field: { onChange, value } }) => (
                <View style={styles.radioGroup}>
                  <Text style={styles.label}>Weather Suitability</Text>
                  {Object.values(WeatherSuitability).map((option, index) =>
                    RadioButton(option, value, onChange, index),
                  )}
                </View>
              )}
            />
            <WardrobeButton
              title="Add Clothes"
              onPress={handleSubmit(onSubmit)}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    maxHeight: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#ff5a5f",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
    marginTop: 10,
  },
  radioGroup: {
    marginBottom: 15,
  },
  imageButton: {
    alignSelf: "center",
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#ddd",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
