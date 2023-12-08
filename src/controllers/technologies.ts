import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import TechnologyModel from "../models/technology";
import { assertIsDefined } from "../util/assertIsDefined";

export const getTechnologies: RequestHandler = async (req, res, next) => {
  try {
    const techs = await TechnologyModel.find();
    res.status(200).json(techs);
  } catch (error) {
    next(error);
  }
};

export const getTechnology: RequestHandler = async (req, res, next) => {
  const technologyId = req.params.technologyId;

  try {
    if (!mongoose.isValidObjectId(technologyId)) {
      throw createHttpError(400, "Invalid technology id");
    }

    const tech = await TechnologyModel.findById(technologyId).exec();

    if (!tech) {
      throw createHttpError(404, "Technology not found");
    }

    res.status(200).json(tech);
  } catch (error) {
    next(error);
  }
};
