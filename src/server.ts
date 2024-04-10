import express, { Express } from "express";
import http from "http";
import { configureApp } from "./app";
import { config } from "./config";

const app: Express = express();
const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(app);

// middlewares
configureApp(app);

const port = config.server.port;
server.listen(port, () => {
  console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});
