import { GraphQLList } from 'graphql';

import gadgetGraphQLType from '../types/gadgetType';
import Gadget from '../../models/gadget';

export default {
  type: new GraphQLList(gadgetGraphQLType),
  args: {},
  resolve() {
    return Gadget.find();
  }
};
