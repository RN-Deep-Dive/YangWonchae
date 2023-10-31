import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class HeaderGroup extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {this.props.children}
      </View>
    )
  }
}