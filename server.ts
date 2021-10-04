import express from "express";
import { AddressInfo } from "net";
import config from "./config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(config.port, () => {
  console.log(
    `🍣 Running on http://localhost:${(server.address() as AddressInfo).port}`
  );
});
