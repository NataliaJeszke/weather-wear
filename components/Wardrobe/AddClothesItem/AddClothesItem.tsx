import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";

import useWardrobeStore, {
  ClothingType,
  WeatherSuitability,
  ClothingItem,
} from "@/store/useWardrobeStore";

import { WardrobeButton } from "@/components/commons/WardrobeButton/WardrobeButton";
import { RadioButton } from "@/components/commons/RadioButton/RadioButton";
import { ImageSweater } from "@/components/commons/Image/ImageSweater";

type FormData = {
  name: string;
  type: string;
  color: string;
  material: string;
  size: string;
  weatherSuitability: string;
};

export const AddClothesItem = () => {
  const { addClothing, clothes } = useWardrobeStore();
  const { control, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const newClothingItem: ClothingItem = {
      id: clothes.length + 1,
      name: data.name,
      type: data.type as ClothingType,
      color: data.color,
      material: data.material,
      size: data.size,
      weatherSuitability: data.weatherSuitability as WeatherSuitability,
    };

    addClothing(newClothingItem);
    reset();
  };

  const typeOptions = ["góra", "dół", "okrycie wierzchnie"];
  const weatherOptions = ["ciepło", "zimno", "neutralnie"];

  return (
    <View>
      <Text>Add Clothes Item</Text>
      <TouchableOpacity activeOpacity={0.8}>
        <ImageSweater />
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
            {typeOptions.map((option) => RadioButton(option, value, onChange))}
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
            {weatherOptions.map((option) =>
              RadioButton(option, value, onChange),
            )}
          </View>
        )}
      />

      <WardrobeButton title="Add Clothes" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
