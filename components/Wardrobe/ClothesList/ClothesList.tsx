import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { WardrobeButton } from "@/components/common/WardrobeButton/WardrobeButton";
import { ImageSweater } from "@/components/common/Image/ImageSweater";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme";
import { ClothingItem } from "@/utils/types";

type ClothesListProps = {
  clothes: ClothingItem[];
  removeClothing: (id: number) => void;
  addFavourite: (clothingItem: ClothingItem) => void;
  openModal: () => void;
};

export const ClothesList = ({
  clothes,
  removeClothing,
  addFavourite,
  openModal,
}: ClothesListProps) => {
  return (
    <View style={styles.clothingListContainer}>
      <WardrobeButton title="Add Clothes" onPress={openModal} />
      <FlatList
        data={clothes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <LinearGradient
            colors={["#40e0d0", "#F98866", "#ff0080"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearGradient}
          >
            <View
              style={styles.clothingItem}
              key={`${item.id}-${new Date().getTime()}`}
            >
              <ImageSweater uri={item.uri} />
              <View style={styles.clothingInfo}>
                <View>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
                <View style={styles.description}>
                  <Text>Type: {item.type},</Text>
                  <Text>Color: {item.color},</Text>
                  <Text>Size: {item.size},</Text>
                  <Text>Material: {item.material},</Text>
                  <Text>Weather: {item.weatherSuitability}</Text>
                </View>
                <View style={styles.btn_container}>
                  <TouchableOpacity onPress={() => addFavourite(item)}>
                    <MaterialIcons
                      name="favorite-outline"
                      size={24}
                      color={theme.colors.secondary}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removeClothing(item.id)}>
                    <MaterialIcons
                      name="delete-outline"
                      size={24}
                      color={theme.colors.secondary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    borderRadius: 5,
    padding: 1,
    marginBottom: 10,
    marginTop: 5,
  },
  clothingItem: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
  },
  clothingListContainer: {
    padding: 5,
    flex: 1,
  },
  clothingInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "800",
  },
  description: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
  },
});
