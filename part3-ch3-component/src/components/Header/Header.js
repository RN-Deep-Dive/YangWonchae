import { Dimensions, Text, View } from 'react-native'
import React, { Component } from 'react'
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import Spacer from '../Spacer';
import HeaderTitle from './HeaderTitle';
import HeaderButton from './HeaderButton';
import HeaderGroup from './HeaderGroup';

const {width} = Dimensions.get('window');

export default class Header extends Component {
  render() {
    return (
      <SafeAreaInsetsContext.Consumer>
        {insets => (
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
              <View style={{
                flex: 1, 
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
                {this.props.children}
              </View>
              <Spacer horizontal={true} space={12} />
            </View>
          </View>
        )}
      </SafeAreaInsetsContext.Consumer>
    )
  }
}

Header.Title = HeaderTitle;
Header.Icon = HeaderButton;
Header.Group = HeaderGroup;