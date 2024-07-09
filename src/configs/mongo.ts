import { connect } from 'mongoose';

async function dbconnection() {
  await connect('mongodb://root:example@127.0.0.1:27017');
}

dbconnection()
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));
