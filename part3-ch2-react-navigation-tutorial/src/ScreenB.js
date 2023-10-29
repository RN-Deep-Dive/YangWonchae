import { Text, View, Button } from 'react-native'
import React from 'react'

export default class ScreenB extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>이것은 ScreenB 라고 합니다. 받은 값: {this.props.route.params.value}</Text>

        <Button
          title='뒤로가기'
          onPress={() => {
            console.log('뒤로가기가 클릭됨')
          }} />
      </View>
    )
  }
}