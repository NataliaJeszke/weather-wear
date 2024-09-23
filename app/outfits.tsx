import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import useWardrobeStore from "@/store/useWardrobeStore";
import OutfitsList from "@/components/Outfits/OutfitsList";
import AddOutfits from "@/components/Outfits/AddOutfits";

export default function Outfits() {
  const { favourites, outfits } = useWardrobeStore();

  console.log("OUTFITS.TSX", outfits);

  return (
    <View style={styles.container}>
      <AddOutfits favourites={favourites} />

      {outfits.length > 0 ? (
        <OutfitsList outfits={outfits} />
      ) : (
        <LottieView
          style={{ flex: 1, height: 300, width: 300 }}
          source={require("../assets/animation/clothespick.json")}
          autoPlay
          loop
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
