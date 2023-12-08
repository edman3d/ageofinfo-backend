import express from "express";
import * as TechnologyController from "../controllers/technologies";

const router = express.Router();

router.get("/", TechnologyController.getTechnologies);

router.get("/:technologyId", TechnologyController.getTechnology);

export default router;
