import { GraphQLID, GraphQLInt, GraphQLString } from 'graphql';
import debug from 'debug';

import gadgetGraphQLType from '../types/gadgetType';
import Gadget from '../../models/gadget';

const mutationDebug = debug('graphql:mutation:update');

export default {
  type: gadgetGraphQLType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    price: { type: GraphQLInt }
  },
  resolve(parent, args) {
    return Gadget.findById(args.id)
      .then(gadget => {
        gadget.name = args.name;
        (gadget.release_date = args.release_date),
          (gadget.by_company = args.by_company),
          (gadget.price = args.price);

        return gadget.save();
      })
      .then(updatedGadget => updatedGadget)
      .catch(err => mutationDebug(err));
  }
};
