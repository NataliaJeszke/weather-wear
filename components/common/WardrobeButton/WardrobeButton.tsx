import { StyleSheet, Text, Pressable } from "react-native";
import { theme } from "@/theme";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  type?: "default" | "cancel";
};

export function WardrobeButton({
  title,
  onPress,
  disabled,
  type = "default",
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        disabled && styles.disabled,
        type === "cancel" && styles.cancelButton,
      ]}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          disabled && styles.disabledText,
          type === "cancel" && styles.cancelText,
        ]}
      >
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
    alignSelf: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  disabled: {
    backgroundColor: "gray",
  },
  disabledText: {
    color: "lightgray",
  },
  cancelButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  cancelText: {
    color: "gray",
  },
});
