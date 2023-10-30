import { Pressable } from 'react-native'
import React from 'react'

export default function Button(props) {
  return (
    <Pressable
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      onPress={props.onPress}
      hitSlop={props.hitSlop ?? {left: 0, right: 0, top: 0, bottom: 0}}
      style={{
        paddingHorizontal: props.paddingHorizontal,
        paddingVertical: props.paddingVertical
      }}>
      {props.children}
    </Pressable>
  )
}