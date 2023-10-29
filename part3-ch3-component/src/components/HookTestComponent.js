import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { Typography } from './Typography';

export default function HookTestComponent(props) {
  const text = useMemo(() => {
    return props.a + props.b;
  }, [props.a, props.b])

  return (
    <View>
      <Typography>
        결과값 : {text}
      </Typography>
    </View>
  )
}