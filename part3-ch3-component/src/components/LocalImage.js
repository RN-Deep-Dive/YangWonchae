import { Image as RNImage } from 'react-native'
import React from 'react'

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