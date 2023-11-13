import { InferSchemaType, model, Schema } from "mongoose";

const unitSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

type Unit = InferSchemaType<typeof unitSchema>;

export default model<Unit>("Unit", unitSchema);
