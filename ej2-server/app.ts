import winston from "winston";
import express from "express";
import routes from "./startup/routes";
import db from "./service/db.services";
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
  routes(app);
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
