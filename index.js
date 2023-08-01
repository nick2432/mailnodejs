const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const router = require("./routes/router")
const cors = require("cors");
app.use(bodyParser.json()); // For parsing JSON data
app.use(bodyParser.urlencoded({ extended: true })); // For parsing URL-encoded data
app.use(cors());
app.use(router);
const start = async ()=>{
    try{
        app.listen(5000,()=>{
            console.log("i am live in port no. 5000");
        });
    } catch(error) {}
}; 
start();