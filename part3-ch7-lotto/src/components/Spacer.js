import { View } from 'react-native'
import React from 'react'

/*
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
*/

export default function Spacer(props) {
  /*
  return props.horizontal ? (
    <View style={{marginLeft: props.space}} />
  ) : (
    <View style={{marginTop: props.space}} />
  )
  */
  if(props.horizontal) {
    return (
      <View style={{marginLeft: props.space}} />
    )
  }
  return (
    <View style={{marginTop: props.space}} />
  )
}