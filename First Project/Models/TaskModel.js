import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "Name cannot be longer than 20 characters"],
  },
  completed: { type: Boolean, default: false },
});

export default mongoose.model("Task", TaskSchema);
