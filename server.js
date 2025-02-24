const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
const port = 6000;


//connect mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=> {console.log("MONGO DB CONNECTED")})
.catch((err)=>{console.error("ERROR CONNECTING:", err)})


//schema

const bookSchema = new mongoose.Schema({
    title : {type:String, required:true},
    author : {type:String, required:true},
    genre : {type:String, required:true},
    publishedYear : {type:Number},
    availableCopies : {type:Number, required:true},
    borrowedBy : {type:mongoose.Types.ObjectId, ref: 'user'},
})

const book = mongoose.model('book', bookSchema);

// app.get('/', async (req, res) => {

// })

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})