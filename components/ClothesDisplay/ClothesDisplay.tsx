import useWardrobeStore from "@/store/useWardrobeStore";
import { suggestClothesByWeather } from "@/utils/suggestClothesByWeather";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ImageSweater } from "../common/Image/ImageSweater";

interface ClothesDisplayProps {
  temperature: number;
}

export const ClothesDisplay: React.FC<ClothesDisplayProps> = ({
  temperature,
}) => {
  const { clothes } = useWardrobeStore();

  const suitableClothes = suggestClothesByWeather(temperature, clothes);

  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <FlatList
        data={suitableClothes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <Text key={item.id}>
              {item.name} - {item.weatherSuitability}
            </Text>
            <ImageSweater uri={item.uri} />
          </>
        )}
      />
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
