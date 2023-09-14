import { View, ScrollView } from 'react-native'
import React from 'react'
import Profile from './Profile'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import Margin from './Margin'

const bottomSpace = getBottomSpace()

export default (props) => {
  /* Case 1
return props.isOpened ? (
  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: bottomSpace}}>
      {props.data.map((item, index) => (
          <View>
              <Profile
                  key={index}
                  uri={item.uri}
                  name={item.name}
                  introduction={item.introduction} />
              <Margin height={13} />
          </View>
      ))}
  </ScrollView>
) : null;
*/
  /* Case 2
     if (!props.isOpened) return null
     return (
         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
             {props.data.map((item, index) => (
                 <View>
                     <Profile
                         key={index}
                         uri={item.uri}
                         name={item.name}
                         introduction={item.introduction} />
                     <Margin height={13} />
                 </View>
             ))}
         </ScrollView>
     )
     */
  // Case 3
  return props.isOpened && (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.data.map((item, index) => (
        <View>
          <Profile
            key={index}
            uri={item.uri}
            name={item.name}
            introduction={item.introduction} />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  )
}