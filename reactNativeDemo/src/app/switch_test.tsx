import { useRouter } from "expo-router";
import { View, StyleSheet, TextInput, Text, Switch } from "react-native";
import { useState } from "react";
import MyButton from "@/components/MyButton";

export default function SwitchTestScreen() {
  const router = useRouter();
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Switch></Switch>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    borderWidth: 1,
    backgroundColor: "grey",
  },
  input: {
    padding: 12,
    fontSize: 18,
    color: "white",
  },
  result: {
    fontSize: 20,
    color: "white",
  },
});
