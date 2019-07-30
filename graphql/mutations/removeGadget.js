import { GraphQLID } from 'graphql';
import debug from 'debug';

import gadgetGraphQLType from '../types/gadgetType';
import Gadget from '../../models/gadget';

const mutationDebug = debug('graphql:mutation:remove');

export default {
  type: gadgetGraphQLType,
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent, args) {
    const { id } = args;
    return Gadget.findOneAndDelete(id)
      .exec()
      .then(gadget => gadget.remove())
      .then(deletedGadget => deletedGadget)
      .catch(err => mutationDebug(err));
  }
};
