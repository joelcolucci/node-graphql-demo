const { GraphQLServer } = require('graphql-yoga');

// In-memory datastore
let organizations = [
  {
    name: 'New York City',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const resolvers = {
  Query: {
    organizations: () => organizations
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});


server.start(() => {
  console.log('Server is running on http://localhost:4000');
});
