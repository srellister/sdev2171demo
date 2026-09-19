import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

const s1styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgrey",
  },
  pressable: {
    backgroundColor: "blue",
    borderRadius: 8,
    padding: 12,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default s1styles;
