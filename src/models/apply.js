import { model, models, Schema } from "mongoose";

const applySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    fatherName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    courses: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ApplyModel = models?.ApplyModel || model("ApplyModel", applySchema);
export default ApplyModel;
