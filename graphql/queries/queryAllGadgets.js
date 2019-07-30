import { GraphQLList } from 'graphql';

import gadgetGraphQLType from '../types/gadgetType';
import Gadget from '../../models/gadget';

export default {
  type: new GraphQLList(gadgetGraphQLType),
  description: 'All gadgets',
  resolve() {
    return Gadget.find({});
  }
};
