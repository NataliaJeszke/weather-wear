import React from "react";
import { View, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import * as Animatable from "react-native-animatable";
import CustomLinearGradient from "@/components/common/CustomLinearGradient/CustomLinearGradient";

const Tshirt = () => {
  return (
    <View style={styles.container}>
      <CustomLinearGradient style={styles.gradientContainer}>
        <Animatable.View
          animation={{
            0: { transform: [{ rotate: "-30deg" }, { scale: 1 }] },
            0.5: { transform: [{ rotate: "30deg" }, { scale: 1.5 }] },
            1: { transform: [{ rotate: "-30deg" }, { scale: 1 }] },
          }}
          iterationCount="infinite"
          duration={2000}
          easing="ease-in-out"
        >
          <Ionicons name="shirt-outline" size={150} color="white" />
        </Animatable.View>
      </CustomLinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  gradientContainer: {
    flex: 0,
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    overflow: "hidden",
  },
});

export default Tshirt;
