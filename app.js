require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./configs/database.config");
const app = express();
const userRouter = require("./routes/user.route");

//Connection With Db
connection.connect((err) => {
  if (err) {
    console.error("Error Connecting to MySql", err);
  } else {
    console.log("Connected to MySql");
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: ["http://localhost:4200/"] }));
app.use("/api", userRouter);

module.exports = app;
