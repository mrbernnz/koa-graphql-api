import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} from 'graphql';
import moment from 'moment';

const GadgetType = new GraphQLObjectType({
  name: 'Gadget',
  description: 'A gadget',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    release_date: {
      type: GraphQLString,
      resolve(gadgets) {
        return moment(gadgets.release_date).format('MMMM Do YYYY');
      }
    },
    price: { type: GraphQLInt }
  })
});

export default GadgetType;
