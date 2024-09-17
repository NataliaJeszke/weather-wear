import { View, Text, StyleSheet } from "react-native";

import LottieView from "lottie-react-native";

export default function Favorite() {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>
        Your favorite clothes will be displayed here
      </Text>
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
