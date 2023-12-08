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
