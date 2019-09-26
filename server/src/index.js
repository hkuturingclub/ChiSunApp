import 'babel-polyfill';
import { ApolloServer } from 'apollo-server';
import globalResolvers from './graphql/GlobalResolvers';
import globalQuery from './graphql/TypeDefinitions';
import { FirebaseAuth, FirebaseDB } from './config/firebase';
import { FirebaseAdmin } from './config/firebaseAdmin';

(async () => {
  const server = new ApolloServer({
    resolvers: globalResolvers,
    typeDefs: globalQuery,
    introspection: true,
    playground: true,
    tracing: true,
    context: async ({ req }) => {
      const token = req.headers.authorization || null;
      let user;
      if (token) {
        user = await FirebaseAdmin.auth().verifyIdToken(token);
      }
      return {
        firebaseAuth: FirebaseAuth,
        firebaseDB: FirebaseDB,
        user,
      };
    },
  });
  const graphqlPort = process.env.PORT || 4000;
  server.setGraphQLPath('graphql');
  server.listen(graphqlPort).then(({ url }) => {
    console.log(`🚀 Apollo server ready on ${url}`);
    console.log('⚡️ Playground exposed on /graphql');
  });
})();
