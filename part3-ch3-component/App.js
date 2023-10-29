import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderWithoutCompound from './src/components/HeaderWithoutCompound';
import Header from './src/components/Header/Header';

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Typography color='red' fontSize={20}>
        이것은
        <Typography color='green' fontSize={40}>텍스트</Typography>
        입니다.
      </Typography>
      <Typography color='red' fontSize={20}>
        이것은 텍스트 입니다.
      </Typography>

      <Spacer space={20} />
      <Divider />

      <LocalImage
        localAsset={require('./assets/favicon.png')}
        width={50}
        height={50} />
      <RemoteImage
        url={'https://picsum.photos/id/237/200/300'}
        width={100}
        height={100} />
      <Spacer space={20} />
      <Divider />
      <Icon
        name='home'
        size={20}
        color='red' />
      <View style={{flexDirection: 'row'}}>
        <Badge fontSize={10}>
          <Typography>BADGE</Typography>
        </Badge>
        <Badge fontSize={10}>
          <Icon name='home' size={50} color='black' />
        </Badge>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button
          onPress={() => {
            console.log('PRESSED BUTTON')
          }}
        >
          <Typography>TEXT BUTTON</Typography>
        </Button>
        <Button
          onPress={() => {
            console.log('PRESS ICON BUTTON')
          }}
        >
          <Icon name='home' size={50} color='green' />
        </Button>
      </View>
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
});
*/

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1}}>
        {/* <HeaderWithoutCompound title='HEADER' /> */}
        <Header>
          <Header.Group>
            <Header.Icon iconName='arrow-back'></Header.Icon>
            <Header.Title title='HEADER'></Header.Title>
          </Header.Group>
        </Header>
      </View>
    </SafeAreaProvider>
  )
}