import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { WardrobeButton } from "@/components/commons/WardrobeButton/WardrobeButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type ClothesListProps = {
  clothes: {
    id: number;
    name: string;
    type: string;
    color: string;
    size: string;
    material: string;
    weatherSuitability: string;
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
              <MaterialIcons name="delete-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  clothingItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
