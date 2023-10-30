import { Dimensions, View } from 'react-native'
import React, { Component } from 'react'
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import Spacer from './Spacer.js';
import Button from './Button.js';
import Icon from './Icons.js';
import { Typography } from './Typography';

const {width} = Dimensions.get('window');

export default class HeaderWithoutCompound extends Component {
  render() {
    return (
      <SafeAreaInsetsContext.Consumer>
        {insets => {
          <View style={{paddingTop: insets.top}}>
          <View style={{
            width: width,
            height: 56,
            flexDirection: 'row',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            alignItems: 'center'
          }}>
            <Spacer horizontal={true} space={12} />
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center', height: 32}}>
              {this.props.leftIcon && (
                <Button onPress={this.props.leftIcon.onPress}>
                  <Icon name={this.props.leftIcon.iconName} size={28} />
                </Button>
              )}
              <Typography fontSize={18}>{this.props.title}</Typography>
              </View>
              {this.props.rightIcon && (
                <Button onPress={this.props.rightIcon.onPress}>
                  <Icon name={this.props.rightIcon.iconName} size={28} />
                </Button>
              )}
            </View>
            <Spacer horizontal={true} space={12} />
          </View>
          </View>
        }}
      </SafeAreaInsetsContext.Consumer>
    )
  }
}