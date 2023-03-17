
const express = require('express');
const mongoose = require('mongoose');
//const Router = require("./routes")

const app = express();

app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/aliens').then(() => {
console.log("Connected to Database");
}).catch((err) => {
console.log("Not Connected to Database ERROR! ", err);
});

// //const usersRouter = require("/");
// app.get("/users",(req, res) => {
//     res.send("Hello Navi");
// });
 app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(3000,()=>{
    console.log("Port : 3000 activated!!")
})

