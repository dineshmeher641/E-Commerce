const express = require("express")
const dotenv = require("dotenv").config()
const db = require("./config/mongoose")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const morgan = require("morgan")
const app = express()
const userRouter = require("./routes/userRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

const PORT = process.env.PORT || 4000




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", userRouter)
app.use(notFound)
app.use(errorHandler)
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})