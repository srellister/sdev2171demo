import { useRouter } from "expo-router";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useState } from "react";
import MyButton from "@/components/MyButton";

export default function TextInputAutoScreen() {
  const router = useRouter();
  const [displayText, setDisplayText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Text Input using onChangeText</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={setDisplayText}
        onSubmitEditing={(event) => setDisplayText(event.nativeEvent.text)}
      ></TextInput>
      <Text style={styles.result}>{displayText}</Text>

      <MyButton text="Back" onPress={() => router.back()} />
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
