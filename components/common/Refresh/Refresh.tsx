import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface RefreshProps {
  onRefresh: () => void;
}

export const Refresh: React.FC<RefreshProps> = ({ onRefresh }) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onRefresh}>
      <Ionicons name="refresh-circle-outline" size={40} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
