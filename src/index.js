const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

const resolvers = require('./resolvers/index');


const MONGO_DB_URL = 'mongodb://localhost:27017/graphql';
const DEVELOPMENT_SERVER_URL = 'http://localhost:4000';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});


mongoose.connect(MONGO_DB_URL, {useNewUrlParser: true});
server.start(() => {
  console.log(`Server is running on ${DEVELOPMENT_SERVER_URL}`);
});
