import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  SectionList,
} from 'react-native';
import Card from '../../components/Card';
import EmptyCard from '../../components/EmptyCard';
import Filter from '../../components/Filter';
import Input from '../../components/Input';
import appTheme from '../../helper/appTheme';
import useHome from './usehome';
import moment from 'moment';
const {colors} = appTheme;

const Home = () => {
  const {
    filterOptions,
    setFilterOptions,
    data,
    date,
    setDate,
    searchQuery,
    setSearchQuery,
    dateFilter,
    setDateFilter,
  } = useHome();
  return (
    <View style={styles.background}>
      <Text style={styles.header}>Transcations</Text>
      <Text style={styles.subHeader}>Your current transcation history</Text>
      <Input
        placeholder="Search Transactions"
        setSearchQuery={setSearchQuery}
        value={searchQuery}
      />
      <Filter
        date={date}
        setDate={setDate}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
      <SafeAreaView style={{flex: 1}}>
        {data.length === 0 && <EmptyCard />}
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Card data={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.title}>{title}</Text>
          )}
        />
        <View></View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.darkBlack,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 14,
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40,
  },
  subHeader: {
    fontSize: 13,
    color: colors.gray,
    textAlign: 'center',
    marginBottom: 20,
  },
});
export default Home;
