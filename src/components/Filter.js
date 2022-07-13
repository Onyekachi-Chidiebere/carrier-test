import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import appTheme from '../helper/appTheme';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const {colors} = appTheme;
const Filter = ({
  filterOptions,
  setFilterOptions,
  date,
  setDate,
  dateFilter,
  setDateFilter,
}) => {
  const handlePress = filter => {
    if (filterOptions === filter) return setFilterOptions(false);
    setFilterOptions(filter);
  };
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.background}>
      <DatePicker
        modal
        theme="dark"
        mode={'date'}
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDateFilter(true);
          setDate(date);
          console.log({date});
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Pressable onPress={() => handlePress(2)}>
        <Text style={filterOptions == 2 ? styles.activeButton : styles.button}>
          sent
        </Text>
      </Pressable>
      <Pressable onPress={() => handlePress(3)}>
        <Text style={filterOptions == 3 ? styles.activeButton : styles.button}>
          received
        </Text>
      </Pressable>
      <Pressable onPress={() => handlePress(1)}>
        <Text style={filterOptions == 1 ? styles.activeButton : styles.button}>
          pending
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          if (!dateFilter) {
            setOpen(true);
          } else {
            setDateFilter(false);
          }
        }}>
        <Text style={dateFilter ? styles.activeButton : styles.button}>
          {dateFilter ? moment(date).format('LL') : 'Select Date'}
        </Text>
      </Pressable>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignSelf: 'center',
    width: '95%',
  },
  button: {
    color: colors.gray,
    backgroundColor: colors.lightBlack,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  activeButton: {
    color: colors.lightBlack,
    backgroundColor: colors.lightGreen,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
});
