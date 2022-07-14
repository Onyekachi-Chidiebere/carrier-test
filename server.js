const {ApolloServer, gql } = require('apollo-server');
const { MockList } = require('@graphql-tools/mock');
const  casual  = require('casual');

const typeDefs = gql`
type Cat {
    id:ID!
    date:String!
    name:String!
    status:Int!
    accountNumber:String!
    type:Int!
}
type Query {
    allCats:[Cat!]!
}`;

const mocks = {
    Query: ()=> ({
        allCats:() => new MockList(20)
    }),
    Cat: ()=>({
        id:()=>casual.uuid,
        date:() =>casual.random_element(["2022/07/11","2022/07/12","2022/07/13","2022/07/14","2022/07/15"]),
        status: () => casual.integer(from = 1, to = 3),
        accountNumber: () => casual.integer(from = 1000000000, to = 9999999999),
        name: () => casual.full_name,
        type: () => casual.integer(from = 0, to = 1),
    }),
}



const server = new ApolloServer({
    typeDefs,mocks

});

server.listen().then(({url}) => console.log(`Server is running on ${url}`))