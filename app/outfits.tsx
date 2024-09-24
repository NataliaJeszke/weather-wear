import React from "react";
import { View, StyleSheet } from "react-native";

import useWardrobeStore from "@/store/useWardrobeStore";

import OutfitsList from "@/components/Outfits/OutfitsList";
import AddOutfits from "@/components/Outfits/AddOutfits";
import Hanger from "@/components/common/Hanger/Hanger";
import CustomLinearGradient from "@/components/common/CustomLinearGradient/CustomLinearGradient";

export default function Outfits() {
  const { favourites, outfits } = useWardrobeStore();

  return (
    <CustomLinearGradient style={styles.container}>
      <View style={styles.container}>
        <AddOutfits favourites={favourites} />

        {outfits.length > 0 ? <OutfitsList outfits={outfits} /> : <Hanger />}
      </View>
    </CustomLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
