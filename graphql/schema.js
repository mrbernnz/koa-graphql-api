import { GraphQLSchema } from 'graphql';
import RootQueryType from './queries';
import RootMutationsType from './mutations';

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationsType
});
