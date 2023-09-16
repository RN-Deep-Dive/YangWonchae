import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
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

  const renderItem = ({item}) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  )
  
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
        <FlatList
          data={isOpened ? friendProfiles : []}
          contentContainerStyle={{marginHorizontal: 10, backgroundColor: 'yellow'}}
          keyExtractor={( item, index ) => item.id}
          ItemSeparatorComponent={<Margin height={13} />}
          renderItem={renderItem}
          ListFooterComponent={<Margin height={5} />}
          showsVerticalScrollIndicator={false}
        />
        {/* <ScrollView style={{height: 500}}>
          {friendProfiles.map((item) => renderItem(item))}
        </ScrollView> */}
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