const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const db = require("./config/mongoose")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const morgan = require("morgan")
const PORT = process.env.PORT || 4000







// app.use("/",)
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})