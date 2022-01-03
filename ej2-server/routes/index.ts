import express from "express";
const router = express.Router();
import column from "./column";

router.use("/column", column);

export default  router;
