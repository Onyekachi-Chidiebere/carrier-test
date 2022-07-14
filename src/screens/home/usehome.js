import {useEffect, useState} from 'react';
import transactions from '../../helper/transactions';
import moment from 'moment';
import { gql, useQuery } from '@apollo/client';

const GET_TRANSACTIONS = gql`
query getTransactions {
    allCats {
        date
        name
        status
        accountNumber
        type
      }
}
`
const useHome = () => {
  //initialize data;
  const [data, setdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState(new Date());
  const [filterOptions, setFilterOptions] = useState(false);
  const [dateFilter, setDateFilter] = useState(false);

  const {loading,error,data:rawData,} = useQuery(GET_TRANSACTIONS);
  console.log({loading, error:error.message, rawData})

  useEffect(() => {
    //restructure data into sections;
    let structuredObject = {};
    for (let i = 0; i < transactions.length; i++) {
      if (filterOptions) {
        if (transactions[i].status !== filterOptions) continue;
      }
      if (
        dateFilter &&
        moment(date).format('LL') !== moment(transactions[i].date).format('LL')
      ) {
        console.log({
          date: moment(date).format('LL'),
          data: moment(transactions[i].date).format('LL'),
        });
        continue;
      }

      for (let j = 0; j < Object.values(transactions[i]).length; j++) {
        if (
          Object.values(transactions[i])
            [j].toString()
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        ) {
          if (structuredObject[moment(transactions[i].date).format('LL')]) {
            structuredObject[moment(transactions[i].date).format('LL')].push(
              transactions[i],
            );
            break;
          } else {
            structuredObject[moment(transactions[i].date).format('LL')] = [
              transactions[i],
            ];
            break;
          }
        }
      }
    }

    let structuredList = [];

    for (let i = 0; i < Object.values(structuredObject).length; i++) {
      structuredList.push({
        title: moment(Object.values(structuredObject)[i][0].date).format('LL'),
        data: Object.values(structuredObject)[i],
      });
    }

    setdata(structuredList);
  }, [searchQuery, filterOptions, date, dateFilter]);

  return {
    data,
    searchQuery,
    setSearchQuery,
    filterOptions,
    setFilterOptions,
    date,
    setDate,
    dateFilter,
    setDateFilter,
  };
};

export default useHome;
