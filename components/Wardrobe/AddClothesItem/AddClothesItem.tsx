import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
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
};

export const AddClothesItem = ({ addClothing, clothes }: Props) => {
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
    };

    addClothing(newClothingItem);
    reset();
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
    <View>
      <Text>Add Clothes Item</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={handleChooseImage}>
        <ImageSweater uri={imageUri} />
      </TouchableOpacity>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="type"
        render={({ field: { onChange, value } }) => (
          <View>
            <Text>Type</Text>
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
          <TextInput
            placeholder="Color"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="material"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Material"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="size"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Size"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="weatherSuitability"
        render={({ field: { onChange, value } }) => (
          <View>
            <Text>Weather Suitability</Text>
            {Object.values(WeatherSuitability).map((option, index) =>
              RadioButton(option, value, onChange, index),
            )}
          </View>
        )}
      />

      <WardrobeButton title="Add Clothes" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
