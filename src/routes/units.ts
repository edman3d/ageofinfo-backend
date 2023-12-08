import express from "express";
import * as UnitController from "../controllers/units";

const router = express.Router();

router.get("/", UnitController.getUnits);
router.get("/:unitId", UnitController.getUnit);

export default router;
