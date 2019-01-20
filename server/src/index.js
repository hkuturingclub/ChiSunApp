import 'babel-polyfill';
import { ApolloServer } from 'apollo-server';
import globalResolvers from './graphql/GlobalResolvers';
import globalQuery from './graphql/TypeDefinitions';
import { FirebaseDB } from './config/firebase';

(async () => {
  const server = new ApolloServer({
    resolvers: globalResolvers,
    typeDefs: globalQuery,
    introspection: true,
    playground: true,
    tracing: true,
    context: () => ({
      firebase: FirebaseDB,
    }),
  });
  const graphqlPort = process.env.PORT || 4000;
  server.setGraphQLPath('graphql');
  server.listen(graphqlPort).then(({ url }) => {
    console.log(`🚀 Apollo server ready on ${url}`);
    console.log('⚡️ Playground exposed on /graphql');
  });
})();
