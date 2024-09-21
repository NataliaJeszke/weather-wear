import { View, Text, StyleSheet, FlatList } from "react-native";
import useWardrobeStore from "@/store/useWardrobeStore";

import LottieView from "lottie-react-native";

export default function Favorite() {
  const { favourites } = useWardrobeStore();
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>
        Your favorite clothes will be displayed here
      </Text>
      <FlatList
        data={favourites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <LottieView
        style={{ flex: 1, height: 300, width: 300 }}
        source={require("../assets/animation/clothespick.json")}
        autoPlay
        loop
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
