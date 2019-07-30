import { GraphQLInt, GraphQLString } from 'graphql';

import gadgetGraphQLType from '../types/gadgetType';
import Gadget from '../../models/gadget';

export default {
  type: gadgetGraphQLType,
  args: {
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    price: { type: GraphQLInt }
  },
  resolve(parent, args) {
    const { name, release_date, by_company, price } = args;
    const newGadget = new Gadget({
      name,
      release_date,
      by_company,
      price
    });

    return newGadget.save();
  }
};
