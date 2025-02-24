const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
const port = 6000;


//connect mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    use
})
.then(()=> {console.log("MONGO DB CONNECTED")})
.catch((err)=>{console.error("ERROR CONNECTING:", err)})


//schema

const bookSchema = new mongoose.Schema