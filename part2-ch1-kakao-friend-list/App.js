import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MyProfile from './src/Profile';
import { myProfile, friendProfiles } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';
import { useState } from 'react';
import TabBar from './src/TabBar';

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

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container} edges={['right', 'left']}>
        <Header />
        <Margin height={10} />
        <MyProfile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
        <Margin height={15} />
        <Division />
        <Margin height={12} />
        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
        />
        <FriendList
          data={friendProfiles}
          isOpened={isOpened}
        />
      </SafeAreaView>
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
});
