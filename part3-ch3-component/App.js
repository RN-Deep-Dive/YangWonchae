import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderWithoutCompound from './src/components/HeaderWithoutCompound';
import Header from './src/components/Header/Header';
import HookTestComponent from './src/components/HookTestComponent';
import { useCallback, useState } from 'react';
import Button from './src/components/Button';
import { Typography } from './src/components/Typography';

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const doSum = useCallback(() => {
    return a+b;
  }, [a, b])

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1}}>
        {/* <HeaderWithoutCompound title='HEADER' /> */}
        <Header>
          <Header.Group>
            <Header.Title title='HEADER'></Header.Title>
          </Header.Group>
        </Header>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <HookTestComponent a={a} b={b} />
          <Typography>현재 callback으로 계산된 값 : {doSum()}</Typography>
          <Button onPress={() => {
            console.log('press');
            setA(a + 1);
          }}>
            <Typography>A 더하기</Typography>
          </Button>
        </View>
      </View>
    </SafeAreaProvider>
  )
}