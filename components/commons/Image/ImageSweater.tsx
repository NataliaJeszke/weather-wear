import { View, Image } from "react-native";

export const ImageSweater = () => {
  return (
    <View>
      <Image
        style={{ height: 100, width: 100 }}
        source={require("@/assets/sweater.png")}
      />
    </View>
  );
};
