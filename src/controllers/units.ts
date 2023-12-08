import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import UnitModel from "../models/unit";
import { assertIsDefined } from "../util/assertIsDefined";

export const getUnits: RequestHandler = async (req, res, next) => {
  try {
    const units = await UnitModel.find();
    res.status(200).json(units);
  } catch (error) {
    next(error);
  }
};

export const getUnit: RequestHandler = async (req, res, next) => {
  const unitId = req.params.unitId;

  try {
    if (!mongoose.isValidObjectId(unitId)) {
      throw createHttpError(400, "Invalid unit id");
    }

    const unit = await UnitModel.findById(unitId).exec();

    if (!unit) {
      throw createHttpError(404, "Unit not found");
    }

    res.status(200).json(unit);
  } catch (error) {
    next(error);
  }
};
