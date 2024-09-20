import { StyleSheet, Text, Pressable } from "react-native";
// eslint-disable-next-line import/no-unresolved
import { theme } from "@/theme";

type Props = {
  title: string;
  onPress: () => void;
};

export function WardrobeButton({ title, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
