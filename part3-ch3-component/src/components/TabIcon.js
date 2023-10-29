import { View } from 'react-native'
import React from 'react'
import Badge from './Badge'
import Icon from './Icons'

export default class TabIcon extends React.Component {
  render() {
    if (this.props.visibleBadge) {
      return (
        <View>
          <Badge fontSize={10}>
            <Icon name={this.props.iconName} size={20} color='black' />
          </Badge>
        </View>
      )
    }
    return (
      <View>
        <Icon name={this.props.iconName} size={20} color='black' />
      </View>
    )
  }
}