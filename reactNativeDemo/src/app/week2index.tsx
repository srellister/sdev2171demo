import { Text, View, StyleSheet } from "react-native";
import { Redirect } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Redirect href="./screen01" />
      <Text>I didn't redirect</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
});
