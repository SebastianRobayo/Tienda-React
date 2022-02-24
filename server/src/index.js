const express = require("express");
const mysql = require("mysql");
const conn = require("express-myconnection");
const routes = require("./routes/login.routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.set("port", process.env.PORT || 5000);
const dbConfig = {
  host: "localhost",
  port: "3306",
  user: "sebastian",
  password: "sebas1033802619",
  database: "shop",
};

// middlewares
app.use(conn(mysql, dbConfig, "single"));
app.use(morgan("start"));
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.use("/", routes);

// server running
app.listen(app.get("port"), () => {
  console.log("server running on port", app.get("port"));
});
