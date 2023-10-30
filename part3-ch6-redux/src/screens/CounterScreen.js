import { View, Text } from 'react-native'
import React, { useCallback, useContext, useState } from 'react'
// import {useDispatch, useSelector} from 'react-redux';
import { Header } from '../components/Header/Header'
import { Spacer } from '../components/Spacer';
import { Typography } from '../components/Typography';
import { Button } from '../components/Button';
import { Icon } from '../components/Icons';
import { addCount, deleteCount } from '../actions/counter';
import { CounterContext } from '../../App';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState } from '../states/counter';
import { counterMultiplier } from '../selectors/counterMultiplier';

const CounterTitle = () => {
  // const [count] = useContext(CounterContext);
  const count = useRecoilValue(counterState);
  return (
    <Typography fontSize={20}>
      {/* {`${value}개`} */}
      {`${count}개`}
    </Typography>
  )
}

const CountMultiplier = () => {
  const result = useRecoilValue(counterMultiplier);

  return (
    <Typography fontSize={20}>
      {`* 5 = ${result}개`}
    </Typography>
  )
}

export const CounterScreen = (props) => {
  // const [value, setValue] = useState(0);
  // const dispatch = useDispatch();
  // const value = useSelector((state) => state.count.count);
  // const [count, setCount] = useContext(CounterContext);

  const [count, setCount] = useRecoilState(counterState);

  const onPressMinus = useCallback(() => {
    // setValue((value) => value-1);
    // dispatch(deleteCount());
    setCount((value) => value - 1);
  }, [])

  const onPressPlus = useCallback(() => {
    // setValue((value) => value+1);
    // dispatch(addCount());
    setCount((value) => value + 1);
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title='COUNTER'></Header.Title>
      </Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Button paddingHorizontal={4} paddingVertical={4} onPress={onPressMinus}>
            <Icon name='remove' size={20} color='black'></Icon>
          </Button>

          <Spacer horizontal space={20} />

          <CounterTitle />
          {/* <CounterTitle count={value} /> */}

          <Spacer horizontal space={20} />

          <Button paddingHorizontal={4} paddingVertical={4} onPress={onPressPlus}>
            <Icon name='add' size={20} color='black'></Icon>
          </Button>
        </View>
        <CountMultiplier />
      </View>
    </View>
  )
}