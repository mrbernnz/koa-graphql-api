import mongoose from 'mongoose';
import debug from 'debug';
const dbDebug = debug('database:connection');
let dbErr = debug('database:connection:error');

const initDB = () => {
  const mongoDB = process.env.DATABASE_URL;
  mongoose.connect(mongoDB, {useNewUrlParser: true});
  const db = mongoose.connection.on('open', () => {
    dbDebug('successful');
  });
  dbErr = console.error.bind(console, 'MongoDB connection error: ');
  db.on('error', dbErr);
};

export default initDB;
