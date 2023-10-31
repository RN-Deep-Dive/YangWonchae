import { View, Text } from 'react-native'
import React, { useCallback, useState } from 'react'

import Header from '../components/Header/Header';
import Spacer from '../components/Spacer';
import Button from '../components/Button';
import { Typography } from '../components/Typography';
import LottoNumberView from '../components/LottoNumberView';
import { getRandomSixNumber } from '../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { createNewNumbers } from '../actions/lottoNumbers';

export default function HomeScreen(props) {
  // const [numbers, setNumbers] = useState([]);
  const numbers = useSelector((state) => state.numbers.currentNumber); // redux
  const dispatch = useDispatch(); // redux
  const onPressGetNumber = useCallback(() => {
    // const randomNumbers = getRandomSixNumber();
    // setNumbers(randomNumbers);
    dispatch(createNewNumbers()); // redux
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HOME" />
      </Header>

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 12,
      }}>
        <View style={{
          height: 250,
          flexDirection: 'column',
          paddingHorizontal: 24,
          backgroundColor: 'white',
          borderColor: 'gray'
        }}>
          {numbers.length === 6 && (
            <LottoNumberView numbers={numbers} />
          )}
        </View>
        <Spacer space={20} />

        <Button onPress={onPressGetNumber}>
          <View style={{
            backgroundColor: 'black',
            paddingVertical: 24,
            alignItems: 'center',
          }}>
            <Typography color='white' fontSize={18}>로또 번호 추출하기</Typography>
          </View>
        </Button>
      </View>
    </View>
  )
}