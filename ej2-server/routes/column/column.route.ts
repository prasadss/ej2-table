import express, { Request, Response } from "express";
import _ from "lodash";
import db from "../../service/db.services";
import validateInsert, { validateUpdate } from "./column.validator";
import { nanoid } from "nanoid";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.send(db.getColumns());
});

router.post("/", async (req: Request, res: Response) => {
  let data = req.body;
  const { error } = validateInsert(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let columns = db.getColumns();

  let key_exist = _.find(columns, { field: data.field });
  if (key_exist)
    return res
      .status(400)
      .send(`Field with name "${data.field}" already exists in column`);
  data._id = nanoid();
  data.order_id = columns.length;
  columns.push(data);
  db.saveColumns();
  res.status(200).send(columns);
});

router.put("/", async (req: Request, res: Response) => {
  let data = req.body;
  const { error } = validateUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let columns = db.getColumns();

  let data_index = _.findIndex(columns, { _id: data._id });
  if (data_index == -1)
    return res
      .status(400)
      .send(`Field with name "${data.field}" does not exists`);
  columns[data_index] = { ...columns[data_index], ...req.body };
  db.saveColumns();
  res.status(200).send(columns);
});

router.delete("/", async (req: Request, res: Response) => {
  let data = req.body;
  let columns = db.getColumns();
  let data_index = _.findIndex(columns, { _id: data._id });
  if (data_index == -1) return res.status(400).send(`Column does not exists`);
  _.pullAt(columns, data_index);
  db.saveColumns();
  res.status(201).send(columns);
});
module.exports = router;
