const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());


// Password: OnGDhS1DhZhi2tlA
// User: simpleDBUser

const uri = "mongodb+srv://simpleDBUser:OnGDhS1DhZhi2tlA@cluster0.eeupvnz.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    app.post('/users', (req, res) => {
      console.log('data in the server', req.body);
    })



    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Simple Crud Running');
})

app.listen(port, () => {
  console.log(`Simple Crud Running on ${port}`);
})