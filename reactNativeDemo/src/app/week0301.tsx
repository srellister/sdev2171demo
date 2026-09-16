import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

import { Stack } from "expo-router";
const imageSource = {
  uri: "https://pngimg.com/uploads/batman/batman_PNG75.png",
};
const imageSource2 = {
  uri: "https://pngimg.com/uploads/porsche/porsche_PNG102870.png",
};
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.firstSectionWithImage}>
          <Image
            source={imageSource}
            resizeMode="contain"
            style={styles.batmanImage}
          />
        </View>
        <View style={styles.lightPurpleSection}>
          <Text style={styles.textCornerHeader}>Batman</Text>
          <Text>Dark Knight</Text>
        </View>
        <View style={styles.lightGreenSection}>
          <View>
            <Text style={styles.textCornerHeader}>Text</Text>
            <View style={styles.smallBox}></View>
          </View>
          <View
            style={[
              styles.smallBox,
              styles.threeBoxPadding,
              { backgroundColor: "#FEB6BD" },
            ]}
          ></View>
          <View
            style={[
              styles.smallBox,
              styles.threeBoxPadding,
              { backgroundColor: "#FEEFA8" },
            ]}
          ></View>
          <View
            style={[
              styles.smallBox,
              styles.threeBoxPadding,
              { backgroundColor: "#CF8CFD" },
            ]}
          ></View>
        </View>
        <View style={styles.lightOrangeSection}>
          <Text style={styles.textCornerHeader}>Text</Text>
          <View style={styles.longOrangeSubSection}>
            <Text style={styles.lastSection}>Text</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fDA6AB",
    height: 100,
  },
  firstSectionWithImage: {
    backgroundColor: "lightblue",
    height: 210,
    marginTop: 110,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  batmanImage: {
    width: 200,
    height: 300,
  },
  lightPurpleSection: {
    backgroundColor: "#E3D3EE",
    height: 100,
    marginHorizontal: 10,
    borderRadius: 15,
    paddingLeft: 10,
    paddingTop: 10,
    // marginTop: 10,
  },
  textCornerHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  lightGreenSection: {
    backgroundColor: "#CBF6CD",
    height: 120,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  smallBox: {
    height: 65,
    width: 65,
    borderRadius: 10,
    backgroundColor: "#A5D6FE",
  },
  threeBoxPadding: {
    marginTop: 26,
  },
  lightOrangeSection: {
    backgroundColor: "#FED69A",
    height: 150,
    marginHorizontal: 10,
    borderRadius: 15,
    paddingTop: 10,
    paddingLeft: 10,
  },
  longOrangeSubSection: {
    flex: 1,
    backgroundColor: "#FEE2DD",
    marginRight: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
});
