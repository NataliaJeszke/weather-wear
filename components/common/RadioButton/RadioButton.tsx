import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const RadioButton = (
  option: string,
  selectedOption: string,
  onChange: (value: string) => void,
  index: number,
) => (
  <TouchableOpacity
    onPress={() => onChange(option)}
    style={{
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 5,
    }}
    key={index}
  >
    <View
      style={{
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: selectedOption === option ? "blue" : "gray",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
      }}
    >
      {selectedOption === option && (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "blue",
          }}
        />
      )}
    </View>
    <Text>{option}</Text>
  </TouchableOpacity>
);
