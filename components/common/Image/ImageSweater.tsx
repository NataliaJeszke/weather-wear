import { View, Image, StyleSheet } from "react-native";

type Props = {
  uri?: string;
};

export const ImageSweater = ({ uri }: Props) => {
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
    width: 80,
    height: 80,
  },
});
