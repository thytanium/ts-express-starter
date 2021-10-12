export default {
  /**
   * Port to run the app in.
   */
  port: process.env.PORT || 3000,

  /**
   * Logging.
   */
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
};
