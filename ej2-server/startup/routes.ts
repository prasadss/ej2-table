import express from "express";
import router from "../routes";
import error from "../middleware/error";
import helmet from "helmet";

export default function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("./public"));
  app.use(helmet());
  app.use(express.json());
  app.use("/api", router);
  app.use(error);
}
