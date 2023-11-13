import express from "express";
import * as UnitController from "../controllers/units";

const router = express.Router();

router.get("/", UnitController.getUnits);

export default router;
