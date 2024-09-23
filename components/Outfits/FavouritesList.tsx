import React from "react";
import PagerView from "react-native-pager-view";
import { View, Text, StyleSheet } from "react-native";
import { ImageSweater } from "@/components/common/Image/ImageSweater";
import { ClothingItem } from "@/utils/types";

import { LinearGradient } from "expo-linear-gradient";

type FavouritesListProps = {
  favourites: ClothingItem[];
};

export const FavouritesList = ({ favourites }: FavouritesListProps) => {
  return (
    <View style={styles.galleryContainer}>
      <PagerView style={styles.pagerView} initialPage={0}>
        {favourites.map((item) => (
          <View key={item.id} style={styles.page}>
            <LinearGradient
              colors={["#40e0d0", "#F98866", "#ff0080"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}
            >
              <View style={styles.clothingItem}>
                <ImageSweater uri={item.uri} />
                <View style={styles.clothingInfo}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text>{item.material}</Text>
                  <Text>{item.weatherSuitability}</Text>
                </View>
                <View style={styles.btns}>
                  <Text>Add</Text>
                  <Text>Remove</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        ))}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pagerView: {
    flex: 1,
    height: 200,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradient: {
    borderRadius: 5,
    padding: 1,
    marginBottom: 10,
    marginTop: 5,
    marginHorizontal: 5,
  },
  clothingItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    width: 300,
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  clothingInfo: {
    marginTop: 10,
    paddingLeft: 5,
    gap: 5,
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "800",
    color: "#000",
  },
  btns: {
    gap: 25,
    padding: 10,
    alignItems: "flex-end",
  },
});
