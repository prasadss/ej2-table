import winston from "winston";

function ErrorHandling(err, req, res, next) {
  winston.error(err.message, err);
}

export default ErrorHandling
