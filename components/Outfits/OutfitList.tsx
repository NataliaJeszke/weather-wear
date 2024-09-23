import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import useWardrobeStore from "@/store/useWardrobeStore";

export default function OutfitList() {
  const { outfits } = useWardrobeStore();

  const hangersDisplay = () => {
    return (
      <View style={styles.outfits_container}>
        <Text>Add another shelf</Text>
        <View style={styles.hanger_container}>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <View key={index} style={styles.hanger_image_container}>
                <LinearGradient
                  colors={["#40e0d0", "#F98866", "#ff0080"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.linearGradient}
                >
                  <MaterialCommunityIcons
                    name="hanger"
                    size={40}
                    color="black"
                  />
                </LinearGradient>
              </View>
            ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {outfits.length === 0 ? (
        hangersDisplay()
      ) : (
        <Text>Add clothes to create outfits</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  outfits_container: {
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  hanger_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  hanger_image_container: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradient: {
    borderRadius: 5,
    padding: 1,
  },
});
