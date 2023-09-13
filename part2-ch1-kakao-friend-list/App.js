import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { myProfile, friendProfiles } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';
import { useState } from 'react';
import TabBar from './src/TabBar';
import Profile from './src/Profile';

const statusBarHeight = getStatusBarHeight(true)
const bottomSpace = getBottomSpace()

// console.log(Platform.OS, 'statusBarHeight', statusBarHeight)
// console.log(Platform.OS, 'bottomSpace', bottomSpace)

export default function App() {
  const [isOpened, setIsOpened] = useState(true)
  const [selectedTabIdx, setSelectedTabIdx] = useState(0)

  const onPressArrow = () => {
    setIsOpened(!isOpened)
  }

  const ItemSeparatorComponent = () => <Margin height={13} />
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  )

  const ListHeaderComponent = () => (
    <View style={{backgroundColor: 'white'}}>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  )

  const ListFooterComponent = () => <Margin height={10} />

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container} edges={['right', 'left']}>
        <FlatList
          data={isOpened ? friendProfiles : []}
          contentContainerStyle={{paddingHorizontal: 10}}
          keyExtractor={({ item, index }) => index}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          showsVerticalScrollIndicator={false}
        />
        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
});
