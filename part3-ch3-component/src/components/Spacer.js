import { View } from 'react-native'
import React from 'react'

export default class Spacer extends React.Component {
  render() {
    if(this.props.horizontal) {
      return (
        <View style={{marginLeft: this.props.space}} />
      )
    }
    return (
      <View style={{marginTop: this.props.space}} />
    )
  }
}