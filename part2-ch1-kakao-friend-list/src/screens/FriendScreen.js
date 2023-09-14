import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Margin from '../Margin'
import Profile from '../Profile'
import Division from '../Division'
import FriendSection from '../FriendSection'
import { friendProfiles, myProfile } from '../data'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

const statusBarHeight = getStatusBarHeight(true)

export default function FriendScreen({isOpened, setIsOpened}) {
  const onPressArrow = () => {
    setIsOpened(!isOpened)
  }
  
  return (
      <View>
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
        <Margin height={5} />
      </View>
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