import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Typography } from '../Typography'

export default class HeaderTitle extends Component {
  render() {
    return (
      <Typography fontSize={18}>{this.props.title}</Typography>
    )
  }
}