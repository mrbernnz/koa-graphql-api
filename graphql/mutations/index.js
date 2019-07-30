import { GraphQLObjectiveType } from 'graphql';

import addGadget from './addGadget';
import updateGadget from './updateGadget';
import removeGadget from './removeGadget';

export default new GraphQLObjectiveType({
  name: 'Mutations',
  fields: {
    addGadget,
    updateGadget,
    removeGadget
  }
});
