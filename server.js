const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const session = require('express-session');

const usersRouter = require("../users/user-router");
const usersRouter = require("..register/register-router");
const usersRouter = require("../login/login-router");


server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", usersRouter);
server.use("/api/register", register);
server.use("/api/login", login);

server.get("/", (req, res) => {
  res.json(`API is up and running !`);
});

module.exports = server;