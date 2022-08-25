const express = require('express')
const app = express()
const mongoose = require("mongoose");
const { MONGOURI } = require('./keys');
const PORT = 5000;
//UA2cMLCHK9R7OCnW

require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGOURI)
mongoose.connection.on("connected",()=>{
    console.log("Connected to mongo yeah")
})
mongoose.connection.on("error",(err)=>{
    console.log("Error connectiong", err)
})
app.listen(PORT,()=>{
    console.log("app is running on: ", PORT)
});
