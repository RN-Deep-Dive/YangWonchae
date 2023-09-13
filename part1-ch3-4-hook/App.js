// 시작 전 App.js 코드
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ClassComponent from './StateWithClassComponent'
import FunctionComponent from './StateWithFunctionalComponent'
import UseEffectClass from './UseEffectWithClassComponent'
import UseEffectFunction from './UseEffectWithFunctionalComponent'
import { useState } from "react";
import { Button } from "react-native";
import CustomHook from "./CustomHook";

export default function App() {
  const [isTrue, setIsTrue] = useState(true)

  return (
    <View style={styles.container}>
      {/* <ClassComponent />
      <FunctionComponent />
      {isTrue ? <UseEffectClass /> : null }
      <Button title="toggle" onPress={() => setIsTrue(!isTrue)} />
      <UseEffectFunction /> */}
      <CustomHook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});