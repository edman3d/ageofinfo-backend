import { InferSchemaType, model, Schema } from "mongoose";

const civilizationSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

type Civilization = InferSchemaType<typeof civilizationSchema>;

export default model<Civilization>("Civilization", civilizationSchema);
