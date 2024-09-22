import { View, Text, StyleSheet } from "react-native";
import useWardrobeStore from "@/store/useWardrobeStore";

import LottieView from "lottie-react-native";
import { FavouritesList } from "@/components/Outfits/FavouritesList";

export default function Favorite() {
  const { favourites } = useWardrobeStore();
  return (
    <View style={styles.container}>
      <Text>Your favorite clothes will be displayed here</Text>
      <FavouritesList favourites={favourites} />
      {/* <LottieView
        style={{ flex: 1, height: 300, width: 300 }}
        source={require("../assets/animation/clothespick.json")}
        autoPlay
        loop
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
