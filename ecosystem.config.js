module.exports = {
  apps: [
    {
      name: "app1",
      script: "./dist/server.js",
      exec_mode: "cluster",
      instances: "max",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
