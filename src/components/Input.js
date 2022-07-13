import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import appTheme from '../helper/appTheme';
const {colors} = appTheme;

const Input = ({placeholder, value, label, setSearchQuery}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={[
        styles.background,
        {
          borderBottomColor: focused ? colors.lightGreen : colors.darkBlack,
        },
      ]}>
      {value.trim() !== '' && <Text style={styles.label}>{placeholder}</Text>}
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[styles.input, {marginVertical: value.trim() == '' ? 7 : 0}]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        value={value}
        onChangeText={value => setSearchQuery(value)}
      />
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  background: {
    width: '95%',
    alignSelf: 'center',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    justifyContent: 'space-between',
    paddingTop: 4,
    backgroundColor: colors.lightBlack,
    borderBottomWidth: 1,
  },
  input: {
    color: colors.white,
    paddingHorizontal: 20,
    height: 45,
  },
  label: {
    paddingHorizontal: 20,
    color: colors.gray,
    fontSize: 10,
    fontWeight: '400',
  },
});
