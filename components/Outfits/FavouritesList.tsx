import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { WardrobeButton } from "@/components/common/WardrobeButton/WardrobeButton";
import { ImageSweater } from "@/components/common/Image/ImageSweater";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme";
import { ClothingItem } from "@/utils/types";

type FavouritesListProps = {
  favourites: ClothingItem[];
};

export const FavouritesList = ({ favourites }: FavouritesListProps) => {
  return (
    <View style={styles.galleryContainer}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        showPageIndicator={true}
      >
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
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    width: 300,
  },
  clothingInfo: {
    marginTop: 10,
  },
  title: {
    fontWeight: "800",
    color: "#000",
  },
});
