import {Button, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';

const content = [
  {
    tab: 'Section 1',
    content: "I'm the content of Section 1",
  },
  {
		tab: 'Section 2',
    content: "I'm the content of Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  // 코드 작성
  const [contentNum, setContentNum] = useState(initialTab);
  return {
    contentNum,
    setContentNum,
  }
};

const App = () => {
  const {
    contentNum,
    setContentNum
  } = useTabs(0, content);

  // 코드 작성
  const onPress = (index) => {
    setContentNum(index);
  }
  const testONpress = (dd) => {console.log('heelo')}
  const dd = '';
  return (
    <SafeAreaView>
      {content.map((c, index) => (
        <Button key={index} title={c.tab} onPress={testONpress(dd)}/>
      ))}
      <Text>{content[contentNum].content}</Text>
    </SafeAreaView>
  )
};

export default App;