const {Client} = require('xpress-mongo');

const dbConnection = Client('mongodb://localhost:27017');

async function connectToDb() {
  try {
    await dbConnection.connect();
    // Set Database name
    dbConnection.useDb('express-xmongo');
    console.log('Connected to MongoDB: [express-xmongo]');
  } catch (error) {
    throw error;
  }
}

module.exports = {connectToDb, dbConnection};