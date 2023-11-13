import { InferSchemaType, model, Schema } from "mongoose";

const technologySchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

type Technology = InferSchemaType<typeof technologySchema>;

export default model<Technology>("Technology", technologySchema);
