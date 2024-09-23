import React from "react";
import { View, StyleSheet } from "react-native";

import useWardrobeStore from "@/store/useWardrobeStore";

import OutfitsList from "@/components/Outfits/OutfitsList";
import AddOutfits from "@/components/Outfits/AddOutfits";

import LottieView from "lottie-react-native";
import Hanger from "@/components/common/Hanger/Hanger";

export default function Outfits() {
  const { favourites, outfits } = useWardrobeStore();

  return (
    <View style={styles.container}>
      <AddOutfits favourites={favourites} />

      {outfits.length > 0 ? <OutfitsList outfits={outfits} /> : <Hanger />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
