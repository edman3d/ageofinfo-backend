import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import CivilizationModel from "../models/civilization";
import { assertIsDefined } from "../util/assertIsDefined";

export const getCivs: RequestHandler = async (req, res, next) => {
  try {
    // const civs = await CivilizationModel.find().exec();
    const civs = await CivilizationModel.findById("6552413ae3c5e3029c3c342b").exec();
    res.status(200).json(civs);
  } catch (error) {
    next(error);
  }
};
