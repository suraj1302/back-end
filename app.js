const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./user-router');
const mongoose = require('mongoose');

//connection
//sample
//8LjYDTAGpY6OuyfH
const USERNAME = "sample";
const PASSWORD = "8LjYDTAGpY6OuyfH";
const DB_NAME="sample_db"
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@samplecluster0.6xvtnos.mongodb.net/${DB_NAME}`;
mongoose.connect(URL);
mongoose.connection.on('connected', () => {
    console.log("mongoDB is connected")
});


const app = express(); 

//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());


//routes
app.use('/song',userRouter);




module.exports = app;