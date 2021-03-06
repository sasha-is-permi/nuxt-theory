const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth.routes')
const keys = require('./keys')
const app = express()




  const MongoClient = require('mongodb').MongoClient;
  const uri = keys.MONGO_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {

  const collection = client.db("test").collection("devices");
   console.log('Database connect')
   // perform actions on the collection object



  client.close();
  });

 //   mongoose.connect(keys.MONGO_URI) 
 // .then(() => console.log('MongoDB connected...'))
//.catch(console.log('MongoDB not connected...'))
//app.use(bodyParser.urlencoded({extended: true}))
//app.use(bodyParser.json())

//module.exports = app
 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)

module.exports = app