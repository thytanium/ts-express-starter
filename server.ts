import { AddressInfo } from "net";
import app from "./app";
import config from "./config";

const server = app.listen(config.port, () => {
  console.log(
    `🍣 Running on http://localhost:${(server.address() as AddressInfo).port}`
  );
});
