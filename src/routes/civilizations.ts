import express from "express";
import * as CivilizationController from "../controllers/civilizations";

const router = express.Router();

router.get("/", CivilizationController.getCivs);

router.get("/:civId", CivilizationController.getCiv);

export default router;
