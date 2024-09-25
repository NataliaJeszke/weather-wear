import { View, Image, StyleSheet, ViewStyle } from "react-native";

type Props = {
  uri?: string;
  style?: ViewStyle;
};

export const ImageSweater = ({ uri, style }: Props) => {
  return (
    <View>
      <Image
        style={styles.itemImage}
        source={uri ? { uri: uri } : require("@/assets/sweater.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    borderRadius: 10,
    width: 70,
    height: 70,
  },
});
