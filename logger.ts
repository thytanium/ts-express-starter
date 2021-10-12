import winston from "winston";
import config from "./config";

export default winston.createLogger({
  level: config.logs.level,
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});
