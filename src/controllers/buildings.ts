import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import BuildingModel from "../models/building";
import { assertIsDefined } from "../util/assertIsDefined";

export const getBuildings: RequestHandler = async (req, res, next) => {
  try {
    const buildings = await BuildingModel.find();
    res.status(200).json(buildings);
  } catch (error) {
    next(error);
  }
};

export const getBuilding: RequestHandler = async (req, res, next) => {
  const buildingId = req.params.buildingId;

  try {
    if (!mongoose.isValidObjectId(buildingId)) {
      throw createHttpError(400, "Invalid building id");
    }

    const building = await BuildingModel.findById(buildingId).exec();

    if (!building) {
      throw createHttpError(404, "Building not found");
    }

    res.status(200).json(building);
  } catch (error) {
    next(error);
  }
};
