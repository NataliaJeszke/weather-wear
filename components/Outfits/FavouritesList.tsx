import React from "react";
import PagerView from "react-native-pager-view";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ImageSweater } from "@/components/common/Image/ImageSweater";

import { ClothingItem } from "@/utils/types";

import CustomLinearGradient from "@/components/common/CustomLinearGradient/CustomLinearGradient";

type FavouritesListProps = {
  favourites: ClothingItem[];
  onSelect: (item: ClothingItem) => void;
};

export const FavouritesList = ({
  favourites,
  onSelect,
}: FavouritesListProps) => {
  return (
    <View style={styles.galleryContainer}>
      <PagerView style={styles.pagerView}>
        {favourites.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => onSelect(item)}>
            <View key={item.id} style={styles.page}>
              <CustomLinearGradient style={styles.linearGradient}>
                <View style={styles.clothingItem}>
                  <ImageSweater uri={item.uri} />
                  <View style={styles.clothingInfo}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text>{item.material}</Text>
                    <Text>{item.weatherSuitability}</Text>
                  </View>
                </View>
              </CustomLinearGradient>
            </View>
          </TouchableOpacity>
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
    width: "100%",
    justifyContent: "space-around",
  },
  clothingInfo: {
    marginTop: 5,
    paddingRight: 30,
    gap: 5,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "800",
    color: "#000",
  },
});
