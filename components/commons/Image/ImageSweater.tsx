import { View, Image } from "react-native";

type Props = {
  uri?: string;
};

export const ImageSweater = ({ uri }: Props) => {
  return (
    <View>
      <Image
        style={{ height: 100, width: 100 }}
        source={uri ? { uri: uri } : require("@/assets/sweater.png")}
      />
    </View>
  );
};
