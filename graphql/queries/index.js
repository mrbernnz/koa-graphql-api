import { GraphQLObjectiveType } from 'graphql';

import queryAllGadgets from 'queryAllGadgets';
import queryGadgetById from 'queryGadgetById';

export default new GraphQLObjectiveType({
  name: 'RootQueryType',
  fields: {
    queryAllGadgets,
    queryGadgetById
  }
});
