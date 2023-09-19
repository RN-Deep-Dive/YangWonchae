import dayjs from "dayjs";
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'

export const statusBarHeight = getStatusBarHeight(true);
export const bottomSpace = getBottomSpace();
export const ITEM_WIDTH = 220;

export const fillEmptyColumns = (columns, start, end) => {
  const filledColumns = columns.slice(0);

  // 1. 첫날 이전 공백 채우기
  const startDay = dayjs(start).get("day"); //요일 가져오기
  for (let i = 1; i <= startDay; i += 1) {
    const date = dayjs(start).subtract(i, "day");
    filledColumns.unshift(date); //리스트 맨 앞에 원소를 넣음
  }
  // 2. 마지막날 이후 공백 채우기
  const endDay = dayjs(end).get("day");
  /**
    0 -> 6
    1 -> 5
    2 -> 4
    endDay + ? = 6
   */
  for (let i = 1; i <= 6 - endDay; i += 1) {
    const date = dayjs(end).add(i, "day");
    filledColumns.push(date); //리스트 맨 마지막에 원소를 넣음
  }

  return filledColumns;
};
export const getCalendarColumns = (now) => {
  const start = dayjs(now).startOf("month"); //9월1일
  const end = dayjs(now).endOf("month"); //9월30일
  const endDate = dayjs(end).get("date"); //30(마지막 날짜 == 날짜의 개수)

  const columns = []; //30일을 담음
  for (let i = 0; i < endDate; i += 1) {
    const date = dayjs(start).add(i, "day");
    columns.push(date);
  }
  // console.log('columns', columns);

  const filledColumns = fillEmptyColumns(columns, start, end);
  return filledColumns;
};

/**
 * 
 * @param day 0 ~ 6
 * @return 일 ~ 월
 */
const dayTexts = ['일', '월', '화', '수', '목', '금', '토'];
export const getDayText = (day) => {
  return dayTexts[day];
  /*
  switch(day) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
  */
}

export const getDayColor = (day) => {
  return day === 0 ? '#e67639' : day === 6 ? '#5872d1' : '#2b2b2b';
  // switch문 사용 가능
}