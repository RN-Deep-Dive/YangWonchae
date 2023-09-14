import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { myProfile, friendProfiles, rooms } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';
import { useState } from 'react';
import TabBar from './src/TabBar';
import Profile from './src/Profile';
import FriendScreen from './src/screens/FriendScreen';
import Room from './src/Room';

const statusBarHeight = getStatusBarHeight(true)
const bottomSpace = getBottomSpace()

// console.log(Platform.OS, 'statusBarHeight', statusBarHeight)
// console.log(Platform.OS, 'bottomSpace', bottomSpace)

export default function App() {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0)
  const [isOpened, setIsOpened] = useState(true)

  const titles = ['친구', '채팅', '이건뭐지?', '더보기']

  const renderItem = ({ item }) => (
    <View>
      {item.introduction &&
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />}
      {item.desc &&
      <Room
        uri={item.uri}
        name={item.name}
        desc={item.desc}
        time={item.time}
      />}
    </View>
  )

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container} edges={['right', 'left']}>
        <Margin height={20} />
        <Header
          title={titles[selectedTabIdx]}
        />
        {selectedTabIdx === 0 && <>
        <FriendScreen
          isOpened={isOpened}
          setIsOpened={setIsOpened}
        />
        <FlatList
          data={isOpened ? friendProfiles : []}
          contentContainerStyle={{marginHorizontal: 10}}
          keyExtractor={({ index }) => index}
          ItemSeparatorComponent={<Margin height={13} />}
          renderItem={renderItem}
          ListFooterComponent={<Margin height={5} />}
          showsVerticalScrollIndicator={false}
        /></>}
        {selectedTabIdx === 1 && <>
        <FlatList
          data={rooms.sort((a, b) => b.time.localeCompare(a.time))}
          contentContainerStyle={{marginHorizontal: 10}}
          keyExtractor={({index}) => index}
          ItemSeparatorComponent={<Margin height={13} />}
          renderItem={renderItem}
          ListFooterComponent={<Margin height={5} />}
          showsVerticalScrollIndicator={false}
        />
        </>}
        {selectedTabIdx === 2 && <>
        <FlatList
          data={[]}
          contentContainerStyle={{marginHorizontal: 10}}
          keyExtractor={({index}) => index}
          ItemSeparatorComponent={<Margin height={13} />}
          renderItem={renderItem}
          ListFooterComponent={<Margin height={5} />}
          showsVerticalScrollIndicator={false}
        />
        </>}
        {selectedTabIdx === 3 && <>
        <FlatList
          data={[]}
          contentContainerStyle={{marginHorizontal: 10}}
          keyExtractor={({index}) => index}
          ItemSeparatorComponent={<Margin height={13} />}
          renderItem={renderRooms}
          ListFooterComponent={<Margin height={5} />}
          showsVerticalScrollIndicator={false}
        />
        </>}
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
