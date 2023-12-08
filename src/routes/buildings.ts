import express from "express";
import * as BuildingController from "../controllers/buildings";

const router = express.Router();

router.get("/", BuildingController.getBuildings);

router.get("/:buildingId", BuildingController.getBuilding);

export default router;
