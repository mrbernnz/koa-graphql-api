import mongoose from 'mongoose';
import debug from 'debug';
const database = debug('database');

const initDB = () => {
  const mongoDB = `mongodb://127.0.0.1/learning_koa`;
  mongoose.connect(mongoDB, {useNewUrlParser: true});
  const db = mongoose.connnection;
  db.on('err', database('MongoDB connection error:'));
};

export default initDB;
