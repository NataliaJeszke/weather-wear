import React, { ReactNode } from "react";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { ViewStyle } from "react-native";

interface CustomLinearGradientProps {
  style?: ViewStyle;
  children: ReactNode;
}

const CustomLinearGradient: React.FC<CustomLinearGradientProps> = ({
  style,
  children,
}) => {
  return (
    <ExpoLinearGradient
      colors={["#12c2e9", "#c471ed", "#ff0080"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[{ flex: 1 }, style]}
    >
      {children}
    </ExpoLinearGradient>
  );
};

export default CustomLinearGradient;
