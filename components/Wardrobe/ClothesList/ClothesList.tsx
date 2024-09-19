import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { WardrobeButton } from "@/components/common/WardrobeButton/WardrobeButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ImageSweater } from "@/components/common/Image/ImageSweater";

type ClothesListProps = {
  clothes: {
    id: number;
    name: string;
    type: string;
    color: string;
    size: string;
    material: string;
    weatherSuitability: string;
    uri?: string;
  }[];
  removeClothing: (id: number) => void;
  openModal: () => void;
};

export const ClothesList: React.FC<ClothesListProps> = ({
  clothes,
  removeClothing,
  openModal,
}) => {
  return (
    <View style={styles.clothingListContainer}>
      <WardrobeButton title="Add Clothes" onPress={openModal} />
      <FlatList
        data={clothes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={styles.clothingItem}
            key={new Date().getTime() + item.id}
          >
            <ImageSweater uri={item.uri} />
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
            <Text>{item.color}</Text>
            <Text>{item.size}</Text>
            <Text>{item.material}</Text>
            <Text>{item.weatherSuitability}</Text>
            <TouchableOpacity onPress={() => removeClothing(item.id)}>
              <MaterialIcons name="delete-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  clothingListContainer: {
    padding: 5,
    flexWrap: "wrap",
  },
  clothingItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});
