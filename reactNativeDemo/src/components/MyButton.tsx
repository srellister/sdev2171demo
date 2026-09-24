import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  text: string;
  onPress: () => void;
};

export default function MyButton({ text, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    padding: 13,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
