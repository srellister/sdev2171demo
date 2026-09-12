import { Text, View, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import {Stack} from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const imageURL = "https://www.mindyourlogic.com/static/blogs/how-many-animals-in-this-image-1.webp";


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ 
          height: 300,
          width: 300,
          backgroundColor: "blue",
          borderRadius: 150,
          }}/>
        
        {/* <View style={{ height: 100, width:100, backgroundColor: "green",}}/> */}

      </View>
    </SafeAreaView>

    // <View style={styles.container}>
    //   <Stack.Screen options={{headerShown: false}}/>
    //   <ScrollView>
    //   <Text style={styles.title}>How Many Animals Are in This Image?</Text>
    //   {/* <Text style={styles.banner}>HOW MANY ANIMALS IN THIS IMAGE?</Text> */}

    //   <Image 
    //     source={{uri: imageURL}}
    //     style={styles.image}
    //   />
    //   <Text style={styles.label}>Your answer</Text>
    //   <TextInput style={styles.input} placeholder="Enter the number of animals"></TextInput>
    //   </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    padding: 24,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 50,
    // paddingBottom: 20,
    },
  // banner: {
  //   backgroundColor: 'yellow',
  //   fontWeight: 'bold',
  //   // text-transform: 'uppercase',
  // },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingLeft: 8,

  },
  input: {
    width: '80%',
    height: 48,
    fontWeight: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 8,
  },
});
