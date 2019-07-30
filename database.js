import mongoose from 'mongoose';
import debug from 'debug';
const dbDebug = debug('database');
let dbErr = debug('database:error');

const initDB = () => {
  const mongoDB = `mongodb://127.0.0.1/learning_koa`;
  mongoose.connect(mongoDB, {useNewUrlParser: true});
  const db = mongoose.connection.on('open', () => {
    dbDebug('connected to database');
  });
  // db.on('err', dbDebug('MongoDB connection error:'));
  dbErr = console.error.bind(console, 'MongoDB connection error: ');
  db.on('error', dbErr);
};

export default initDB;
