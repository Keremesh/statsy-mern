require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const cors = require('cors')
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, 
  };
  
  app.use(cors(corsOptions));

const MONGO_URI = process.env.MONGO_URI;
// console.log(process.env.MONGO_URI)

mongoose
  .connect(MONGO_URI)
    // ("mongodb+srv://ker:CkqEbw7l8QfxHbId@cluster0.visugbd.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.log(error);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json()); //aka body parser(old)

// app.use("/images", express.static(path.join(__dirname, 'images')));
// //Router - set the endpoints in '' and set the routes - stuffRoutes
// // in stuff.js we are using the same prefix api/stuff therefore we
// //paste it below and remove it from routes file keeping only what comes
// //after the prefix

const userRoutes = require("./routes/user");
app.use("/", userRoutes); 

const playerRoutes = require('./routes/player')
app.use("/player", playerRoutes); 

const statsyRoutes = require('./routes/statsy')
app.use("/statsy", statsyRoutes); 


module.exports = app;

