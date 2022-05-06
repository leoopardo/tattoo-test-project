require("dotenv").config()
const dbConfig = require("./config/db.config");
dbConfig()
const express = require("express");
const app = express()

app.use(express.json())

const artistRoute = require("./routes/artist.routes");
app.use("/artist", artistRoute)


app.listen(Number(process.env.PORT), () =>{
    console.log("Server up and running at port:", process.env.PORT)
})