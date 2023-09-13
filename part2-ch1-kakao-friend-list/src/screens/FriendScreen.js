import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../Header'
import Margin from '../Margin'
import Profile from '../Profile'
import Division from '../Division'
import FriendSection from '../FriendSection'
import FriendList from '../FriendList'
import { friendProfiles, myProfile } from '../data'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaView } from 'react-native-safe-area-context';

const statusBarHeight = getStatusBarHeight(true)
const bottomSpace = getBottomSpace()

export default function FriendScreen () {
  const [isOpened, setIsOpened] = useState(true)

  const onPressArrow = () => {
    setIsOpened(!isOpened)
  }

  return (
      <SafeAreaView style={styles.container} edges={['right', 'left']}>
        <Header />
        <Margin height={10} />
        <Profile
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