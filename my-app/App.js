import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Switch } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Image source={require('./dog.jpg')} style={styles.local_image} />
      <Image source={{uri: "https://picsum.photos/400/300"}} style={styles.local_image} />

      <TextInput value="" placeholder='이름을 입력해 주세요' />

      <Button title="안녕" onPress={() => {console.log('hello')}}/>

      <Switch value={true} />
      <Switch value={false} />

      <ScrollView>
        <Image source={{uri: "https://picsum.photos/400/300"}} style={styles.local_image} />
        <Image source={{uri: "https://picsum.photos/400/300"}} style={styles.local_image} />
        <Image source={{uri: "https://picsum.photos/400/300"}} style={styles.local_image} />
        <Image source={{uri: "https://picsum.photos/400/300"}} style={styles.local_image} />
        <Image source={{uri: "https://picsum.photos/400/300"}} style={styles.local_image} />
        <Image source={{uri: "https://picsum.photos/400/300"}} style={styles.local_image} />
        <Image source={{uri: "https://picsum.photos/400/300"}} style={styles.local_image} />
        <Image source={{uri: "https://picsum.photos/400/300"}} style={styles.local_image} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  local_image: {
    width: 100,
    height: 100
  }
});
