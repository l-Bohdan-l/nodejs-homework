const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = 'mongodb+srv://user1:user1@cluster0.w6qzd.mongodb.net/db-contacts?retryWrites=true&w=majority';

const db = MongoClient.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
  });

process.on('SIGINT', async () => {
  const client = await db
  client.close()
  console.log("Disconmected from DB")
  process.exit(1)
})

module.exports = db;



