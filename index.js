const connecttomongo=require('./db');
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require("dotenv").config()

const app=express();

const corsOptions={
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(express.json());  //middleware


const DB=process.env.MONGO_DB_URL;

mongoose.connect(DB).then(()=>{ 
    console.log("Connected");
}).catch((err)=>console.log(err));



//use to use routes

app.use('/api/user',require('./routes/user.js'));
app.use('/api/note',require('./routes/notes.js'));


//const port= process.env.PORT || 5000;

const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Listen");
})

