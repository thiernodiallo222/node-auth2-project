const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
var cookieParser = require('cookie-parser')

const usersRouter = require("./users/user-router");
const authRouter = require("./auth-router/auth-router");

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(cookieParser());

server.use("/api", usersRouter);
server.use("/api", authRouter);


server.get("/", (req, res) => {
  res.json(`API is up and running !`);
});

module.exports = server;