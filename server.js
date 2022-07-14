const  casual  = require('casual');
const express = require('express');
const port = process.env.PORT || 5000;
const {graphqlHTTP} = require('express-graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql');
const {addMockFunctionToSchema} = require('@graphql-tools/utils');

const app = express();

//TransactionType
const TranscationType = new GraphQLObjectType({
  name: 'Transactions',
  fields: () => ({
    id: {type: GraphQLID},
    date: {type: GraphQLString},
    name: {type: GraphQLString},
    status: {type: GraphQLString},
    accountNumber: {type: GraphQLString},
    type: {type: GraphQLString},
  }),
});
const mocks = {
  Query: () => ({
    transactions: () => new MockList(20),
  }),
  Transactions: () => ({
    id: () => casual.uuid,
    date: () =>
      casual.random_element([
        '2022/07/11',
        '2022/07/12',
        '2022/07/13',
        '2022/07/14',
        '2022/07/15',
      ]),
    status: () => casual.integer((from = 1), (to = 3)),
    accountNumber: () => casual.integer((from = 1000000000), (to = 9999999999)),
    name: () => casual.full_name,
    type: () => casual.integer((from = 0), (to = 1)),
  }),
};
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    transactions: {
      type: new GraphQLList(TranscationType),

      resolve(parent, args) {
        let transactions = [];
        for (let i = 0; i < 20; i++) {
          transactions.push({
            id: () => casual.uuid,
            date: casual.random_element([
              '2022/07/11',
              '2022/07/12',
              '2022/07/13',
              '2022/07/14',
              '2022/07/15',
            ]),
            status: casual.integer((from = 1), (to = 3)),
            accountNumber: casual.integer(
              (from = 1000000000),
              (to = 9999999999),
            ),
            name: casual.full_name,
            type: casual.integer((from = 0), (to = 1)),
          });
        }
        return transactions;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    mocks,
    graphiql: true,
  }),
);

app.listen(port, console.log('app running on port ' + port));
