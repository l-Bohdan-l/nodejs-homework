
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Goit37:<password>@cluster0.w6qzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();   
});

const ddd = {       
        ddd
        dsdsd

       as
        as
}