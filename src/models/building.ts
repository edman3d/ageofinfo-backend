import { InferSchemaType, model, Schema } from "mongoose";

const buildingSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

type Building = InferSchemaType<typeof buildingSchema>;

export default model<Building>("Building", buildingSchema);
