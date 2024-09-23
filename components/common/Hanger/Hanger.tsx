import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

const Hanger = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#40e0d0", "#F98866", "#ff0080"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientContainer}
      >
        <Animatable.View
          animation={{
            0: { transform: [{ rotate: "-30deg" }] },
            0.5: { transform: [{ rotate: "30deg" }] },
            1: { transform: [{ rotate: "-30deg" }] },
          }}
          iterationCount="infinite"
          duration={1500}
        >
          <MaterialCommunityIcons name="hanger" size={100} color="white" />
        </Animatable.View>
      </LinearGradient>
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
    padding: 20,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Hanger;
