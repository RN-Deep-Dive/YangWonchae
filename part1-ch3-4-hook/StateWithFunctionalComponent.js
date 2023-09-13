import React, { useState } from "react";
import { View, Text, Button, Switch, TextInput } from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);
  // const result = useState(0)
  // const count = result[0]
  // const count = result[1]

  const arr = [1,2,3]
  // const first = arr[0]
  // const second = arr[1]
  // const third = arr[2]
  const [first, second, third] = arr

  const [isOn, setIsOn] = useState(false)
  const [name, setName] = useState('')

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
      <Text>===================</Text>
      <Switch
        value={isOn}
        onValueChange={v => {
          setIsOn(v)
        }}
      />
      <Text>===================</Text>
      <TextInput value={name} onChangeText={v => setName(v)} style={{backgroundColor: 'grey'}} />
    </View>
  );
};

export default Component;
