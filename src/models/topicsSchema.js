import mongoose, { Schema } from "mongoose";

const topicsSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }

);

const Topics =  mongoose.models.Topic || mongoose.model('Topics', topicsSchema);

export default Topics;
