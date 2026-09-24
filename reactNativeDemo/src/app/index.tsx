import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import MyButton from "../components/MyButton";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <MyButton
        text="Text Input 1"
        onPress={() => router.push("/text_input")}
      ></MyButton>
      <MyButton
        text="Text Input 2 - auto grab"
        onPress={() => router.push("/text_input_auto")}
      ></MyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    backgroundColor: "black",
  },
});
