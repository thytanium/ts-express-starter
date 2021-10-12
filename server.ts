import { AddressInfo } from "net";
import app from "./app";
import config from "./config";
import logger from "./logger";

const server = app.listen(config.port, () => {
  logger.debug(
    `🍣 Running on http://localhost:${(server.address() as AddressInfo).port}`
  );
});
