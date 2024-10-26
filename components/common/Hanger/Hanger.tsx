import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import CustomLinearGradient from "@/components/common/CustomLinearGradient/CustomLinearGradient";

const Hanger = () => {
  return (
    <View style={styles.container}>
      <CustomLinearGradient style={styles.gradientContainer}>
        <Animatable.View
          animation={{
            0: { transform: [{ rotate: "-30deg" }] },
            0.5: { transform: [{ rotate: "30deg" }] },
            1: { transform: [{ rotate: "-30deg" }] },
          }}
          iterationCount="infinite"
          duration={1500}
        >
          <MaterialCommunityIcons name="hanger" size={150} color="white" />
        </Animatable.View>
      </CustomLinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
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

export default Hanger;
