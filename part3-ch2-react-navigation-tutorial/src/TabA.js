import { Text, View } from 'react-native'
import React from 'react'

export default class TabA extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>이것은 TabA 입니다.</Text>
      </View>
    )
  }
}