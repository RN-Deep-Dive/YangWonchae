import { Alert, FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { runPracticeDayjs } from './src/practice-dayjs';
import dayjs from 'dayjs';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from '@expo/vector-icons';

import { ITEM_WIDTH, bottomSpace, getCalendarColumns, statusBarHeight } from './src/util';
import { useCalendar } from './src/hook/use-calendar';
import { useTotoList } from './src/hook/use-todo-list';
import Calendar from './src/Calendar';
import Margin from './src/Margin';
import AddTodoInput from './src/AddTodoInput';
import { useRef } from 'react';

export default function App() {
  const now = dayjs();
  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1Month
  } = useCalendar(now);

  const {
    todoList,
    filteredTodoList,
    addTodo,
    removeTodo,
    toggleTodo,
    input,
    setInput,
    resetInput
  } = useTotoList(selectedDate);

  const columns = getCalendarColumns(selectedDate);

  const onPressLeftArrow = subtract1Month;
  const onPressHeaderDate = showDatePicker;
  const onPressRightArrow = add1Month;
  const onPressDate = setSelectedDate;

  const ListHeaderComponent = () => (
    <View>
    <Calendar
      columns={columns}
      selectedDate={selectedDate}
      onPressLeftArrow={onPressLeftArrow}
      onPressHeaderDate={onPressHeaderDate}
      onPressRightArrow={onPressRightArrow}
      onPressDate={onPressDate}
      todoList={todoList}
    />
    <Margin height={15} />
    <View
      style={{
        width: 4,
        height: 4,
        borderRadius: 4 / 2,
        backgroundColor: "#a3a3a3",
        alignSelf: "center"
      }}
    />
    <Margin height={10} />
    </View>
  )

  const renderItem = ({ item: todo }) => {
    const isSuccess = todo.isSuccess;
    const onPress = () => toggleTodo(todo.id);
    const onLongPress = () => {
      Alert.alert('삭제하시겠어요?', '', [
        {
          style: 'cancel',
          text: '아니오'
        },
        {
          text: '네',
          onPress: () => removeTodo(todo.id)
        }
      ]);
    }
    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={{
          flexDirection: 'row',
          width: ITEM_WIDTH,
          alignSelf: 'center',
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomWidth: 0.2,
          borderColor: "#a6a6a6"
          // backgroundColor: todo.id % 2 ? "pink" : "lightblue",
        }}
      >
      <Text
        style={{
          fontSize: 14,
          color: "#595959",
          flex: 1
        }}
      >
        {todo.content}
      </Text>
      <Ionicons name="ios-checkmark" size={17} color={isSuccess ? "#595959" : "#bfbfbf"} />
      </Pressable>
    )
  }

  const scrollToEnd = () => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd();
    }, 300);
  }
  const onPressAdd = () => {
    addTodo();
    resetInput();
    scrollToEnd();
  }
  const onSubmitEditing = () => {
    addTodo();
    resetInput();
    scrollToEnd();
  }
  const flatListRef = useRef();
  const onFocus = () => {
    scrollToEnd();
  }

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Image
        source={{
          // 출처: https://kr.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1189772.htm
          uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute'
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
      >
      <FlatList
        ref={flatListRef}
        data={filteredTodoList}
        contentContainerStyle={{ paddingTop: statusBarHeight + 30 }}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderItem}
      />
      <AddTodoInput
        value={input}
        onChangeText={setInput}
        placeholder={`${dayjs(selectedDate).format('MM.D')}에 추가할 투두`}
        onPressAdd={onPressAdd}
        onSubmitEditing={onSubmitEditing}
        onFocus={onFocus}
      />
      </KeyboardAvoidingView>
      <Margin height={bottomSpace} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
