import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import BuildingModel from "../models/building";
import { assertIsDefined } from "../util/assertIsDefined";

export const getBuildings: RequestHandler = async (req, res, next) => {
  try {
    const buildings = await BuildingModel.find().exec();
    res.status(200).json(buildings);
  } catch (error) {
    next(error);
  }
};
