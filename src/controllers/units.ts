import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import UnitModel from "../models/unit";
import { assertIsDefined } from "../util/assertIsDefined";

export const getUnits: RequestHandler = async (req, res, next) => {
  try {
    const units = await UnitModel.find().exec();
    res.status(200).json(units);
  } catch (error) {
    next(error);
  }
};
