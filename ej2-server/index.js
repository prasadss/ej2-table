const winston = require("winston");
const express = require("express");
if (require.main === module) {
  initApp();
}

function initApp() {
  const app = express();
  handleGloablExceptions();
  mountRoutes(app);
  startListening(app);
}

function mountRoutes(app) {
  require("./startup/routes")(app);
}

function handleGloablExceptions() {
  process.on("unhandledRejection", (reason = "unknown") => {
    winston.error(`Unhandled Rejection ${reason}`);
  });

  process.on("uncaughtException", (err, origin) => {
    winston.error(`Uncaught Exception.  ${origin} ${err}`, () =>
      process.exit(1)
    );
  });
}
function startListening(app) {
  const PORT = 3000;
  app.listen(PORT, () => winston.info(`Listening Port ${PORT}`));
}
