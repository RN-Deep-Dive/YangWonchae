import { Image as RNImage } from 'react-native'
import React from 'react'

/*
export default class LocalImage extends React.Component {
  render() {
    return (
      <RNImage
        source={this.props.localAsset}
        style={[
          this.props.style,
          {width: this.props.width, height: this.props.height}
        ]} />
    )
  }
}
*/

export default function LocalImage(props) {
  return (
    <RNImage
      source={props.localAsset}
      style={[
        props.style,
        {width: props.width, height: props.height}
      ]} />
  )
}