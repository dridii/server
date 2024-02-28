require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const morgan = require('morgan')

const cors = require('cors')
app.use(cors())
app.use(cors())
app.use(cors({
      origin: 'http://localhost:3000'
}));
const authenticationRoute = require("./routes/authenticationRoute");
const getUserRoute = require("./routes/userRoutes")
const getRecetteRoute = require("./routes/Recette");


const url = "mongodb://127.0.0.1:27017/LaForchetta";
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/get', getUserRoute)
app.use("/authentication", authenticationRoute);
app.use("/get",getRecetteRoute)
//connection to Data base 
async function connectDB() {
      try {
            await mongoose.connect(url);
            console.log("Connected to the database");
      } catch (err) {
            console.error("Error connecting to the database", err.message)
      }
}

connectDB();
app.listen(4000, () => {
      console.log("server is running")
})