import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'

/*
export default class Icon extends Component {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={this.props.size}
        color={this.props.color} />
    )
  }
}
*/

export default function Icon(props) {
  return (
    <Ionicons
      name={props.name}
      size={props.size}
      color={props.color} />
  )
}