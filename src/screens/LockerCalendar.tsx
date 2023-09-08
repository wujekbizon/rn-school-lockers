import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Agenda} from 'react-native-calendars';
import {INDUSTRIAL_COLORS} from '../constants/style';
const LockerCalendar = () => {
  const [selected, setSelected] = useState('');
  return (
    <Agenda
      calendarHeight={220}
      items={{
        '2023-09-22': [
          {name: 'item 1 - any js object,', height: 80, day: '2023-09-22'},
        ],
        '2023-09-23': [
          {name: 'item 2 - any js object', height: 80, day: '2023-09-23'},
          {name: 'item 2 - any js object', height: 80, day: '2023-09-23'},
          {name: 'item 2 - any js object', height: 80, day: '2023-09-23'},
          {name: 'item 2 - any js object', height: 80, day: '2023-09-23'},
          {name: 'item 2 - any js object', height: 80, day: '2023-09-23'},
          {name: 'item 2 - any js object', height: 80, day: '2023-09-23'},
          {name: 'item 2 - any js object', height: 80, day: '2023-09-23'},
          {name: 'item 2 - any js object', height: 80, day: '2023-09-23'},
        ],
        '2023-09-24': [],
      }}
      pastScrollRange={10}
      futureScrollRange={10}
      theme={{
        calendarBackground: INDUSTRIAL_COLORS.secondary200,
        agendaDayTextColor: 'black',
        agendaDayNumColor: 'blue',
        agendaTodayColor: 'red',
        agendaKnobColor: 'red',
      }}
      renderItem={(item, firstItemInDay) => {
        const itemHeight = {
          height: item.height,
        };
        return (
          <View style={[styles.itemContainer, itemHeight]}>
            <Text>{item.name}</Text>
          </View>
        );
      }}
      renderEmptyDate={() => {
        return (
          <View>
            <Text>Brak zajęć</Text>
          </View>
        );
      }}
      style={styles.agendaContainer}
    />
  );
};
export default LockerCalendar;
const styles = StyleSheet.create({
  agendaContainer: {},
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
