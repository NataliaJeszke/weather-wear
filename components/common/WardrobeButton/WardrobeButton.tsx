import { StyleSheet, Text, Pressable } from "react-native";
// eslint-disable-next-line import/no-unresolved
import { theme } from "@/theme";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export function WardrobeButton({ title, onPress, disabled }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled && styles.disabledText]}>
        {title}
      </Text>
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
  disabled: {
    backgroundColor: "gray",
  },
  disabledText: {
    color: "lightgray",
  },
});
