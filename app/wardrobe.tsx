// eslint-disable-next-line import/no-unresolved
import { WardrobeButton } from "@/components/WardrobeButton/WardrobeButton";
import { View, Text, StyleSheet } from "react-native";

export default function addClothes() {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>
        Add Clothes to your virtual wardrobe
      </Text>
      <WardrobeButton
        title="Add Clothes"
        onPress={() => console.log("Add Clothes")}
      />
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
  temperature: {
    // add your temperature styles here
  },
  // clothes: {
  //   // add your clothes styles here
  // },
});
