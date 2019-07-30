import mongoose, {Schema} from 'mongoose';

const GadgetSchema = new Schema({
  name: String,
  release_date: Date,
  by_company: String,
  price: Number
});

export default mongoose.model('Gadget', GadgetSchema);
