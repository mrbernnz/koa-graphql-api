import { GraphQLID } from 'graphql';

import gadgetGraphQLType from '../types/gadgetType';
import Gadget from '../../models/gadget';

export default {
  type: gadgetGraphQLType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Gadget.findById(args.id);
  }
};
