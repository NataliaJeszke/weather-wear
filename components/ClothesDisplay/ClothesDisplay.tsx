import { View, Text, StyleSheet } from "react-native";

interface ClothesDisplayProps {
  temperature: number;
}

export const ClothesDisplay: React.FC<ClothesDisplayProps> = ({
  temperature,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.clothes}>Wear a T-Shirt and Shorts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  temperature: {
    fontSize: 24,
    fontWeight: "bold",
  },
  clothes: {
    fontSize: 18,
  },
});
