import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import empty from '../images/empty.svg';
import appTheme from '../helper/appTheme';

const {colors} = appTheme;
const EmptyCard = () => {
  return (
    <View style={styles.background}>
      <SvgXml xml={empty} />
      <Text style={styles.text}>No Available Record!</Text>
    </View>
  );
};

export default EmptyCard;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: colors.gray, marginVertical: 10},
});
