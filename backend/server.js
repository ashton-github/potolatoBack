const express = require("express");
const port = 5000

const app = express();

// Middleware for request
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/user", require("./routes/user.routes"));

// start server
app.listen(port,() => console.log("server start at port " + port))
