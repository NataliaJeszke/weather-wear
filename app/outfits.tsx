import { View, Text, StyleSheet } from "react-native";
import useWardrobeStore from "@/store/useWardrobeStore";

import LottieView from "lottie-react-native";
import { FavouritesList } from "@/components/Outfits/FavouritesList";
import OutfitList from "@/components/Outfits/OutfitList";

export default function Favorite() {
  const { favourites } = useWardrobeStore();
  return (
    <View style={styles.container}>
      <Text>Swap to pick pieces for outfits</Text>
      <FavouritesList favourites={favourites} />
      <OutfitList />
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
