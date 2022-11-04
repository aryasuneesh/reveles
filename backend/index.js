const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const markerRoute = require("./routes/marker")
const bodyParser = require("body-parser");


dotenv.config();

mongoose.connect(process.env.URL, {usenewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to database!");}).catch(() => {console.log("Connection failed!");});

app.use("/api/markers", markerRoute);
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log("Server is running")
})

