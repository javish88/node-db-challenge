const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("./projects/projects-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/projects", ProjectRouter);

server.get("/", (req, res) => {
  res.send("<h3>This Sprint is FUN</h3>");
});

module.exports = server;
