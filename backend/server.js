const express = require("express");
const connectDB = require("./config/dataBase");
const dotenv = require("dotenv").config();
const port = 5000

const app = express();

//dataBase connection
// start server then server start
connectDB()
.then(
    // start server
    app.listen(port,() => console.log("server start at port " + port))
).catch(() => console.log('Connexion not OK'));


// Middleware for request
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/user", require("./routes/user.routes"));

// start server
//app.listen(port,() => console.log("server start at port " + port))
