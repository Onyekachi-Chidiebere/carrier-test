import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import pending from '../images/pending.svg';
import sent from '../images/sent.svg';
import received from '../images/received.svg';
import appTheme from '../helper/appTheme';
import moment from 'moment';

const {colors} = appTheme;

const Card = ({data}) => {
  const status = {1: 'Pending', 2: 'Sent', 3: 'Received'};
  const icon = {1: pending, 2: sent, 3: received};
  const type = {0: 'From', 1: 'To'};
  return (
    <View style={styles.card}>
      <SvgXml xml={icon[data.status]} />
      <View style={styles.statusHolder}>
        <Text style={styles.statusText}>{status[data.status]}</Text>
        <Text style={styles.statusDescription}>
          {type[data.type]}: {data.name} - {data.accountNumber}
        </Text>
      </View>
      <View>
        <Text
          style={
            data.status == 1
              ? styles.pending
              : data.status == 2
              ? styles.sent
              : styles.received
          }>
          {data.amount}NGN
        </Text>
        <Text style={styles.amountDate}>{moment(data.date).format('LL')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  statusHolder: {
    flex: 1,
    marginLeft: 10,
    paddingRight: 5,
  },
  statusText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '400',
  },
  statusDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray,
  },
  amountDate: {
    color: colors.gray,
    fontWeight: '400',
    fontSize: 10,
  },
  pending: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
  },
  sent: {
    color: colors.red,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
  },
  received: {
    color: colors.darkGreen,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
  },
});

export default Card;
