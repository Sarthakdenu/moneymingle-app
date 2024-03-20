const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 2000;
const connectdb= require("./Config/database");
connectdb();

app.use(express.json());

app.listen(PORT,()=>
{
    console.log("server running on port "+PORT);
})

