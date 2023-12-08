import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import CivilizationModel from "../models/civilization";
import { assertIsDefined } from "../util/assertIsDefined";

export const getCivs: RequestHandler = async (req, res, next) => {
  try {
    // const civs = await CivilizationModel.find().exec();
    // const civs = await CivilizationModel.findById("6552413ae3c5e3029c3c342b").exec();
    const civs = await CivilizationModel.find();
    res.status(200).json(civs);
  } catch (error) {
    next(error);
  }
};

export const getCiv: RequestHandler = async (req, res, next) => {
  const civId = req.params.civId;

  try {
    if (!mongoose.isValidObjectId(civId)) {
      throw createHttpError(400, "Invalid civ id");
    }

    const civ = await CivilizationModel.findById(civId).exec();

    if (!civ) {
      throw createHttpError(404, "Civilization not found");
    }

    res.status(200).json(civ);
  } catch (error) {
    next(error);
  }
};
