require(`dotenv`).config();
const mongoose = require(`mongoose`);

async function MongoDBConnect() {
  try {
    const mongoDBConnectObject = mongoose.connect(process.env.MONGODB);
    if (mongoDBConnectObject) {
      console.log(`Mongo DB connection has been established`);
    } else {
      console.log(`Failed to established MongoDB connection`);
    }
  } catch (err) {
    console.log(`Failed to make Connection : ${err}`);
  }
}

module.exports = { MongoDBConnect };
