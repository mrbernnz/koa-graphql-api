import { GraphQLObjectType } from 'graphql';

import queryAllGadgets from './queryAllGadgets';
import queryGadgetById from './queryGadgetById';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryAllGadgets,
    queryGadgetById
  }
});
